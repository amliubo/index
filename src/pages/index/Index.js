import React, { useEffect, useState } from "react";
import './Index.css'
const images = [
    'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
    "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
    'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
    'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
    'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
    'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
    'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
    'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
    'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
];

const processImage = (imageData, width, height) => {
    const ASCII_CHARS = ["@", "#", "W", "S", "%", "?", "*", "+", "~", "-", ".", " "];
    const grid = [];

    for (let y = 0; y < height; y++) {
        let row = "";
        for (let x = 0; x < width; x++) {
            const idx = (y * width + x) * 4;
            const r = imageData[idx];
            const g = imageData[idx + 1];
            const b = imageData[idx + 2];
            const brightness = 0.299 * r + 0.587 * g + 0.114 * b;
            const charIdx = Math.floor((brightness / 255) * (ASCII_CHARS.length - 1));
            row += ASCII_CHARS[charIdx];
        }
        grid.push(row);
    }
    return grid;
};

const generateImageShape = async (imgSrc, width, height) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = width;
    canvas.height = height;

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    const img = await loadImage(imgSrc);
    ctx.drawImage(img, 0, 0, width, height);
    const imageData = ctx.getImageData(0, 0, width, height).data;

    return processImage(imageData, width, height);
};

const loadImage = (src) =>
    new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = () => resolve(img);
        img.onerror = (err) => reject(err);
        img.src = src;
    });

const Index = () => {
    const shapeSize = { rows: 70, cols: 180 };
    const textSpeed = 100;
    const [backgroundText, setBackgroundText] = useState(
        Array(shapeSize.rows).fill(" ".repeat(shapeSize.cols))
    );
    const [targetText, setTargetText] = useState([]);
    const [transitioning, setTransitioning] = useState(false);
    const [imageIndex, setImageIndex] = useState(0);

    useEffect(() => {
        const loadInitialImage = async () => {
            const initialShape = await generateImageShape(
                images[0],
                shapeSize.cols,
                shapeSize.rows
            );
            setTargetText(initialShape);
            setTransitioning(true);
        };
        loadInitialImage();
    }, [shapeSize.cols, shapeSize.rows]);

    useEffect(() => {
        if (!transitioning || targetText.length === 0) return;

        const updatePixels = () => {
            let newText = [...backgroundText];
            let changes = [];

            for (let i = 0; i < shapeSize.rows; i++) {
                for (let j = 0; j < shapeSize.cols; j++) {
                    if (backgroundText[i][j] !== targetText[i][j]) {
                        changes.push({ x: i, y: j, value: targetText[i][j] });
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
    }, [backgroundText, targetText, transitioning, shapeSize.cols, shapeSize.rows]);

    useEffect(() => {
        const changeImage = async () => {
            if (!transitioning) {
                setTransitioning(true);
                const nextIndex = (imageIndex + 1) % images.length;
                const newShape = await generateImageShape(
                    images[nextIndex],
                    shapeSize.cols,
                    shapeSize.rows
                );
                setImageIndex(nextIndex);
                setTargetText(newShape);
            }
        };

        const interval = setInterval(changeImage, 5000);
        return () => clearInterval(interval);
    }, [transitioning, imageIndex, shapeSize.cols, shapeSize.rows]);

    return (
        <div className="background-container">
            <pre className="background-text">{backgroundText.join("\n")}</pre>
        </div>
    );
};

export default Index;
