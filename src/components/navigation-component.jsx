import { Link, useLocation } from "react-router-dom";
import HomeIcon from "../assets/Icons/HomeIcon";
import SearchIcon from "../assets/Icons/SearchIcon";
import PriceIcon from "../assets/Icons/PriceIcon";
import MypageIcon from "../assets/Icons/Mypage";

const Navigation = () => {
    const location = useLocation();

    // 현재 경로에 따라 아이콘 색상을 바꿔주는 함수
    const getActiveClass = (path) => 
        location.pathname === path ? "text-[#0A2472]" : "text-[#8E8E93]";

    return (
        <nav className="fixed bottom-0 w-full max-w-[480px] h-[78px] pb-[22px] bg-white border-t border-[#E3E6F0] flex justify-around items-center px-2 z-50">
        <Link to="/" className={`flex flex-col items-center ${getActiveClass("/")}`}>
            <HomeIcon />
            <span className="text-[12px]">홈</span>
        </Link>
        <Link to="/reservation" className={`flex flex-col items-center ${getActiveClass("/reservation")}`}>
            <SearchIcon />
            <span className="text-[12px]">빈소예약</span>
        </Link>
        <Link to="/compare" className={`flex flex-col items-center ${getActiveClass("/compare")}`}>
            <PriceIcon size={27} />
            <span className="text-[12px]">가격비교</span>
        </Link>
        <Link to="/mypage" className={`flex flex-col items-center ${getActiveClass("/mypage")}`}>
            <MypageIcon size={27} />
            <span className="text-[12px]">마이페이지</span>
        </Link>
        </nav>
    );
};

export default Navigation;