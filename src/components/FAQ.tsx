import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Selflogue는 어떤 서비스인가요?",
      answer: [
        "Selflogue는 AI와의 대화를 통해 자기 성찰과 성장을 돕는 디지털 일기 서비스입니다.",
        "사용자의 생각과 감정을 기록하고, AI가 이를 분석하여 더 깊은 통찰을 제공합니다."
      ]
    },
    {
      question: "AI는 어떻게 대화를 진행하나요?",
      answer: [
        "AI는 사용자의 입력을 분석하여 맥락을 이해하고, 적절한 질문과 피드백을 제공합니다.",
        "사용자의 감정 상태와 대화 흐름을 고려하여 자연스러운 대화를 이어갑니다."
      ]
    },
    {
      question: "기록된 내용은 안전하게 보관되나요?",
      answer: [
        "네, 모든 대화 내용은 암호화되어 안전하게 저장됩니다.",
        "사용자의 프라이버시를 최우선으로 생각하며, 데이터 보안을 위해 최신 보안 기술을 적용하고 있습니다."
      ]
    },
    {
      question: "어떤 기기에서 사용할 수 있나요?",
      answer: [
        "Selflogue는 웹 기반 서비스로, 인터넷이 연결된 모든 기기에서 사용할 수 있습니다.",
        "모바일, 태블릿, 데스크톱 등 다양한 환경에서 편리하게 이용하실 수 있습니다."
      ]
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-10"></div>
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text tracking-tight">자주하는 질문</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10"
            >
              <button
                className="w-full px-16 py-8 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {faq.question}
                  </h3>
                  <span className={`transform transition-transform duration-500 ${openIndex === index ? 'rotate-180' : ''}`}>
                    <svg className="w-8 h-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index ? 'max-h-[400px] mt-6' : 'max-h-0'
                  }`}
                >
                  <div className="space-y-4">
                    {faq.answer.map((line, i) => (
                      <p key={i} className="text-xl text-gray-300 leading-relaxed">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 