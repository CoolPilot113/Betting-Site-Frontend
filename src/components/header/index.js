import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openLoginModal, openRegisterModal } from '../redux/auth/authModalSlice';

// import svg
import { ReactComponent as DownArrow } from '../../assets/arrowIcon.svg';
import { ReactComponent as GamePlayIcon } from '../../assets/gamePlayIcon.svg';
import { ReactComponent as PackIcon } from '../../assets/packIcon.svg';
import { ReactComponent as UsersIcon } from '../../assets/users.svg';
import { ReactComponent as LeaderBoardIcon } from '../../assets/leaderBoard.svg';
import { ReactComponent as CupIcon } from '../../assets/cup.svg';
// import component
import LoginModal from '../Auth/LoginModal';
import RegisterModal from '../Auth/RegisterModal';
import GameList from '../Home/GameList/GameList';

const Header = () => {

    const dispatch = useDispatch();
    const isLoginModalOpen = useSelector(state => state.authModal.isLoginModalOpen)
    const isRegisterModalOpen = useSelector(state => state.authModal.isRegisterModalOpen)

    const myRef = useRef();

    const [dropdown, setDropdown] = useState(false);

    useEffect(() => {
        // Attach the listeners on component mount.
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("touchstart", handleClickOutside);

        // Detach the listeners on component unmount.
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
        };
    }, []);

    const handleClickOutside = (event) => {
        if (myRef.current && !myRef.current.contains(event.target)) {
            setDropdown(false);
        }
    };

    return (
        <div>
            {/* login modal */}
            {
                isLoginModalOpen &&
                <LoginModal

                />
            }
            {/* register modal */}
            {
                isRegisterModalOpen &&
                <RegisterModal

                />
            }
            <div className="header w-100 h-[67px] pt-[1px] flex items-center leading-normal font-semibold gap-[35px] bg-[#1c1c1c] shadow-[0_4px_4px_0px_rgb(0,0,0,0.25)]">
                <div className="px-[10px] text-[34px] text-white">
                    {/* <span>Grow</span>
                    <span className="text-[#F44336]">Duel</span> */}
                    {/* <img src='/logo.png' /> */}
                    <svg width="206" height="43" viewBox="0 0 206 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.9394 14.0751L22.5908 17.3898C20.4716 15.146 18.0012 14.0241 15.1795 14.0241C12.7204 14.0241 10.6579 14.84 8.9921 16.4718C7.3376 18.1037 6.51035 20.0868 6.51035 22.4213C6.51035 24.835 7.3716 26.8805 9.09409 28.5576C10.8166 30.2348 12.9414 31.0734 15.4685 31.0734C17.1116 31.0734 18.4942 30.7278 19.616 30.0365C20.7493 29.3452 21.6615 28.263 22.3528 26.7898H15.1115V22.3193H27.6902L27.7242 23.3732C27.7242 25.5603 27.1576 27.6341 26.0244 29.5945C24.8912 31.555 23.4237 33.0509 21.6218 34.0821C19.82 35.1133 17.7066 35.6289 15.2815 35.6289C12.6864 35.6289 10.369 35.068 8.32917 33.9461C6.30071 32.8129 4.69153 31.2037 3.50165 29.1186C2.3231 27.0335 1.73383 24.784 1.73383 22.3703C1.73383 19.0613 2.82739 16.1829 5.0145 13.7351C7.60958 10.8227 10.9866 9.36655 15.1455 9.36655C17.3213 9.36655 19.3554 9.76885 21.2479 10.5734C22.8457 11.2534 24.4096 12.4206 25.9394 14.0751ZM30.495 16.5058H34.4726V18.8346C34.9032 17.9167 35.4755 17.2198 36.1894 16.7438C36.9033 16.2679 37.6852 16.0299 38.5352 16.0299C39.1358 16.0299 39.7647 16.1885 40.422 16.5058L38.9771 20.5004C38.4332 20.2285 37.9856 20.0925 37.6343 20.0925C36.9203 20.0925 36.3141 20.5344 35.8154 21.4184C35.3281 22.3023 35.0845 24.0361 35.0845 26.6198L35.1015 27.5207V35H30.495V16.5058ZM51.4199 16.0299C53.165 16.0299 54.8025 16.4662 56.3324 17.3388C57.8736 18.2113 59.0748 19.3956 59.936 20.8914C60.7973 22.3873 61.2279 24.0021 61.2279 25.7359C61.2279 27.4811 60.7916 29.1129 59.919 30.6314C59.0578 32.15 57.8792 33.3398 56.3834 34.2011C54.8875 35.051 53.2387 35.476 51.4369 35.476C48.7851 35.476 46.5187 34.5354 44.6376 32.6542C42.7677 30.7618 41.8328 28.467 41.8328 25.7699C41.8328 22.8802 42.8924 20.4721 45.0115 18.5456C46.87 16.8685 49.0061 16.0299 51.4199 16.0299ZM51.4879 20.3985C50.0487 20.3985 48.8475 20.9027 47.8842 21.9113C46.9323 22.9085 46.4564 24.1891 46.4564 25.7529C46.4564 27.3621 46.9267 28.6653 47.8672 29.6625C48.8191 30.6598 50.0204 31.1584 51.4709 31.1584C52.9214 31.1584 54.1283 30.6541 55.0915 29.6455C56.0548 28.637 56.5364 27.3394 56.5364 25.7529C56.5364 24.1664 56.0604 22.8802 55.1085 21.8943C54.1679 20.8971 52.9611 20.3985 51.4879 20.3985ZM62.9787 16.5058H67.5173L71.2399 27.0278L75.2515 16.5058H78.0222L81.9488 26.9088L85.6715 16.5058H90.244L83.4957 35H80.555L76.6114 24.461L72.5488 35H69.6421L62.9787 16.5058Z" fill="white"/>
                        <path d="M132.434 9.99549H138.077C141.715 9.99549 144.418 10.4488 146.185 11.3554C147.953 12.2506 149.409 13.7125 150.554 15.7409C151.699 17.7694 152.271 20.1378 152.271 22.8462C152.271 24.7727 151.948 26.5462 151.302 28.1667C150.667 29.7759 149.783 31.1131 148.65 32.1783C147.528 33.2435 146.31 33.9801 144.996 34.3881C143.681 34.796 141.403 35 138.162 35H132.434V9.99549ZM137.176 14.585V30.3425H139.386C141.562 30.3425 143.137 30.0932 144.112 29.5945C145.098 29.0959 145.902 28.2573 146.525 27.0788C147.149 25.9002 147.46 24.4497 147.46 22.7272C147.46 20.0755 146.718 18.0187 145.234 16.5568C143.896 15.2423 141.749 14.585 138.791 14.585H137.176ZM156.265 16.5058H160.957V25.413C160.957 27.1468 161.076 28.3537 161.314 29.0336C161.552 29.7022 161.932 30.2235 162.453 30.5974C162.985 30.9714 163.637 31.1584 164.408 31.1584C165.178 31.1584 165.83 30.9771 166.362 30.6144C166.906 30.2405 167.309 29.6965 167.569 28.9826C167.762 28.45 167.858 27.3111 167.858 25.5659V16.5058H172.516V24.3421C172.516 27.5717 172.261 29.7815 171.751 30.9714C171.128 32.4219 170.21 33.5381 168.997 34.3201C167.785 35.0907 166.243 35.476 164.374 35.476C162.345 35.476 160.702 35.0227 159.444 34.1161C158.198 33.2095 157.319 31.946 156.809 30.3255C156.447 29.2036 156.265 27.1638 156.265 24.2061V16.5058ZM195.719 27.0958H180.811C181.026 28.4103 181.599 29.4586 182.528 30.2405C183.468 31.0111 184.664 31.3964 186.114 31.3964C187.848 31.3964 189.338 30.7901 190.585 29.5775L194.495 31.4134C193.52 32.7959 192.353 33.8215 190.993 34.4901C189.633 35.1473 188.018 35.476 186.148 35.476C183.247 35.476 180.885 34.5637 179.06 32.7392C177.236 30.9034 176.323 28.6086 176.323 25.8549C176.323 23.0332 177.23 20.6931 179.043 18.8346C180.868 16.9648 183.151 16.0299 185.893 16.0299C188.806 16.0299 191.174 16.9648 192.999 18.8346C194.823 20.6931 195.736 23.1522 195.736 26.2119L195.719 27.0958ZM191.061 23.4412C190.755 22.4099 190.149 21.5713 189.242 20.9254C188.347 20.2795 187.304 19.9565 186.114 19.9565C184.823 19.9565 183.689 20.3191 182.715 21.0444C182.103 21.4977 181.536 22.2966 181.015 23.4412H191.061ZM198.999 9.36655H203.64V35H198.999V9.36655Z" fill="#F44336"/>
                        <rect width="7.12398" height="31.7333" transform="matrix(-0.673248 -0.739417 -0.739417 0.673248 124.154 12.7986)" fill="white"/>
                        <path d="M125.108 7.11268L119.241 7.52366L124.15 12.915L125.108 7.11268Z" fill="white"/>
                        <rect x="95.2856" y="31.4526" width="3.59813" height="6.74649" transform="rotate(47.6817 95.2856 31.4526)" fill="#F44336"/>
                        <rect x="93.4688" y="29.4572" width="2.24883" height="8.99532" transform="rotate(-42.3183 93.4688 29.4572)" fill="#F44336"/>
                        <rect width="7.12398" height="31.7333" transform="matrix(-0.673248 -0.739417 -0.739417 0.673248 124.154 12.7986)" fill="white"/>
                        <path d="M125.108 7.11268L119.241 7.52366L124.15 12.915L125.108 7.11268Z" fill="white"/>
                        <rect x="95.2856" y="31.4526" width="3.59813" height="6.74649" transform="rotate(47.6817 95.2856 31.4526)" fill="#F44336"/>
                        <rect x="93.4688" y="29.4572" width="2.24883" height="8.99532" transform="rotate(-42.3183 93.4688 29.4572)" fill="#F44336"/>
                        <rect width="7.12398" height="31.7333" transform="matrix(-0.673248 -0.739417 -0.739417 0.673248 124.154 12.7986)" fill="white"/>
                        <rect x="95.2856" y="31.4526" width="3.59813" height="6.74649" transform="rotate(47.6817 95.2856 31.4526)" fill="#F44336"/>
                        <rect x="93.4688" y="29.4572" width="2.24883" height="8.99532" transform="rotate(-42.3183 93.4688 29.4572)" fill="#F44336"/>
                        <rect width="7.12398" height="31.7333" transform="matrix(-0.673248 -0.739417 -0.739417 0.673248 124.154 12.7986)" fill="white"/>
                        <rect x="95.2856" y="31.4526" width="3.59813" height="6.74649" transform="rotate(47.6817 95.2856 31.4526)" fill="#F44336"/>
                        <rect x="93.4688" y="29.4572" width="2.24883" height="8.99532" transform="rotate(-42.3183 93.4688 29.4572)" fill="#F44336"/>
                        <rect width="7.12398" height="31.7333" transform="matrix(-0.656072 0.754698 0.754698 0.656072 98.9092 7.55585)" fill="white"/>
                        <path d="M93.1508 7.26983L94.2415 13.0486L99.0251 7.54585L93.1508 7.26983Z" fill="white"/>
                        <rect x="120.795" y="34.0579" width="3.59813" height="6.74649" transform="rotate(-48.999 120.795 34.0579)" fill="#F44336"/>
                        <rect x="119.024" y="36.0945" width="2.24883" height="8.99532" transform="rotate(-138.999 119.024 36.0945)" fill="#F44336"/>
                        <rect width="7.12398" height="31.7333" transform="matrix(-0.656072 0.754698 0.754698 0.656072 98.9092 7.55585)" fill="white"/>
                        <path d="M93.1508 7.26983L94.2415 13.0486L99.0251 7.54585L93.1508 7.26983Z" fill="white"/>
                        <rect x="120.795" y="34.0579" width="3.59813" height="6.74649" transform="rotate(-48.999 120.795 34.0579)" fill="#F44336"/>
                        <rect x="119.024" y="36.0945" width="2.24883" height="8.99532" transform="rotate(-138.999 119.024 36.0945)" fill="#F44336"/>
                        <rect width="7.12398" height="31.7333" transform="matrix(-0.656072 0.754698 0.754698 0.656072 98.9092 7.55585)" fill="white"/>
                        <rect x="120.795" y="34.0579" width="3.59813" height="6.74649" transform="rotate(-48.999 120.795 34.0579)" fill="#F44336"/>
                        <rect x="119.024" y="36.0945" width="2.24883" height="8.99532" transform="rotate(-138.999 119.024 36.0945)" fill="#F44336"/>
                        <rect width="7.12398" height="31.7333" transform="matrix(-0.656072 0.754698 0.754698 0.656072 98.9092 7.55585)" fill="white"/>
                        <rect x="120.795" y="34.0579" width="3.59813" height="6.74649" transform="rotate(-48.999 120.795 34.0579)" fill="#F44336"/>
                        <rect x="119.024" y="36.0945" width="2.24883" height="8.99532" transform="rotate(-138.999 119.024 36.0945)" fill="#F44336"/>
                    </svg>
                </div>

                <div className="flex justify-between mr-[22px] w-full">
                    <div className="menu-container flex justify-center items-center gap-4">
                        <div
                            className="transition-all duration-200 text-[#9F9F9F] flex justify-center gap-1 items-center cursor-pointer hover:-translate-y-1"
                            onClick={() => setDropdown(!dropdown)}
                        >
                            <GamePlayIcon />
                            <span>Games</span>
                            <DownArrow />
                        </div>
                        <div className="transition-all duration-200 text-[#9F9F9F] flex justify-center gap-1 items-center cursor-pointer hover:-translate-y-1">
                            <PackIcon />
                            <span>Rewards</span>
                        </div>
                        <div className="transition-all duration-200 text-[#9F9F9F] flex justify-center gap-1 items-center cursor-pointer hover:-translate-y-1">
                            <UsersIcon />
                            <span>Affiliates</span>
                        </div>
                        <div className="transition-all duration-200 text-[#9F9F9F] flex justify-center gap-1 items-center cursor-pointer hover:-translate-y-1">
                            <LeaderBoardIcon />
                            <span>Leaderboard</span>
                        </div>
                        <div className="transition-all duration-200 text-[#9F9F9F] flex justify-center gap-1 items-center cursor-pointer hover:-translate-y-1">
                            <CupIcon />
                            <span>Race</span>
                        </div>
                    </div>

                    <div className="buttons-container text-white text-[17px] flex gap-[38px]">
                        <button
                            className="transition-all hover:-translate-y-[2px]"
                            onClick={() => { dispatch(openLoginModal()) }}
                        >
                            Sign In
                        </button>
                        <button
                            className="transition-all px-[27px] py-[6px] rounded-[5px] bg-[#F44336] hover:-translate-y-[2px] hover:bg-[#e82c1e]"
                            onClick={() => {
                                dispatch(openRegisterModal())
                            }}
                        >
                            Register
                        </button>
                    </div>
                </div>
            </div>
            <div
                ref={myRef}
                className={`transition-all duration-300 absolute w-full bg-[#1c1c1c] z-[300] shadow-[0 25px 50px -12px rgb(0 0 0 / 1.25)] overflow-hidden`}
                style={{ maxHeight: dropdown ? "400px" : "0px", paddingBottom: dropdown ? "20px" : "0px" }}
            >
                <GameList />
            </div>
        </div>
    )
}

export default Header