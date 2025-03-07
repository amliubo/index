import React, { useState } from "react";
import axios from "axios";
import "./ChatWindow.css";

const ChatWindow = () => {
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState("");
    const [sessionId] = useState("test_session"); // 使用 test_session 或根据需求生成唯一值

    // 发送用户消息
    const handleSendMessage = async () => {
        if (userInput.trim() !== "") {
            const newMessage = {
                sender: "user",
                content: userInput,
            };
            setMessages([...messages, newMessage]);

            setUserInput("");

            await fetchAIResponse(userInput);
        }
    };

    const fetchAIResponse = async (message) => {
        try {
            const response = await axios.post("http://localhost:8080/chat", {
                session_id: sessionId,
                message: message,
            });
            console.log(response.data)

            // 处理服务器返回的消息
            const aiMessage = {
                sender: "ai",
                content: response.data
            };

            setMessages((prevMessages) => [...prevMessages, aiMessage]);
        } catch (error) {
            console.error("Error in API call:", error);
        }
    };

    return (
        <div className="chat-window">
            <div className="messages-container">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`message ${message.sender === "user" ? "user-message" : "ai-message"}`}
                    >
                        <span>{message.content}</span>
                    </div>
                ))}
            </div>
            <div className="input-container">
                <input
                    type="text"
                    placeholder="请输入消息..."
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                />
                <button onClick={handleSendMessage}>发送</button>
            </div>
        </div>
    );
};

export default ChatWindow;
