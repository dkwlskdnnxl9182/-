import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { RadarChart } from './RadarChart';
import {
  POPULAR_CERTIFICATIONS,
  CERTIFICATION_TRANSLATIONS,
  LANGUAGE_LEVEL_MAP,
  COMPANIES_INTELLIGENCE
} from '../data/mockData';

export const SpecDiagnosisView: React.FC = () => {
  const {
    language,
    userSpec,
    updateUserSpec,
    diagnosisResult,
    runDiagnosis,
    isDiagnosing,
    selectedCompanyId,
    setSelectedCompanyId
  } = useApp();

  const isKo = language === 'ko';
  const [showAddCertModal, setShowAddCertModal] = useState(false);
  const [customCertInput, setCustomCertInput] = useState('');

  const targetRoles = COMPANIES_INTELLIGENCE.map(company => ({
    id: company.id,
    labelKo: `${company.name} - ${company.division}`,
    labelEn: `${company.nameEn} - ${company.divisionEn}`
  }));

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCompanyId = e.target.value;
    setSelectedCompanyId(newCompanyId);
    const selected = targetRoles.find(r => r.id === newCompanyId);
    if (selected) {
      updateUserSpec({
        targetCompanyId: newCompanyId,
        targetRole: isKo ? selected.labelKo : selected.labelEn
      });
    }
  };

  const handleGpaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    if (!isNaN(val) && val >= 0 && val <= 4.5) {
      updateUserSpec({ gpa: val });
    }
  };

  const handleLangChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateUserSpec({ englishProficiency: e.target.value });
  };

  const handleNcsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    if (!isNaN(val) && val >= 0 && val <= 50) {
      updateUserSpec({ ncsScore: val });
    }
  };

  const handleRemoveCert = (certName: string) => {
    updateUserSpec({
      certifications: userSpec.certifications.filter(c => c !== certName)
    });
  };

  const handleAddCert = (certName: string) => {
    if (!userSpec.certifications.includes(certName)) {
      updateUserSpec({
        certifications: [...userSpec.certifications, certName]
      });
    }
    setShowAddCertModal(false);
  };

  const handleAddCustomCert = (e: React.FormEvent) => {
    e.preventDefault();
    if (customCertInput.trim() && !userSpec.certifications.includes(customCertInput.trim())) {
      updateUserSpec({
        certifications: [...userSpec.certifications, customCertInput.trim()]
      });
      setCustomCertInput('');
      setShowAddCertModal(false);
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div>
        <h2 className="font-hanken font-bold text-3xl sm:text-4xl text-[#00236f] tracking-tight">
          {isKo ? '스펙 진단' : 'Spec Diagnosis'}
        </h2>
        <p className="text-sm sm:text-base text-[#444651] mt-2 max-w-3xl leading-relaxed">
          {isKo
            ? '나의 현재 스펙을 분석하고 목표 기업 커트라인과 1:1로 비교하여 합격 가능성과 보완점을 진단합니다.'
            : 'Analyze your profile against target company benchmarks with precision gap analysis.'}
        </p>
      </div>

      {/* 2-Column Responsive Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Spec Input Form (5 cols on lg) */}
        <div className="lg:col-span-5 bg-white rounded-2xl p-6 ambient-shadow-card border border-[#c5c5d3]/40 flex flex-col gap-5">
          <div className="flex items-center justify-between gap-2 pb-2 border-b border-[#f1f5f9]">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#0051d5]">tune</span>
              <h3 className="font-hanken font-bold text-lg text-[#191c1e]">
                {isKo ? '스펙 입력' : 'Spec Input'}
              </h3>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wide text-[#0051d5] bg-blue-50 px-2 py-1 rounded-full">
              {isKo ? '정밀 진단' : 'Precision Audit'}
            </span>
          </div>

          {/* Target Role Selector */}
          <div>
            <label className="block text-xs font-bold text-[#191c1e] mb-1.5">
              {isKo ? '목표 기업 및 직무' : 'Target Company & Role'}
            </label>
            <div className="rounded-xl border border-[#c5c5d3]/70 bg-[#f7f9fb] p-2 shadow-2xs">
              <div className="relative">
                <select
                  value={selectedCompanyId}
                  onChange={handleRoleChange}
                  className="w-full appearance-none bg-transparent border border-transparent rounded-lg py-2.5 pl-3 pr-10 text-xs font-medium text-[#191c1e] focus:outline-hidden transition-all cursor-pointer"
                >
                  {targetRoles.map((r, index) => (
                    <option key={`${r.id}-${index}`} value={r.id}>
                      {isKo ? r.labelKo : r.labelEn}
                    </option>
                  ))}
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[#757682] pointer-events-none text-[18px]">
                  arrow_drop_down
                </span>
              </div>
            </div>
            <p className="text-[11px] text-[#757682] mt-2 leading-relaxed">
              {isKo
                ? '대기업, 공기업, 플랫폼 기업, 금융권, 전장·모빌리티 직군까지 함께 비교해볼 수 있습니다.'
                : 'Compare across top-tier corporations, public enterprises, platform companies, banking, and engineering roles.'}
            </p>
          </div>

          {/* GPA Input */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-xs font-bold text-[#191c1e]">
                {isKo ? '학점 (4.5 만점)' : 'GPA (4.5 Scale)'}
              </label>
              <span className="text-xs font-bold text-[#0051d5] bg-blue-50 px-2 py-0.5 rounded">
                {userSpec.gpa.toFixed(2)} / 4.5
              </span>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="range"
                min="2.0"
                max="4.5"
                step="0.05"
                value={userSpec.gpa}
                onChange={handleGpaChange}
                className="flex-1 accent-[#0051d5] cursor-pointer"
              />
              <input
                type="number"
                min="0"
                max="4.5"
                step="0.1"
                value={userSpec.gpa}
                onChange={handleGpaChange}
                className="w-16 bg-[#f7f9fb] border border-[#c5c5d3] rounded-xl py-1.5 px-2 text-center text-xs font-bold text-[#191c1e]"
              />
            </div>
          </div>

          {/* English Proficiency */}
          <div>
            <label className="block text-xs font-bold text-[#191c1e] mb-1.5">
              {isKo ? '영어 성적 (OPIc / 토익스피킹)' : 'English Proficiency'}
            </label>
            <div className="relative">
              <select
                value={userSpec.englishProficiency}
                onChange={handleLangChange}
                className="w-full appearance-none bg-[#f7f9fb] border border-[#c5c5d3] hover:border-[#0051d5] rounded-xl py-2.5 pl-3.5 pr-10 text-xs font-medium text-[#191c1e] focus:outline-hidden focus:ring-2 focus:ring-[#00236f]/20 transition-all cursor-pointer shadow-2xs"
              >
                {Object.entries(LANGUAGE_LEVEL_MAP).map(([key, info]) => (
                  <option key={key} value={key}>
                    {isKo ? info.labelKo : info.labelEn}
                  </option>
                ))}
              </select>
              <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[#757682] pointer-events-none text-[18px]">
                arrow_drop_down
              </span>
            </div>
          </div>

          {/* NCS Score */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-xs font-bold text-[#191c1e]">
                {isKo ? 'NCS 시험 점수 (0~50)' : 'NCS Test Score (0~50)'}
              </label>
              <span className="text-xs font-bold text-[#0051d5] bg-blue-50 px-2 py-0.5 rounded">
                {Math.round(userSpec.ncsScore)} / 50
              </span>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="range"
                min="0"
                max="50"
                step="1"
                value={userSpec.ncsScore}
                onChange={handleNcsChange}
                className="flex-1 accent-[#0051d5] cursor-pointer"
              />
              <input
                type="number"
                min="0"
                max="50"
                step="1"
                value={Math.round(userSpec.ncsScore)}
                onChange={handleNcsChange}
                className="w-16 bg-[#f7f9fb] border border-[#c5c5d3] rounded-xl py-1.5 px-2 text-center text-xs font-bold text-[#191c1e]"
              />
            </div>
          </div>

          {/* Certifications Tags */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-xs font-bold text-[#191c1e]">
                {isKo ? '보유 자격증' : 'Certifications'}
              </label>
              <span className="text-[11px] text-[#757682]">
                {userSpec.certifications.length} {isKo ? '개 보유' : 'active'}
              </span>
            </div>

            <div className="flex flex-wrap gap-2 min-h-[42px] p-2 bg-[#f7f9fb] rounded-xl border border-[#c5c5d3]/50">
              {userSpec.certifications.map(cert => (
                <span
                  key={cert}
                  className="bg-[#dce1ff] text-[#00174b] border border-[#b4c5ff] px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-2xs animate-in fade-in"
                >
                  <span>{isKo ? cert : CERTIFICATION_TRANSLATIONS[cert] || cert}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveCert(cert)}
                    className="hover:bg-blue-300/40 rounded-full p-0.5 transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[14px]">close</span>
                  </button>
                </span>
              ))}

              <button
                type="button"
                onClick={() => setShowAddCertModal(true)}
                className="bg-white hover:bg-[#e6e8ea] border border-dashed border-[#0051d5] text-[#0051d5] px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-[14px]">add</span>
                <span>{isKo ? '자격증 추가' : 'Add Cert'}</span>
              </button>
            </div>
          </div>

          {/* Project Experience Counter */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-xs font-bold text-[#191c1e]">
                {isKo ? '실무 / 캡스톤 프로젝트 경험' : 'Project Experience (Count)'}
              </label>
              <span className="text-xs font-bold text-[#0051d5]">
                {userSpec.projectCount} {isKo ? '회' : 'projects'}
              </span>
            </div>
            <div className="flex items-center gap-2">
              {[0, 1, 2, 3, 4].map(num => (
                <button
                  key={num}
                  type="button"
                  onClick={() => updateUserSpec({ projectCount: num })}
                  className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    userSpec.projectCount === num
                      ? 'bg-[#00236f] text-white shadow-xs'
                      : 'bg-[#f2f4f6] text-[#444651] hover:bg-[#e6e8ea]'
                  }`}
                >
                  {num === 4 ? '4+' : num}
                </button>
              ))}
            </div>
          </div>

          {/* Run Diagnosis CTA Button */}
          <button
            onClick={runDiagnosis}
            disabled={isDiagnosing}
            className="w-full bg-[#00236f] text-white hover:bg-[#0051d5] active:scale-[0.98] py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer mt-2 disabled:opacity-75"
          >
            <span
              className={`material-symbols-outlined text-[20px] ${
                isDiagnosing ? 'animate-spin' : ''
              }`}
            >
              refresh
            </span>
            <span>
              {isDiagnosing
                ? isKo
                  ? '정밀 진단 계산 중...'
                  : 'Computing Diagnosis...'
                : isKo
                ? '진단 실행'
                : 'Run Diagnosis'}
            </span>
          </button>
        </div>

        {/* Right Column: Diagnosis Results & Action Plan (7 cols on lg) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* Radar Gap Analysis Card */}
          <div className="bg-white rounded-2xl p-6 ambient-shadow-card border border-[#c5c5d3]/40 flex flex-col items-center">
            {/* Header & Match Badge */}
            <div className="w-full flex justify-between items-start mb-2">
              <div>
                <h3 className="font-hanken font-bold text-lg text-[#191c1e]">
                  {isKo ? '스펙 격차 분석' : 'Spec Gap Analysis'}
                </h3>
                <p className="text-xs text-[#757682]">
                  {isKo
                    ? '목표 기준선(점선)과 내 스펙(영역)의 중첩도'
                    : 'Overlap between target cutline and your profile'}
                </p>
              </div>

              {/* Match Score Badge */}
              <div className="flex flex-col items-end">
                <span className="text-[10px] uppercase font-bold text-[#757682]">
                  {isKo ? '종합 매칭률' : 'Match Score'}
                </span>
                <span
                  className={`font-hanken font-extrabold text-2xl tracking-tight ${
                    diagnosisResult.overallScore >= 75
                      ? 'text-[#0051d5]'
                      : diagnosisResult.overallScore >= 60
                      ? 'text-[#ff8f4f]'
                      : 'text-[#ba1a1a]'
                  }`}
                >
                  {diagnosisResult.overallScore}%
                </span>
              </div>
            </div>

            {/* Mathematical Radar Visualizer */}
            <div className="w-full py-2">
              <RadarChart
                userGpaScore={diagnosisResult.radarData.gpa.user}
                userLangScore={diagnosisResult.radarData.language.user}
                userCertScore={diagnosisResult.radarData.certs.user}
                userProjectScore={diagnosisResult.radarData.projectExp.user}
                cutlineGpa={diagnosisResult.radarData.gpa.cutline}
                cutlineLang={diagnosisResult.radarData.language.cutline}
                cutlineCert={diagnosisResult.radarData.certs.cutline}
                cutlineProject={diagnosisResult.radarData.projectExp.cutline}
                isLanguageWarning={diagnosisResult.radarData.language.isWarning}
              />
            </div>

            <div className="w-full mt-2 flex justify-center">
              <div className="w-full max-w-md bg-[#f7f9fb] rounded-xl border border-[#dfe3eb] px-4 py-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#444651]">
                    {isKo ? 'NCS 시험 진단' : 'NCS Diagnostic'}
                  </span>
                  <span
                    className={`text-sm font-bold ${
                      diagnosisResult.radarData.ncs.isWarning ? 'text-[#ba1a1a]' : 'text-[#0051d5]'
                    }`}
                  >
                    {Math.round(diagnosisResult.radarData.ncs.user)} / 100
                  </span>
                </div>
                <div className="mt-2 h-2 bg-[#e6e8ea] rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      diagnosisResult.radarData.ncs.isWarning ? 'bg-[#ff8f4f]' : 'bg-[#0051d5]'
                    }`}
                    style={{ width: `${Math.min(100, diagnosisResult.radarData.ncs.user)}%` }}
                  />
                </div>
                <p className="mt-2 text-[11px] text-[#757682]">
                  {isKo
                    ? `기준선 ${Math.round(diagnosisResult.radarData.ncs.cutline)}점 기준으로 ${diagnosisResult.radarData.ncs.user >= diagnosisResult.radarData.ncs.cutline ? '안정권' : '보완 필요'} 상태입니다.`
                    : `Against the ${Math.round(diagnosisResult.radarData.ncs.cutline)}-point benchmark, your NCS readiness is ${diagnosisResult.radarData.ncs.user >= diagnosisResult.radarData.ncs.cutline ? 'solid' : 'needs improvement'}.`}
                </p>
              </div>
            </div>

            {/* Legend */}
            <div className="flex justify-center gap-6 mt-4 pt-3 border-t border-[#f1f5f9] w-full text-xs font-semibold text-[#444651]">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#0051d5]"></span>
                <span>{isKo ? '내 스펙' : 'Your Spec'}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-sm border-2 border-dashed border-[#00236f] bg-[#00236f]/10"></span>
                <span>{isKo ? '목표 커트라인' : 'Goal Cutline'}</span>
              </div>
            </div>
          </div>

          {/* Action Plan Section */}
          <div className="bg-white rounded-2xl p-6 ambient-shadow-card border border-[#c5c5d3]/40">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-[#00236f]">checklist</span>
              <h3 className="font-hanken font-bold text-base sm:text-lg text-[#191c1e]">
                {isKo ? '실행 계획 (Action Plan)' : 'Action Plan'}
              </h3>
            </div>

            <div className="space-y-3">
              {diagnosisResult.actionItems.map(item => {
                const isCritical = item.level === 'critical';
                const isWarning = item.level === 'warning';
                const isSolid = item.level === 'solid';

                return (
                  <div
                    key={item.id}
                    className={`p-4 rounded-xl border flex items-start gap-3.5 transition-all ${
                      isCritical
                        ? 'bg-[#ffdad6]/40 border-[#ffb4ab]'
                        : isWarning
                        ? 'bg-[#fff8f6] border-[#ffdbca]'
                        : 'bg-[#dce1ff]/30 border-[#b4c5ff]'
                    }`}
                  >
                    <span
                      className={`material-symbols-outlined text-[22px] mt-0.5 shrink-0 ${
                        isCritical
                          ? 'text-[#ba1a1a]'
                          : isWarning
                          ? 'text-[#ff8f4f]'
                          : 'text-[#0051d5]'
                      }`}
                    >
                      {item.icon}
                    </span>
                    <div>
                      <h4
                        className={`font-hanken font-bold text-sm ${
                          isCritical
                            ? 'text-[#93000a]'
                            : isWarning
                            ? 'text-[#341100]'
                            : 'text-[#00174b]'
                        }`}
                      >
                        {isKo ? item.title : item.titleEn}
                      </h4>
                      <p className="text-xs text-[#444651] mt-1 leading-relaxed">
                        {isKo ? item.description : item.descriptionEn}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Add Certification Modal */}
      {showAddCertModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl animate-in zoom-in-95">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-hanken font-bold text-lg text-[#00236f]">
                {isKo ? '자격증 선택 및 추가' : 'Select or Add Certification'}
              </h4>
              <button
                onClick={() => setShowAddCertModal(false)}
                className="text-[#757682] hover:text-[#191c1e]"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {/* Popular Certs Chips */}
            <div className="mb-4">
              <p className="text-xs font-semibold text-[#757682] mb-2">
                {isKo ? '인기 추천 자격증' : 'Popular Certifications'}
              </p>
              <div className="flex flex-wrap gap-1.5 max-h-48 overflow-y-auto pr-1">
                {POPULAR_CERTIFICATIONS.map(c => {
                  const isSelected = userSpec.certifications.includes(c);
                  return (
                    <button
                      key={c}
                      type="button"
                      disabled={isSelected}
                      onClick={() => handleAddCert(c)}
                      className={`text-xs font-medium px-2.5 py-1.5 rounded-lg border transition-all cursor-pointer text-left ${
                        isSelected
                          ? 'bg-[#e6e8ea] text-[#757682] border-transparent cursor-not-allowed'
                          : 'bg-[#f7f9fb] text-[#191c1e] border-[#c5c5d3] hover:border-[#0051d5] hover:bg-blue-50'
                      }`}
                    >
                      {isKo ? c : CERTIFICATION_TRANSLATIONS[c] || c}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Custom Input */}
            <form onSubmit={handleAddCustomCert} className="pt-3 border-t border-[#f1f5f9]">
              <label className="block text-xs font-bold text-[#191c1e] mb-1.5">
                {isKo ? '직접 입력' : 'Custom Entry'}
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={customCertInput}
                  onChange={e => setCustomCertInput(e.target.value)}
                  placeholder={isKo ? '자격증명 입력...' : 'Enter certificate name...'}
                  className="flex-1 bg-[#f7f9fb] border border-[#c5c5d3] rounded-xl px-3 py-2 text-xs"
                />
                <button
                  type="submit"
                  className="bg-[#00236f] text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-[#0051d5] transition-colors cursor-pointer"
                >
                  {isKo ? '추가' : 'Add'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
