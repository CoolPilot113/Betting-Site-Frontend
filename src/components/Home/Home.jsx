import React from "react";
import FeatureBox from "./FeatureBox/FeatureBox";
import GameList from "./GameList/GameList";
import OverView from "./OverView/OverView";

export default function Home() {
    return (
        <div className="w-full">
            <FeatureBox />
            <GameList />
            <OverView />
        </div>
    )
}