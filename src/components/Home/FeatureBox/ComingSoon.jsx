import React from "react";
import diamondLock from './../../../assets/img/home/Diamond lock.svg';
import car from './../../../assets/img/home/comingsoon_1.svg'

export default function CommingSoon() {
    return (
        <div className="grid grid-cols-6 p-3 border border-[#9E9E9E] h-[200px]">
            <div className="grid col-span-3 my-2">
                <button className="bg-white rounded w-1/3 py-1 text-xl font-bold"
                    style={{fontFamily: 'Century Gothic Bold'}}
                >
                    Soon
                </button>
                <div className="text-white text-xl font-bold my-2">
                    Daily Races
                </div>
                <div className="text-white text-sm">
                    Play in our
                </div>
                <div className="text-white text-sm flex">
                    <img src={diamondLock} alt="diamond lock" />
                    <span className="pl-1">
                        1, 000 Daily Races
                    </span>
                </div>
            </div>
            <div className="grid col-span-3 flex items-center justify-end">
                <img src={car} alt="coming soon" />
            </div>
        </div>
    )
}