import { useState } from "react";

const Checklist = () => {
    // 체크리스트 상태 관리
    const [checklist, setChecklist] = useState([
        { id: 1, text: "입관식", subtext: "", checked: false },
        { id: 2, text: "장지 확인 및 준비 사항 확인", subtext: "", checked: false },
        { id: 3, text: "비용 중간 정산", subtext: "장례식장 대관료, 음식비 등 중간 정산 내역 확인", checked: false },
        { 
            id: 4, 
            text: "차량 확인", 
            subtext: "", 
            checked: false,
            subItems: [
                { id: 41, text: "버스 동선 확인", checked: false },
                { id: 42, text: "인원 확인", checked: false }
            ]
        },
        { id: 5, text: "운구 인원 확정", subtext: "3일차 발인 때 운구 인원 4~6명이 필요", checked: true },
        { id: 6, text: "음식 준비 확인", subtext: "2일차는 조문객이 제일 많이 오는 날이에요", checked: true },
    ]);

    // 체크박스 토글 핸들러 (메인 항목)
    const toggleCheck = (id) => {
        setChecklist(prev => prev.map(item => 
            item.id === id ? { ...item, checked: !item.checked } : item
        ));
    };

    // 체크박스 토글 핸들러 (서브 항목)
    const toggleSubCheck = (parentId, subId) => {
        setChecklist(prev => prev.map(item => {
            if (item.id === parentId) {
                const newSubItems = item.subItems.map(sub => 
                    sub.id === subId ? { ...sub, checked: !sub.checked } : sub
                );
                return { ...item, subItems: newSubItems };
            }
            return item;
        }));
    };

    return (
        <div>
            {/* 타이틀 및 추가하기 버튼 */}
            <div className="flex justify-between items-center mb-[16px]">
                <h6 className="text-[16px] font-bold text-[#0B1F57] line-height-[22px]">
                    상주 체크리스트
                </h6>
                <button className="flex items-center gap-[4px] text-[#4568D2] text-[14px] font-medium">
                    <div className="w-[18.75px] h-[18.75px] bg-[#3E63A8] text-white rounded-[2.5px] flex items-center justify-center pb-[3px] text-[20px]">
                        +
                    </div>
                    추가하기 
                </button>
            </div>

            {/* 체크리스트 카드 영역 */}
            <div className="border-[1px] border-[#E3E6F0] rounded-[12px] px-[20px] py-[12px] shadow-sm bg-white">
                {checklist.map((item, index) => (
                    <div key={item.id}>
                        {/* 메인 리스트 아이템 */}
                        <div className={`flex items-start gap-[12px] py-[12px] ${index !== 0 ? "border-t-[1px] border-[#E3E6F0]" : "pt-0"}`}>
                            <button 
                                onClick={() => toggleCheck(item.id)}
                                className={`w-[18px] h-[18px] mt-[1px] rounded-[4px] flex-shrink-0 flex items-center justify-center transition-colors border-[1.5px] ${
                                    item.checked ? "bg-[#3E63A8] border-[#3E63A8]" : "bg-white border-[#8E8E93] border-[1.5px]"
                                }`}
                            >
                                {item.checked && (
                                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 4.5L4.5 8L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                )}
                            </button>
                            <div className="flex flex-col">
                                <span className="text-[14px] font-medium text-black leading-[20px]">
                                    {item.text}
                                </span>
                                {item.subtext && (
                                    <span className="text-[12px] text-[#3E63A8]">
                                        {item.subtext}
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* 서브 리스트 아이템 */}
                        {item.subItems && (
                            <div className="pl-[34px] flex flex-col gap-[10px] pb-[12px]">
                                {item.subItems.map(subItem => (
                                    <div key={subItem.id} className="flex items-center gap-[10px]">
                                        <button 
                                            onClick={() => toggleSubCheck(item.id, subItem.id)}
                                            className={`w-[16px] h-[16px] rounded-[4px] flex-shrink-0 flex items-center justify-center transition-colors border-[1.5px] ${
                                                subItem.checked ? "bg-[#3E63A8] border-[#3E63A8]" : "bg-white border-[#8E8E93] border-[1.5px]"
                                            }`}
                                        >
                                            {subItem.checked && (
                                                <svg width="10" height="8" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 4.5L4.5 8L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            )}
                                        </button>
                                        <span className="text-[12px] font-medium text-black">
                                            {subItem.text}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Checklist;