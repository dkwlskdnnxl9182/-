import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { INITIAL_USER_PROFILE } from '../data/mockData';

export const SettingsView: React.FC = () => {
  const { language, setLanguage } = useApp();
  const isKo = language === 'ko';

  const [notificationEmail, setNotificationEmail] = useState(true);
  const [notificationDDay, setNotificationDDay] = useState(true);
  const [autoDiagnosis, setAutoDiagnosis] = useState(true);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleSave = () => {
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2500);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h2 className="font-hanken font-bold text-3xl sm:text-4xl text-[#00236f] tracking-tight">
          {isKo ? '환경 설정' : 'Settings'}
        </h2>
        <p className="text-sm sm:text-base text-[#444651] mt-2">
          {isKo
            ? '계정 프로필, 알림 수신 주기, 다국어 및 스펙 진단 기본 설정을 관리합니다.'
            : 'Manage account profile, notification frequency, language, and diagnosis preferences.'}
        </p>
      </div>

      {/* Profile Section */}
      <div className="bg-white rounded-2xl p-6 ambient-shadow-card border border-[#c5c5d3]/40">
        <h3 className="font-hanken font-bold text-base text-[#191c1e] mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-[#0051d5]">account_circle</span>
          {isKo ? '프로필 설정' : 'User Profile'}
        </h3>
        <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-[#f1f5f9]">
          <img
            src={INITIAL_USER_PROFILE.avatar}
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover border-2 border-[#00236f]/20 shadow-sm"
          />
          <div className="flex-1 text-center sm:text-left space-y-1">
            <h4 className="font-hanken font-bold text-lg text-[#191c1e]">
              {isKo ? INITIAL_USER_PROFILE.name : INITIAL_USER_PROFILE.nameEn}
            </h4>
            <p className="text-xs text-[#757682]">{INITIAL_USER_PROFILE.email}</p>
            <p className="text-xs font-semibold text-[#0051d5]">
              {isKo ? INITIAL_USER_PROFILE.title : INITIAL_USER_PROFILE.titleEn}
            </p>
          </div>
          <button className="bg-[#f2f4f6] hover:bg-[#e6e8ea] text-[#00236f] px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer">
            {isKo ? '사진 변경' : 'Change Avatar'}
          </button>
        </div>

        {/* Form fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-xs">
          <div>
            <label className="block font-bold text-[#191c1e] mb-1">
              {isKo ? '표시 언어' : 'Language'}
            </label>
            <select
              value={language}
              onChange={e => setLanguage(e.target.value as 'ko' | 'en')}
              className="w-full bg-[#f7f9fb] border border-[#c5c5d3] rounded-xl p-2.5 text-[#191c1e]"
            >
              <option value="ko">한국어 (Korean)</option>
              <option value="en">English (US)</option>
            </select>
          </div>

          <div>
            <label className="block font-bold text-[#191c1e] mb-1">
              {isKo ? '연락처 이메일' : 'Contact Email'}
            </label>
            <input
              type="email"
              defaultValue={INITIAL_USER_PROFILE.email}
              className="w-full bg-[#f7f9fb] border border-[#c5c5d3] rounded-xl p-2.5 text-[#191c1e]"
            />
          </div>
        </div>
      </div>

      {/* Notification Preferences */}
      <div className="bg-white rounded-2xl p-6 ambient-shadow-card border border-[#c5c5d3]/40 space-y-4">
        <h3 className="font-hanken font-bold text-base text-[#191c1e] flex items-center gap-2">
          <span className="material-symbols-outlined text-[#0051d5]">notifications_active</span>
          {isKo ? '알림 및 수신 설정' : 'Notification Preferences'}
        </h3>

        <div className="space-y-3 text-xs">
          <label className="flex items-center justify-between p-3 rounded-xl bg-[#f7f9fb] cursor-pointer hover:bg-[#f2f4f6]">
            <div>
              <p className="font-bold text-[#191c1e]">
                {isKo ? 'D-Day 및 마감 임박 알림' : 'D-Day & Closing Soon Alerts'}
              </p>
              <p className="text-[#757682] text-[11px]">
                {isKo
                  ? '북마크한 기업 공고의 마감 1일 전 푸시 및 이메일 전송'
                  : 'Receive reminders 24 hours prior to deadline for bookmarked jobs.'}
              </p>
            </div>
            <input
              type="checkbox"
              checked={notificationDDay}
              onChange={e => setNotificationDDay(e.target.checked)}
              className="w-4 h-4 accent-[#0051d5] rounded"
            />
          </label>

          <label className="flex items-center justify-between p-3 rounded-xl bg-[#f7f9fb] cursor-pointer hover:bg-[#f2f4f6]">
            <div>
              <p className="font-bold text-[#191c1e]">
                {isKo ? '새 공채 등록 주간 요약' : 'Weekly Recruitment Digest'}
              </p>
              <p className="text-[#757682] text-[11px]">
                {isKo
                  ? '관심 직무(IT, 엔지니어링)의 신규 채용 일정 주간 리포트'
                  : 'Weekly digest of newly posted schedules for targeted job categories.'}
              </p>
            </div>
            <input
              type="checkbox"
              checked={notificationEmail}
              onChange={e => setNotificationEmail(e.target.checked)}
              className="w-4 h-4 accent-[#0051d5] rounded"
            />
          </label>

          <label className="flex items-center justify-between p-3 rounded-xl bg-[#f7f9fb] cursor-pointer hover:bg-[#f2f4f6]">
            <div>
              <p className="font-bold text-[#191c1e]">
                {isKo ? '스펙 진단 자동 갱신' : 'Real-time Spec Gap Sync'}
              </p>
              <p className="text-[#757682] text-[11px]">
                {isKo
                  ? '기업 인재상 및 합격 컷라인 변경 시 내 스펙 점수 자동 재계산'
                  : 'Automatically recompute gap analysis when company cutlines change.'}
              </p>
            </div>
            <input
              type="checkbox"
              checked={autoDiagnosis}
              onChange={e => setAutoDiagnosis(e.target.checked)}
              className="w-4 h-4 accent-[#0051d5] rounded"
            />
          </label>
        </div>

        <div className="pt-3 border-t border-[#f1f5f9] flex items-center justify-between">
          {saveSuccess ? (
            <span className="text-xs font-bold text-green-600 flex items-center gap-1 animate-in fade-in">
              <span className="material-symbols-outlined text-[16px]">check_circle</span>
              {isKo ? '설정이 안전하게 저장되었습니다.' : 'Preferences saved successfully.'}
            </span>
          ) : (
            <div></div>
          )}
          <button
            onClick={handleSave}
            className="bg-[#00236f] hover:bg-[#0051d5] text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-md transition-all cursor-pointer"
          >
            {isKo ? '변경사항 저장' : 'Save Changes'}
          </button>
        </div>
      </div>
    </div>
  );
};
