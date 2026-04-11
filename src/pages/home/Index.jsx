import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Checklist from "./components/checklist-component";
import GuideSection from "./components/guidesection-component";
import Banner from "./components/banner-component";
import GuideIcon from "../../assets/Icons/GuideIcon";
import NextIcon from "../../assets/Icons/NextIcon";
import EditIcon from "../../assets/Icons/editIcon";


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
                {/* 1. 상단 배너 섹션 */}
                <Banner />
                
                {/* 2. 장례 정보 입력 섹션 */}
                <div>
                    <h6 className="text-[16px] font-bold text-[#331B0C] mb-[16px]">
                        장례 정보 입력
                    </h6>

                    {/* TODO: 설문 데이터의 날짜 정보를 기반으로 동적으로 계산하여 표시하도록 수정 필요 */}
                    <div className="bg-[#F4F1EE] rounded-[8px] px-[14px] py-[12px] flex flex-col">
                        {/* 왼쪽 상단: N일차 뱃지 */}
                        <div className="bg-[#EDDFCA] text-[#5B3C27] text-[14px] font-semibold mb-[8px] px-[8px] py-[3px] rounded-[8px] w-fit">
                            2일차
                        </div>

                        {/* 정보 리스트 */}
                        <div className="flex-1 flex flex-col gap-[5px] text-black text-[14px] font-medium leading-[20px]">
                            <div><span>상주:</span> 김슝슝</div>
                            <div><span>장소:</span> 00 장례식장 102호</div>
                            <div><span>일정:</span> 2026년 5월 5일</div>
                            <div className="flex items-center justify-between w-full mt-[-5px]">
                                <div><span>발인:</span> 2026년 5월 7일</div>
                                {/* 우측 하단: 연필 모양 수정 버튼 */}
                                <button className="w-[32px] h-[32px] bg-[#EDDFCA] rounded-[8px] flex items-center justify-center focus:outline-none transition-colors">
                                    <EditIcon />
                                </button>
                            </div>

                        </div>
                    </div>
                </div>

                {/* 3. 상주 체크리스트 섹션 */}
                <Checklist />
            </div>
        ) : (
            <div>
                <h6 className="text-[16px] font-bold text-[#331B0C] leading-[22px] mt-[15px] mb-[12px]">
                    장례준비, 무엇부터 해야 할까요?
                </h6>
                <button 
                    className="flex items-center justify-center w-full h-[64px] bg-[#EDDFCA] rounded-[8px] border-[1px] border-[#E3E6F0] text-[#331B0C] text-[14px] font-semibold gap-[8px]"
                    onClick={handleButtonClick}
                > <GuideIcon /> 단계별 안내 받으러 가기 <NextIcon/>
                </button>
            </div>
        )}
        <div>
            <h6 className="text-[16px] font-bold text-[#331B0C] leading-[22px] mt-[30px] mb-[12px]">
                    상주가 처음이라면 읽어야할 필독 가이드
            </h6> 
            <GuideSection />
        </div>
    </div>
    );
};
export default Home;