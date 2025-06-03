import React from 'react';

const Work = () => {
  return (
    <section className="py-32 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-10"></div>
      <div className="container mx-auto relative">
        {/* 주요 기능 타이틀 */}
        <div className="w-full flex justify-start mb-12" style={{ marginTop: '300px' }}>
          <h2 className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text tracking-tight">주요 기능</h2>
        </div>
        <div className="relative min-h-[1200px]">
          {/* 좌측 하단 자주색 박스 */}
          <div className="absolute bottom-0 left-0 w-[700px] group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-slate-900 rounded-3xl p-24 flex flex-col items-center text-center">
              <h3 className="text-5xl font-bold mb-12 text-white group-hover:text-purple-300 transition-colors">대화 시작</h3>
              <div className="space-y-6">
                <p className="text-3xl text-gray-300 leading-relaxed">
                  AI와 함께하는 자연스러운 대화를 시작하세요.
                </p>
                <p className="text-3xl text-gray-300 leading-relaxed">
                  당신의 생각과 감정을 자유롭게 표현할 수 있습니다.
                </p>
              </div>
            </div>
          </div>
          {/* 우측 상단 파란색 박스 */}
          <div className="absolute top-0 right-0 w-[700px] group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-blue-800 rounded-3xl blur opacity-90 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-slate-900/90 rounded-3xl p-24 flex flex-col items-center text-center">
              <h3 className="text-5xl font-bold mb-12 text-white group-hover:text-blue-200 transition-colors">기록 저장</h3>
              <div className="space-y-6">
                <p className="text-3xl text-gray-300 leading-relaxed">
                  소중한 대화와 통찰을 안전하게 저장하세요.
                </p>
                <p className="text-3xl text-gray-300 leading-relaxed">
                  언제든지 과거의 기록을 되돌아볼 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work; 