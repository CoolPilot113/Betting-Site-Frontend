import { ReactComponent as ProfileIcon } from '../../assets/profile.svg';

const Profile = ({type = 1}) => {
    return (
        <div className="profile flex w-full items-end pt-3">
            <ProfileIcon/>
            <div className="ml-1 w-full">
                <span className={`text-[17px] drop-shadow-[0px_4px_4px_rgba(0, 0, 0, 0.25)] ${type === 1 ? "text-[#E9E9E9]" : type === 2 ? "text-[#70D4D7]" : "text-[#B747FF]"}`}>{ type === 1 ? "anonymousEXE" : type === 2 ? "connorval" : "generally"}</span>
                <div className="bg-[#191919] rounded-[10px] mt-1 h-[40px]"></div>
            </div>
        </div>
    )
}

export default Profile