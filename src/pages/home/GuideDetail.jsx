import { useParams, useNavigate } from "react-router-dom";

// 🌟 데이터 구조를 디자인(카드형 UI)에 맞게 렌더링하기 쉽도록 배열+객체 형태로 개선했습니다.
const guideDetails = {
    consult: {
        title: "[장례 미리 준비하기]",
        subtitle: "미리 알아두면 든든한 장례 비용 구성의 비밀",
        content: "장례가 발생하면 슬픔만큼이나 큰 현실적인 고민이 바로 '비용'입니다. 누구도 쉽게 알려주지 않았던 장례 비용, 어떤 항목으로 구성되는지 명확히 알고 있으면 당황하지 않습니다.",
        stepsTitle: "주요 절차",
        steps: [
            {
                title: "장례식장 비용 (가장 큰 비중을 차지해요)",
                desc: "빈소를 빌리는 '시설 임대료'와 조문객을 대접하는 '식대(밥, 국, 반찬, 주류)'가 포함됩니다. 전체 장례 비용의 약 절반 이상을 차지하며, 조문객 수에 따라 금액 변동이 가장 큽니다."
            },
            {
                title: "장례 용품 및 진행 비용 (상조에서 주로 맡아요)",
                desc: "고인을 모실 관과 수의, 입관 시 필요한 용품, 빈소를 꾸미는 제단 꽃장식, 그리고 장례를 돕는 도우미 여사님과 장지까지 이동할 운구 차량 비용입니다."
            },
            {
                title: "화장 및 장지 비용 (마지막 안식처를 위한 비용)",
                desc: "화장장 이용료와 고인을 모실 납골당, 수목장 등의 안치 비용입니다. 고인의 주민등록상 주소지(관내/관외)에 따라 화장장 비용이 크게 달라지므로 미리 확인하는 것이 좋습니다."
            }
        ],
        tips: {
            title: "온별 요약 Tips",
            question: "“상조에 가입했어도 추가 비용이 발생하나요?”",
            answer: "네, 그렇습니다! 상조는 보통 '2번(용품/진행)' 항목만 덮어줍니다. 장례식장 임대료와 조문객 식대, 장지 안치 비용은 상주님이 장례식장에서 별도로 결제하셔야 하는 금액입니다."
        },
        imgBg: "bg-[#0B1536]" // 시안에 맞춘 다크 네이비 배경
    },
    passing: {
        title: "[임종]",
        subtitle: "가장 먼저 해야 할 일",
        content: "사랑하는 분이 숨을 거두셨을 때, 경황이 없으시겠지만 침착하게 다음 단계들을 진행하셔야 합니다.",
        stepsTitle: "주요 절차",
        steps: [
            { title: "자택/요양원 임종 시", desc: "119 구급대 또는 인근 병원 연락하여 사망진단서(시체검안서) 발급" },
            { title: "병원 임종 시", desc: "원무과에서 사망진단서 발급 (최소 5~7부 필요)" },
            { title: "빈소 예약 및 이송", desc: "Tishoo 또는 장례식장에 연락하여 앰뷸런스 호출 및 빈소 예약" }
        ],
        imgBg: "bg-[#0B1536]"
    },
    during: {
        title: "[장례 중]",
        subtitle: "3일간의 장례 절차 안내",
        content: "장례식장에 도착한 후부터 발인 전까지의 전반적인 절차를 안내해 드립니다. 유가족은 조문객을 맞이하는 데 집중해 주세요.",
        stepsTitle: "주요 절차",
        steps: [
            { title: "1일차: 빈소 차림", desc: "영정사진 안치 및 조문객 맞이 시작" },
            { title: "2일차: 입관식", desc: "고인과의 마지막 인사인 입관식 진행, 성복제(제사) 또는 예배" },
            { title: "3일차: 발인 준비", desc: "비용 중간 정산 및 발인(3일차) 준비 사항 점검" }
        ],
        imgBg: "bg-[#0B1536]"
    },
    leaving: {
        title: "[발인]",
        subtitle: "마지막 배웅과 장지 이동",
        content: "고인과 함께 장례식장을 떠나 화장장이나 장지로 이동하는 마지막 절차입니다.",
        stepsTitle: "주요 절차",
        steps: [
            { title: "발인제(영결식)", desc: "장례식장을 떠나기 전 발인제 진행" },
            { title: "운구 진행", desc: "운구 인원 확인 (보통 4~6명 필요) 및 운구 차량 이동" },
            { title: "화장 및 안치", desc: "화장장 이동 및 화장 진행 후 장지(납골당/수목장 등)에 안치" }
        ],
        imgBg: "bg-[#0B1536]"
    }
};

const GuideDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const data = guideDetails[id] || guideDetails["consult"];

    return (
        // pb-[100px]를 주어 하단 네비게이션 바에 콘텐츠가 가려지지 않도록 합니다.
        <div className="flex flex-col h-full bg-[#F8F9FA] overflow-y-auto pb-[100px]">
            
            {/* 1. 상단 다크 네이비 배너 영역 */}
            <div className={`w-full pt-[40px] pb-[60px] ${data.imgBg} relative flex flex-col items-center justify-center px-6 text-center`}>
                <h2 className="text-[22px] font-bold text-white z-10 mb-2 tracking-wide">{data.title}</h2>
                <p className="text-[14px] text-[#A6AFC6] font-medium z-10">{data.subtitle}</p>
            </div>

            {/* 2. 본문 내용 영역 (둥근 모서리로 배너를 덮는 효과) */}
            <div className="flex-1 bg-white rounded-t-[24px] -mt-[24px] p-[24px] z-20 relative shadow-sm">
                
                {/* 2-1. 안내 사항 */}
                <div className="mb-8">
                    <h3 className="text-[18px] font-bold text-[#4A3A31] mb-4">안내 사항</h3>
                    <p className="text-[14px] text-[#666666] leading-[24px] break-keep">
                        {data.content}
                    </p>
                </div>

                {/* 2-2. 주요 절차 (카드 UI) */}
                <div className="mb-10">
                    <h3 className="text-[18px] font-bold text-[#4A3A31] mb-4">{data.stepsTitle}</h3>
                    <div className="flex flex-col gap-4">
                        {data.steps.map((step, index) => (
                            <div key={index} className="border-[1px] border-[#F0F0F0] rounded-[12px] p-4 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                                <div className="flex items-center gap-[10px] mb-[8px]">
                                    {/* 숫자 동그라미 */}
                                    <div className="w-[26px] h-[26px] rounded-full bg-[#F3EFEA] text-[#7A5A44] flex items-center justify-center text-[13px] font-bold shrink-0">
                                        {index + 1}
                                    </div>
                                    <h4 className="text-[15px] font-bold text-[#222222]">
                                        {step.title}
                                    </h4>
                                </div>
                                <p className="text-[13px] text-[#666666] leading-[22px] break-keep pl-[36px]">
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 2-3. 요약 Tips (데이터에 tips가 있을 때만 렌더링) */}
                {data.tips && (
                    <div>
                        <h3 className="text-[18px] font-bold text-[#4A3A31] mb-3">{data.tips.title}</h3>
                        <p className="text-[15px] font-bold text-[#8C7462] mb-3">
                            {data.tips.question}
                        </p>
                        {/* 왼쪽 세로선(Border)이 있는 답변 영역 */}
                        <div className="border-l-[2px] border-[#D9D0C7] pl-[14px] py-[4px]">
                            <p className="text-[14px] text-[#555555] leading-[24px] break-keep">
                                {data.tips.answer}
                            </p>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default GuideDetail;