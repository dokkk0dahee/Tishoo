import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

const Layout = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex justify-center">
        {/* 실제 모바일 앱 너비 제한 영역 */}
        <div className="w-full max-w-[480px] bg-white min-h-screen relative shadow-2xl flex flex-col">
            {/* 상단 헤더 (선택 사항) */}
            <header className="h-14 flex items-center px-4 border-b font-bold text-lg sticky top-0 bg-white z-40">
            TISHOO
            </header>

            {/* 페이지별 콘텐츠가 보여지는 영역 */}
            <main className="flex-1 pb-20"> {/* pb-20은 네비바에 가려지지 않게 여백을 주는 것 */}
            <Outlet />
            </main>

            {/* 공통 하단 네비바 */}
            <Navigation />
        </div>
        </div>
    );
};

export default Layout;