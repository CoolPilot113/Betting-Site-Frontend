import { ReactComponent as OnlineIcon } from '../../assets/online.svg';

import { useEffect, useState } from 'react';

import socket from '../../socket';
import { useSelector } from 'react-redux';

import avatar from '../../assets/img/avatar.png';

const Navbar = () => {
  const [message, setMessage] = useState('');
  const [show, setShow] = useState(true);
  const messages = useSelector((state) => state.message);
  const [isDisabled, setIsDisabled] = useState(false);
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };
  const handleSubmit = (event) => {
    setMessage('');
    event.preventDefault();
    socket.emit('message', {
      username: localStorage.getItem('username'),
      message: message,
    });
  };

  return (
    <div>
        <div className={"navbar-container leading-normal font-semibold bg-[#212121] shadow-[0_4px_4px_0px_rgb(0,0,0,0.5)] w-[354px] h-[calc(100vh-67px)] xl:flex flex-col px-[10px] py-1 overflow-hidden " + (show ? "flex" : "hidden")}>
          <div
            className="text-[#9f9f9f] text-[24px] cursor-pointer self-end xl:hidden"
            onClick={() => setShow(false)}
          >
            &times;
          </div>
          <div className="online text-[15px] bg-[#191919] rounded-[10px] h-[27px] flex justify-between items-center">
            <div className="text-[#9F9F9F] flex items-center">
              <OnlineIcon />
              <span>Online</span>
            </div>
            <span className="text-[#087A04] mr-3">220</span>
          </div>

          <div className="profile-container grow overflow-y-auto pb-3 no-scrollbar">
            {messages &&
              messages.map((message, index) => (
                <div className="profile flex w-full items-end pt-3" key={index}>
                  {/* <ProfileIcon /> */}
                  <div className="ml-1 w-full">
                    <span
                      className={`text-[17px] ml-14 drop-shadow-[0px_4px_4px_rgba(0, 0, 0, 0.25)] text-[#A4A4A4]`}
                    >
                      {message.username}
                    </span>
                    <div className="flex w-full">
                      <img src={avatar} className="w-10 h-10 mr-3" />
                      <div className="bg-[#191919] px-3 flex text-left rounded-[10px] mt-1 w-full text-[#A4A4A4]">
                        <p className="my-auto">{message.message}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <form
            onSubmit={handleSubmit}
            className="message text-[#A4A4A4] border-t-[2px] border-[#393E5A] py-3 flex items-center justify-center"
          >
            <input
              onChange={handleMessageChange}
              className="w-full h-full text-white bg-[#0000] outline-none pl-2"
              placeholder="Send message"
              onFocus={() => {
                setIsDisabled(!localStorage.getItem('username'));
              }}
              value={message}
              disabled={isDisabled}
            />
          </form>
        </div>
        {!show && <div 
        className="fixed top-[100px] left-0 w-[50px] h-[50px] flex xl:hidden items-center justify-center rounded-e-[10px] text-[#f9f9f9] bg-[#434343] cursor-pointer" 
        onClick={() => setShow(true)}
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
            <path d="M128 464v-80H56a24 24 0 01-24-24V72a24 24 0 0124-24h400a24 24 0 0124 24v288a24 24 0 01-24 24H245.74zM456 80z"></path>
          </svg>
        </div>}
    </div>
  );
};

export default Navbar;
