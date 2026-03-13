import { useParams, useNavigate } from "react-router-dom";

// 🌟 각 가이드의 상세 내용 데이터 (해커톤용으로 파일 안에 직접 넣었습니다)
const guideDetails = {
    consult: {
        title: "[사전 상담]",
        subtitle: "미리 준비하는 장례, 무엇을 해야 할까요?",
        content: "장례 절차와 예상 비용을 미리 확인하여 슬픔에만 집중할 수 있도록 돕습니다. 갑작스러운 이별 앞에서도 당황하지 않도록 Tishoo가 함께합니다.",
        steps: [
            "가족들의 의견을 모아 장례 방식(가족장, 일반장 등) 결정하기",
            "예상 조문객 수 파악하기",
            "Tishoo를 통해 대략적인 견적과 절차 안내받기"
        ],
        imgBg: "bg-gradient-to-b from-[#0A1128] to-[#1C3166]"
    },
    passing: {
        title: "[임종]",
        subtitle: "가장 먼저 해야 할 일",
        content: "사랑하는 분이 숨을 거두셨을 때, 경황이 없으시겠지만 침착하게 다음 단계들을 진행하셔야 합니다.",
        steps: [
            "자택/요양원 임종 시: 119 구급대 또는 인근 병원 연락하여 사망진단서(시체검안서) 발급",
            "병원 임종 시: 원무과에서 사망진단서 발급 (최소 5~7부 필요)",
            "Tishoo 또는 장례식장에 연락하여 앰뷸런스 호출 및 빈소 예약"
        ],
        imgBg: "bg-gradient-to-b from-[#0A1128] to-[#1A264A]"
    },
    during: {
        title: "[장례 중]",
        subtitle: "3일간의 장례 절차 안내",
        content: "장례식장에 도착한 후부터 발인 전까지의 전반적인 절차를 안내해 드립니다. 유가족은 조문객을 맞이하는 데 집중해 주세요.",
        steps: [
            "1일차: 빈소 차림, 영정사진 안치, 조문객 맞이 시작",
            "2일차: 입관식 진행 (고인과의 마지막 인사), 성복제(제사) 또는 예배",
            "비용 중간 정산 및 발인(3일차) 준비 사항 점검"
        ],
        imgBg: "bg-gradient-to-b from-[#0A1128] to-[#1C3166]"
    },
    leaving: {
        title: "[발인]",
        subtitle: "마지막 배웅과 장지 이동",
        content: "고인과 함께 장례식장을 떠나 화장장이나 장지로 이동하는 마지막 절차입니다.",
        steps: [
            "발인제(영결식) 진행",
            "운구 인원 확인 (보통 4~6명 필요)",
            "화장장 이동 및 화장 진행 -> 장지(납골당/수목장 등) 안치",
            "장례식장 최종 비용 정산"
        ],
        imgBg: "bg-gradient-to-b from-[#0A1128] to-[#1C3166]"
    }
};

const GuideDetail = () => {
    const { id } = useParams(); // URL에서 'consult', 'passing' 같은 ID를 빼옵니다!
    const navigate = useNavigate();

    // ID에 맞는 데이터 찾기 (만약 이상한 주소로 오면 consult를 기본으로 보여줌)
    const data = guideDetails[id] || guideDetails["consult"];

    return (
        <div className="flex flex-col h-full bg-[#F8F9FA] overflow-y-auto">
            
            {/* 상단 네비게이션 바 (뒤로 가기) */}
            <div className="sticky top-0 z-50 flex items-center h-[56px] px-4 bg-white border-b-[1px] border-[#E3E6F0]">
                <button 
                    onClick={() => navigate(-1)} 
                    className="p-2 -ml-2 text-[#111111]"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                <h1 className="text-[16px] font-bold text-[#111111] ml-2">가이드 상세</h1>
            </div>

            {/* 1. 상단 배너 이미지 영역 */}
            <div className={`w-full h-[200px] ${data.imgBg} relative flex flex-col items-center justify-center px-6 text-center`}>
                <div className="absolute w-[80px] h-[80px] bg-yellow-200/20 rounded-full blur-2xl"></div>
                <h2 className="text-[24px] font-bold text-white z-10 mb-2">{data.title}</h2>
                <p className="text-[14px] text-white/80 z-10">{data.subtitle}</p>
            </div>

            {/* 2. 본문 내용 영역 */}
            <div className="flex-1 bg-white rounded-t-[24px] -mt-[20px] p-6 z-20 relative shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
                
                <div className="mb-8">
                    <h3 className="text-[18px] font-bold text-[#0B1F57] mb-4">안내 사항</h3>
                    <p className="text-[15px] text-[#555555] leading-[26px] break-keep">
                        {data.content}
                    </p>
                </div>

                {/* 3. 단계별 체크리스트(스텝) 영역 */}
                <div>
                    <h3 className="text-[18px] font-bold text-[#0B1F57] mb-4">주요 체크 포인트</h3>
                    <div className="flex flex-col gap-4">
                        {data.steps.map((step, index) => (
                            <div key={index} className="flex items-start gap-3 bg-[#F5F5F5] p-4 rounded-[12px]">
                                <div className="w-[24px] h-[24px] rounded-full bg-[#B9CCFD] text-[#0A2472] flex items-center justify-center text-[13px] font-bold shrink-0 mt-[2px]">
                                    {index + 1}
                                </div>
                                <p className="text-[14px] font-medium text-[#333333] leading-[22px] break-keep">
                                    {step}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default GuideDetail;