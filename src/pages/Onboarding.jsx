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
        if (currentStep < surveyData.length) {
        setCurrentStep(prev => prev + 1);
        } else {
        // 마지막 단계일 때
        console.log("최종 선택된 Tishoo 견적 데이터:", answers);
        alert("설문이 완료되었습니다! 결과 페이지로 이동합니다.");
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

    return (
        <div className="flex flex-col h-full bg-white relative">
        
        {/* 1. 상단 타임라인 (Stepper) */}
        <div className="flex items-center justify-between px-6 pt-6 mb-8 relative shrink-0">
            <div className="absolute left-10 right-10 h-[2px] border-t-2 border-dashed border-blue-200 top-1/2 -translate-y-1/2 z-0"></div>
            {surveyData.map((data) => (
            <div key={data.step} className="z-10 bg-white px-2">
                {currentStep >= data.step ? (
                <div className="w-8 h-8 rounded-full border-2 border-blue-300 bg-blue-50 flex items-center justify-center text-blue-900 font-bold text-sm shadow-sm transition-all">
                    {data.step}
                </div>
                ) : (
                <div className="w-3 h-3 rounded-full bg-blue-200 transition-all"></div>
                )}
            </div>
            ))}
        </div>

        {/* 2. 질문 제목 영역 */}
        <div className="px-6 mb-8 shrink-0">
            <h1 className="text-2xl font-bold text-gray-900 leading-snug whitespace-pre-line">
            {currentData.title}
            </h1>
            <p className="text-sm text-gray-500 mt-2">{currentData.subtitle}</p>
        </div>

        {/* 3. 선택지 리스트 영역 */}
        <div className="flex-1 overflow-y-auto px-6 pb-24 flex flex-col gap-3">
            {currentData.options.map((option, idx) => {
            // 현재 그려지는 옵션이 선택된 배열에 들어있는지 확인
            const isSelected = answers[currentData.id].includes(option);
            
            return (
                <button
                key={idx}
                onClick={() => toggleOption(option)}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${
                    isSelected
                    ? "border-[#0A2472] bg-blue-50 text-[#0A2472] font-semibold"
                    : "border-gray-100 bg-gray-50 text-gray-600 hover:bg-gray-100"
                }`}
                >
                {option}
                </button>
            );
            })}
        </div>

        {/* 4. 하단 고정 버튼 영역 */}
        <div className="absolute bottom-0 left-0 w-full bg-white p-4 flex gap-3 border-t z-20">
            <button 
            onClick={handlePrev} 
            className="flex-1 bg-blue-200 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-300 transition-colors"
            >
            이전
            </button>
            <button 
            onClick={handleNext} 
            className="flex-[2] bg-[#0A2472] text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-900 transition-colors shadow-lg"
            >
            {currentStep === surveyData.length ? "결과 보기" : "다음"}
            </button>
        </div>

        </div>
    );
};

export default Onboarding;