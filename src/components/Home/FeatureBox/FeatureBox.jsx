import React from "react";
import CommingSoon from "./ComingSoon";
import WeeklyRaffle from "./WeeklyRaffle";
import diamondLock from './../../../assets/img/home/Diamond lock.svg';

export default function FeatureBox() {
    return (
        <div className="mx-6 mt-10 grid grid-cols-10 gap-2">
            <div className="grid col-span-10 lg:col-span-3 bg-[#191919]">
                <CommingSoon />
            </div>
    
            <div className="grid col-span-10 lg:col-span-4 border border-[#9E9E9E] text-white font-bold text-center bg-[#191919]">
                <div className="text-[20px] mt-5">
                    Join Our Discord Server
                </div>
                <div className="mt-3">
                    <button className="w-2/3 px-[27px] py-[6px] text-[20px] rounded-[5px] bg-[#F44336]">
                        Join
                    </button>
                </div>
                <div className="text-sm my-3">
                    <div>
                        Share in
                    </div>
                    <div>
                        <div className="flex items-center justify-center">
                            <img src={diamondLock} alt="diamond lock" />
                            <span className="pl-1">
                                1, 500 Each Week
                            </span>
                        </div>
                    </div>
                </div>
            </div>
    
            <div className="grid col-span-10 lg:col-span-3 bg-[#191919]">
                <WeeklyRaffle />
            </div>
        </div>
    );
}