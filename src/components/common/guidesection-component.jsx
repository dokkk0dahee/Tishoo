import { useNavigate } from "react-router-dom";

// 🌟 가이드 데이터 배열 (나중에 내용이나 이미지를 쉽게 바꿀 수 있습니다)
const guideList = [
    {
        id: "consult", // 이동할 페이지 주소에 쓸 고유 ID
        title: "[사전 상담]",
        description: "장례 절차와 예상 비용을 미리 확인하여 슬픔에만 집중할 수 있도록 돕습니다.",
        // 실제 프로젝트에서는 이미지 경로를 넣으시면 됩니다. 예: img: "/assets/guide1.png"
        imgBg: "bg-gradient-to-b from-[#0A1128] to-[#1C3166]" 
    },
    {
        id: "passing",
        title: "[임종]",
        description: "장례 절차와 예상 비용을 미리 확인하여 슬픔에만 집중할 수 있도록 돕습니다.",
        imgBg: "bg-gradient-to-b from-[#0A1128] to-[#1A264A]"
    },
    {
        id: "during",
        title: "[장례 중]",
        description: "장례 절차와 예상 비용을 미리 확인하여 슬픔에만 집중할 수 있도록 돕습니다.",
        imgBg: "bg-gradient-to-b from-[#0A1128] to-[#1C3166]"
    },
    {
        id: "leaving",
        title: "[발인]",
        description: "장례 절차와 예상 비용을 미리 확인하여 슬픔에만 집중할 수 있도록 돕습니다.",
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
            <div className="grid grid-cols-2 gap-[14px]">
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