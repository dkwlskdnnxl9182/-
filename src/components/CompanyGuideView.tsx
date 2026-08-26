import React from 'react';
import { useApp } from '../context/AppContext';
import { COMPANIES_INTELLIGENCE } from '../data/mockData';

export const CompanyGuideView: React.FC = () => {
  const {
    language,
    selectedCompanyId,
    setSelectedCompanyId,
    selectedCompany,
    setCurrentView,
    updateUserSpec
  } = useApp();

  const isKo = language === 'ko';

  const handleSelectCompany = (id: string) => {
    setSelectedCompanyId(id);
  };

  const handleStartDiagnosisForCompany = () => {
    updateUserSpec({ targetCompanyId: selectedCompany.id });
    setCurrentView('spec_diagnosis');
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Header & Hero */}
      <section>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
          <div>
            <h2 className="font-hanken font-bold text-3xl sm:text-4xl text-[#00236f] tracking-tight">
              {isKo ? '기업 인텔리전스' : 'Company Intelligence'}
            </h2>
            <p className="text-sm sm:text-base text-[#444651] mt-2 max-w-3xl leading-relaxed">
              {isKo
                ? '전략적 포지셔닝을 위한 최고 수준의 기업 인재 영입 프로필, 평균 스펙 및 우대 자격증을 분석하세요.'
                : 'Analyze top-tier enterprise talent acquisition profiles, average specifications, and preferred certifications for strategic positioning.'}
            </p>
          </div>

          <button
            onClick={handleStartDiagnosisForCompany}
            className="self-start sm:self-center bg-[#00236f] text-white hover:bg-[#0051d5] active:scale-[0.98] py-2.5 px-5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer whitespace-nowrap"
          >
            <span className="material-symbols-outlined text-[18px]">analytics</span>
            <span>{isKo ? '이 기업으로 스펙 진단' : 'Diagnose For This Company'}</span>
          </button>
        </div>

        {/* Company Carousel */}
        <div className="flex gap-4 overflow-x-auto pb-3 pt-2 scrollbar-none snap-x">
          {COMPANIES_INTELLIGENCE.map(c => {
            const isSelected = selectedCompanyId === c.id;
            return (
              <div
                key={c.id}
                onClick={() => handleSelectCompany(c.id)}
                className={`snap-start shrink-0 w-64 bg-white rounded-2xl p-4 transition-all cursor-pointer flex items-center gap-3.5 select-none ${
                  isSelected
                    ? 'border-2 border-[#00236f] shadow-md ring-2 ring-[#00236f]/15'
                    : 'border border-[#c5c5d3]/50 shadow-xs hover:border-[#0051d5] hover:shadow-sm'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 border ${
                    isSelected
                      ? 'bg-[#dce1ff] text-[#00236f] border-[#b6c4ff]'
                      : 'bg-[#f2f4f6] text-[#444651] border-[#c5c5d3]/50'
                  }`}
                >
                  {c.initials}
                </div>
                <div className="overflow-hidden">
                  <h3
                    className={`font-hanken font-bold text-sm sm:text-base leading-tight truncate ${
                      isSelected ? 'text-[#00236f]' : 'text-[#191c1e]'
                    }`}
                  >
                    {isKo ? c.name : c.nameEn}
                  </h3>
                  <p className="text-xs text-[#757682] mt-0.5 truncate">
                    {isKo ? c.division : c.divisionEn}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bento Grid for Detailed Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Talent Curation (Spans 4 cols on lg) */}
        <div className="lg:col-span-4 bg-white rounded-2xl p-6 ambient-shadow-card border border-[#c5c5d3]/40 flex flex-col justify-between hover:shadow-md transition-shadow">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                <span className="material-symbols-outlined text-[#0051d5] text-[20px]">
                  {selectedCompany.talentCuration.icon}
                </span>
              </div>
              <h3 className="font-hanken font-bold text-lg text-[#00236f]">
                {isKo ? selectedCompany.talentCuration.title : selectedCompany.talentCuration.titleEn}
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-[#444651] mb-6 leading-relaxed">
              {isKo
                ? selectedCompany.talentCuration.description
                : selectedCompany.talentCuration.descriptionEn}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-2 border-t border-[#f1f5f9]">
            {selectedCompany.talentCuration.tags.map((tag, idx) => (
              <span
                key={idx}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-2xs transition-all ${
                  tag.primary
                    ? 'bg-[#1e3a8a] text-white'
                    : 'bg-[#f2f4f6] text-[#191c1e] hover:bg-[#e6e8ea]'
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">{tag.icon}</span>
                {isKo ? tag.label : tag.labelEn}
              </span>
            ))}
          </div>
        </div>

        {/* Average Pass Spec (Spans 8 cols on lg) */}
        <div className="lg:col-span-8 bg-white rounded-2xl p-6 ambient-shadow-card border border-[#c5c5d3]/40 flex flex-col justify-between hover:shadow-md transition-shadow">
          <div>
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#0051d5] text-[20px]">
                    bar_chart
                  </span>
                </div>
                <div>
                  <h3 className="font-hanken font-bold text-lg text-[#00236f]">
                    {isKo ? '평균 합격 스펙' : 'Average Pass Spec'}
                  </h3>
                  <span className="text-xs text-[#757682]">
                    {isKo ? `${selectedCompany.name} 최근 3개년 데이터 기준` : `Based on last 3 recruitment cycles`}
                  </span>
                </div>
              </div>
              <span className="bg-[#ba1a1a] text-white px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider shadow-2xs">
                {isKo ? selectedCompany.competitionRate : selectedCompany.competitionRateEn}
              </span>
            </div>

            {/* Metrics 2-Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
              {/* Metric 1: GPA */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-xs font-semibold text-[#191c1e]">
                    {isKo ? '학점 (4.5 만점)' : 'GPA (4.5 Scale)'}
                  </span>
                  <span className="text-xs font-bold text-[#00236f]">
                    {selectedCompany.avgPassSpec.gpa > 0
                      ? `${selectedCompany.avgPassSpec.gpa} / 4.5`
                      : isKo
                      ? 'NCS 블라인드'
                      : 'NCS Blind'}
                  </span>
                </div>
                <div className="w-full bg-[#e6e8ea] rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-[#0051d5] h-2 rounded-full transition-all duration-700"
                    style={{ width: `${selectedCompany.avgPassSpec.gpaProgress}%` }}
                  ></div>
                </div>
              </div>

              {/* Metric 2: OPIC Level */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-xs font-semibold text-[#191c1e]">
                    {isKo ? 'OPIc 등급' : 'OPIc Level'}
                  </span>
                  <span className="text-xs font-bold text-[#00236f]">
                    {isKo ? selectedCompany.avgPassSpec.opic : selectedCompany.avgPassSpec.opicEn}
                  </span>
                </div>
                <div className="w-full bg-[#e6e8ea] rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-[#0051d5] h-2 rounded-full transition-all duration-700"
                    style={{ width: `${selectedCompany.avgPassSpec.opicProgress}%` }}
                  ></div>
                </div>
              </div>

              {/* Metric 3: TOEIC */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-xs font-semibold text-[#191c1e]">
                    {isKo ? '토익 점수' : 'TOEIC Score'}
                  </span>
                  <span className="text-xs font-bold text-[#00236f]">
                    {selectedCompany.avgPassSpec.toeic}
                  </span>
                </div>
                <div className="w-full bg-[#e6e8ea] rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-[#0051d5] h-2 rounded-full transition-all duration-700"
                    style={{ width: `${selectedCompany.avgPassSpec.toeicProgress}%` }}
                  ></div>
                </div>
              </div>

              {/* Metric 4: Relevant Projects */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-xs font-semibold text-[#191c1e]">
                    {isKo ? '관련 프로젝트/인턴십' : 'Relevant Projects/Internships'}
                  </span>
                  <span className="text-xs font-bold text-[#00236f]">
                    {isKo ? selectedCompany.avgPassSpec.projectsAvg : selectedCompany.avgPassSpec.projectsAvgEn}
                  </span>
                </div>
                <div className="w-full bg-[#e6e8ea] rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-[#1e3a8a] h-2 rounded-full transition-all duration-700"
                    style={{ width: `${selectedCompany.avgPassSpec.projectsProgress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-3 border-t border-[#f1f5f9] flex justify-between items-center text-xs text-[#757682]">
            <span>{isKo ? '서류 필터링 기준: 어학 및 기본 학점' : 'Screening Filter: Language & Min GPA'}</span>
            <span className="font-semibold text-[#0051d5]">
              {isKo ? '합격자 92% 이상 충족' : '92%+ Pass Rate Baseline'}
            </span>
          </div>
        </div>

        {/* Preferred Certifications (Spans 12 cols) */}
        <div className="lg:col-span-12 bg-white rounded-2xl p-6 ambient-shadow-card border border-[#c5c5d3]/40">
          <div className="flex items-center gap-2.5 mb-5">
            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
              <span className="material-symbols-outlined text-[#0051d5] text-[20px]">verified</span>
            </div>
            <h3 className="font-hanken font-bold text-lg text-[#00236f]">
              {isKo
                ? `우대 자격증 (${selectedCompany.category})`
                : `Preferred Certifications (${selectedCompany.categoryEn})`}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {selectedCompany.preferredCerts.map((cert, i) => (
              <div
                key={i}
                className="p-4 rounded-xl border border-[#c5c5d3]/60 bg-[#f7f9fb] hover:bg-white hover:border-[#0051d5] transition-all flex items-start gap-3.5 group shadow-2xs"
              >
                <div className="mt-0.5 shrink-0">
                  <span
                    className={`material-symbols-outlined text-[22px] ${
                      cert.type === 'essential'
                        ? 'text-[#0051d5]'
                        : cert.type === 'high_priority'
                        ? 'text-[#ff8f4f]'
                        : 'text-[#757682]'
                    }`}
                  >
                    {cert.type === 'recommended' ? 'radio_button_unchecked' : 'check_circle'}
                  </span>
                </div>
                <div>
                  <h4 className="font-hanken font-bold text-sm text-[#191c1e] group-hover:text-[#00236f] transition-colors">
                    {isKo ? cert.title : cert.titleEn}
                  </h4>
                  <p className="text-xs text-[#444651] mt-1 leading-relaxed">
                    {isKo ? cert.description : cert.descriptionEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interview Tips Card (Spans 12 cols) */}
        <div className="lg:col-span-12 bg-gradient-to-r from-[#f2f4f6] to-white rounded-2xl p-6 border border-[#c5c5d3]/40">
          <div className="flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-[#00236f]">tips_and_updates</span>
            <h4 className="font-hanken font-bold text-base text-[#00236f]">
              {isKo ? '전형별 핵심 합격 전략' : 'Recruitment Process Key Strategies'}
            </h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {selectedCompany.interviewTips.map((tip, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-[#e2e8f0]">
                <h5 className="font-bold text-xs text-[#0051d5] mb-1">
                  {isKo ? tip.title : tip.titleEn}
                </h5>
                <p className="text-xs text-[#444651] leading-relaxed">
                  {isKo ? tip.tip : tip.tipEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
