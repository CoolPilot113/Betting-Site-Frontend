import { ReactComponent as OnlineIcon } from '../../assets/online.svg';
import Profile from './profile';

const Navbar = () => {
    return <div className="navbar-container leading-normal font-semibold bg-[#212121] shadow-[0_4px_4px_0px_rgb(0,0,0,0.5)] w-[354px] h-[calc(100vh-67px)] flex flex-col px-[10px] overflow-hidden">
        <div className="online text-[15px] bg-[#191919] rounded-[10px] h-[27px] flex justify-between items-center">
            <div className="text-[#9F9F9F] flex items-center">
                <OnlineIcon />
                <span>Online</span>
            </div>
            <span className='text-[#087A04] mr-3'>220</span>
        </div>

        <div className="profile-container grow overflow-y-auto pb-3 no-scrollbar">
            <Profile/>
            <Profile/>
            <Profile/>
            <Profile/>
            <Profile type={2}/>
            <Profile/>
            <Profile/>
            <Profile/>
            <Profile/>
            <Profile type={3}/>
            <Profile/>
            <Profile/>
            <Profile/>
            <Profile/>
            <Profile/>
            <Profile/>
            <Profile/>
            <Profile/>
            <Profile/>
        </div>

        <div className="message text-[#A4A4A4] border-t-[2px] border-[#393E5A] py-3 flex items-center justify-center">
            Send message
        </div>
    </div>
}

export default Navbar

