const Compare = () => {
    return (
        <div className="p-5">
        <h1 className="text-2xl font-bold mb-6">비교</h1>
        <div className="space-y-4">
            {[1, 2].map((i) => (
            <div key={i} className="p-4 bg-white border border-gray-100 rounded-2xl shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-primary/20 rounded-full" />
                <span className="font-semibold text-sm">익명의 티슈</span>
                </div>
                <p className="text-gray-700">이 서비스 진짜 편리하네요! 다들 어떻게 생각하시나요? {i}</p>
                <div className="mt-3 flex gap-4 text-xs text-gray-400">
                <span>👍 12</span>
                <span>💬 5</span>
                </div>
            </div>
            ))}
        </div>
        </div>
    );
};

export default Compare;