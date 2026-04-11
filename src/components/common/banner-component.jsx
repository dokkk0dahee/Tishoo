const bannerData = [
    {
        id: 1,
        title: "故 홍길동 님을 모시는 중입니다.",
        actionText: "",
        bgClass: "bg-[#0A1128]", 
    },
    {
        id: 2,
        title: "마음을 담은 부고장 \n정성껏 준비해 드립니다.",
        actionText: "부고장 만들러 가기 >",
        bgClass: "bg-[#2A1E17]", 
    },
    {
        id: 3,
        title: "홍길동님과 함께했던 \n봄날의 사진을 확인해 보세요.",
        actionText: "",
        bgClass: "bg-[#1C2321]", 
    },
    {
        id: 4,
        title: "조문객분들께 전할 \n답례 인사말을 확인해 보세요.",
        actionText: "인사말 보러 가기 >",
        bgClass: "bg-[#111111]",
    }
];

const Banner = () => {
    return (
        <div className="flex-col w-screen bg-[#F8F9FA] overflow-x-hidden">
            <div className="w-full bg-white">
                <div className="flex overflow-x-auto snap-x snap-mandatory gap-[12px] px-[16px] pb-[10px] [&::-webkit-scrollbar]:hidden">
                    {bannerData.map((banner, index) => (
                        <div 
                            key={banner.id} 
                            // shrink-0: 카드가 찌그러지지 않게 방지, snap-center: 화면 가운데에 자석처럼 붙음
                            className={`shrink-0 w-[90%] h-[120px] rounded-[8px] p-[16px] flex flex-col justify-center relative snap-center ${banner.bgClass} shadow-md`}
                        >
                            {/* 배너 텍스트 */}
                            <h2 className="text-white text-[17px] font-medium leading-[24px] break-keep whitespace-pre-line">
                                {banner.title}
                            </h2>
                            
                            {/* 부고장/인사말 액션 텍스트 */}
                            {banner.actionText && (
                                <p className="text-white text-[12px] font-medium mt-[5px] underline underline-offset-2 cursor-pointer">
                                    {banner.actionText}
                                </p>
                            )}

                            {/* 우측 하단 페이지네이션 (예: 1/4 전체 >) */}
                            <div className="absolute bottom-[8px] right-[8px] bg-white/40 text-white text-[11px] font-regular px-[6px] py-[2px] rounded-[20px] flex items-center gap-[2px]">
                                {index + 1}/{bannerData.length} 전체 
                                <span className="text-[11px] ml-[2px] opacity-80">&#10095;</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div> 
        </div>
    );
};

export default Banner;