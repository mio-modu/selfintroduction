import React from 'react';

const Story = () => {
  return (
    <section className="py-32 px-4 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-10"></div>
      <div className="container mx-auto">
        <h2 className="text-6xl font-bold mb-24 text-center text-white tracking-tight">우리의 이야기</h2>
        <div className="max-w-7xl mx-auto space-y-8">
          <p className="text-3xl md:text-4xl text-gray-300 leading-relaxed text-center">
            Selflogue는 AI와 함께하는 새로운 형태의 자기 성찰 플랫폼입니다.
          </p>
          <p className="text-3xl md:text-4xl text-gray-300 leading-relaxed text-center">
            일상의 순간들을 기록하고, AI와의 대화를 통해 더 깊은 통찰을 얻을 수 있습니다.
          </p>
          <p className="text-3xl md:text-4xl text-gray-300 leading-relaxed text-center">
            당신의 이야기가 모여 하나의 특별한 기록이 됩니다. 지금 바로 시작해보세요.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Story; 