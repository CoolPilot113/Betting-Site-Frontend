import { ReactComponent as DownArrow } from '../../assets/arrowIcon.svg';
import { ReactComponent as GamePlayIcon } from '../../assets/gamePlayIcon.svg';
import { ReactComponent as PackIcon } from '../../assets/packIcon.svg';
import { ReactComponent as UsersIcon } from '../../assets/users.svg';
import { ReactComponent as LeaderBoardIcon } from '../../assets/leaderBoard.svg';
import { ReactComponent as CupIcon } from '../../assets/cup.svg';

const icons = {
    Games: GamePlayIcon,
    Rewards: PackIcon,
    Affiliates: UsersIcon,
    Leaderboard: LeaderBoardIcon,
    Race: CupIcon
}

const MenuItem = ({ title, hasSubItem = false }) => {
    return <div className="text-[#9F9F9F] flex justify-center gap-[1px]">
        {icons[title].render()}
        <span>{title}</span>
        {hasSubItem && <DownArrow />}
    </div>
}

export default MenuItem