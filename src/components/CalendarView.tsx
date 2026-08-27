import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { JobPosting, CorpType, JobRoleCategory } from '../types';

export const CalendarView: React.FC = () => {
  const {
    language,
    jobPostings,
    corpFilter,
    setCorpFilter,
    roleFilter,
    setRoleFilter,
    searchQuery,
    setSelectedJob,
    bookmarks,
    toggleBookmark,
    setIsPostJobModalOpen,
    setCurrentView,
    setSelectedCompanyId
  } = useApp();

  const isKo = language === 'ko';

  const [currentMonthIndex, setCurrentMonthIndex] = useState<number>(7); // 7 = Aug (0-indexed)
  const [currentYear, setCurrentYear] = useState<number>(2026);

  // Month navigation
  const handlePrevMonth = () => {
    if (currentMonthIndex === 0) {
      setCurrentMonthIndex(11);
      setCurrentYear(prev => prev - 1);
    } else {
      setCurrentMonthIndex(prev => prev - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonthIndex === 11) {
      setCurrentMonthIndex(0);
      setCurrentYear(prev => prev + 1);
    } else {
      setCurrentMonthIndex(prev => prev + 1);
    }
  };

  const monthNamesKo = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];
  const monthNamesEn = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  // Filter job postings
  const filteredJobs = jobPostings.filter(job => {
    if (corpFilter !== 'all' && job.corpType !== corpFilter) return false;
    if (roleFilter !== 'all' && job.category !== roleFilter) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchCompany = job.company.toLowerCase().includes(q) || job.companyEn.toLowerCase().includes(q);
      const matchTitle = job.title.toLowerCase().includes(q) || job.titleEn.toLowerCase().includes(q);
      const matchCat = job.categoryLabel.toLowerCase().includes(q) || job.categoryLabelEn.toLowerCase().includes(q);
      if (!matchCompany && !matchTitle && !matchCat) return false;
    }
    return true;
  });

  const activePostingsCount = jobPostings.length;
  const newApplicantsCount = 248;
  const closingThisWeekCount = filteredJobs.filter(j => j.dDay <= 7).length;
  const closingSoonJobs = [...filteredJobs]
    .sort((a, b) => {
      const aYear = new Date(a.endDate).getFullYear();
      const bYear = new Date(b.endDate).getFullYear();
      if (aYear !== bYear) return bYear - aYear;
      return new Date(a.endDate).getTime() - new Date(b.endDate).getTime();
    })
    .slice(0, 5);

  interface CalendarDay {
    dayNum: number;
    isCurrentMonth: boolean;
    isSunday?: boolean;
    isSaturday?: boolean;
    isToday?: boolean;
    events: Array<{
      id: string;
      jobId: string;
      titleKo: string;
      titleEn: string;
      type: 'start' | 'end';
      badgeBg: string;
      badgeText: string;
      badgeBorder: string;
    }>;
  }

  const monthLength = new Date(currentYear, currentMonthIndex + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonthIndex, 1);
  const firstDayIndex = firstDayOfMonth.getDay();
  const prevMonthLastDay = new Date(currentYear, currentMonthIndex, 0).getDate();

  const calendarDays: CalendarDay[] = Array.from({ length: 42 }, (_, index) => {
    const dayOffset = index - firstDayIndex + 1;
    const isCurrentMonth = dayOffset >= 1 && dayOffset <= monthLength;
    const visibleDay = isCurrentMonth
      ? dayOffset
      : dayOffset <= 0
        ? prevMonthLastDay + dayOffset
        : dayOffset - monthLength;

    const date = new Date(currentYear, currentMonthIndex, visibleDay);
    const dateString = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

    const events = jobPostings.flatMap(job => {
      const entries: CalendarDay['events'] = [];

      if (job.startDate === dateString) {
        entries.push({
          id: `${job.id}-start`,
          jobId: job.id,
          titleKo: `${job.company} - 시작`,
          titleEn: `${job.companyEn} - Start`,
          type: 'start',
          badgeBg: 'bg-[#dbe1ff]',
          badgeText: 'text-[#00174b]',
          badgeBorder: 'border-[#b4c5ff]'
        });
      }

      if (job.endDate === dateString) {
        entries.push({
          id: `${job.id}-end`,
          jobId: job.id,
          titleKo: `${job.company} - 마감`,
          titleEn: `${job.companyEn} - End`,
          type: 'end',
          badgeBg: 'bg-[#ffdad6]',
          badgeText: 'text-[#93000a]',
          badgeBorder: 'border-[#ba1a1a]/30'
        });
      }

      return entries;
    });

    const today = new Date();

    return {
      dayNum: visibleDay,
      isCurrentMonth,
      isSunday: date.getDay() === 0,
      isSaturday: date.getDay() === 6,
      isToday: date.getFullYear() === today.getFullYear() && date.getMonth() === today.getMonth() && date.getDate() === today.getDate(),
      events
    };
  });

  const handleEventClick = (jobId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const found = jobPostings.find(j => j.id === jobId);
    if (found) setSelectedJob(found);
  };

  const handleCardClick = (job: JobPosting) => {
    setSelectedJob(job);
  };

  return (
    <div className="space-y-6">
      {/* Controls & Filter Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-4 rounded-2xl ambient-shadow-card border border-[#c5c5d3]/40">
        {/* Corporation Type Filter (Segmented Control) */}
        <div className="inline-flex bg-[#f2f4f6] p-1 rounded-xl border border-[#c5c5d3]/50">
          <button
            onClick={() => setCorpFilter('all')}
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              corpFilter === 'all'
                ? 'bg-white text-[#00236f] shadow-xs'
                : 'text-[#444651] hover:text-[#00236f]'
            }`}
          >
            {isKo ? '전체' : 'All'}
          </button>
          <button
            onClick={() => setCorpFilter('corporation')}
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              corpFilter === 'corporation'
                ? 'bg-white text-[#00236f] shadow-xs'
                : 'text-[#444651] hover:text-[#00236f]'
            }`}
          >
            {isKo ? '대기업' : 'Corporation'}
          </button>
          <button
            onClick={() => setCorpFilter('public')}
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              corpFilter === 'public'
                ? 'bg-white text-[#00236f] shadow-xs'
                : 'text-[#444651] hover:text-[#00236f]'
            }`}
          >
            {isKo ? '공기업' : 'Public Enterprise'}
          </button>
        </div>

        {/* Job Role Dropdown & Quick Actions */}
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative w-full sm:w-52">
            <select
              value={roleFilter}
              onChange={e => setRoleFilter(e.target.value as JobRoleCategory)}
              className="w-full appearance-none bg-[#f7f9fb] border border-[#c5c5d3] hover:border-[#0051d5] rounded-xl py-2 pl-4 pr-10 text-xs font-medium text-[#191c1e] focus:outline-hidden focus:ring-2 focus:ring-[#00236f]/20 cursor-pointer transition-colors shadow-2xs"
            >
              <option value="all">{isKo ? '전체 직무' : 'All Job Roles'}</option>
              <option value="it">{isKo ? 'IT / 소프트웨어' : 'IT / Software'}</option>
              <option value="engineering">{isKo ? '엔지니어링' : 'Engineering'}</option>
              <option value="finance">{isKo ? '재무 / 회계' : 'Finance'}</option>
              <option value="marketing">{isKo ? '마케팅' : 'Marketing'}</option>
              <option value="hr">{isKo ? '인사 / HR' : 'HR'}</option>
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[#757682] pointer-events-none text-[18px]">
              arrow_drop_down
            </span>
          </div>

          <button
            onClick={() => {
              setCorpFilter('all');
              setRoleFilter('all');
            }}
            title={isKo ? '필터 초기화' : 'Reset Filter'}
            className="bg-[#f7f9fb] hover:bg-[#e6e8ea] border border-[#c5c5d3] p-2 rounded-xl text-[#444651] hover:text-[#00236f] transition-colors cursor-pointer shadow-2xs flex items-center justify-center"
          >
            <span className="material-symbols-outlined text-[20px]">filter_list</span>
          </button>

          <button
            onClick={() => setIsPostJobModalOpen(true)}
            className="hidden sm:flex items-center gap-1.5 bg-[#00236f] text-white hover:bg-[#1e3a8a] py-2 px-3.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">add</span>
            {isKo ? '등록' : 'Add'}
          </button>
        </div>
      </div>

      {/* Bento Grid: Left 8 cols for Calendar + Stats, Right 4 cols for Closing Soon */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left 8 Columns: Calendar + Quick KPI Stats */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          {/* Calendar Card */}
          <div className="bg-white rounded-2xl p-6 ambient-shadow-card border border-[#c5c5d3]/40 relative overflow-hidden">
            {/* Calendar Header */}
            <div className="flex justify-between items-center mb-5">
              <h3 className="font-hanken font-bold text-lg text-[#191c1e] flex items-center gap-2 tracking-tight">
                <span className="material-symbols-outlined text-[#00236f] text-[24px]">
                  calendar_month
                </span>
                {isKo
                  ? `${monthNamesKo[currentMonthIndex]} 채용 일정`
                  : `${monthNamesEn[currentMonthIndex]} Recruitment`}
              </h3>

              {/* Month Switcher */}
              <div className="flex items-center gap-1.5 bg-[#f2f4f6] px-2 py-1 rounded-xl border border-[#c5c5d3]/40">
                <button
                  onClick={handlePrevMonth}
                  className="p-1 rounded-lg hover:bg-white text-[#444651] transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                </button>
                <span className="text-xs font-bold text-[#00236f] px-2 min-w-[75px] text-center">
                  {isKo
                    ? `${currentYear}년 ${monthNamesKo[currentMonthIndex]}`
                    : `${monthNamesEn[currentMonthIndex]} ${currentYear}`}
                </span>
                <button
                  onClick={handleNextMonth}
                  className="p-1 rounded-lg hover:bg-white text-[#444651] transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                </button>
              </div>
            </div>

            {/* Calendar Grid Container */}
            <div className="grid grid-cols-7 gap-px bg-[#e0e3e5] border border-[#e0e3e5] rounded-xl overflow-hidden shadow-2xs">
              {/* Days Header Row */}
              {['일', '월', '화', '수', '목', '금', '토'].map((dayName, idx) => (
                <div
                  key={idx}
                  className={`bg-[#f7f9fb] py-2 text-center text-xs font-bold ${
                    idx === 0 ? 'text-[#ba1a1a]' : idx === 6 ? 'text-[#0051d5]' : 'text-[#444651]'
                  }`}
                >
                  {isKo ? dayName : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][idx]}
                </div>
              ))}

              {/* Day Cells */}
              {calendarDays.map((cell, cellIdx) => (
                <div
                  key={cellIdx}
                  className={`bg-white min-h-[96px] p-2 flex flex-col gap-1 relative transition-colors ${
                    !cell.isCurrentMonth
                      ? 'opacity-40 bg-[#fafafa]'
                      : 'hover:bg-[#f8fafc]'
                  } ${cell.isToday ? 'border-t-2 border-[#00236f]' : ''}`}
                >
                  <div className="flex justify-between items-center">
                    <span
                      className={`text-xs font-semibold ${
                        cell.isToday
                          ? 'text-[#00236f] font-bold bg-blue-100 px-1.5 rounded-full'
                          : cell.isSunday
                          ? 'text-[#ba1a1a]'
                          : cell.isSaturday
                          ? 'text-[#0051d5]'
                          : 'text-[#191c1e]'
                      }`}
                    >
                      {cell.dayNum}
                    </span>
                  </div>

                  {/* Badges for Events */}
                  <div className="flex flex-col gap-1 mt-0.5">
                    {cell.events.map(ev => (
                      <button
                        key={ev.id}
                        onClick={e => handleEventClick(ev.jobId, e)}
                        className={`text-[10px] leading-tight px-1.5 py-0.5 rounded-md font-semibold border ${ev.badgeBg} ${ev.badgeText} ${ev.badgeBorder} truncate text-left hover:scale-[1.02] transition-transform cursor-pointer shadow-2xs`}
                      >
                        {isKo ? ev.titleKo : ev.titleEn}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick KPI Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Active Postings */}
            <div className="bg-white rounded-2xl p-4 ambient-shadow-card border border-[#c5c5d3]/40 flex items-center gap-4 hover:border-[#0051d5]/50 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#dbe1ff] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[#0051d5] text-[24px]">work</span>
              </div>
              <div>
                <p className="text-xs font-medium text-[#757682]">
                  {isKo ? '진행 중인 공고' : 'Active Postings'}
                </p>
                <p className="font-hanken font-bold text-2xl text-[#191c1e] tracking-tight">
                  {activePostingsCount}
                </p>
              </div>
            </div>

            {/* New Applicants */}
            <div className="bg-white rounded-2xl p-4 ambient-shadow-card border border-[#c5c5d3]/40 flex items-center gap-4 hover:border-[#0051d5]/50 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#ffdbca] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[#ff8f4f] text-[24px]">groups</span>
              </div>
              <div>
                <p className="text-xs font-medium text-[#757682]">
                  {isKo ? '신규 지원자' : 'New Applicants'}
                </p>
                <p className="font-hanken font-bold text-2xl text-[#191c1e] tracking-tight">
                  {newApplicantsCount}
                </p>
              </div>
            </div>

            {/* Closing This Week */}
            <div className="bg-white rounded-2xl p-4 ambient-shadow-card border border-[#c5c5d3]/40 flex items-center gap-4 hover:border-[#ba1a1a]/50 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#ffdad6] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[#ba1a1a] text-[24px]">timer</span>
              </div>
              <div>
                <p className="text-xs font-medium text-[#757682]">
                  {isKo ? '이번 주 마감' : 'Closing This Week'}
                </p>
                <p className="font-hanken font-bold text-2xl text-[#191c1e] tracking-tight">
                  {closingThisWeekCount}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right 4 Columns: Closing Soon List */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <div className="bg-white rounded-2xl p-5 ambient-shadow-card border border-[#c5c5d3]/40 flex-1 flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-center mb-4 border-b border-[#e2e8f0] pb-3">
              <h3 className="font-hanken font-bold text-base text-[#191c1e] flex items-center gap-2">
                <span className="material-symbols-outlined text-[#ba1a1a] text-[22px]">campaign</span>
                <span>{isKo ? '마감 임박' : 'Closing Soon'}</span>
              </h3>
              <span className="text-xs font-bold text-[#00236f] bg-blue-50 px-2 py-0.5 rounded-full">
                {filteredJobs.length} {isKo ? '건' : 'Jobs'}
              </span>
            </div>

            {/* Job Cards List */}
            <div className="flex flex-col gap-3 overflow-y-auto max-h-[560px] pr-1">
              {closingSoonJobs.map(job => {
                const isBookmarked = bookmarks.includes(job.id);
                const dDayBadgeColor =
                  job.dDay === 0
                    ? 'bg-[#ba1a1a] text-white'
                    : job.dDay <= 2
                    ? 'bg-[#ff8f4f] text-[#341100]'
                    : 'bg-[#0051d5] text-white';

                const dDayLabel = job.dDay === 0 ? 'D-Day' : `D-${job.dDay}`;

                return (
                  <div
                    key={job.id}
                    onClick={() => handleCardClick(job)}
                    className="group border border-[#c5c5d3]/60 rounded-xl p-4 hover:shadow-md hover:border-[#0051d5] transition-all relative cursor-pointer bg-[#f7f9fb] hover:bg-white"
                  >
                    {/* D-Day Tag */}
                    <div
                      className={`absolute top-3.5 right-3.5 font-bold text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider ${dDayBadgeColor} shadow-2xs`}
                    >
                      {dDayLabel}
                    </div>

                    {/* Logo & Company info */}
                    <div className="flex items-start gap-3 mb-2 pr-14">
                      <div className="w-10 h-10 rounded-lg border border-[#c5c5d3]/50 flex-shrink-0 bg-white p-1 flex items-center justify-center overflow-hidden">
                        {job.logo ? (
                          <img
                            src={job.logo}
                            alt={job.company}
                            className="w-full h-full object-contain"
                            referrerPolicy="no-referrer"
                            onError={e => {
                              // fallback to initial
                              (e.target as HTMLElement).style.display = 'none';
                            }}
                          />
                        ) : (
                          <span className="text-xs font-bold text-[#00236f]">
                            {job.initials}
                          </span>
                        )}
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-[#757682] mb-0.5">
                          {isKo ? job.company : job.companyEn}
                        </p>
                        <h4 className="text-xs sm:text-sm font-bold text-[#191c1e] leading-snug group-hover:text-[#0051d5] transition-colors line-clamp-2">
                          {isKo ? job.title : job.titleEn}
                        </h4>
                      </div>
                    </div>

                    {/* Tags & Bookmark */}
                    <div className="flex items-center justify-between mt-3 pt-2 border-t border-[#e2e8f0]/60">
                      <div className="flex gap-1.5 flex-wrap">
                        <span className="bg-[#e6e8ea] px-2 py-0.5 rounded-md text-[11px] font-medium text-[#444651]">
                          {isKo ? job.categoryLabel : job.categoryLabelEn}
                        </span>
                        <span className="bg-[#e6e8ea] px-2 py-0.5 rounded-md text-[11px] font-medium text-[#444651]">
                          {isKo ? job.typeTag : job.typeTagEn}
                        </span>
                      </div>

                      <div className="flex items-center gap-1">
                        <button
                          onClick={e => {
                            e.stopPropagation();
                            setSelectedCompanyId(
                              job.company.includes('삼성')
                                ? 'samsung'
                                : job.company.includes('SK')
                                ? 'sk-hynix'
                                : job.company.includes('현대')
                                ? 'hyundai'
                                : 'kepco'
                            );
                            setCurrentView('spec_diagnosis');
                          }}
                          title={isKo ? '스펙 진단하기' : 'Diagnose Spec'}
                          className="p-1 text-[#757682] hover:text-[#0051d5] rounded-md transition-colors"
                        >
                          <span className="material-symbols-outlined text-[18px]">analytics</span>
                        </button>
                        <button
                          onClick={e => {
                            e.stopPropagation();
                            toggleBookmark(job.id);
                          }}
                          className={`p-1 rounded-md transition-colors ${
                            isBookmarked
                              ? 'text-[#0051d5]'
                              : 'text-[#757682] hover:text-[#0051d5]'
                          }`}
                        >
                          <span
                            className={`material-symbols-outlined text-[18px] ${
                              isBookmarked ? 'fill' : ''
                            }`}
                          >
                            bookmark
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
