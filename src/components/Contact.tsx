import React, { useState } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-48 px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-8xl font-bold mb-24 text-center">문의하기</h2>
        <div className="max-w-5xl mx-auto">
          {submitted ? (
            <div className="text-4xl text-center text-green-600 font-bold py-24">문의가 정상적으로 접수되었습니다!</div>
          ) : (
            <form className="space-y-16" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-4xl font-medium text-gray-700 mb-6 text-center">
                  이메일
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-12 py-8 text-3xl border-4 rounded-2xl focus:ring-8 focus:ring-blue-500 focus:border-blue-500 text-center mx-auto"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-4xl font-medium text-gray-700 mb-6 text-center">
                  메시지
                </label>
                <textarea
                  id="message"
                  rows={10}
                  className="w-full px-12 py-8 text-3xl border-4 rounded-2xl focus:ring-8 focus:ring-blue-500 focus:border-blue-500 text-center mx-auto"
                  placeholder="문의사항을 입력해주세요"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-16 py-8 text-4xl rounded-2xl hover:bg-blue-700 transition-colors"
              >
                보내기
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact; 