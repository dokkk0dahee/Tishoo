const SearchIcon = ({ className }) => {
    return (
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="20" 
        height="20" 
        viewBox="0 0 20 20" 
        fill="none"
        className={className}
        >
        <g clipPath="url(#clip0_126_1058)">
            <path 
            d="M14.0625 12.375H13.1737L12.8588 12.0712C13.9613 10.7887 14.625 9.12375 14.625 7.3125C14.625 3.27375 11.3512 0 7.3125 0C3.27375 0 0 3.27375 0 7.3125C0 11.3512 3.27375 14.625 7.3125 14.625C9.12375 14.625 10.7887 13.9613 12.0712 12.8588L12.375 13.1737V14.0625L18 19.6763L19.6763 18L14.0625 12.375ZM7.3125 12.375C4.51125 12.375 2.25 10.1138 2.25 7.3125C2.25 4.51125 4.51125 2.25 7.3125 2.25C10.1138 2.25 12.375 4.51125 12.375 7.3125C12.375 10.1138 10.1138 12.375 7.3125 12.375Z"
            fill="currentColor" 
            />
        </g>
        <defs>
            <clipPath id="clip0_126_1058">
            <rect width="20" height="20" fill="white"/>
            </clipPath>
        </defs>
        </svg>
    );
};

export default SearchIcon;