import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";
import "./ChatWindow.css";
import { ChatMsg } from "../../api";

const ChatWindow = () => {
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [sessionId] = useState("test_session");

    const token = localStorage.getItem("token");
    const userEmail = localStorage.getItem("userEmail");
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate("/login");
        }
    }, [token, navigate]);

    const handleSendMessage = async () => {
        if (userInput.trim() === "") return;

        const newMessage = { sender: "user", content: userInput };
        setMessages((prevMessages) => [...prevMessages, newMessage]);
        setUserInput("");
        setLoading(true);

        try {
            const response = await ChatMsg(sessionId, token, userInput);
            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            let aiContent = "";

            while (true) {
                const { value, done } = await reader.read();
                if (done) break;

                const chunk = decoder.decode(value, { stream: true });
                const cleanChunk = chunk.replace(/data: /g, "")
                    .replace(/\n/g, "\n\n")
                if (!cleanChunk) continue;

                aiContent += cleanChunk;

                setMessages((prevMessages) => {
                    const updatedMessages = [...prevMessages];
                    const lastMessage = updatedMessages[updatedMessages.length - 1];

                    if (lastMessage && lastMessage.sender === "ai") {
                        lastMessage.content = aiContent;
                    } else {
                        updatedMessages.push({ sender: "ai", content: aiContent });
                    }

                    return [...updatedMessages];
                });
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const messageContainer = document.querySelector(".messages-container");
        if (messageContainer) {
            messageContainer.scrollTop = messageContainer.scrollHeight;
        }
    }, [messages]);

    return (
        <div className="chat-window">
            {/* 右上角头像 */}
            <div className="avatar">
                {userEmail.slice(0, 2).toUpperCase()} {/* 显示邮箱的前两个字母 */}
            </div>
            <div className="messages-container">
                {messages.length === 0 && (
                    <div className="no-messages">
                        你好，准备好与AI一起探索了吗？
                    </div>
                )}
                {/* 显示消息内容 */}
                {messages.map((message, index) => (
                    <div key={index} className={`message ${message.sender === "user" ? "user-message" : "ai-message"}`}>
                        {message.sender === "ai" ? (
                            <ReactMarkdown
                                children={message.content}
                                remarkPlugins={[remarkGfm]}
                                rehypePlugins={[rehypeHighlight]}
                            />
                        ) : (
                            <span>{message.content}</span>
                        )}
                    </div>
                ))}
                {loading && <div className="loading-message">加载中...</div>}
            </div>
            <div className="input-container">
                <textarea
                    placeholder="请输入消息..."
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    rows={2}
                    onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { handleSendMessage(); e.preventDefault(); } }}
                />
                {/* <button onClick={handleSendMessage} disabled={loading} /> */}
                <button
                    className="send-button"
                    onClick={handleSendMessage}
                    disabled={loading}
                >
                    <i className="fa fa-paper-plane"></i> {/* 使用发送飞机图标 */}
                </button>
            </div>
        </div>
    );
};

export default ChatWindow;
