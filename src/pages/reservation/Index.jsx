const Reservation = () => {
    return (
        <div className="p-5">
        <h1 className="text-2xl font-bold mb-6">정보 검색</h1>
        <div className="relative">
            <input 
            type="text" 
            placeholder="무엇을 도와드릴까요?"
            className="w-full p-4 bg-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
            <span className="absolute right-4 top-4 text-gray-400">🔍</span>
        </div>
        
        <div className="mt-8">
            <h3 className="text-sm font-semibold text-gray-400 mb-3">인기 검색어</h3>
            <div className="flex flex-wrap gap-2">
            {["휴지 처리법", "분리수거", "에티켓"].map(tag => (
                <span key={tag} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm">
                #{tag}
                </span>
            ))}
            </div>
        </div>
        </div>
    );
};

export default Reservation;