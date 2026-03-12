import { Link, useLocation } from "react-router-dom";
import HomeIcon from "../assets/Icons/HomeIcon";
import SearchIcon from "../assets/Icons/SearchIcon";
import PriceIcon from "../assets/Icons/PriceIcon";
import SecretaryIcon from "../assets/Icons/Secretary";
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
        <Link to="/page1" className={`flex flex-col items-center ${getActiveClass("/page1")}`}>
            <SearchIcon />
            <span className="text-[12px]">빈소찾기</span>
        </Link>
        <Link to="/page2" className={`flex flex-col items-center ${getActiveClass("/page2")}`}>
            <PriceIcon size={27} />
            <span className="text-[12px]">가격비교</span>
        </Link>
        <Link to="/page3" className={`flex flex-col items-center ${getActiveClass("/page3")}`}>
            <SecretaryIcon size={27} />
            <span className="text-[12px]">상주 비서</span>
        </Link>
        <Link to="/page4" className={`flex flex-col items-center ${getActiveClass("/page4")}`}>
            <MypageIcon size={27} />
            <span className="text-[12px]">마이페이지</span>
        </Link>
        </nav>
    );
};

export default Navigation;