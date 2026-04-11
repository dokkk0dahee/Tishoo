import bannerImg1 from "../../../assets/images/banner-1.png";
import bannerImg2 from "../../../assets/images/banner-2.png";
import bannerImg3 from "../../../assets/images/banner-3.png";
import bannerImg4 from "../../../assets/images/banner-4.png"; 
import { Link } from "react-router-dom";

const bannerData = [
    {
        id: 1,
        title: "故 홍길동 님을 모시는 중입니다.",
        actionText: "",
        linkTo: "",
        imageUrl: bannerImg1, 
    },
    {
        id: 2,
        title: "마음을 담은 부고장 \n정성껏 준비해 드립니다.",
        actionText: "부고장 만들러 가기 >",
        linkTo: "",  // TODO: 추후 부고장 작성 페이지로 연결 예정
        imageUrl: bannerImg2  , 
    },
    {
        id: 3,
        title: "홍길동님과 함께했던 \n봄날의 사진을 확인해 보세요.",
        actionText: "",
        linkTo: "",  
        imageUrl: bannerImg3, 
    },
    {
        id: 4,
        title: "조문객분들께 전할 \n답례 인사말을 확인해 보세요.",
        actionText: "인사말 보러 가기 >",
        linkTo: "", //TODO: 추후 답례 인사말 페이지로 연결 예정
        imageUrl: bannerImg4,
    }
];

const Banner = () => {
    return (
        <div className="flex-col w-full overflow-x-hidden">
            <div className="w-full bg-white">
                <div className="flex overflow-x-auto snap-x snap-mandatory gap-[12px] [&::-webkit-scrollbar]:hidden">
                    {bannerData.map((banner, index) => (
                        <div 
                            key={banner.id} 
                            // shrink-0: 카드가 찌그러지지 않게 방지, snap-center: 화면 가운데에 자석처럼 붙음
                            className={`shrink-0 w-[95%] h-[120px] rounded-[8px] p-[16px] flex flex-col justify-center relative snap-center shadow-md`}
                        style={{
                                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${banner.imageUrl})`,
                                backgroundSize: '100% 100%',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat'
                            }}>
                            {/* 배너 텍스트 */}
                            <h2 className="text-white text-[17px] font-medium leading-[24px] break-keep whitespace-pre-line z-10">
                                {banner.title}
                            </h2>
                            
                            {/* 액션 텍스트 */}
                            {banner.actionText && (
                                <Link
                                    to={banner.linkTo}
                                    className="text-white text-[12px] font-medium mt-[5px] underline underline-offset-2 cursor-pointer z-10 w-fit"
                                    > {banner.actionText}
                                </Link>
                            )}

                            {/* 우측 하단 페이지네이션 (예: 1/4 전체 >) */}
                            <div className="absolute bottom-[8px] right-[8px] bg-white/20 text-white text-[11px] font-regular px-[8px] py-[2px] rounded-[20px] flex items-center gap-[2px]">
                                {index + 1} / {bannerData.length}
                            </div>
                        </div>
                    ))}
                </div>
            </div> 
        </div>
    );
};

export default Banner;