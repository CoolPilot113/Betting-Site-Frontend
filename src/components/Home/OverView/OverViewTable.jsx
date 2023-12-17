import React from "react";
import diamondLock from './../../../assets/img/home/Diamond lock.svg';

export default function OverViewTable () {
    return (
        <div className="text-[#A4A4A4] w-full my-3 p-1 overflow-x-auto">
            <table className="min-w-full">
                <thead className="mt-1">
                    <tr>
                        <th>
                            Game
                        </th>
                        <th>
                            Player
                        </th>
                        <th>
                            Bet
                        </th>
                        <th>
                            Profit
                        </th>
                        <th>
                            Multiplier
                        </th>
                        <th>
                            Time
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="mt-1 hover:bg-[#2A2A2A] cursor-pointer">
                        <td className="text-center py-3 min-w-[100px]">
                            Coin Flip
                        </td>
                        <td className="text-center py-3 min-w-[100px]">
                            dsgsdgsdg
                        </td>
                        <td className="text-center py-3 min-w-[100px]">
                            <div className="flex items-center justify-center">
                                <span className="pr-1">
                                    0.02
                                </span>
                                <img src={diamondLock} alt="diamond lock" />
                            </div>
                        </td>
                        <td className="text-center py-3 min-w-[100px]">
                            <div className="flex items-center justify-center">
                                <span className="pr-1">
                                    -0.02
                                </span>
                                <img src={diamondLock} alt="diamond lock" />
                            </div>
                        </td>
                        <td className="text-center py-3 min-w-[100px]">
                            0.00x
                        </td>
                        <td className="text-center py-3 min-w-[100px]">
                            {new Date().toLocaleTimeString('en-US', {
                                hour12: false,
                                hour: '2-digit',
                                minute: '2-digit',
                                second: '2-digit'
                            })}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}