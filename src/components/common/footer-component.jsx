import { Link } from "react-router-dom";

const Footer = () => {
    // 🌟 하단 링크들을 배열로 관리하면 코드가 훨씬 깔끔해집니다.
    const footerLinks = [
        { name: "서비스 이용약관", path: "#" },
        { name: "개인정보 처리방침", path: "#" },
        { name: "위치정보 이용약관", path: "#" },
        { name: "리뷰 운영 정책", path: "#" },
        { name: "인재 채용", path: "#" },
        { name: "입점 문의", path: "#" },
        { name: "광고/제휴 문의", path: "#" }
    ];

    return (
        <footer className="w-screen mx-[-16px] bg-[#F4F4F4] mt-[40px] px-[20px] pb-[40px] font-regular text-[#666666] text-[11px] leading-[14px]">
            
            {/* 1. 회사명 */}
            <div className="font-medium text-[12px] mb-[8px] mt-[40px] text-[#666666]">
                (주) 온별
            </div>

            {/* 2. 사업자 정보 */}
            <div className="flex flex-col mb-[20px] gap-[8px] text-[#666666]">
                <p>대표 : 김부식</p>
                <p>주소 :서울특별시 서초구 000</p>
                <p>사업자등록번호: 000-00-00000</p>
                <p>개인정보담당 : abcdefj@abcde.co.kr</p>
                <p>대표번호 : 123-2345-567</p>
            </div>

            {/* 3. 면책 조항 (안내문) */}
            <p className="text-[10px] text-[#8E8E93] leading-[14px] mb-[16px] break-keep">
                (주)온별은 장례 서비스 예약 및 중개 시스템을 운영하는 중개자이며, 장례 용품 및 서비스 제공의 직접적인 당사자가 아닙니다. 서비스의 품질, 예약 이행, 관련 사고 등에 대한 법적 책임은 해당 서비스를 제공하는 파트너사에게 있습니다.
            </p>

            {/* 4. 하단 약관 및 정책 링크 */}
            <div className="flex flex-wrap items-center gap-y-[6px] text-[10px] font-medium text-[#666666]">
                {footerLinks.map((link, index) => (
                    <div key={index} className="flex items-center">
                        <Link to={link.path} className="hover:underline">
                            {link.name}
                        </Link>
                        {/* 마지막 아이템이 아닐 때만 구분선(|)을 보여줍니다 */}
                        {index < footerLinks.length - 1 && (
                            <span className="text-[#CCCCCC] mx-[6px] font-light text-[11px]">|</span>
                        )}
                    </div>
                ))}
            </div>
        </footer>
    );
};

export default Footer;