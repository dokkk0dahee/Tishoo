import TalkIcon from "../../assets/Icons/TalkIcon";

const FloatingButton = () => {
    return (
        <div className="fixed bottom-[160px] left-1/2 -translate-x-1/2 w-full max-w-[480px] pointer-events-none z-50">
            
            {/* 실제 클릭되는 버튼 (오른쪽에서 16px 띄움) */}
            <a
                href="https://pf.kakao.com/_xxxxxx/chat" // TODO: 여기에 실제 카카오 채널 채팅 URL을 넣으세요!
                target="_blank"
                rel="noopener noreferrer"
                className="absolute right-[16px] w-[50px] h-[50px] bg-[#EDDFCA] rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center pointer-events-auto hover:scale-105 transition-transform duration-200 border-[1px] border-[#D9D0C7]"
            >
                <TalkIcon className="mb-[2px]" />

                {/* 텍스트 */}
                <span className="text-[9px] font-semibold text-[#331B0C] leading-none">
                    카톡상담
                </span>
            </a>
            
        </div>
    );
};

export default FloatingButton;