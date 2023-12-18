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
  const modalRef = useRef(null);

  const [isLogin, setIsLogin] = useState(0);
  const [modalShow, setModalShow] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('username')) {
      setIsLogin(2);
    }
    if (localStorage.getItem('username') == 'undefined') {
      setIsLogin(1);
    }
  }, [localStorage.getItem('isLogin')]);

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
      <div className="header w-100 h-[67px] pt-[1px] flex items-center leading-normal font-semibold gap-[35px] bg-[#1c1c1c] shadow-[0_4px_4px_0px_rgb(0,0,0,0.25)]">
        <div className="text-3xl ml-5">
          <span className="capitalize text-white">Grow</span>
          <span className="capitalize text-[#F44336]">Duel</span>
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

          {localStorage.getItem('username') &&
          localStorage.getItem('username') != 'undefined' ? (
            <div className="flex flex-row">
              <div className="flex flex-row bg-[#212121] rounded-lg">
                <div className="flex text-white">
                  <p className="my-auto mx-5">0.00</p>
                  <img src={key} className="h-10 my-auto" />
                </div>
                <span className="bg-[#F44336] rounded-e-lg float-right right-0 ml-4 w-14">
                  <img src={door} className="h-full p-4" />
                </span>
              </div>
              <div className="flex bg-[#212121] rounded-lg p-3 ml-5">
                <img className="avatar h-full" src={avatar}></img>
                <p className="ml-2 my-auto text-white">
                  {localStorage.getItem('username')}
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
        </div>
      </div>
      <div
        ref={myRef}
        className={`transition-all duration-300 absolute w-full bg-[#1c1c1c] z-[300] shadow-[0 25px 50px -12px rgb(0 0 0 / 1.25)] overflow-hidden`}
        style={{
          maxHeight: dropdown ? '400px' : '0px',
          paddingBottom: dropdown ? '20px' : '0px',
        }}
      >
        <GameList />
      </div>
      {/* {isLogin != 0 && modalShow && (
        <div
          ref={modalRef}
          className={`modal bg-[#191919] rounded-lg flex absolute right-10 bottom-5 w-[312px] h-[70px]`}
        >
          <img
            src={close}
            className="absolute right-2 top-2 cursor-pointer"
            onClick={() => {
              // modalRef.current.style.display = 'none';
              setModalShow(false);
            }}
          />
          <p className="text-white my-auto ml-3">
            {isLogin == 1 && `Error! Please try again`}
            {isLogin == 2 &&
              `You successfully tipped ${localStorage.getItem('username')}`}
          </p>
          <span
            className={` ${
              isLogin == 1 ? 'bg-[#F44336]' : isLogin == 2 && `bg-[#087A04]`
            }  h-3 w-full absolute bottom-0 rounded-b-lg`}
          ></span>
        </div>
      )} */}
    </div>
  );
};

export default Header;
