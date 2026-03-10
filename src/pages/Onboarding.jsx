import { useState } from "react";
import { useNavigate } from "react-router-dom";

const surveyData = [
    {
        step: 1,
        id: "concerns",
        title: "가장 걱정되는 부분은\n무엇인가요?",
        subtitle: "*복수 선택 가능",
        isMulti: true,  //복수 선택 여부
        options: [
            "장례 절차가 너무 생소하고 복잡해요.",
            "비용이 너무 많이 나올까 봐 걱정돼요.",
            "소중한 분을 모실 적절한 장소를 찾고 싶어요.",
            "갑작스러운 상황이라 경황이 없어요.",
            "가족장이나 작은 장례를 고민하고 있어요."
        ]
    },
    {
        step: 2,
        id: "situation",
        title: "현재 어떤 상황에 놓여 게신가요?",
        subtitle: null,
        isMulti: false,
        options: [
            "미리 장례 절차와 비용을 알아보고 싶어요.",
            "방금 임종하셨습니다. 도움이 필요해요.",
            "장례를 치르고 있습니다.",
            "장례 이후 절차를 안내받고 싶어요. "
        ]
    },
    {
        step: 3,
        id: "region",
        title: "원하시는 장례 지역을\n선택해주세요.",
        subtitle: "*단일 선택",
        isMulti: false,
        options: [
        "서울",
        "경기/인천",
        "강원",
        "충청/대전",
        "기타 지역"
        ]
    },
    {
        step: 4,
        id: "customer",
        title: "예상 조문객 수를\n선택해주세요.",
        subtitle: null,
        isMulti: false,
        options: [
            "0명 (무빈소)",
            "50명 내외",
            "100명 내외",
            "200명 내외",
            "잘 모르겠어요."
        ]
    }
];

const Onboarding = () => {
    const navigate = useNavigate();
    
    // 현재 진행 중인 스텝 (1 ~ 4)
    const [currentStep, setCurrentStep] = useState(1);
    
    // 사용자가 선택한 모든 데이터를 저장하는 객체
    const [answers, setAnswers] = useState({
        concerns: [],
        situation: [],
        region: [],
        customer: []
    });

    // 현재 스텝에 해당하는 데이터 뽑아오기
    const currentData = surveyData.find(d => d.step === currentStep);

    // 옵션 클릭 핸들러
    const toggleOption = (optionStr) => {
        setAnswers((prev) => {
        const currentAnswers = prev[currentData.id];
        
        // 복수 선택일 경우
        if (currentData.isMulti) {
            if (currentAnswers.includes(optionStr)) {
            return { ...prev, [currentData.id]: currentAnswers.filter(a => a !== optionStr) };
            } else {
            return { ...prev, [currentData.id]: [...currentAnswers, optionStr] };
            }
        } 
        // 단일 선택일 경우 (기존 것 무시하고 새로 누른 것만 배열에 넣음)
        else {
            return { ...prev, [currentData.id]: [optionStr] };
        }
        });
    };

    // 다음 버튼
    const handleNext = () => {
        // 🚨 방어 로직 추가: 현재 스텝에서 선택한 항목이 하나도 없다면?
        if (answers[currentData.id].length === 0) {
            return; // 여기서 함수를 종료시켜서 다음 스텝으로 넘어가지 못하게 막습니다.
        }

        if (currentStep < surveyData.length) {
            setCurrentStep(prev => prev + 1);
        } else {
            // 마지막 단계일 때
            console.log("최종 선택된 Tishoo 견적 데이터:", answers);
            // navigate("/result"); // 결과 페이지로 이동
        }
    };

    // 이전 버튼
    const handlePrev = () => {
        if (currentStep === 1) {
        navigate(-1); // 1단계면 이전 페이지로 이탈
        } else {
        setCurrentStep(prev => prev - 1);
        }
    };

    const isNextEnabled = answers[currentData.id].length > 0; // 현재 스텝에서 하나라도 선택했는지 여부 

    return (
        <div className="flex flex-col h-full relative">
        
    {/* 1. 상단 타임라인 (Stepper) */}
    <div className="flex items-center justify-between px-6 pt-[40px] relative shrink-0">
        
        {/* 배경 선 래퍼 (점선 위에 파란 실선을 겹쳐 올립니다) */}
        <div className="absolute left-[-15px] right-[-15px] h-[1.5px] -translate-y-1/2 z-0">
            {/* 기본 점선 (연한 파란색) */}
            <div className="absolute top-0 left-0 w-full h-full border-t-[1.5px] border-dashed border-[#B9CCFD]"></div>
            
            {/* 차오르는 파란 실선 */}
            <div 
                className="absolute top-0 left-0 h-full border-t-[1.5px] border-solid border-[#B9CCFD] transition-all duration-500 ease-in-out"
                style={{ width: currentStep === 1 
                    ? "15%" // 👈 1단계일 때 선이 얼마나 나갈지 여기서 직접 조절하세요! (예: "20px", "10%" 등)
                    : `${((currentStep - 1) / (surveyData.length - 1)) * 100}%` }}
            ></div>
        </div>

        {surveyData.map((data) => (
        <div key={data.step} className="z-10 bg-white rounded-full">
            {currentStep >= data.step ? (
            // 활성화된 스텝
            <div className="w-[31px] h-[31px] bg-white rounded-full border-2 border-[#B9CCFD] flex items-center justify-center transition-all">
                <div className="w-[24px] h-[24px] rounded-full bg-[#B9CCFD] flex items-center justify-center transition-all text-[#0B1F57] text-[17px] font-semibold leading-[22px]">
                    {data.step}
                </div>
            </div>
            ) : (
            // 아직 안 간 스텝 (선이 뚫고 보이지 않도록 31px 흰색 배경으로 감싸줌)
            <div className="w-[31px] h-[31px] bg-white rounded-full flex items-center justify-center transition-all">
                <div className="w-[9px] h-[9px] rounded-full bg-[#B9CCFD] transition-all"></div>
            </div>
            )}
        </div>
        ))}
    </div>


        {/* 2. 질문 제목 영역 */}
        <div className="mt-[60px] shrink-0">
            <h4 className="text-[20px] font-bold text-[#0B1F57] leading-[28px] whitespace-pre-line">
            {currentData.title}
            </h4>
            <p className="text-[12px] text-black mb-[20px]">{currentData.subtitle}</p>
        </div>

        {/* 3. 선택지 리스트 영역 */}
        <div className="flex flex-col gap-[6px]">
            {currentData.options.map((option, idx) => {
            // 현재 그려지는 옵션이 선택된 배열에 들어있는지 확인
            const isSelected = answers[currentData.id].includes(option);
            
            return (
                <button
                key={idx}
                onClick={() => toggleOption(option)}
                className={`w-full h-[42px] px-[14px] text-left rounded-[8px] border-[1px] transition-all duration-200 ${
                    isSelected
                    ? "border-[#E3E6F0] bg-[#E9EFFE] text-[#08173E] text-[14px] font-semibold"
                    : "border-[#E3E6F0] bg-[#F5F5F5] text-[#8E8E93] text-[14px] font-semibold"
                }`}
                >
                {option}
                </button>
            );
            })}
        </div> 

        {/* 4. 하단 고정 버튼 영역 */}
        <div className="flex-1 flex mt-[16px] w-full gap-[10px] z-20">
            <button 
            onClick={handlePrev} 
            className="flex-1 bg-[#B9CCFD] h-[42px] text-[#FBFBFB] rounded-[8px] border-[#E3E6F0] font-semibold text-[14px] transition-colors"
            > 이전
            </button>
            <button 
            onClick={handleNext} 
            disabled={!isNextEnabled} // 선택이 없으면 버튼 비활성화
            className={`flex-1 h-[42px] rounded-[8px] font-semibold text-[14px] transition-all duration-300 ${
                isNextEnabled 
                      ? "bg-[#0A2472] text-[#FBFBFB] cursor-pointer" // 선택했을 때 (파란 불 켜짐)
                      : "bg-[#E9EFFE] text-[#3E63A8] cursor-not-allowed" // 선택 안 했을 때 (회색 비활성화)
            }`}>
            {currentStep === surveyData.length ? "확인" : "다음"}
            </button>
        </div>

        </div>
    );
};

export default Onboarding;