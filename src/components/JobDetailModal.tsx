import React from 'react';
import { useApp } from '../context/AppContext';

export const JobDetailModal: React.FC = () => {
  const {
    selectedJob,
    setSelectedJob,
    language,
    bookmarks,
    toggleBookmark,
    setSelectedCompanyId,
    setCurrentView
  } = useApp();

  if (!selectedJob) return null;

  const isKo = language === 'ko';
  const isBookmarked = bookmarks.includes(selectedJob.id);

  const handleStartDiagnosis = () => {
    setSelectedCompanyId(
      selectedJob.company.includes('삼성')
        ? 'samsung'
        : selectedJob.company.includes('SK')
        ? 'sk-hynix'
        : selectedJob.company.includes('현대')
        ? 'hyundai'
        : 'kepco'
    );
    setSelectedJob(null);
    setCurrentView('spec_diagnosis');
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4"
      onClick={() => setSelectedJob(null)}
    >
      <div
        className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto animate-in zoom-in-95 border border-[#e2e8f0]"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setSelectedJob(null)}
          className="absolute top-5 right-5 text-[#757682] hover:text-[#191c1e] p-1.5 rounded-full hover:bg-[#f1f5f9] transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[22px]">close</span>
        </button>

        {/* Company Header */}
        <div className="flex items-start gap-4 mb-5 pr-8">
          <div className="w-14 h-14 rounded-2xl border border-[#c5c5d3]/60 bg-[#f8fafc] p-2 flex items-center justify-center shrink-0">
            {selectedJob.logo ? (
              <img
                src={selectedJob.logo}
                alt={selectedJob.company}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            ) : (
              <span className="font-hanken font-bold text-lg text-[#00236f]">
                {selectedJob.initials}
              </span>
            )}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-[#0051d5]">
                {isKo ? selectedJob.company : selectedJob.companyEn}
              </span>
              <span className="text-[11px] bg-[#e6e8ea] text-[#444651] px-2 py-0.5 rounded font-medium">
                {isKo ? selectedJob.corpType === 'corporation' ? '대기업' : '공기업' : selectedJob.corpType}
              </span>
            </div>
            <h3 className="font-hanken font-bold text-lg sm:text-xl text-[#191c1e] mt-1 leading-snug">
              {isKo ? selectedJob.title : selectedJob.titleEn}
            </h3>
          </div>
        </div>

        {/* Schedule & D-Day Banner */}
        <div className="bg-[#f2f4f6] rounded-2xl p-4 mb-6 flex flex-wrap items-center justify-between gap-3 border border-[#c5c5d3]/40">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#00236f] text-[24px]">
              event_available
            </span>
            <div>
              <p className="text-[11px] font-semibold text-[#757682]">
                {isKo ? '접수 기간' : 'Application Window'}
              </p>
              <p className="text-xs font-bold text-[#191c1e]">
                {selectedJob.startDate} ~ {selectedJob.endDate}
              </p>
            </div>
          </div>
          <div
            className={`px-3 py-1 rounded-full text-xs font-extrabold uppercase shadow-2xs ${
              selectedJob.dDay === 0
                ? 'bg-[#ba1a1a] text-white'
                : selectedJob.dDay <= 2
                ? 'bg-[#ff8f4f] text-[#341100]'
                : 'bg-[#0051d5] text-white'
            }`}
          >
            {selectedJob.dDay === 0 ? 'D-Day' : `D-${selectedJob.dDay}`}
          </div>
        </div>

        {/* Description & Requirements */}
        <div className="space-y-4 mb-6 text-xs sm:text-sm text-[#444651]">
          <div>
            <h4 className="font-bold text-[#191c1e] mb-1.5 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[#0051d5] text-[18px]">description</span>
              {isKo ? '직무 및 전형 안내' : 'Role & Recruitment Summary'}
            </h4>
            <p className="leading-relaxed bg-[#f8fafc] p-3 rounded-xl border border-[#e2e8f0]">
              {isKo ? selectedJob.description : selectedJob.descriptionEn}
            </p>
          </div>

          <div>
            <h4 className="font-bold text-[#191c1e] mb-1.5 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[#0051d5] text-[18px]">fact_check</span>
              {isKo ? '지원 자격 및 우대 사항' : 'Requirements & Preferences'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div className="bg-[#f8fafc] p-3 rounded-xl border border-[#e2e8f0]">
                <span className="text-[11px] font-bold text-[#757682] block mb-0.5">
                  {isKo ? '어학 기준' : 'Language Cutoff'}
                </span>
                <span className="text-xs font-semibold text-[#191c1e]">
                  {selectedJob.requirements.minLanguage}
                </span>
              </div>
              <div className="bg-[#f8fafc] p-3 rounded-xl border border-[#e2e8f0]">
                <span className="text-[11px] font-bold text-[#757682] block mb-0.5">
                  {isKo ? '근무지' : 'Location'}
                </span>
                <span className="text-xs font-semibold text-[#191c1e]">
                  {isKo ? selectedJob.location : selectedJob.locationEn}
                </span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-[#191c1e] mb-1.5 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[#0051d5] text-[18px]">verified</span>
              {isKo ? '우대 자격증' : 'Preferred Certifications'}
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {selectedJob.requirements.preferredCerts.map((c, i) => (
                <span
                  key={i}
                  className="bg-blue-50 text-[#00236f] border border-[#b4c5ff] px-2.5 py-1 rounded-lg text-xs font-medium"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="pt-4 border-t border-[#e2e8f0] flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleStartDiagnosis}
            className="flex-1 bg-[#00236f] text-white hover:bg-[#0051d5] py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">analytics</span>
            <span>{isKo ? '이 공고로 스펙 진단하기' : 'Diagnose Spec For This Job'}</span>
          </button>

          <div className="flex gap-2">
            <button
              onClick={() => toggleBookmark(selectedJob.id)}
              className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-center ${
                isBookmarked
                  ? 'bg-blue-50 border-[#0051d5] text-[#0051d5]'
                  : 'bg-[#f2f4f6] border-[#c5c5d3] text-[#444651] hover:text-[#00236f]'
              }`}
              title={isKo ? '북마크 토글' : 'Toggle Bookmark'}
            >
              <span
                className={`material-symbols-outlined text-[20px] ${
                  isBookmarked ? 'fill' : ''
                }`}
              >
                bookmark
              </span>
            </button>

            {selectedJob.link && (
              <a
                href={selectedJob.link}
                target="_blank"
                rel="noreferrer"
                className="bg-[#f2f4f6] hover:bg-[#e6e8ea] border border-[#c5c5d3] p-3 rounded-xl text-[#00236f] font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>{isKo ? '채용공고 원문' : 'Official Page'}</span>
                <span className="material-symbols-outlined text-[16px]">open_in_new</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
