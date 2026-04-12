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
        // 시안과 유사한 연회색 배경(#F4F4F4)과 패딩 적용
        <footer className="w-screen mx-[-16px] bg-[#F4F4F4] px-[20px] py-[32px] text-[#767676] text-[13px] leading-[22px]">
            
            {/* 1. 회사명 */}
            <div className="font-bold text-[15px] mb-[12px] text-[#555555]">
                (주) 온별
            </div>

            {/* 2. 사업자 정보 */}
            <div className="flex flex-col mb-[20px]">
                <p>대표 : 김부식</p>
                <p>주소 : 경기도 성남시 분당구 대왕비판교로 5420</p>
                <p>사업자등록번호: 987-67-89101</p>
                <p>개인정보담당 : privacy@djlsajfodvmsl.co.kr</p>
                <p>대표번호 : 123-2345-567</p>
            </div>

            {/* 3. 면책 조항 (안내문) */}
            <p className="text-[12px] text-[#999999] leading-[18px] mb-[24px] break-keep">
                (주)온별은 장례 서비스 예약 및 중개 시스템을 운영하는 중개자이며, 장례 용품 및 서비스 제공의 직접적인 당사자가 아닙니다. 서비스의 품질, 예약 이행, 관련 사고 등에 대한 법적 책임은 해당 서비스를 제공하는 파트너사에게 있습니다.
            </p>

            {/* 4. 하단 약관 및 정책 링크 */}
            <div className="flex flex-wrap items-center gap-y-[6px] text-[13px] font-medium text-[#555555]">
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
            
            {/* 하단 네비게이션 바에 가려지지 않도록 여백 추가 (필요 시 조절) */}
            <div className="h-[40px]"></div>
        </footer>
    );
};

export default Footer;