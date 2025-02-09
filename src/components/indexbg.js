import React, { useEffect, useState } from "react";
import { getLetterShape } from "./letterShape"
import "./IndexBG.css";

const IndexBG = () => {
  const shapeSize = { rows: 40, cols: 70 };
  const textSpeed = 50;
  const words = ["HELLO", "WORLD", "INNOVATE", "LIUBO"];

  const [backgroundText, setBackgroundText] = useState(generateEmptyGrid());
  const [targetText, setTargetText] = useState(generateWordShape(words[0]));
  const [transitioning, setTransitioning] = useState(false);
  const [wordIndex, setWordIndex] = useState(0); // 当前单词索引

  // **生成空矩阵**
  function generateEmptyGrid() {
    return Array(shapeSize.rows).fill(" ".repeat(shapeSize.cols));
  }

  // **生成单词形状**
  function generateWordShape(word) {
    const grid = generateEmptyGrid().map(row => row.split(""));

    const startX = Math.floor((shapeSize.cols - word.length * 6) / 2);
    const startY = Math.floor(shapeSize.rows / 2 - 2);

    for (let i = 0; i < word.length; i++) {
      const letter = getLetterShape(word[i]);
      for (let y = 0; y < 5; y++) {
        for (let x = 0; x < 5; x++) {
          if (letter[y][x] === 1) {
            grid[startY + y][startX + i * 6 + x] = "■";
          }
        }
      }
    }
    return grid.map(row => row.join(""));
  }

  // **逐步变换**
  useEffect(() => {
    if (!transitioning) return;
    const updatePixels = () => {
      let newText = [...backgroundText];
      let changes = [];

      for (let i = 0; i < shapeSize.rows; i++) {
        for (let j = 0; j < shapeSize.cols; j++) {
          const oldChar = newText[i][j];
          const newChar = targetText[i][j];

          if (oldChar !== newChar) {
            changes.push({ x: i, y: j, value: newChar });
          }
        }
      }

      if (changes.length === 0) {
        setTransitioning(false);
        return;
      }

      const numChanges = Math.max(1, Math.floor(changes.length * 0.1));
      for (let k = 0; k < numChanges; k++) {
        const { x, y, value } = changes[Math.floor(Math.random() * changes.length)];
        newText[x] = newText[x].substring(0, y) + value + newText[x].substring(y + 1);
      }

      setBackgroundText([...newText]);
    };

    const interval = setInterval(updatePixels, textSpeed);
    return () => clearInterval(interval);
  }, [backgroundText, targetText, transitioning]);

  // **定期更换单词**
  useEffect(() => {
    const changeWord = () => {
      if (!transitioning) {
        setTransitioning(true);
        const nextIndex = (wordIndex + 1) % words.length;
        setWordIndex(nextIndex);
        setTargetText(generateWordShape(words[nextIndex]));
      }
    };

    const wordInterval = setInterval(changeWord, 5000); // 每5秒换一次单词
    return () => clearInterval(wordInterval);
  }, [transitioning, wordIndex]);

  return (
    <div className="background-container">
      <pre className="background-text">{backgroundText.join("\n")}</pre>
    </div>
  );
};

export default IndexBG;