import { useState } from "react";

const Step1 = ({ initialData, onNext, onPrev }) => {
  // 부모에게서 받은 초기값(뒤로가기 시 유지)으로 세팅
    const [selectedOptions, setSelectedOptions] = useState(initialData || []);

    const options = [
        "장례 절차가 너무 생소하고 복잡해요.",
        "비용이 너무 많이 나올까 봐 걱정돼요.",
        "소중한 분을 모실 적절한 장소를 찾고 싶어요.",
        "갑작스러운 상황이라 경황이 없어요.",
        "가족장이나 작은 장례를 고민하고 있어요."
    ];

    const toggleOption = (index) => {
        if (selectedOptions.includes(index)) {
        setSelectedOptions(selectedOptions.filter((i) => i !== index));
        } else {
        setSelectedOptions([...selectedOptions, index]);
        }
    };

    return (
        <div className="h-full flex flex-col">
        {/* 제목 */}
        <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 leading-snug">
            가장 걱정되는 부분은<br />무엇인가요?
            </h1>
            <p className="text-sm text-gray-500 mt-2">*복수 선택 가능</p>
        </div>

        {/* 선택지 리스트 */}
        <div className="flex flex-col gap-3">
            {options.map((option, idx) => {
            const isSelected = selectedOptions.includes(idx);
            return (
                <button
                key={idx}
                onClick={() => toggleOption(idx)}
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

        {/* 버튼 영역 (부모가 레이아웃을 잡아주므로 absolute를 써서 하단에 고정) */}
        <div className="absolute bottom-0 left-0 w-full bg-white p-4 flex gap-3 border-t">
            <button 
            onClick={onPrev} 
            className="flex-1 bg-blue-200 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-300"
            >
            이전
            </button>
            <button 
            onClick={() => onNext({ concerns: selectedOptions })} 
            className="flex-[2] bg-[#0A2472] text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-900"
            >
            다음
            </button>
        </div>
        </div>
    );
};

export default Step1;