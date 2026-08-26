import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CorpType, JobRoleCategory } from '../types';

export const PostJobModal: React.FC = () => {
  const { isPostJobModalOpen, setIsPostJobModalOpen, addJobPosting, language } = useApp();
  const isKo = language === 'ko';

  const [company, setCompany] = useState('');
  const [title, setTitle] = useState('');
  const [corpType, setCorpType] = useState<CorpType>('corporation');
  const [category, setCategory] = useState<JobRoleCategory>('it');
  const [location, setLocation] = useState('서울 / 판교');
  const [typeTag, setTypeTag] = useState('신입');
  const [startDate, setStartDate] = useState('2023-11-15');
  const [endDate, setEndDate] = useState('2023-11-28');
  const [minGpa, setMinGpa] = useState('3.0');
  const [minLanguage, setMinLanguage] = useState('OPIc IM2 이상');
  const [description, setDescription] = useState('');

  if (!isPostJobModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!company.trim() || !title.trim()) return;

    const initials = company.trim().substring(0, 2).toUpperCase();

    const categoryLabels: Record<string, { ko: string; en: string }> = {
      it: { ko: 'IT / 소프트웨어', en: 'IT / Software' },
      engineering: { ko: '엔지니어링', en: 'Engineering' },
      finance: { ko: '재무 / 회계', en: 'Finance' },
      marketing: { ko: '마케팅', en: 'Marketing' },
      hr: { ko: '인사 / HR', en: 'HR' }
    };

    // Calculate approximate dDay
    const end = new Date(endDate);
    const now = new Date('2023-11-11');
    const diffDays = Math.max(0, Math.ceil((end.getTime() - now.getTime()) / (1000 * 3600 * 24)));

    addJobPosting({
      company,
      companyEn: company,
      initials,
      title,
      titleEn: title,
      corpType,
      category,
      categoryLabel: categoryLabels[category]?.ko || '기타',
      categoryLabelEn: categoryLabels[category]?.en || 'Other',
      typeTag,
      typeTagEn: typeTag,
      location,
      locationEn: location,
      startDate,
      endDate,
      dDay: diffDays,
      status: diffDays <= 2 ? 'closing' : 'active',
      description: description || `${company} 공개채용 모집 공고입니다.`,
      descriptionEn: description || `Recruitment announcement for ${company}.`,
      requirements: {
        minGpa: parseFloat(minGpa) || 3.0,
        minLanguage: minLanguage,
        requiredCerts: ['기본 전공 요건'],
        preferredCerts: ['관련 기사 자격증', '실무 프로젝트 경험']
      }
    });

    setIsPostJobModalOpen(false);
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4"
      onClick={() => setIsPostJobModalOpen(false)}
    >
      <div
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto animate-in zoom-in-95 border border-[#e2e8f0]"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={() => setIsPostJobModalOpen(false)}
          className="absolute top-5 right-5 text-[#757682] hover:text-[#191c1e] p-1.5 rounded-full hover:bg-[#f1f5f9] transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[22px]">close</span>
        </button>

        <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-[#f1f5f9]">
          <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
            <span className="material-symbols-outlined text-[#00236f] text-[24px]">
              post_add
            </span>
          </div>
          <div>
            <h3 className="font-hanken font-bold text-lg text-[#00236f]">
              {isKo ? '새 공채 일정 등록' : 'Post New Job'}
            </h3>
            <p className="text-xs text-[#757682]">
              {isKo
                ? '캘린더와 마감 리스트에 새로운 채용 일정을 등록합니다.'
                : 'Publish new recruiting events to calendar and closing lists.'}
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          {/* Company Name */}
          <div>
            <label className="block font-bold text-[#191c1e] mb-1">
              {isKo ? '기업명 *' : 'Company Name *'}
            </label>
            <input
              type="text"
              required
              value={company}
              onChange={e => setCompany(e.target.value)}
              placeholder={isKo ? '예: 카카오, LG에너지솔루션' : 'e.g. Kakao, LG Energy'}
              className="w-full bg-[#f7f9fb] border border-[#c5c5d3] rounded-xl px-3.5 py-2 text-[#191c1e] focus:outline-hidden focus:ring-1 focus:ring-[#0051d5]"
            />
          </div>

          {/* Title */}
          <div>
            <label className="block font-bold text-[#191c1e] mb-1">
              {isKo ? '공고 제목 *' : 'Job Title *'}
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder={isKo ? '예: 2024 클라우드 엔지니어 신입 공채' : 'e.g. 2024 Cloud Engineer Recruitment'}
              className="w-full bg-[#f7f9fb] border border-[#c5c5d3] rounded-xl px-3.5 py-2 text-[#191c1e] focus:outline-hidden focus:ring-1 focus:ring-[#0051d5]"
            />
          </div>

          {/* Corporation & Category */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-bold text-[#191c1e] mb-1">
                {isKo ? '기업 형태' : 'Corp Type'}
              </label>
              <select
                value={corpType}
                onChange={e => setCorpType(e.target.value as CorpType)}
                className="w-full bg-[#f7f9fb] border border-[#c5c5d3] rounded-xl px-3 py-2 text-[#191c1e]"
              >
                <option value="corporation">{isKo ? '대기업' : 'Corporation'}</option>
                <option value="public">{isKo ? '공기업' : 'Public Enterprise'}</option>
              </select>
            </div>
            <div>
              <label className="block font-bold text-[#191c1e] mb-1">
                {isKo ? '직무 분류' : 'Category'}
              </label>
              <select
                value={category}
                onChange={e => setCategory(e.target.value as JobRoleCategory)}
                className="w-full bg-[#f7f9fb] border border-[#c5c5d3] rounded-xl px-3 py-2 text-[#191c1e]"
              >
                <option value="it">{isKo ? 'IT / 소프트웨어' : 'IT / Software'}</option>
                <option value="engineering">{isKo ? '엔지니어링' : 'Engineering'}</option>
                <option value="finance">{isKo ? '재무 / 회계' : 'Finance'}</option>
                <option value="marketing">{isKo ? '마케팅' : 'Marketing'}</option>
                <option value="hr">{isKo ? '인사 / HR' : 'HR'}</option>
              </select>
            </div>
          </div>

          {/* Start & End Dates */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-bold text-[#191c1e] mb-1">
                {isKo ? '시작일' : 'Start Date'}
              </label>
              <input
                type="date"
                value={startDate}
                onChange={e => setStartDate(e.target.value)}
                className="w-full bg-[#f7f9fb] border border-[#c5c5d3] rounded-xl px-3 py-2 text-[#191c1e]"
              />
            </div>
            <div>
              <label className="block font-bold text-[#191c1e] mb-1">
                {isKo ? '마감일' : 'End Date'}
              </label>
              <input
                type="date"
                value={endDate}
                onChange={e => setEndDate(e.target.value)}
                className="w-full bg-[#f7f9fb] border border-[#c5c5d3] rounded-xl px-3 py-2 text-[#191c1e]"
              />
            </div>
          </div>

          {/* Location & Tags */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-bold text-[#191c1e] mb-1">
                {isKo ? '근무 지역' : 'Location'}
              </label>
              <input
                type="text"
                value={location}
                onChange={e => setLocation(e.target.value)}
                className="w-full bg-[#f7f9fb] border border-[#c5c5d3] rounded-xl px-3 py-2 text-[#191c1e]"
              />
            </div>
            <div>
              <label className="block font-bold text-[#191c1e] mb-1">
                {isKo ? '구분 태그' : 'Type Tag'}
              </label>
              <input
                type="text"
                value={typeTag}
                onChange={e => setTypeTag(e.target.value)}
                placeholder={isKo ? '예: 신입 / 인턴' : 'e.g. Entry'}
                className="w-full bg-[#f7f9fb] border border-[#c5c5d3] rounded-xl px-3 py-2 text-[#191c1e]"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block font-bold text-[#191c1e] mb-1">
              {isKo ? '상세 설명 및 우대 요건' : 'Description'}
            </label>
            <textarea
              rows={3}
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder={isKo ? '채용 전형 절차 및 핵심 요구 역량을 입력하세요.' : 'Enter details...'}
              className="w-full bg-[#f7f9fb] border border-[#c5c5d3] rounded-xl p-3 text-[#191c1e] focus:outline-hidden focus:ring-1 focus:ring-[#0051d5]"
            />
          </div>

          <div className="pt-3 border-t border-[#f1f5f9] flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setIsPostJobModalOpen(false)}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-[#757682] hover:bg-[#f2f4f6]"
            >
              {isKo ? '취소' : 'Cancel'}
            </button>
            <button
              type="submit"
              className="bg-[#00236f] text-white hover:bg-[#0051d5] px-5 py-2 rounded-xl text-xs font-bold shadow-md hover:shadow-lg transition-all"
            >
              {isKo ? '일정 등록하기' : 'Register Posting'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
