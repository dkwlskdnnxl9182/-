import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  Language,
  NavView,
  CorpType,
  JobRoleCategory,
  JobPosting,
  UserSpec,
  CompanyIntelligence,
  DiagnosisResult
} from '../types';
import {
  INITIAL_JOB_POSTINGS,
  COMPANIES_INTELLIGENCE,
  INITIAL_USER_SPEC,
  INITIAL_USER_PROFILE,
  calculateDiagnosis
} from '../data/mockData';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  currentView: NavView;
  setCurrentView: (view: NavView) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  corpFilter: CorpType;
  setCorpFilter: (filter: CorpType) => void;
  roleFilter: JobRoleCategory;
  setRoleFilter: (role: JobRoleCategory) => void;
  jobPostings: JobPosting[];
  addJobPosting: (job: Omit<JobPosting, 'id'>) => void;
  selectedJob: JobPosting | null;
  setSelectedJob: (job: JobPosting | null) => void;
  isPostJobModalOpen: boolean;
  setIsPostJobModalOpen: (open: boolean) => void;
  selectedCompanyId: string;
  setSelectedCompanyId: (id: string) => void;
  selectedCompany: CompanyIntelligence;
  userSpec: UserSpec;
  updateUserSpec: (updates: Partial<UserSpec>) => void;
  diagnosisResult: DiagnosisResult;
  runDiagnosis: () => void;
  isDiagnosing: boolean;
  bookmarks: string[];
  toggleBookmark: (jobId: string) => void;
  notifications: Array<{ id: string; title: string; time: string; read: boolean }>;
  markNotificationsAsRead: () => void;
  unreadNotificationCount: number;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ko');
  const [currentView, setCurrentView] = useState<NavView>('calendar');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [corpFilter, setCorpFilter] = useState<CorpType>('all');
  const [roleFilter, setRoleFilter] = useState<JobRoleCategory>('all');
  const [jobPostings, setJobPostings] = useState<JobPosting[]>(INITIAL_JOB_POSTINGS);
  const [selectedJob, setSelectedJob] = useState<JobPosting | null>(null);
  const [isPostJobModalOpen, setIsPostJobModalOpen] = useState<boolean>(false);
  const [selectedCompanyId, setSelectedCompanyId] = useState<string>('samsung');
  const [userSpec, setUserSpec] = useState<UserSpec>(INITIAL_USER_SPEC);
  const [isDiagnosing, setIsDiagnosing] = useState<boolean>(false);
  const [bookmarks, setBookmarks] = useState<string[]>(['samsung-sw-2024']);
  const [notifications, setNotifications] = useState([
    { id: '1', title: '삼성전자 DX부문 마감 D-Day 안내', time: '10분 전', read: false },
    { id: '2', title: 'SK하이닉스 서류 발표 일정 업데이트', time: '1시간 전', read: false },
    { id: '3', title: '스펙 진단 결과 새로운 추천 자격증이 있습니다', time: '3시간 전', read: true }
  ]);

  const selectedCompany =
    COMPANIES_INTELLIGENCE.find(c => c.id === selectedCompanyId) || COMPANIES_INTELLIGENCE[0];

  const [diagnosisResult, setDiagnosisResult] = useState<DiagnosisResult>(() =>
    calculateDiagnosis(userSpec, selectedCompanyId)
  );

  const updateUserSpec = (updates: Partial<UserSpec>) => {
    setUserSpec(prev => {
      const next = { ...prev, ...updates };
      setDiagnosisResult(calculateDiagnosis(next, selectedCompanyId));
      return next;
    });
  };

  const runDiagnosis = () => {
    setIsDiagnosing(true);
    setTimeout(() => {
      setDiagnosisResult(calculateDiagnosis(userSpec, selectedCompanyId));
      setIsDiagnosing(false);
    }, 450);
  };

  useEffect(() => {
    setDiagnosisResult(calculateDiagnosis(userSpec, selectedCompanyId));
  }, [selectedCompanyId]);

  const addJobPosting = (newJobData: Omit<JobPosting, 'id'>) => {
    const newJob: JobPosting = {
      ...newJobData,
      id: `custom-job-${Date.now()}`
    };
    setJobPostings(prev => [newJob, ...prev]);
  };

  const toggleBookmark = (jobId: string) => {
    setBookmarks(prev =>
      prev.includes(jobId) ? prev.filter(id => id !== jobId) : [...prev, jobId]
    );
  };

  const markNotificationsAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const unreadNotificationCount = notifications.filter(n => !n.read).length;

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        currentView,
        setCurrentView,
        searchQuery,
        setSearchQuery,
        corpFilter,
        setCorpFilter,
        roleFilter,
        setRoleFilter,
        jobPostings,
        addJobPosting,
        selectedJob,
        setSelectedJob,
        isPostJobModalOpen,
        setIsPostJobModalOpen,
        selectedCompanyId,
        setSelectedCompanyId,
        selectedCompany,
        userSpec,
        updateUserSpec,
        diagnosisResult,
        runDiagnosis,
        isDiagnosing,
        bookmarks,
        toggleBookmark,
        notifications,
        markNotificationsAsRead,
        unreadNotificationCount
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
