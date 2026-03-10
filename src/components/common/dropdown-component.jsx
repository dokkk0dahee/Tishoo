import { useRef, useEffect } from "react";
import DropdownIcon from "../../assets/Icons/DropdownIcon";

const Dropdown = ({ 
    value, 
    options, 
    placeholder, 
    onSelect, 
    disabled, 
    isOpen, 
    onToggle 
}) => {
    const dropdownRef = useRef(null);

    // 바깥 영역 클릭 감지
    useEffect(() => {
        const handleClickOutside = (event) => {
            // 드롭다운이 열려있고 && 클릭한 곳이 드롭다운 영역(dropdownRef) 바깥이라면?
            if (isOpen && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                onToggle(); // 창을 닫아줍니다!
            }
        };

        // 화면 전체에 마우스 클릭 감지기를 붙입니다.
        document.addEventListener("mousedown", handleClickOutside);
        
        // 컴포넌트가 사라질 때 감지기를 깔끔하게 떼어냅니다. (메모리 누수 방지)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, onToggle]);

    return (
        <div className="relative flex-1" ref={dropdownRef}>
            {/* 겉에 보이는 버튼 영역 */}
            <div 
                onClick={() => !disabled && onToggle()}
                className={`flex items-center justify-between w-full h-[42px] px-[14px] border-[1px] border-[#E3E6F0] rounded-[8px] text-[14px] font-semibold transition-colors ${
                    disabled 
                        ? "bg-[#F5F5F5] text-[#8E8E93] opacity-50 cursor-not-allowed" // 비활성화 상태
                        : value 
                            ? "bg-[#F5F5F5] text-[#08173E] cursor-pointer" // 선택된 상태
                            : "bg-[#F5F5F5] text-[#8E8E93] cursor-pointer" // 선택 안 된 기본 상태
                }`}
            >
                <span>{value || placeholder}</span>
                <div className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                    <DropdownIcon />
                </div>
            </div>

            {/* 펼쳐지는 리스트 영역 */}
            {isOpen && !disabled && (
                <ul className="absolute top-[48px] left-0 w-full bg-white border-[1px] border-[#E3E6F0] rounded-[8px] shadow-lg max-h-[300px] overflow-y-auto z-50">
                    {options.map(option => (
                        <li 
                            key={option} 
                            onClick={() => onSelect(option)}
                            className="px-[14px] py-[12px] text-[14px] text-[#08173E] font-medium hover:bg-[#E9EFFE] cursor-pointer transition-colors"
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;