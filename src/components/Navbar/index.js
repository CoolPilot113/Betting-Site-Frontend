import { ReactComponent as OnlineIcon } from '../../assets/online.svg';
import Profile from './profile';
// import ChatBody from './ChatBody';
import { useEffect, useState } from 'react';
// import ChatFooter from './ChatFooter';
// import socket from '../../socket.js';
import socket from '../../socket';
import { useSelector } from 'react-redux';
import { ReactComponent as ProfileIcon } from '../../assets/profile.svg';
import avatar from '../../assets/img/avatar.png';

const Navbar = ({}) => {
  const [message, setMessage] = useState();
  const messages = useSelector((state) => state.message);

  console.log({ messages });

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(message);
    socket.emit('message', {
      username: localStorage.getItem('username'),
      message: message,
    });
  };

  //   useEffect(() => {
  //     socket.on('chat', (data) => {
  //       console.log(data);
  //     });
  //   });

  return (
    <div className="navbar-container leading-normal font-semibold bg-[#212121] shadow-[0_4px_4px_0px_rgb(0,0,0,0.5)] w-[354px] h-[calc(100vh-67px)] flex flex-col px-[10px] overflow-hidden">
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
      {/* <ChatFooter socket={socket} /> */}
      <form
        onSubmit={handleSubmit}
        className="message text-[#A4A4A4] border-t-[2px] border-[#393E5A] py-3 flex items-center justify-center"
      >
        <input
          onChange={handleMessageChange}
          className="w-full h-full text-white bg-[#0000] outline-none pl-2"
          placeholder="Send message"
        />
      </form>
    </div>
  );
};

export default Navbar;
