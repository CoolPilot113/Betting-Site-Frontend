import React from "react";
import { games } from "../../../constants/GameNames";
import GameItem from "./GameItem";

export default function GameList() {
    return (
        <div className="mx-6 mt-10 grid grid-cols-12 gap-4">
            {games.map((game) => {
                return (
                    <GameItem gameName = {game} key={game}/>
                )
            })}
        </div>
    )
}