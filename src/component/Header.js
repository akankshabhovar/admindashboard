import React from "react";
import FFIcon from '../assets/FF Icon.svg';
import support from '../assets/Support.svg';
import Rectangle from '../assets/Rectangle 32.svg';
import dropdown from '../assets/Chevron right.svg';

function Header() {
    return (
        <header className="bg-[#404041] shadow p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <img src={FFIcon} alt="FF Icon" />
                <h1 className="text-white text-xl font-bold">Admin Console</h1>
                <div
                    className="w-[74px] h-[20px] bg-white rounded-[29px] flex items-center justify-center text-[10px] font-medium"
                    style={{
                        fontFamily: "Roboto",
                        lineHeight: "14.3px",
                        letterSpacing: "0.17px",
                        textAlign: "left",
                        textDecorationSkipInk: "none",
                    }}
                >
                    Admin View
                </div>
            </div>
            <div className="flex items-center gap-4">
                <img src={support} alt="support pic"/>
                <button className="text-sm text-white">Support</button>
                <div className="flex items-center bg-black w-[115px] h-[49px] rounded-[5px] p-[10px] gap-2">
                    <img src={Rectangle} alt="rectangle" />
                    <div className="text-gray-200 text-[16px]">Jane</div>
                    <img src={dropdown} alt="dropdown" />
                </div>
            </div>
        </header>
    );
}
export default Header
