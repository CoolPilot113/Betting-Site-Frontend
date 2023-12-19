import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  openLoginModal,
  openRegisterModal,
} from '../redux/auth/authModalSlice';

// small images
import avatar from '../../assets/img/avatar.png';
import key from '../../assets/img/key.png';
import door from '../../assets/img/door.png';
import close from '../../assets/img/close.png';

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

let len = 0;

const Header = () => {
  const dispatch = useDispatch();
  const isLoginModalOpen = useSelector(
    (state) => state.authModal.isLoginModalOpen
  );
  const isRegisterModalOpen = useSelector(
    (state) => state.authModal.isRegisterModalOpen
  );

  const myRef = useRef();
  const sideRef = useRef();
  const modalRef = useRef(null);

  const [modalShow, setModalShow] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [collapse, setCollapse] = useState(false);
  const username = localStorage.getItem('username');

  useEffect(() => {
    // Attach the listeners on component mount.
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    // Detach the listeners on component unmount.
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (myRef.current && !myRef.current.contains(event.target)) {
      setDropdown(false);
    }
    if (sideRef.current && !sideRef.current.contains(event.target)) {
      setCollapse(false);
    }
  };

  return (
    <div>
      {/* login modal */}
      {isLoginModalOpen && <LoginModal />}
      {/* register modal */}
      {
        // isRegisterModalOpen &&
        <RegisterModal />
      }
      <div className="fixed top-0 header w-full h-[67px] pt-[1px] flex items-center leading-normal font-semibold gap-[35px] bg-[#1c1c1c] shadow-[0_4px_4px_0px_rgb(0,0,0,0.25)] z-50">
        <div className="flex justify-between w-full">
          <div className="flex flex-row items-center gap-[22px]">
            <div className="text-3xl ml-5">
              <span className="text-white">
                G<span className="hidden sm:inline">row</span>
              </span>
              <span className="text-[#F44336]">
                D<span className="hidden sm:inline">uel</span>
              </span>
            </div>
            <div className="menu-container flex justify-center items-center gap-4">
              <div
                className="transition-all duration-200 text-[#9F9F9F] hidden md:flex justify-center gap-1 items-center cursor-pointer hover:-translate-y-1"
                onClick={() => setDropdown(!dropdown)}
              >
                <GamePlayIcon />
                <span className="hidden xl:flex">Games</span>
                <DownArrow />
              </div>
              <div className="transition-all duration-200 text-[#9F9F9F] hidden md:flex justify-center gap-1 items-center cursor-pointer hover:-translate-y-1">
                <PackIcon />
                <span className="hidden xl:flex">Rewards</span>
              </div>
              <div className="transition-all duration-200 text-[#9F9F9F] hidden md:flex justify-center gap-1 items-center cursor-pointer hover:-translate-y-1">
                <UsersIcon />
                <span className="hidden xl:flex">Affiliates</span>
              </div>
              <div className="transition-all duration-200 text-[#9F9F9F] hidden md:flex justify-center gap-1 items-center cursor-pointer hover:-translate-y-1">
                <LeaderBoardIcon />
                <span className="hidden xl:flex">Leaderboard</span>
              </div>
              <div className="transition-all duration-200 text-[#9F9F9F] hidden md:flex justify-center gap-1 items-center cursor-pointer hover:-translate-y-1">
                <CupIcon />
                <span className="hidden xl:flex">Race</span>
              </div>
            </div>
          </div>

          <div className="flex flex-row items-center gap-4 mr-5">
            {username && username != 'undefined' ? (
              <div className="flex flex-row h-[52px] gap-[14px]">
                <div className="flex flex-row bg-[#212121] items-center justify-between rounded-[10px] min-w-[142px] pl-3">
                  <p className="text-white text-[17px] leading-tight font-semibold">
                    0.00
                  </p>
                  <img src={key} alt="key" />
                  <span className="bg-[#F44336] rounded-e-lg h-full w-[52px] flex items-center justify-center">
                    <img src={door} alt="door" />
                  </span>
                </div>
                <div className="flex flex-row items-center bg-[#212121] rounded-[10px] p-[9px] pl-[7px] gap-3">
                  <img src={avatar} alt="avatar" />
                  <p className="text-white text-[17px] leading-tight font-['Century_Gothic']">
                    {username}
                  </p>
                </div>
              </div>
            ) : (
              <div className="buttons-container text-white text-[17px] flex gap-[38px]">
                <button
                  className="transition-all hover:-translate-y-[2px]"
                  onClick={() => {
                    dispatch(openLoginModal());
                  }}
                >
                  Sign In
                </button>
                <button
                  className="transition-all px-[27px] py-[6px] rounded-[5px] bg-[#F44336] hover:-translate-y-[2px] hover:bg-[#e82c1e]"
                  onClick={() => {
                    dispatch(openRegisterModal());
                  }}
                >
                  Register
                </button>
              </div>
            )}
            <div className="text-white block xl:hidden" ref={sideRef}>
              <div
                className="w-10 h-10 rounded-md flex items-center justify-center bg-[#212121] cursor-pointer"
                onClick={() => setCollapse(!collapse)}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="25"
                  width="25"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M64 384h384v-42.666H64V384zm0-106.666h384v-42.667H64v42.667zM64 128v42.665h384V128H64z"></path>
                </svg>
              </div>
              {collapse && (
                <div className="fixed right-0 top-[67px] w-full sm:w-[250px] h-full pt-8 pl-4 bg-[#212121] shadow-[0px_4px_4px_0_rgba(0,0,0,0.5)] z-10">
                  <div className="flex flex-col items-start gap-8">
                    <div className="transition-all duration-200 text-[#9F9F9F] flex justify-center gap-1 items-center cursor-pointer hover:-translate-y-1">
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
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        ref={myRef}
        className={`transition-all duration-300 absolute w-full bg-[#1c1c1c] z-[300] shadow-[0 25px 50px -12px rgb(0 0 0 / 1.25)] overflow-hidden`}
        style={{
          maxHeight: dropdown ? 'none' : '0px',
          paddingBottom: dropdown ? '20px' : '0px',
        }}
      >
        <GameList />
      </div>
    </div>
  );
};

export default Header;
