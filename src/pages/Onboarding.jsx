import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Step1 from "../components/common/onboarding-component";

const Onboarding = () => {
    const navigate = useNavigate();
    
    // 1. 현재 스텝 상태 관리 (기본값 1)
    const [currentStep, setCurrentStep] = useState(1);
    
    // 2. 전체 설문 데이터 모음집 (여기에 모든 스텝의 선택값이 쌓입니다)
    const [formData, setFormData] = useState({
        concerns: [], // 1단계 데이터
        // guestCount: "", // 나중에 들어올 2단계 데이터 예시
        // region: "",     // 나중에 들어올 3단계 데이터 예시
    });

    // 다음 스텝으로 넘어가는 함수 (자식 컴포넌트에서 호출할 예정)
    const handleNext = (stepData) => {
        // 기존 데이터에 방금 선택한 새 데이터를 병합
        setFormData((prev) => ({ ...prev, ...stepData }));
        
        // 다음 스텝으로 이동
        if (currentStep < 4) {
        setCurrentStep((prev) => prev + 1);
        } else {
        console.log("최종 제출 데이터:", { ...formData, ...stepData });
        alert("설문이 완료되었습니다! 견적 페이지로 이동합니다.");
        // 여기서 백엔드로 API를 쏘고, navigate("/result") 등으로 이동하면 됩니다!
        }
    };

    // 이전 스텝으로 돌아가는 함수
    const handlePrev = () => {
        if (currentStep === 1) {
        navigate(-1); // 1단계면 아예 이전 페이지(홈 등)로 돌아가기
        } else {
        setCurrentStep((prev) => prev - 1);
        }
    };

    return (
        <div className="flex flex-col h-full bg-white relative">
        
        {/* 🌟 공통 상단 타임라인 (Stepper) - 여기서 한 번만 그립니다! */}
        <div className="flex items-center justify-between px-6 pt-6 mb-8 relative">
            <div className="absolute left-10 right-10 h-[2px] border-t-2 border-dashed border-blue-200 top-1/2 -translate-y-1/2 z-0"></div>
            {[1, 2, 3, 4].map((step) => (
            <div key={step} className="z-10 bg-white px-2">
                {currentStep >= step ? (
                <div className="w-8 h-8 rounded-full border-2 border-blue-300 bg-blue-50 flex items-center justify-center text-blue-900 font-bold text-sm">
                    {step}
                </div>
                ) : (
                <div className="w-3 h-3 rounded-full bg-blue-200"></div>
                )}
            </div>
            ))}
        </div>

        {/* 🌟 조건부 렌더링 (스텝 번호에 따라 컴포넌트 갈아끼우기) */}
        <div className="flex-1 overflow-y-auto px-6 pb-24">
            {currentStep === 1 && (
            <Step1 
                initialData={formData.concerns} // 뒤로가기 했을 때 이전 선택값 유지용
                onNext={handleNext} 
                onPrev={handlePrev} 
            />
            )}
            {/* currentStep === 2 && <Step2 onNext={handleNext} onPrev={handlePrev} /> */}
        </div>

        </div>
    );
};

export default Onboarding;