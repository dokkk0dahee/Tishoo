const Mypage = () => {
    return (
        <div className="p-5 flex flex-col items-center">
        <div className="w-24 h-24 bg-gray-200 rounded-full mt-10 mb-4 flex items-center justify-center text-3xl">
            🧻
        </div>
        <h2 className="text-xl font-bold">티슈 마스터</h2>
        <p className="text-gray-500 text-sm mb-10">master@tishoo.com</p>
        
        <div className="w-full space-y-3">
            {["내 활동 내역", "저장한 정보", "고객센터", "설정"].map(menu => (
            <button key={menu} className="w-full text-left p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors font-medium">
                {menu}
            </button>
            ))}
        </div>
        </div>
    );
};

export default Mypage;