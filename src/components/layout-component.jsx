import { Outlet } from "react-router-dom";
import Navigation from "./navigation-component";
import Header from "./header-componentr";

const Layout = () => {
    return (
    <div className="bg-gray-100 md:bg-yellow-200 min-h-screen flex justify-center md:items-center"> 
        {/*모바일에서는 배경색이 회색, 데스크탑에서는 노란색으로 보이도록 설정*/}

        {/* 실제 모바일 앱 너비 제한 영역 */}
        <div className="w-full max-w-[480px] bg-white md:h-[90vh] min-h-screen relative shadow-2xl flex flex-col">
            {/* 상단 헤더 */}
            <Header />

            {/* 페이지별 콘텐츠가 보여지는 영역 */}
            <main className="flex-1 overflow-y-auto px-4 pt-4 pb-20"> {/* pb-20은 네비바에 가려지지 않게 여백을 주는 것 */}
            <Outlet />
            </main>

            {/* 공통 하단 네비바 */}    
            <Navigation />
        </div>
    </div>
    );
};

export default Layout;