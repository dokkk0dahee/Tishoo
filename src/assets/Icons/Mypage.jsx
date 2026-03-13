const MypageIcon = ({ className }) => {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="27" 
            height="27" 
            viewBox="0 0 27 27" 
            fill="none"
            className={className}
        >
            <path 
                d="M13.5 13.5C15.9862 13.5 18 11.4862 18 9C18 6.51375 15.9862 4.5 13.5 4.5C11.0138 4.5 9 6.51375 9 9C9 11.4862 11.0138 13.5 13.5 13.5ZM13.5 15.75C10.4963 15.75 4.5 17.2575 4.5 20.25V22.5H22.5V20.25C22.5 17.2575 16.5037 15.75 13.5 15.75Z"
                fill="currentColor" 
            />
        </svg>
    );
};

export default MypageIcon;