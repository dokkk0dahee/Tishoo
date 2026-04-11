const bannerData = [
    {
        id: 1,
        title: "故 홍길동 님을 모시는 중입니다.",
        subtitle: "",
        actionText: "",
        bgClass: "bg-[#0A1128]", // 임시 다크 네이비 배경 (나중에 이미지 교체 가능)
    },
    {
        id: 2,
        title: "마음을 담은 부고장,",
        subtitle: "정성껏 준비해 드립니다.",
        actionText: "부고장 만들러 가기 >",
        bgClass: "bg-[#2A1E17]", // 임시 브라운 배경
    },
    {
        id: 3,
        title: "홍길동님과 함께했던",
        subtitle: "봄날의 사진을 확인해 보세요.",
        actionText: "",
        bgClass: "bg-[#1C2321]", // 임시 다크 그린 배경
    },
    {
        id: 4,
        title: "조문객분들께 전할",
        subtitle: "답례 인사말을 확인해 보세요.",
        actionText: "인사말 보러 가기 >",
        bgClass: "bg-[#111111]", // 임시 블랙 배경
    }
];

const Banner = () => {
    return (
        <div className="flex-col w-screen bg-[#F8F9FA] overflow-x-hidden">
            <div className="w-full pt-[20px] pb-[10px] bg-white">
                <div className="flex overflow-x-auto snap-x snap-mandatory gap-[12px] px-[16px] pb-[10px] [&::-webkit-scrollbar]:hidden">
                    {bannerData.map((banner, index) => (
                        <div 
                            key={banner.id} 
                            // shrink-0: 카드가 찌그러지지 않게 방지, snap-center: 화면 가운데에 자석처럼 붙음
                            className={`shrink-0 w-[85%] h-[160px] rounded-[16px] p-[20px] flex flex-col justify-center relative snap-center ${banner.bgClass} shadow-md`}
                        >
                            {/* 배너 텍스트 */}
                            <h2 className="text-white text-[18px] font-bold leading-[26px] break-keep">
                                {banner.title}
                            </h2>
                            {banner.subtitle && (
                                <p className="text-white text-[18px] font-bold leading-[26px] break-keep">
                                    {banner.subtitle}
                                </p>
                            )}
                            
                            {/* 부고장/인사말 액션 텍스트 */}
                            {banner.actionText && (
                                <p className="text-[#D9D0C7] text-[13px] font-medium mt-[12px] underline underline-offset-2 cursor-pointer">
                                    {banner.actionText}
                                </p>
                            )}

                            {/* 우측 하단 페이지네이션 (예: 1/4 전체 >) */}
                            <div className="absolute bottom-[16px] right-[16px] bg-black/40 text-white/90 text-[11px] font-medium px-[10px] py-[4px] rounded-full flex items-center gap-[2px]">
                                {index + 1}/{bannerData.length} 전체 
                                <span className="text-[10px] ml-[2px] opacity-80">&#10095;</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div> 
        </div>
    );
};

export default Banner;