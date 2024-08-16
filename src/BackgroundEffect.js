import React, { useEffect, useCallback, useState } from "react";

const BackgroundEffect = () => {
  const [backgroundText, setBackgroundText] = useState(generateInitialText());

  function generateInitialText() {
    return Array(12)
      .fill(" ")
      .map(() => Array(100).fill(" ").join(""))
      .join("\n");
  }

  const generateDynamicText = useCallback(() => {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
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

    return newLines.join("\n");
  }, [backgroundText]);

  const updateBackgroundText = useCallback(() => {
    setBackgroundText(generateDynamicText());
  }, [generateDynamicText]);

  useEffect(() => {
    const intervalId = setInterval(updateBackgroundText, 180);
    return () => clearInterval(intervalId);
  }, [updateBackgroundText]);

  return (
    <>
      <div className="background-container">
        <pre className="background-text">
          {backgroundText}
        </pre>
      </div>
      <div className="center-logo">
        <h1>Hi LIU BO!</h1>
      </div>
    </>
  );
};

export default BackgroundEffect;
