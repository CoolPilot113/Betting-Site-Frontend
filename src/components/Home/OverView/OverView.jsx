import React, { useState } from "react";
import OverViewTable from "./OverViewTable";

export default function OverView () {
    const [value, setValue] = useState(0);

    return (
        <div className="mx-6 mt-5 bg-[#212121] rounded-t-lg">
            <div>
                <div className="mx-3 mt-3">
                <ul className="text-[17px] text-center text-[#FFFFFF] flex flex-wrap grid grid-cols-4">
                    <li className="grid col-span-1 inline-block p-4 border-transparent border-b-8 cursor-pointer rounded-t-lg hover:bg-[#2A2A2A] border hover:border-b-[#F44336]"
                        style={{backgroundColor: value===0 ? '#2A2A2A': '#212121', borderBottomColor: value===0 ? '#F44336': '#212121'}}
                        onClick={() => setValue(0)}
                    >
                        All Bets
                    </li>
                    <li className="grid col-span-1 inline-block p-4 border-transparent border-b-8 cursor-pointer rounded-t-lg hover:bg-[#2A2A2A] border hover:border-b-[#F44336]"
                        style={{backgroundColor: value===1 ? '#2A2A2A': '#212121', borderBottomColor: value===1 ? '#F44336': '#212121'}}
                        onClick={() => setValue(1)}
                    >
                        Big Bets
                    </li>
                    <li className="grid col-span-1 inline-block p-4 border-transparent border-b-8 cursor-pointer rounded-t-lg hover:bg-[#2A2A2A] border hover:border-b-[#F44336]"
                        style={{backgroundColor: value===2 ? '#2A2A2A': '#212121', borderBottomColor: value===2 ? '#F44336': '#212121'}}
                        onClick={() => setValue(2)}
                    >
                        My Bets
                    </li>
                    <li className="grid col-span-1 inline-block p-4 border-transparent border-b-8 cursor-pointer rounded-t-lg hover:bg-[#2A2A2A] border hover:border-b-[#F44336]"
                        style={{backgroundColor: value===3 ? '#2A2A2A': '#212121', borderBottomColor: value===3 ? '#F44336': '#212121'}}
                        onClick={() => setValue(3)}
                    >
                        Contacts
                    </li>
                </ul>
                </div>
            </div>
            <OverViewTable />
        </div>
    )
}