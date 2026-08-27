export type Language = 'ko' | 'en';

export type NavView = 'calendar' | 'company_guide' | 'spec_diagnosis' | 'settings' | 'support';

export type CorpType = 'all' | 'corporation' | 'public';

export type JobRoleCategory = 'all' | 'it' | 'marketing' | 'finance' | 'hr' | 'engineering';

export interface JobPosting {
  id: string;
  company: string;
  companyEn: string;
  logo: string;
  logoAlt?: string;
  initials: string;
  title: string;
  titleEn: string;
  corpType: 'corporation' | 'public';
  category: 'it' | 'marketing' | 'finance' | 'hr' | 'engineering';
  categoryLabel: string;
  categoryLabelEn: string;
  typeTag: string;
  typeTagEn: string;
  location: string;
  locationEn: string;
  startDate: string; // YYYY-MM-DD
  endDate: string; // YYYY-MM-DD
  dDay: number; // 0 for D-Day, 1 for D-1, etc.
  status: 'active' | 'closing' | 'upcoming';
  description: string;
  descriptionEn: string;
  requirements: {
    minGpa: number;
    minLanguage: string;
    requiredCerts: string[];
    preferredCerts: string[];
  };
  link?: string;
}

export interface CompanyIntelligence {
  id: string;
  name: string;
  nameEn: string;
  division: string;
  divisionEn: string;
  logo: string;
  initials: string;
  category: string;
  categoryEn: string;
  competitionRate: string;
  competitionRateEn: string;
  overview: string;
  overviewEn: string;
  talentCuration: {
    icon: string;
    title: string;
    titleEn: string;
    description: string;
    descriptionEn: string;
    tags: Array<{
      icon: string;
      label: string;
      labelEn: string;
      primary?: boolean;
    }>;
  };
  avgPassSpec: {
    gpa: number;
    gpaMax: number;
    gpaProgress: number;
    gpaCutline: number;
    opic: string;
    opicEn: string;
    opicMin: string;
    opicProgress: number;
    toeic: string;
    toeicMin: number;
    toeicProgress: number;
    projectsAvg: string;
    projectsAvgEn: string;
    projectsProgress: number;
  };
  preferredCerts: Array<{
    title: string;
    titleEn: string;
    description: string;
    descriptionEn: string;
    type: 'essential' | 'high_priority' | 'recommended';
  }>;
  interviewTips: Array<{
    title: string;
    titleEn: string;
    tip: string;
    tipEn: string;
  }>;
}

export interface UserSpec {
  targetCompanyId: string;
  targetRole: string;
  gpa: number;
  englishProficiency: string;
  certifications: string[];
  projectCount: number;
  hasCodingTestScore: boolean;
  codingTestScore: number;
  ncsScore: number;
}

export interface DiagnosisResult {
  overallScore: number;
  radarData: {
    gpa: { user: number; cutline: number; max: number };
    language: { user: number; cutline: number; max: number; isWarning: boolean };
    certs: { user: number; cutline: number; max: number };
    projectExp: { user: number; cutline: number; max: number };
    codingTest: { user: number; cutline: number; max: number };
    ncs: { user: number; cutline: number; max: number; isWarning: boolean };
  };
  actionItems: Array<{
    id: string;
    level: 'critical' | 'warning' | 'solid';
    title: string;
    titleEn: string;
    description: string;
    descriptionEn: string;
    icon: string;
  }>;
}
