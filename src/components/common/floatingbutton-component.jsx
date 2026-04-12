const FloatingButton = () => {
    return (
        <div className="fixed bottom-[90px] left-1/2 -translate-x-1/2 w-full max-w-[480px] pointer-events-none z-50">
            
            {/* 실제 클릭되는 버튼 (오른쪽에서 16px 띄움) */}
            <a
                href="https://pf.kakao.com/_xxxxxx/chat" // 👈 여기에 실제 카카오 채널 채팅 URL을 넣으세요!
                target="_blank"
                rel="noopener noreferrer"
                className="absolute right-[16px] w-[56px] h-[56px] bg-[#EDDFCA] rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center pointer-events-auto hover:scale-105 transition-transform duration-200 border-[1px] border-[#D9D0C7]"
            >
                {/* 🎧 상담원/헤드셋 SVG 아이콘 (시안과 유사한 느낌) */}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-[2px]">
                    <path d="M3 18V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V18" stroke="#331B0C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 19A2 2 0 0 1 19 21H18A2 2 0 0 1 16 19V16A2 2 0 0 1 18 14H21V19Z" fill="#331B0C"/>
                    <path d="M3 19A2 2 0 0 0 5 21H6A2 2 0 0 0 8 19V16A2 2 0 0 0 6 14H3V19Z" fill="#331B0C"/>
                    {/* 마이크 부분 */}
                    <path d="M19 21V22C19 22.5523 18.5523 23 18 23H12" stroke="#331B0C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

                {/* 텍스트 */}
                <span className="text-[10px] font-bold text-[#331B0C] leading-none">
                    카톡상담
                </span>
            </a>
            
        </div>
    );
};

export default FloatingButton;