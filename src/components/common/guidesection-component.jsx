import { useNavigate } from "react-router-dom";

// 🌟 가이드 데이터 배열 (나중에 내용이나 이미지를 쉽게 바꿀 수 있습니다)
const guideList = [
    {
        id: "consult", // 이동할 페이지 주소에 쓸 고유 ID
        title: "[장례 미리 준비하기]",
        description: "미리 알아두면 든든한 장례 비용 구성의 비밀",
        // 실제 프로젝트에서는 이미지 경로를 넣으시면 됩니다. 예: img: "/assets/guide1.png"
        imgBg: "bg-gradient-to-b from-[#0A1128] to-[#1C3166]" 
    },
    {
        id: "passing",
        title: "[임종 직후 대처]",
        description: "자택 vs 병원, 임종 장소에 따른 '사망진단서' 발급 안내",
        imgBg: "bg-gradient-to-b from-[#0A1128] to-[#1A264A]"
    },
    {
        id: "during",
        title: "[장례 진행 가이드]",
        description: "장례 1일차 ~ 3일차, 날짜별 핵심 절차 한눈에 보기",
        imgBg: "bg-gradient-to-b from-[#0A1128] to-[#1C3166]"
    },
    {
        id: "leaving",
        title: "[장례 후 해야할 일 ]",
        description: "장례 후 한 달 내에 반드시 해야 할 행정 처리 3가지",
        imgBg: "bg-gradient-to-b from-[#0A1128] to-[#1C3166]"
    }
];

const GuideSection = () => {
    const navigate = useNavigate();

    // 카드 클릭 시 상세 페이지로 이동하는 함수
    const handleGuideClick = (guideId) => {
        // 예: /guide/consult 경로로 이동
        navigate(`/guide/${guideId}`); 
    };

    return (
        <div className="mt-[12px]">
            {/* 카드 그리드 영역 (2열 배치) */}
            <div className="grid grid-cols-2 gap-[15px] px-[5px]">
                {guideList.map((guide) => (
                    <div 
                        key={guide.id}
                        onClick={() => handleGuideClick(guide.id)}
                        className="bg-white border-[1px] border-[#E3E6F0] rounded-[12px] overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-shadow flex flex-col"
                    >
                        {/* 1. 상단 이미지 영역 (현재는 임시 배경색으로 처리) */}
                        <div className={`w-full h-[80px] ${guide.imgBg} relative flex items-center justify-center`}>
                            {/* 실제 이미지가 있다면 아래 태그를 사용하세요 */}
                            {/* <img src={guide.img} alt={guide.title} className="w-full h-full object-cover" /> */}
                            
                            {/* 임시 빛 효과 (디자인 시안 느낌 살리기) */}
                            <div className="absolute w-[40px] h-[40px] bg-yellow-200/20 rounded-full blur-xl"></div>
                        </div>

                        {/* 2. 하단 텍스트 영역 */}
                        <div className="h-[78px] px-[7px] py-[5px] flex flex-col flex-1">
                            <h3 className="text-[12px] font-semibold text-black mb-[3px]">
                                {guide.title}
                            </h3>
                            <p className="text-[11px] text-black leading-[-0.22px] tracking-tight break-keep">
                                {guide.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GuideSection;