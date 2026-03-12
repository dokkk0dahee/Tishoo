import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";


const Home = () => {
    const navigate = useNavigate();

    // 1. 유저의 설문 데이터 상태
    const [surveyData, setSurveyData] = useState(null);

    // 2. 체크리스트 상태 관리 (시안의 기본 데이터 세팅)
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

    // 화면이 렌더링될 때 로컬 스토리지에서 설문 데이터가 있는지 확인
    useEffect(() => {
        const savedData = localStorage.getItem("tishoo_user_data");
        if (savedData) {
            setSurveyData(JSON.parse(savedData));
        }
    }, []);

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

    const handleButtonClick = () => {
        navigate("/onboarding");
    };

    return (
    <div className="flex flex-col h-full mt-[30px]"> 
        {/* 로고나 상단 헤더가 있다면 여기에 위치 */}

        {/* 🌟 조건부 렌더링: 설문 데이터가 있을 때 (새로운 체크리스트 디자인) */}
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
                <div>
                    <div className="flex justify-between items-center mb-[12px]">
                        <h6 className="text-[16px] font-bold text-[#0B1F57]">
                            상주 체크리스트
                        </h6>
                        <button className="flex items-center gap-[4px] text-[#4568D2] text-[14px] font-semibold">
                            <div className="w-[18px] h-[18px] bg-[#4568D2] text-white rounded-[4px] flex items-center justify-center text-[12px]">
                                +
                            </div>
                            추가하기
                        </button>
                    </div>

                    {/* 체크리스트 카드 영역 */}
                    <div className="border-[1px] border-[#E3E6F0] rounded-[12px] p-[20px] shadow-sm bg-white">
                        {checklist.map((item, index) => (
                            <div key={item.id}>
                                {/* 메인 리스트 아이템 */}
                                <div className={`flex items-start gap-[12px] py-[14px] ${index !== 0 ? "border-t-[1px] border-[#F0F2F5]" : "pt-0"}`}>
                                    
                                    {/* 커스텀 체크박스 */}
                                    <button 
                                        onClick={() => toggleCheck(item.id)}
                                        className={`w-[22px] h-[22px] mt-[2px] rounded-[4px] flex-shrink-0 flex items-center justify-center transition-colors border-[1.5px] ${
                                            item.checked 
                                                ? "bg-[#4568D2] border-[#4568D2]" 
                                                : "bg-white border-[#C5C5C5]"
                                        }`}
                                    >
                                        {item.checked && (
                                            <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 4.5L4.5 8L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        )}
                                    </button>

                                    {/* 텍스트 영역 */}
                                    <div className="flex flex-col">
                                        <span className="text-[15px] font-medium text-[#111111] leading-[22px]">
                                            {item.text}
                                        </span>
                                        {item.subtext && (
                                            <span className="text-[13px] text-[#4568D2] mt-[2px]">
                                                {item.subtext}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* 서브 리스트 아이템 (차량 확인 하위 항목 등) */}
                                {item.subItems && (
                                    <div className="pl-[34px] flex flex-col gap-[10px] pb-[14px]">
                                        {item.subItems.map(subItem => (
                                            <div key={subItem.id} className="flex items-center gap-[10px]">
                                                <button 
                                                    onClick={() => toggleSubCheck(item.id, subItem.id)}
                                                    className={`w-[18px] h-[18px] rounded-[3px] flex-shrink-0 flex items-center justify-center transition-colors border-[1.5px] ${
                                                        subItem.checked 
                                                            ? "bg-[#4568D2] border-[#4568D2]" 
                                                            : "bg-white border-[#C5C5C5]"
                                                    }`}
                                                >
                                                    {subItem.checked && (
                                                        <svg width="10" height="8" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M1 4.5L4.5 8L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                        </svg>
                                                    )}
                                                </button>
                                                <span className="text-[14px] font-medium text-[#111111]">
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