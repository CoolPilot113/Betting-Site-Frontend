import React from "react";
import diamondLock from './../../../assets/img/home/Diamond lock.svg';

export default function WeeklyRaffle() {
    return (
        <div className="grid grid-cols-6 p-3 border border-[#9E9E9E]">
            <div className="grid col-span-3 my-2">
                <button className="bg-white rounded w-1/3 py-1 text-xl font-bold"
                    style={{fontFamily: 'Century Gothic Bold'}}
                >
                    Soon
                </button>
                <div className="text-white text-xl font-bold my-2">
                    Weekly Raffle
                </div>
                <div className="text-white text-sm">
                    Share in
                </div>
                <div className="text-white text-sm flex">
                    <img src={diamondLock} alt="diamond lock" />
                    <span className="pl-1">
                        1,500 Each Week
                    </span>
                </div>
            </div>
            <div className="grid col-span-3 flex items-center justify-end relative">
                <img src='/goldicon.png' alt="coming soon" className="absolute top-[2px] right-[40px]"/>
                <img src='/goldicon.png' alt="coming soon" className="absolute right-[1px] bottom-[1px]"/>
            </div>
        </div>
    )
}