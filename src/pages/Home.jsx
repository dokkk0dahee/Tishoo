import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Checklist from "../components/common/checklist-component";


const Home = () => {
    const navigate = useNavigate();
    const [surveyData, setSurveyData] = useState(null);  // 설문 데이터 상태

    // 화면이 렌더링될 때 로컬 스토리지에서 설문 데이터가 있는지 확인
    useEffect(() => {
        const savedData = localStorage.getItem("tishoo_user_data");
        if (savedData) {
            setSurveyData(JSON.parse(savedData));
        }
    }, []);

    const handleButtonClick = () => {
        navigate("/onboarding");
    };

    return (
    <div className="flex flex-col h-full mt-[30px]"> 
        {/* 로고나 상단 헤더가 있다면 여기에 위치 */}

        {/* 조건부 렌더링: 설문 데이터가 있을 때 */}
        {surveyData ? (
            <div className="flex flex-col gap-[32px]">
                
                {/* 1. 장례 정보 입력 섹션 */}
                <div>
                    <h6 className="text-[16px] font-bold text-[#0B1F57] mb-[12px]">
                        장례 정보 입력
                    </h6>
                    <button className="w-full h-[48px] bg-[#F8F9FA] border-[1px] border-[#E3E6F0] rounded-[8px] flex items-center justify-center text-[#8E8E93] text-[14px] font-medium transition-colors hover:bg-gray-100">
                        <span className="text-[18px] mr-1 font-light">+</span> 정보 추가
                    </button>
                </div>

                {/* 2. 상주 체크리스트 섹션 */}
                <Checklist />
            </div>
        ) : (
            <div>
                <h6 className="text-[16px] font-bold text-[#0B1F57] leading-[22px] mb-[12px]">
                    장례준비, 무엇부터 해야 할까요?
                </h6>
                <button 
                    className="w-full h-[64px] bg-[#B9CCFD] rounded-[8px] border-[1px] border-[#E3E6F0] text-[#0A2472] text-[14px] font-semibold"
                    onClick={handleButtonClick}
                > 단계별 안내 받으러 가기
                </button>
            </div>
        )}
    </div>
    );
};
export default Home;