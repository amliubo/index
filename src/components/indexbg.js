import React, { useEffect, useState } from "react";
import "./IndexBG.css";

const IndexBG = () => {
  const shapeSize = { rows: 40, cols: 120 }; // 矩阵大小
  const textSpeed = 5; // 速度（毫秒）

  const [backgroundText, setBackgroundText] = useState(generateEmptyGrid());
  const [targetShape, setTargetShape] = useState(generateRectangle());
  const [transitioning, setTransitioning] = useState(false); // 是否正在变换形状

  // **生成空矩阵**
  function generateEmptyGrid() {
    return Array(shapeSize.rows).fill(" ".repeat(shapeSize.cols));
  }

  // **生成矩形**
  function generateRectangle() {
    return Array(shapeSize.rows)
      .fill("")
      .map(() => Array(shapeSize.cols).fill("■"))
      .map((row) => row.join(""));
  }

  // **生成圆形**
  function generateCircle() {
    const radius = Math.min(shapeSize.rows, shapeSize.cols) / 3;
    const centerX = shapeSize.cols / 2;
    const centerY = shapeSize.rows / 2;
    return Array(shapeSize.rows)
      .fill("")
      .map((_, y) =>
        Array(shapeSize.cols)
          .fill("")
          .map((_, x) =>
            Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)) <= radius
              ? "●"
              : " "
          )
          .join("")
      );
  }

  // **生成三角形**
  function generateTriangle() {
    return Array(shapeSize.rows)
      .fill("")
      .map((_, y) =>
        Array(shapeSize.cols)
          .fill("")
          .map((_, x) => (x >= y / 2 && x < shapeSize.cols - y / 2 ? "▲" : " "))
          .join("")
      );
  }

  // **逐步过渡形状**
  useEffect(() => {
    if (!transitioning) return;

    const updatePixels = () => {
      let newText = [...backgroundText];
      let changes = [];

      // **计算需要变化的点**
      for (let i = 0; i < shapeSize.rows; i++) {
        for (let j = 0; j < shapeSize.cols; j++) {
          const oldChar = newText[i][j];
          const newChar = targetShape[i][j];

          if (oldChar !== newChar) {
            changes.push({ x: i, y: j, value: newChar });
          }
        }
      }

      if (changes.length === 0) {
        setTransitioning(false); // 形状转换完成
        return;
      }

      // **随机修改一部分像素**
      const numChanges = Math.max(1, Math.floor(changes.length * 0.05)); // 每帧改变5%
      for (let k = 0; k < numChanges; k++) {
        const { x, y, value } = changes[Math.floor(Math.random() * changes.length)];
        newText[x] = newText[x].substring(0, y) + value + newText[x].substring(y + 1);
      }

      setBackgroundText([...newText]);
    };

    const interval = setInterval(updatePixels, textSpeed);
    return () => clearInterval(interval);
  }, [backgroundText, targetShape, transitioning]);

  // **定期更换形状**
  useEffect(() => {
    const changeShape = () => {
      if (!transitioning) {
        setTransitioning(true);
        setTargetShape([generateRectangle, generateCircle, generateTriangle][Math.floor(Math.random() * 3)]());
      }
    };

    const shapeInterval = setInterval(changeShape, 8000); // 每8秒切换形状
    return () => clearInterval(shapeInterval);
  }, [transitioning]);

  return (
    <div className="background-container">
      <pre className="background-text">{backgroundText.join("\n")}</pre>
    </div>
  );
};

export default IndexBG;
