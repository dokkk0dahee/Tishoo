import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Checklist from "../../components/common/checklist-component";
import GuideSection from "../../components/common/guidesection-component";

const Home = () => {
    const navigate = useNavigate();
    // 설문 데이터 상태
    const [surveyData, setSurveyData] = useState(() => {
        const savedData = localStorage.getItem("tishoo_user_data");
        return savedData ? JSON.parse(savedData) : null;
    });

    // 화면이 렌더링될 때 로컬 스토리지에서 설문 데이터가 있는지 확인
    const handleButtonClick = () => {
        navigate("/onboarding");
    };

    return (
    <div className="flex flex-col h-full mt-[15px]"> 
        {/* 조건부 렌더링: 설문 데이터가 있을 때 */}
        {surveyData ? (
            <div className="flex flex-col gap-[36px]">
                
                {/* 1. 장례 정보 입력 섹션 */}
                <div>
                    <h6 className="text-[16px] font-bold text-[#0B1F57] mb-[16px]">
                        장례 정보 입력
                    </h6>

                    {/* TODO: 설문 데이터의 날짜 정보를 기반으로 동적으로 계산하여 표시하도록 수정 필요 */}
                    <div className="bg-[#EDDFCA] rounded-[16px] p-[16px] flex flex-col gap-[12px]">
                        {/* 왼쪽 상단: N일차 뱃지 */}
                        <div className="bg-[#7A5A44] text-white text-[12px] font-semibold px-[8px] py-[3px] rounded-[100px] w-fit">
                            2일차
                        </div>

                        {/* 정보 리스트 */}
                        <div className="flex-1 flex flex-col gap-[8px] text-[#331B0C] text-[14px] font-normal leading-[20px]">
                            <div><span className="font-semibold">상주:</span> 김슝슝</div>
                            <div><span className="font-semibold">장소:</span> 00 장례식장 102호</div>
                            <div><span className="font-semibold">일정:</span> 2026년 5월 5일</div>
                            <div><span className="font-semibold">발인:</span> 2026년 5월 7일 
                                {/* 우측 하단: 연필 모양 수정 버튼 */}
                                <span className="flex justify-end">
                                    <button className="w-[40px] h-[40px] bg-[#B9A392] rounded-[8px] flex items-center justify-center text-[#331B0C] focus:outline-none transition-colors hover:bg-[#8C7462]">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 20H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M16.5 3.5C16.8978 3.10217 17.4374 2.87868 18 2.87868C18.2786 2.87868 18.5544 2.93355 18.8118 3.04015C19.0692 3.14676 19.3031 3.303 19.5 3.5C19.6969 3.6969 19.8532 3.93081 19.9598 4.1882C20.0664 4.44558 20.1213 4.72143 20.1213 5C20.1213 5.27857 20.0664 5.55442 19.9598 5.8118C19.8532 6.06919 19.6969 6.3031 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. 상주 체크리스트 섹션 */}
                <Checklist />
            </div>
        ) : (
            <div>
                <h6 className="text-[16px] font-bold text-[#0B1F57] leading-[22px] mt-[15px] mb-[12px]">
                    장례준비, 무엇부터 해야 할까요?
                </h6>
                <button 
                    className="w-full h-[64px] bg-[#EDDFCA] rounded-[8px] border-[1px] border-[#E3E6F0] text-[#0A2472] text-[14px] font-semibold"
                    onClick={handleButtonClick}
                > 단계별 안내 받으러 가기
                </button>
            </div>
        )}
        <div>
            <h6 className="text-[16px] font-bold text-[#0B1F57] leading-[22px] mt-[30px] mb-[12px]">
                    상주가 처음이라면 읽어야할 필독 가이드
            </h6> 
            <GuideSection />
        </div>
    </div>
    );
};
export default Home;