import { useState } from "react";
import { Link } from "react-router-dom"; 

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
    <>
        {/* 상단 고정 헤더 영역 */}
        <header className="h-14 flex items-center justify-between px-[20px] py-[10px] border-[1px] border-[#E3E6F0] sticky top-0 z-30 shrink-0">
            <div className="font-bold text-lg tracking-wider">로고</div>
            
            {/* 햄버거 버튼 */}
            <button 
            onClick={() => setIsOpen(true)} 
            className="space-y-1 focus:outline-none z-40"
            >
            <div className="w-[21px] h-0.5 bg-black"></div>
            <div className="w-[21px] h-0.5 bg-black"></div>
            <div className="w-[21px]  h-0.5 bg-black"></div>
            </button>
        </header>

        {/* 메뉴 전체를 감싸는 투명한 방어막*/}
        <div className={`absolute inset-0 z-50 overflow-hidden transition-all duration-300 ${
            isOpen ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"}`}>
            <div className="absolute inset-0 bg-black/20" //바깥 어두운 배경 (여기를 누르면 무조건 닫힘)
                onClick={() => setIsOpen(false)} /> 

            {/* 우측 슬라이드 메뉴 바 */}
            <div className={`absolute top-0 right-0 h-full w-64 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
                isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                {/* 사이드바 헤더 (닫기 버튼) */}
                <div className="h-14 flex items-center justify-between px-4 border-b shrink-0">
                    <span className="font-bold text-lg">메뉴</span>
                    <button onClick={() => setIsOpen(false)} 
                        className="text-3xl text-black hover:text-gray-400 w-10 h-10 flex items-center justify-center focus:outline-none">
                        &times;
                    </button>
                </div>

                {/* 사이드바 메뉴 리스트 */}
                <ul className="flex flex-col p-4 space-y-4 font-medium text-lg text-gray-700">
                    <li><Link to="/" onClick={() => setIsOpen(false)} className="block py-2">홈</Link></li>
                    <li><Link to="/page1" onClick={() => setIsOpen(false)} className="block py-2">시설비교</Link></li>
                    <li><Link to="/page2" onClick={() => setIsOpen(false)} className="block py-2">간이견적</Link></li>
                    <li><Link to="/page3" onClick={() => setIsOpen(false)} className="block py-2">상주가이드</Link></li>
                </ul>
            </div>
        </div>
    </>
    );
};

export default Header;