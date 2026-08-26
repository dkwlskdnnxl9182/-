import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export const SupportView: React.FC = () => {
  const { language } = useApp();
  const isKo = language === 'ko';

  const [inquiryText, setInquiryText] = useState('');
  const [inquiryType, setInquiryType] = useState('spec');
  const [submitted, setSubmitted] = useState(false);

  const faqs = [
    {
      qKo: '스펙 진단에서 목표 커트라인 점수는 어떤 기준으로 산출되나요?',
      qEn: 'How are the target cutline benchmarks calculated in Spec Diagnosis?',
      aKo: 'JobStitch는 주요 대기업 및 공기업의 최근 3개년 공채 서류 합격자 데이터 및 인사팀 공식 채용 가이드라인을 기반으로 머신러닝 가중치를 적용하여 컷라인을 산출합니다.',
      aEn: 'JobStitch aggregates 3 years of actual paper screening pass records and official recruitment criteria to build normalized benchmark cutlines.'
    },
    {
      qKo: 'D-Day 알림과 캘린더 등록은 실시간으로 연동되나요?',
      qEn: 'Are D-Day alerts and calendar postings synchronized in real-time?',
      aKo: '네, 채용 일정이 등록되거나 기업 공식 공고 일정(서류 마감, 코딩테스트 등)이 변경되면 캘린더와 마감 임박 목록에 즉시 반영됩니다.',
      aEn: 'Yes, all recruitment deadline updates and custom registrations synchronize immediately across the calendar grid and countdown lists.'
    },
    {
      qKo: '새로운 기업이나 직무가 추가될 예정인가요?',
      qEn: 'Will more companies and specialized tracks be added?',
      aKo: '현재 삼성전자, SK하이닉스, 한국전력공사, 현대자동차 외에도 주요 테크 기업(네이버, 카카오, 라인 등)과 금융 공기업이 지속적으로 추가되고 있습니다.',
      aEn: 'In addition to Samsung, SK Hynix, KEPCO, and Hyundai, top tier tech and financial enterprises are continuously indexed.'
    }
  ];

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryText.trim()) return;
    setSubmitted(true);
    setInquiryText('');
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h2 className="font-hanken font-bold text-3xl sm:text-4xl text-[#00236f] tracking-tight">
          {isKo ? '고객 지원 센터' : 'Support & Help Center'}
        </h2>
        <p className="text-sm sm:text-base text-[#444651] mt-2">
          {isKo
            ? '자주 묻는 질문을 확인하거나 채용 데이터 및 기능 개선에 관한 1:1 문의를 접수하세요.'
            : 'Find answers to common questions or submit inquiries regarding recruitment analytics and portal features.'}
        </p>
      </div>

      {/* FAQs */}
      <div className="bg-white rounded-2xl p-6 ambient-shadow-card border border-[#c5c5d3]/40 space-y-4">
        <h3 className="font-hanken font-bold text-base text-[#191c1e] flex items-center gap-2">
          <span className="material-symbols-outlined text-[#0051d5]">quiz</span>
          {isKo ? '자주 묻는 질문 (FAQ)' : 'Frequently Asked Questions'}
        </h3>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group border border-[#e2e8f0] rounded-xl p-4 bg-[#f8fafc] open:bg-white transition-all cursor-pointer"
            >
              <summary className="font-bold text-xs sm:text-sm text-[#00236f] list-none flex justify-between items-center">
                <span>{isKo ? faq.qKo : faq.qEn}</span>
                <span className="material-symbols-outlined text-[#757682] group-open:rotate-180 transition-transform text-[20px]">
                  expand_more
                </span>
              </summary>
              <p className="text-xs text-[#444651] mt-3 pt-3 border-t border-[#f1f5f9] leading-relaxed">
                {isKo ? faq.aKo : faq.aEn}
              </p>
            </details>
          ))}
        </div>
      </div>

      {/* 1:1 Contact / Inquiry Form */}
      <div className="bg-white rounded-2xl p-6 ambient-shadow-card border border-[#c5c5d3]/40">
        <h3 className="font-hanken font-bold text-base text-[#191c1e] mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-[#0051d5]">support_agent</span>
          {isKo ? '1:1 문의 및 피드백' : 'Contact Support'}
        </h3>

        {submitted ? (
          <div className="p-4 rounded-xl bg-green-50 border border-green-200 text-green-800 text-xs font-semibold flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px]">check_circle</span>
            {isKo
              ? '문의가 접수되었습니다. 담당자가 신속히 검토 후 회신 드리겠습니다.'
              : 'Your inquiry has been submitted. Our team will review and respond shortly.'}
          </div>
        ) : (
          <form onSubmit={handleInquirySubmit} className="space-y-4 text-xs">
            <div>
              <label className="block font-bold text-[#191c1e] mb-1">
                {isKo ? '문의 유형' : 'Inquiry Category'}
              </label>
              <select
                value={inquiryType}
                onChange={e => setInquiryType(e.target.value)}
                className="w-full bg-[#f7f9fb] border border-[#c5c5d3] rounded-xl p-2.5 text-[#191c1e]"
              >
                <option value="spec">{isKo ? '스펙 진단 및 컷라인 문의' : 'Spec Diagnosis & Benchmarks'}</option>
                <option value="calendar">{isKo ? '채용 일정 오류 및 등록 요청' : 'Recruitment Schedule Requests'}</option>
                <option value="account">{isKo ? '계정 및 이용 안내' : 'Account & General Feedback'}</option>
              </select>
            </div>

            <div>
              <label className="block font-bold text-[#191c1e] mb-1">
                {isKo ? '상세 내용' : 'Message'}
              </label>
              <textarea
                rows={4}
                required
                value={inquiryText}
                onChange={e => setInquiryText(e.target.value)}
                placeholder={
                  isKo
                    ? '궁금한 점이나 추가를 원하는 기업 및 채용 정보를 남겨주세요.'
                    : 'Describe your request or suggest new enterprise recruitment data...'
                }
                className="w-full bg-[#f7f9fb] border border-[#c5c5d3] rounded-xl p-3 text-[#191c1e] focus:outline-hidden focus:ring-1 focus:ring-[#0051d5]"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-[#00236f] hover:bg-[#0051d5] text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-md transition-all cursor-pointer flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-[16px]">send</span>
                <span>{isKo ? '문의 보내기' : 'Submit Inquiry'}</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
