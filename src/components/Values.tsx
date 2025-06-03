import React from 'react';

const Values = () => {
  return (
    <section className="py-32 px-4 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-10"></div>
      <div className="container mx-auto">
        <h2 className="text-6xl font-bold mb-24 text-center text-white tracking-tight">핵심 가치</h2>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 mb-16">
            <div className="group relative bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-3xl p-12 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 flex flex-col items-center text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl transform transition-transform duration-500 group-hover:scale-105"></div>
              <div className="relative z-10">
                <h3 className="text-4xl font-bold mb-8 text-white group-hover:text-purple-300 transition-colors">자기 성찰</h3>
                <p className="text-2xl text-gray-300 leading-relaxed">
                  AI와의 대화를 통해 더 깊은 자기 성찰의 기회를 제공합니다.
                </p>
              </div>
            </div>
            <div className="group relative bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-3xl p-12 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 flex flex-col items-center text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-3xl transform transition-transform duration-500 group-hover:scale-105"></div>
              <div className="relative z-10">
                <h3 className="text-4xl font-bold mb-8 text-white group-hover:text-blue-300 transition-colors">개인화</h3>
                <p className="text-2xl text-gray-300 leading-relaxed">
                  각 개인의 특성과 필요에 맞춘 맞춤형 경험을 제공합니다.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="group relative bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-3xl p-12 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20 flex flex-col items-center text-center max-w-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-3xl transform transition-transform duration-500 group-hover:scale-105"></div>
              <div className="relative z-10">
                <h3 className="text-4xl font-bold mb-8 text-white group-hover:text-green-300 transition-colors">연속성</h3>
                <p className="text-2xl text-gray-300 leading-relaxed">
                  지속적인 기록과 성장을 지원하는 안정적인 플랫폼을 제공합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values; 