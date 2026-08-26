import React, { useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { SideNavBar } from './components/SideNavBar';
import { TopNavBar } from './components/TopNavBar';
import { CalendarView } from './components/CalendarView';
import { CompanyGuideView } from './components/CompanyGuideView';
import { SpecDiagnosisView } from './components/SpecDiagnosisView';
import { SettingsView } from './components/SettingsView';
import { SupportView } from './components/SupportView';
import { JobDetailModal } from './components/JobDetailModal';
import { PostJobModal } from './components/PostJobModal';

const MainContent: React.FC = () => {
  const { currentView } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderActiveView = () => {
    switch (currentView) {
      case 'calendar':
        return <CalendarView />;
      case 'company_guide':
        return <CompanyGuideView />;
      case 'spec_diagnosis':
        return <SpecDiagnosisView />;
      case 'settings':
        return <SettingsView />;
      case 'support':
        return <SupportView />;
      default:
        return <CalendarView />;
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f9fb] flex flex-col font-sans text-[#191c1e] antialiased selection:bg-[#00236f] selection:text-white">
      {/* Side Navigation Bar */}
      <SideNavBar
        mobileOpen={mobileMenuOpen}
        onCloseMobile={() => setMobileMenuOpen(false)}
      />

      {/* Main App Container */}
      <div className="flex-1 flex flex-col md:pl-[280px]">
        {/* Top Header */}
        <TopNavBar onOpenMobileMenu={() => setMobileMenuOpen(true)} />

        {/* Main Content Area */}
        <main className="flex-1 p-4 sm:p-8 mt-20 max-w-7xl w-full mx-auto animate-in fade-in duration-300">
          {renderActiveView()}
        </main>
      </div>

      {/* Global Modals */}
      <JobDetailModal />
      <PostJobModal />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
