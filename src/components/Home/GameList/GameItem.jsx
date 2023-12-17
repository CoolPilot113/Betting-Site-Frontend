import React from "react";
const gameImages = require.context('./../../../assets/img', true);

const GameItem = ({ gameName }) => {
    const imagePath = gameImages(`./${gameName}.png`);

    return (
        <div className="game-item col-span-6 sm:col-span-6 md:col-span-4 lg:col-span-2 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:brightness-75 cursor-pointer active:scale-90">
            <img src={imagePath} alt={gameName} className="pointer-events-none game-image rounded-[8px]" />
        </div>
    );
};

export default GameItem;
