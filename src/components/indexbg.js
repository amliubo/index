import React, { useEffect, useState } from "react";

const IndexBG = () => {
  const [backgroundText, setBackgroundText] = useState(generateInitialText());
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [textSpeed] = useState(150);
  const [deleteSpeed] = useState(150);

  const textList = ["Hey I'm Liu bo!", "Welcome to my Site!", "Enjoy Coding!", "Have a nice day!"];

  function generateInitialText() {
    return Array(12)
      .fill(" ")
      .map(() => Array(100).fill(" ").join(""))
      .join("\n");
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
      const lines = backgroundText.split("\n");

      const newLines = lines.map((line) => {
        return line
          .split("")
          .map((char) => {
            if (Math.random() < 0.1) {
              return chars.charAt(Math.floor(Math.random() * chars.length));
            }
            return char;
          })
          .join("");
      });

      setBackgroundText(newLines.join("\n"));
    }, 180);

    return () => clearInterval(intervalId);
  }, [backgroundText]);


  useEffect(() => {
    const textChangeInterval = setInterval(() => {
      if (isDeleting) {
        setDisplayedText((prevText) => prevText.slice(0, prevText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textList.length);
        }
      } else {
        setDisplayedText((prevText) => textList[currentTextIndex].slice(0, prevText.length + 1));
        if (displayedText.length === textList[currentTextIndex].length) {
          setIsDeleting(true);
        }
      }
    }, isDeleting ? deleteSpeed : textSpeed);

    return () => clearInterval(textChangeInterval);
  }, [displayedText, currentTextIndex, isDeleting, textList]);

  return (
    <>
      <div className="background-container">
        <pre className="background-text">{backgroundText}</pre>
      </div>
      <div className="center-logo">
        <h1>{displayedText}</h1>
      </div>
    </>
  );
};

export default IndexBG;
