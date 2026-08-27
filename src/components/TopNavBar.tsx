import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { INITIAL_USER_PROFILE } from '../data/mockData';

interface TopNavBarProps {
  onOpenMobileMenu: () => void;
}

export const TopNavBar: React.FC<TopNavBarProps> = ({ onOpenMobileMenu }) => {
  const {
    currentView,
    language,
    setLanguage,
    searchQuery,
    setSearchQuery,
    notifications,
    markNotificationsAsRead,
    unreadNotificationCount,
    setCurrentView
  } = useApp();

  const [showNotifications, setShowNotifications] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [chatLog, setChatLog] = useState<Array<{ sender: 'user' | 'bot'; text: string; time: string }>>([
    {
      sender: 'bot',
      text: language === 'ko' 
        ? '안녕하세요! JobStitch 채용 및 스펙 어시스턴트입니다. 목표 기업이나 공채 일정에 관해 궁금한 점을 물어보세요.'
        : 'Hello! I am your JobStitch Recruitment & Spec Assistant. Feel free to ask anything about target companies or calendar schedules.',
      time: 'Just now'
    }
  ]);

  const isKo = language === 'ko';

  const viewTitles: Record<string, { ko: string; en: string }> = {
    calendar: { ko: '대시보드', en: 'Dashboard' },
    company_guide: { ko: '기업 인텔리전스', en: 'Company Intelligence' },
    spec_diagnosis: { ko: '내 스펙 진단', en: 'Spec Diagnosis' },
    settings: { ko: '설정', en: 'Settings' },
    support: { ko: '고객 지원', en: 'Support' }
  };

  const currentTitle = viewTitles[currentView] || viewTitles.calendar;

  const handleSendChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;

    const userText = chatMessage;
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setChatLog(prev => [...prev, { sender: 'user', text: userText, time: now }]);
    setChatMessage('');

    setTimeout(() => {
      let botReply = isKo
        ? '삼성전자와 SK하이닉스 2024 채용 공고는 현재 접수 중이며, 스펙 진단 탭에서 본인의 학점 및 어학 성적을 분석해보실 수 있습니다.'
        : 'Recruitment postings for Samsung Electronics and SK Hynix are currently open. You can check your GPA and language fit in the Spec Diagnosis tab.';

      if (userText.includes('삼성') || userText.toLowerCase().includes('samsung')) {
        botReply = isKo
          ? '삼성전자는 OPIc IH 이상이 사실상 필수 필터 기준이며, 코딩테스트 2문항 완구현이 핵심 합격 요소입니다.'
          : 'Samsung Electronics requires at least OPIc IH as a baseline filter and strong DFS/BFS simulation coding test proficiency.';
      } else if (userText.includes('마감') || userText.toLowerCase().includes('deadline')) {
        botReply = isKo
          ? '이번 주 마감 공고는 삼성전자(D-Day)와 SK하이닉스(D-1)가 있습니다. 서류 제출 전 최종 검토를 권장합니다.'
          : 'Postings closing this week include Samsung Electronics (D-Day) and SK Hynix (D-1). Please finalize submissions promptly.';
      }

      setChatLog(prev => [...prev, { sender: 'bot', text: botReply, time: now }]);
    }, 600);
  };

  return (
    <header className="fixed top-0 right-0 w-full md:w-[calc(100%-280px)] h-20 bg-white/95 backdrop-blur-md border-b border-[#e2e8f0] shadow-xs z-30 flex justify-between items-center px-4 sm:px-8 transition-all">
      {/* Left: Mobile menu button + Search or Title */}
      <div className="flex items-center gap-3 md:gap-6 flex-1 max-w-xl">
        <button
          onClick={onOpenMobileMenu}
          className="md:hidden text-[#00236f] hover:bg-[#f1f5f9] p-2 rounded-lg transition-colors cursor-pointer"
          aria-label="Open menu"
        >
          <span className="material-symbols-outlined text-[26px]">menu</span>
        </button>

        {/* View Title on Mobile */}
        <h2 className="font-hanken font-bold text-lg text-[#00236f] md:hidden truncate">
          {isKo ? currentTitle.ko : currentTitle.en}
        </h2>

        {/* Search Bar (Desktop) */}
        <div className="relative w-full max-w-md hidden md:block">
          <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[#757682] text-[20px]">
            search
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder={
              isKo
                ? '기업, 직무, 또는 스펙 검색...'
                : 'Search companies, roles, or specs...'
            }
            className="w-full bg-[#f2f4f6] border border-[#c5c5d3]/60 hover:border-[#0051d5] rounded-full py-2 pl-10 pr-4 text-sm text-[#191c1e] placeholder:text-[#757682] focus:outline-hidden focus:ring-2 focus:ring-[#00236f]/20 focus:border-[#00236f] transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#757682] hover:text-[#191c1e] text-xs"
            >
              <span className="material-symbols-outlined text-[16px]">close</span>
            </button>
          )}
        </div>
      </div>

      {/* Center Title (Desktop) */}
      <h2 className="hidden lg:block font-hanken font-bold text-xl text-[#00236f] absolute left-[58%] -translate-x-1/2 tracking-tight">
        {isKo ? currentTitle.ko : currentTitle.en}
      </h2>

      {/* Right: Language switch, notifications, chat, profile */}
      <div className="flex items-center gap-2 sm:gap-4 relative">
        {/* Language Switch Toggle */}
        <div className="flex items-center bg-[#f2f4f6] p-0.5 rounded-lg border border-[#c5c5d3]/50">
          <button
            onClick={() => setLanguage('ko')}
            className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer ${
              language === 'ko'
                ? 'bg-white text-[#00236f] shadow-xs'
                : 'text-[#757682] hover:text-[#00236f]'
            }`}
          >
            한국어
          </button>
          <button
            onClick={() => setLanguage('en')}
            className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer ${
              language === 'en'
                ? 'bg-white text-[#00236f] shadow-xs'
                : 'text-[#757682] hover:text-[#00236f]'
            }`}
          >
            EN
          </button>
        </div>

        {/* Notifications Icon Button */}
        <div className="relative">
          <button
            onClick={() => {
              setShowNotifications(!showNotifications);
              setShowChat(false);
              setShowProfile(false);
              markNotificationsAsRead();
            }}
            className="text-[#444651] hover:text-[#00236f] hover:bg-[#f2f4f6] p-2 rounded-full transition-all relative cursor-pointer"
            aria-label="Notifications"
          >
            <span className="material-symbols-outlined text-[22px]">notifications</span>
            {unreadNotificationCount > 0 && (
              <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-[#ba1a1a] rounded-full ring-2 ring-white animate-pulse"></span>
            )}
          </button>

          {/* Notifications Dropdown */}
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-2xl shadow-xl border border-[#e2e8f0] p-4 z-50 animate-in fade-in slide-in-from-top-2">
              <div className="flex justify-between items-center pb-3 border-b border-[#f1f5f9]">
                <h4 className="font-hanken font-bold text-sm text-[#00236f]">
                  {isKo ? '알림 센터' : 'Notifications'}
                </h4>
                <span className="text-xs text-[#757682]">
                  {notifications.length} {isKo ? '개의 알림' : 'items'}
                </span>
              </div>
              <div className="flex flex-col gap-2 py-2 max-h-64 overflow-y-auto">
                {notifications.map(n => (
                  <div
                    key={n.id}
                    className="p-2.5 rounded-xl hover:bg-[#f8fafc] transition-colors flex items-start gap-3 text-left border border-transparent hover:border-[#e2e8f0]"
                  >
                    <span className="material-symbols-outlined text-[#0051d5] text-[20px] mt-0.5">
                      info
                    </span>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-[#191c1e]">{n.title}</p>
                      <span className="text-[11px] text-[#757682]">{n.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Chat / Inquiries Icon Button */}
        <div className="relative">
          <button
            onClick={() => {
              setShowChat(!showChat);
              setShowNotifications(false);
              setShowProfile(false);
            }}
            className="text-[#444651] hover:text-[#00236f] hover:bg-[#f2f4f6] p-2 rounded-full transition-all cursor-pointer"
            aria-label="Assistant Chat"
          >
            <span className="material-symbols-outlined text-[22px]">chat_bubble</span>
          </button>

          {/* Chat Modal / Popover */}
          {showChat && (
            <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-[#e2e8f0] p-4 z-50 flex flex-col h-[400px]">
              <div className="flex justify-between items-center pb-2.5 border-b border-[#f1f5f9]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-ping"></div>
                  <h4 className="font-hanken font-bold text-sm text-[#00236f]">
                    {isKo ? '채용 & 스펙 어시스턴트' : 'Recruitment AI Assistant'}
                  </h4>
                </div>
                <button
                  onClick={() => setShowChat(false)}
                  className="text-[#757682] hover:text-[#191c1e]"
                >
                  <span className="material-symbols-outlined text-[18px]">close</span>
                </button>
              </div>

              {/* Chat Log */}
              <div className="flex-1 overflow-y-auto py-3 space-y-2.5 text-xs">
                {chatLog.map((c, i) => (
                  <div
                    key={i}
                    className={`flex flex-col ${c.sender === 'user' ? 'items-end' : 'items-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-3.5 py-2 leading-relaxed ${
                        c.sender === 'user'
                          ? 'bg-[#0051d5] text-white rounded-tr-xs'
                          : 'bg-[#f2f4f6] text-[#191c1e] rounded-tl-xs'
                      }`}
                    >
                      {c.text}
                    </div>
                    <span className="text-[10px] text-[#757682] mt-0.5 px-1">{c.time}</span>
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <form onSubmit={handleSendChat} className="pt-2 border-t border-[#f1f5f9] flex gap-2">
                <input
                  type="text"
                  value={chatMessage}
                  onChange={e => setChatMessage(e.target.value)}
                  placeholder={isKo ? '질문을 입력하세요...' : 'Type a question...'}
                  className="flex-1 bg-[#f2f4f6] rounded-xl px-3 py-2 text-xs text-[#191c1e] focus:outline-hidden focus:ring-1 focus:ring-[#0051d5]"
                />
                <button
                  type="submit"
                  className="bg-[#00236f] hover:bg-[#0051d5] text-white p-2 rounded-xl flex items-center justify-center transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px]">send</span>
                </button>
              </form>
            </div>
          )}
        </div>

        {/* User Profile Avatar with Dropdown */}
        <div className="relative">
          <button
            onClick={() => {
              setShowProfile(!showProfile);
              setShowNotifications(false);
              setShowChat(false);
            }}
            className="flex items-center gap-2 p-1 rounded-full hover:ring-2 hover:ring-[#00236f]/20 transition-all cursor-pointer ml-1"
          >
            <img
              src={INITIAL_USER_PROFILE.avatar}
              alt="User Profile"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover border border-[#c5c5d3]"
            />
          </button>

          {/* Profile Dropdown */}
          {showProfile && (
            <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-[#e2e8f0] p-4 z-50">
              <div className="flex items-center gap-3 pb-3 border-b border-[#f1f5f9]">
                <img
                  src={INITIAL_USER_PROFILE.avatar}
                  alt="Profile"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h5 className="font-hanken font-bold text-sm text-[#00236f]">
                    {isKo ? INITIAL_USER_PROFILE.name : INITIAL_USER_PROFILE.nameEn}
                  </h5>
                  <p className="text-xs text-[#757682]">{INITIAL_USER_PROFILE.email}</p>
                </div>
              </div>
              <div className="py-2 flex flex-col gap-1">
                <button
                  onClick={() => {
                    setCurrentView('spec_diagnosis');
                    setShowProfile(false);
                  }}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-[#191c1e] hover:bg-[#f2f4f6] text-left"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#0051d5]">
                    analytics
                  </span>
                  {isKo ? '내 스펙 진단 열기' : 'View My Spec'}
                </button>
                <button
                  onClick={() => {
                    setCurrentView('settings');
                    setShowProfile(false);
                  }}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-[#191c1e] hover:bg-[#f2f4f6] text-left"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#757682]">
                    settings
                  </span>
                  {isKo ? '계정 및 환경설정' : 'Account & Settings'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
