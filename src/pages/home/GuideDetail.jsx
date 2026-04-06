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
        imgBg: "bg-[#0B1536]"
    },
    passing: {
        title: "[임종 직후 대처]",
        subtitle: "자택 vs 병원, 임종 장소에 따른 '사망진단서' 발급 안내",
        content: "가족을 떠나보낸 직후, 경황이 없으시겠지만 장례 절차를 시작하기 위해 가장 먼저 확보해야 하는 서류가 있습니다. 바로 '사망진단서(시체검안서)'입니다.",
        stepsTitle: "주요 상황",
        steps: [
            { title: "병원에서 임종하신 경우", desc: "가장 절차가 수월합니다. 병원에 계시던 주치의가 임종을 확인한 후 병원 원무과를 통해 '사망진단서'를 즉시 발급받을 수 있습니다." },
            { title: "자택에서 임종하신 경우 (자연사/노환)", desc: "절대 당황하지 마시고 119나 112에 먼저 신고하세요. 구급대원과 경찰이 도착하여 상황을 확인한 후, 가까운 응급실로 모시거나 의사를 모셔와 '시체검안서'를 발급받게 됩니다." },
            { title: "요양원에서 임종하신 경우", desc: "요양원의 담당 의사가 발급해주거나, 협력 병원으로 이동하여 발급받게 됩니다. 요양원 관계자의 안내를 따르시면 됩니다." }
        ],
        tips: {
            title: "온별 요약 Tips",
            question: "“서류는 몇 장이나 떼야 할까요?”",
            answer: "사망진단서(시체검안서)는 장례식장 안치, 화장장 예약, 동사무소 사망신고, 은행 및 보험사 제출 등 쓰이는 곳이 아주 많습니다. 최소 7장~10장 정도를 한 번에 여유 있게 넉넉히 발급받아 두시는 것을 추천합니다."
        },
        imgBg: "bg-[#0B1536]"
    },
    during: {
        title: "[장례 진행 가이드]",
        subtitle: "장례 1일 차 ~ 3일 차, 날짜별 핵심 절차 한눈에 보기",
        content: "3일이라는 시간은 눈 깜짝할 새 지나갑니다. “지금 내가 무엇을 해야 하지?” 막막하실 때, 온별이 든든한 나침반이 되어 드리겠습니다.",
        stepsTitle: "주요 절차",
        steps: [
            { title: "1일차: 빈소 차림", desc: "고인을 장례식장 안치실에 안전하게 모십니다. 이후 가족들과 상의하여 빈소 크기와 장례 용품을 결정하고 계약서를 작성합니다. 상복으로 갈아입은 후, 지인들에게 부고장을 발송하여 조문객을 맞이할 준비를 마칩니다." },
            { title: "2일차: 입관식과 본격적인 조문", desc: "고인의 몸을 닦고 수의를 입혀 관에 모시는 '입관식'이 진행됩니다. 고인의 마지막 모습을 뵙고 인사할 수 있는 가장 슬프고도 중요한 시간입니다. 입관 후에는 상제들이 정식으로 상복을 갖추고 조문객을 맞이합니다." },
            { title: "3일차: 발인과 장지 안치", desc: "장례식장을 떠나 화장장으로 이동합니다. 화장이 끝난 후 수골하여 미리 정해둔 납골당, 수목장, 선산 등의 장지로 이동해 고인을 영원한 안식처에 모시며 모든 절차를 마무리합니다." }
        ],
        tips: {
            title: "온별 요약 Tips",
            question: null,
            answer: "장례 1일 차는 서류와 계약 중심의 '행정의 시간'이라면, 2일 차는 '애도의 시간', 3일 차는 '이동의 시간'입니다. 온전히 고인을 추모할 수 있도록 행정 절차는 온별이 최대한 도와드리겠습니다."
        },
        imgBg: "bg-[#0B1536]"
    },
    leaving: {
        title: "[장례 후 해야 할 일]",
        subtitle: "장례 후 한 달 내에 반드시 해야 할 행정 처리 3가지",
        content: "장례를 무사히 마쳤다는 안도감도 잠시, 유가족 앞에는 풀어야 할 행정 숙제들이 남아 있습니다. 기한을 놓치면 과태료가 나올 수 있으니 다음 세 가지는 꼭 기억해 주세요.",
        stepsTitle: "주요 목록",
        steps: [
            { title: "사망신고 (사망일로부터 1개월 이내)", desc: "고인의 주소지와 상관없이 전국 구청이나 동주민센터(행정복지센터)에서 신고할 수 있습니다. 사망진단서 원본과 신고자의 신분증을 꼭 지참하세요. (기한을 넘기면 최대 5만 원의 과태료가 부과됩니다.)" },
            { title: "안심상속 원스톱 서비스 신청", desc: "사망신고를 하러 가셨을 때 한 번에 신청하세요. 고인이 남기신 예금, 보험, 주식은 물론 혹시 모를 대출과 빚까지 전국 금융망을 통해 한 번에 조회해 주는 매우 유용한 국가 서비스입니다" },
            { title: "차량 및 부동산 등기 이전 (각각 6개월 이내)", desc: "고인 명의의 자동차가 있다면 6개월 이내에 상속 이전 등록을 해야 합니다. 기한을 넘기면 범칙금이 최대 50만 원까지 나옵니다. 부동산 역시 상속세 신고 기한(6개월) 내에 처리하시는 것이 좋습니다." }
        ],
        tips: {
            title: "온별 요약 Tips",
            question: "null",
            answer: "동주민센터에 '사망신고'를 하러 가실 때 창구 직원에게 “안심상속 원스톱 서비스도 같이 신청할게요”라고 꼭 말씀하세요. 두 번 걸음 할 필요 없이 고인의 재산 현황을 쉽게 파악할 수 있습니다."
        },
        imgBg: "bg-[#0B1536]"
    }
};

const GuideDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const data = guideDetails[id] || guideDetails["consult"];

    return (
        <div className="flex flex-col w-screen h-full bg-[#F8F9FA] overflow-y-auto mx-[-16px] my-[-16px]">
    
            {/* 1. 상단 다크 네이비 배너 영역 */}
            <div className={`w-full pt-[40px] pb-[60px] ${data.imgBg} relative flex flex-col items-center justify-center px-6 text-center`}>
                <h2 className="text-[22px] font-bold text-white z-10 mb-2 tracking-wide line-height-[31px] letter-spacing-[-0.044px]">{data.title}</h2>
                <p className="text-[14px] text-white font-regular line-height-[22px] letter-spacing-[-0.28px]">{data.subtitle}</p>
            </div>

            {/* 2. 본문 내용 영역 (둥근 모서리로 배너를 덮는 효과) */}
            <div className="flex-1 bg-white rounded-t-[24px] -mt-[24px] p-[24px] z-20 relative shadow-sm">
                
                {/* 2-1. 안내 사항 */}
                <div className="mb-[30px]">
                    <h3 className="text-[18px] font-bold text-[#331B0C] mb-[16px]">안내 사항</h3>
                    <p className="text-[14px] font-regular text-[#8E8E93] leading-[20px] break-keep">
                        {data.content}
                    </p>
                </div>

                {/* 2-2. 주요 절차 (카드 UI) */}
                <div className="mb-[30px]">
                    <h3 className="text-[18px] font-bold text-[#331B0C] mb-[16px]">{data.stepsTitle}</h3>
                    <div className="flex flex-col gap-[16px]">
                        {data.steps.map((step, index) => (
                            <div key={index} className="w-full border-[1px] border-[#eee] rounded-[8px] p-[16px] bg-[#FBFBFB] shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                                <div className="flex items-center gap-[10px] mb-[8px]">
                                    {/* 숫자 동그라미 */}
                                    <div className="w-[30px] h-[30px] rounded-full border-[1px] border-[#eee] bg-[#EDDFCA] text-[#331B0C] flex items-center justify-center text-[14px] font-bold shrink-0">
                                        {index + 1}
                                    </div>
                                    <h4 className="text-[14px] font-regular text-[#331B0C] line-height-[20px]">
                                        {step.title}
                                    </h4>
                                </div>
                                <p className="text-[12px] text-[#331B0C] font-light leading-[20px] break-keep">
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 2-3. 요약 Tips (데이터에 tips가 있을 때만 렌더링) */}
                {data.tips && (
                    <div className="pb-[30px]">
                        <h3 className="text-[18px] font-bold text-[#331B0C] mb-[16px]">{data.tips.title}</h3>
                        <p className="text-[14px] font-medium text-[#8C7462] mb-[16px] leading-[20px] break-keep">
                            {data.tips.question}
                        </p>
                        {/* 왼쪽 세로선(Border)이 있는 답변 영역 */}
                        <div className="border-l-[1.5px] border-[#331B0C] pl-[16px] py-[4px]">
                            <p className="text-[14px] font-regular text-[#331B0C] leading-[20px] break-keep">
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