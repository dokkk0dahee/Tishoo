import { Link, useLocation } from "react-router-dom";
import { Home, Search, MessageSquare, User } from "lucide-react";

const Navigation = () => {
    const location = useLocation();

    // 현재 경로에 따라 아이콘 색상을 바꿔주는 함수
    const getActiveClass = (path) => 
        location.pathname === path ? "text-primary" : "text-gray-400";

    return (
        <nav className="fixed bottom-0 w-full max-w-[480px] h-16 bg-white border-t flex justify-around items-center px-2 z-50">
        <Link to="/" className={`flex flex-col items-center gap-1 ${getActiveClass("/")}`}>
            <Home size={24} />
            <span className="text-[10px]">홈</span>
        </Link>
        <Link to="/page1" className={`flex flex-col items-center gap-1 ${getActiveClass("/page1")}`}>
            <Search size={24} />
            <span className="text-[10px]">검색</span>
        </Link>
        <Link to="/page2" className={`flex flex-col items-center gap-1 ${getActiveClass("/page2")}`}>
            <MessageSquare size={24} />
            <span className="text-[10px]">커뮤니티</span>
        </Link>
        <Link to="/page3" className={`flex flex-col items-center gap-1 ${getActiveClass("/page3")}`}>
            <User size={24} />
            <span className="text-[10px]">내 정보</span>
        </Link>
        </nav>
    );
};

export default Navigation;