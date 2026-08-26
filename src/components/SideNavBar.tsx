import React from 'react';
import { useApp } from '../context/AppContext';
import { NavView } from '../types';

interface SideNavBarProps {
  mobileOpen?: boolean;
  onCloseMobile?: () => void;
}

export const SideNavBar: React.FC<SideNavBarProps> = ({ mobileOpen, onCloseMobile }) => {
  const { currentView, setCurrentView, language, setIsPostJobModalOpen } = useApp();

  const isKo = language === 'ko';

  const navItems: Array<{
    id: NavView;
    labelKo: string;
    labelEn: string;
    icon: string;
  }> = [
    {
      id: 'calendar',
      labelKo: '공채 캘린더',
      labelEn: 'Calendar',
      icon: 'calendar_today'
    },
    {
      id: 'company_guide',
      labelKo: '기업별 가이드',
      labelEn: 'Company Guide',
      icon: 'domain'
    },
    {
      id: 'spec_diagnosis',
      labelKo: '내 스펙 진단',
      labelEn: 'Spec Diagnosis',
      icon: 'analytics'
    }
  ];

  const footerItems: Array<{
    id: NavView;
    labelKo: string;
    labelEn: string;
    icon: string;
  }> = [
    {
      id: 'settings',
      labelKo: '설정',
      labelEn: 'Settings',
      icon: 'settings'
    },
    {
      id: 'support',
      labelKo: '고객 지원',
      labelEn: 'Support',
      icon: 'help_outline'
    }
  ];

  const handleNavClick = (view: NavView) => {
    setCurrentView(view);
    if (onCloseMobile) onCloseMobile();
  };

  const navContent = (
    <div className="flex flex-col h-full py-6 px-4 text-[#dce1ff]">
      {/* Brand Header */}
      <div className="px-3 mb-7 flex flex-col gap-1">
        <div className="font-hanken text-[28px] font-bold text-white flex items-center gap-2 tracking-tight">
          <span className="material-symbols-outlined fill text-[32px] text-white">work</span>
          JobStitch
        </div>
        <div className="text-[#b4c5ff] text-xs font-semibold uppercase tracking-wider pl-0.5">
          {isKo ? '기업용 포털' : 'Enterprise Portal'}
        </div>
      </div>

      {/* CTA: Post New Job */}
      <div className="px-1 mb-6">
        <button
          onClick={() => setIsPostJobModalOpen(true)}
          className="w-full bg-[#316bf3] text-white hover:bg-[#1e3a8a] active:scale-[0.98] transition-all duration-200 py-2.5 px-4 rounded-xl text-sm font-semibold flex justify-center items-center gap-2 shadow-md hover:shadow-lg cursor-pointer"
        >
          <span className="material-symbols-outlined text-[18px]">add</span>
          <span>{isKo ? '새 일정 등록' : 'Post New Job'}</span>
        </button>
      </div>

      {/* Main Navigation Tabs */}
      <nav className="flex-1 flex flex-col gap-1.5">
        {navItems.map(item => {
          const isActive = currentView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`flex items-center gap-3.5 px-4 py-2.5 rounded-xl transition-all duration-200 text-left cursor-pointer font-medium text-sm ${
                isActive
                  ? 'bg-[#316bf3] text-white shadow-sm font-bold scale-[0.98]'
                  : 'text-[#90a8ff] hover:text-white hover:bg-[#1e3a8a]/70'
              }`}
            >
              <span
                className={`material-symbols-outlined text-[22px] ${isActive ? 'fill' : ''}`}
              >
                {item.icon}
              </span>
              <span>{isKo ? item.labelKo : item.labelEn}</span>
            </button>
          );
        })}
      </nav>

      {/* Footer Navigation */}
      <div className="flex flex-col gap-1 pt-4 border-t border-[#1e3a8a] mt-auto">
        {footerItems.map(item => {
          const isActive = currentView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`flex items-center gap-3.5 px-4 py-2 rounded-xl transition-all duration-200 text-left cursor-pointer text-sm ${
                isActive
                  ? 'bg-[#316bf3] text-white font-bold'
                  : 'text-[#90a8ff] hover:text-white hover:bg-[#1e3a8a]/60'
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
              <span>{isKo ? item.labelKo : item.labelEn}</span>
            </button>
          );
        })}
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Persistent Sidebar */}
      <aside className="hidden md:block w-[280px] h-screen fixed left-0 top-0 bg-[#00236f] border-r border-[#1e3a8a] z-40 select-none">
        {navContent}
      </aside>

      {/* Mobile Drawer Overlay */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-xs z-50 transition-opacity"
          onClick={onCloseMobile}
        >
          <div
            className="w-[280px] h-full bg-[#00236f] text-white shadow-2xl relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={onCloseMobile}
              className="absolute top-4 right-4 text-white/70 hover:text-white p-1 rounded-lg"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            {navContent}
          </div>
        </div>
      )}
    </>
  );
};
