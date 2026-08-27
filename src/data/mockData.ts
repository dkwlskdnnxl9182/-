import { JobPosting, CompanyIntelligence, UserSpec } from '../types';

export const INITIAL_USER_PROFILE = {
  name: '김서연',
  nameEn: 'Seoyeon Kim',
  title: 'SW 엔지니어 지원자',
  titleEn: 'SW Engineer Candidate',
  avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGsGxsKy_Z0lvT9DatuJAZqfCyQC8hFwU8hl5qRIRG_ulyffV5CJ2XqoU3UCC11Fola7pZAmdj0fzCAoHDsQrmsGY2t0E3-h7nQJfYFdcL4CAUdMdrpystb4gBa5LVDMqeLTrQ3-Ta7E61fFretIOMq0KIDSWmdeq5MHTwK1fxL5Of2vwmdHeohIVtLnkNQMpY-yXsCcQuJ4ebRCmN6_9IHmwUCBNZnv5RaaTzXeXjMWL9NQ90JkTxTA',
  email: 'chacul826@gmail.com'
};

export const POPULAR_CERTIFICATIONS = [
  '정보처리기사',
  'SQLD (SQL 개발자)',
  'SQLP (SQL 전문가)',
  'ADsP (데이터분석 준전문가)',
  'AWS Certified Solutions Architect',
  'AWS Certified Cloud Practitioner',
  '삼성 SW 역량 테스트 (A형)',
  '삼성 SW 역량 테스트 (B형)',
  '정보보안기사',
  '컴퓨터활용능력 1급',
  '리눅스마스터 1급',
  '네트워크관리사 2급',
  'CKA (Certified Kubernetes Administrator)'
];

export const CERTIFICATION_TRANSLATIONS: Record<string, string> = {
  '정보처리기사': 'Engineer Information Processing',
  'SQLD (SQL 개발자)': 'SQLD Certification',
  'SQLP (SQL 전문가)': 'SQLP Expert',
  'ADsP (데이터분석 준전문가)': 'ADsP Data Analysis',
  'AWS Certified Solutions Architect': 'AWS Solutions Architect',
  'AWS Certified Cloud Practitioner': 'AWS Cloud Practitioner',
  '삼성 SW 역량 테스트 (A형)': 'Samsung SW Test (Level A)',
  '삼성 SW 역량 테스트 (B형)': 'Samsung SW Test (Level B)',
  '정보보안기사': 'Information Security Engineer',
  '컴퓨터활용능력 1급': 'Computer Specialist Lv.1',
  '리눅스마스터 1급': 'Linux Master Lv.1',
  '네트워크관리사 2급': 'Network Administrator Lv.2',
  'CKA (Certified Kubernetes Administrator)': 'CKA (Kubernetes Admin)'
};

export const INITIAL_USER_SPEC: UserSpec = {
  targetCompanyId: 'samsung',
  targetRole: '삼성전자 - IT (Samsung Electronics - IT)',
  gpa: 3.5,
  englishProficiency: 'opic_im3',
  certifications: ['정보처리기사'],
  projectCount: 2,
  hasCodingTestScore: true,
  codingTestScore: 72,
  ncsScore: 78
};

export const INITIAL_JOB_POSTINGS: JobPosting[] = [
  {
    id: 'samsung-sw-2024',
    company: '삼성전자',
    companyEn: 'Samsung Electronics',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAigYNqJs13s_lCdilygo1ZnZD5u2OBpfYNpq2cFzNWEW30X_jdXDD_cMouyg70u0kidwu6LSaWzDj3D9xeepqo5Eqc_muObyQ7ElvUxvK_TMOu4TUBXpuPWZlQdTpiMwdfmeFwWIwhtoxR7kzhKW-fjQF9g-UirvBJprjnvqA1GfFAjuXD1cOlgsvJ4NsTwyJ-VOZkatT_-Or5rs2tplvSnGjtPgxbUaDEdWgW4S4M57I1tYl-iCzoAQ',
    initials: 'S',
    title: '2024 글로벌 핵심인재 채용 (소프트웨어 엔지니어)',
    titleEn: '2024 Global Talent Recruitment (Software Engineer)',
    corpType: 'corporation',
    category: 'it',
    categoryLabel: 'IT / 소프트웨어',
    categoryLabelEn: 'IT / Software',
    typeTag: '신입',
    typeTagEn: 'New Graduate',
    location: '수원 / 서울 R&D',
    locationEn: 'Suwon / Seoul R&D',
    startDate: '2024-11-01',
    endDate: '2024-11-11',
    dDay: 0,
    status: 'closing',
    description: '삼성전자 DX부문 소프트웨어 개발 직군 신입 공채입니다. 알고리즘 코딩테스트 및 전공 역량 면접이 진행됩니다.',
    descriptionEn: 'Open recruitment for new software engineers in Samsung Electronics DX Division. Algorithm coding test and specialized technical interviews will be conducted.',
    requirements: {
      minGpa: 3.0,
      minLanguage: 'OPIc IH (or TOEIC Speaking 140+)',
      requiredCerts: ['전공 관련 기초 역량'],
      preferredCerts: ['정보처리기사', '삼성 SW 역량 B형 이상', 'SQLD']
    },
    link: 'https://www.samsungcareers.com'
  },
  {
    id: 'sk-hynix-rnd-2024',
    company: 'SK하이닉스',
    companyEn: 'SK Hynix',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWPey8x-1G8VitBQiDzCyl0RYVLJ8iMZpbppihnbANJBbwoCPGTAAMLRCQsK3oLpnmlkj1v5W_YJo6M2mdiS5YbwtunHd_vpiAfMx_t-GzN7R2lOWrH57nzpmarMBA5w3qUsrQEf6FSqovaRWUa3_gsJBzZUA6EIJqcOt8EbTlFoRVTSjXblnsA9Oh3wuxYBDM7Iq7nRRvCYULGUvYvQYhphMDNQgqdkL5z8-CSA488eUyFaZpRf1Ccg',
    initials: 'SK',
    title: '반도체 R&D 신입사원 채용',
    titleEn: 'Semiconductor R&D New Graduate Hiring',
    corpType: 'corporation',
    category: 'engineering',
    categoryLabel: '엔지니어링',
    categoryLabelEn: 'Engineering',
    typeTag: '수원/이천',
    typeTagEn: 'Suwon',
    location: '이천 / 청주',
    locationEn: 'Icheon / Cheongju',
    startDate: '2024-10-03',
    endDate: '2024-10-12',
    dDay: 1,
    status: 'closing',
    description: '차세대 DRAM / NAND Flash 설계 및 공정 개발을 담당할 우수 인재를 모십니다. SKCT 인적성 검사 포함.',
    descriptionEn: 'Hiring outstanding engineers for next-generation DRAM and NAND Flash design and process manufacturing. SKCT aptitude test included.',
    requirements: {
      minGpa: 3.2,
      minLanguage: 'OPIc IM2 이상',
      requiredCerts: ['전자/재료/물리/컴공 학사 이상'],
      preferredCerts: ['반도체 공정 실습 이수', '전자기사', '정보처리기사']
    },
    link: 'https://www.skhynix.com'
  },
  {
    id: 'kepco-admin-2024',
    company: '한국전력공사',
    companyEn: 'KEPCO',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkH69D5h_xV-q1cBF6QltYTYUICuLBgx_lhRvygknOuG2WO57qsiu91Gm76zMZvdgWKPzZSq4OQnkpJNevCwciX0c0UEIq9WT_nYo_vws9Jw9cjZ8CzopvGHcUgiC8Yjx9gjPbfemNjhvgn_GHMM80q1ihfepAjXIgH93ycRjYiOfzbkHqsAwIw2WF5XsSunJNmKzlQ8Te7BjFvyN1goOmR9Bp4JD5XdPvJClxQly79Uxi3FuDl5i07A',
    initials: 'KE',
    title: '공기업 사무/재무 공개채용',
    titleEn: 'Public Enterprise Admin & Finance Open Recruitment',
    corpType: 'public',
    category: 'finance',
    categoryLabel: '재무',
    categoryLabelEn: 'Finance',
    typeTag: '공공기관',
    typeTagEn: 'Public',
    location: '나주 본사 및 전국',
    locationEn: 'Naju HQ & Nationwide',
    startDate: '2025-01-09',
    endDate: '2025-01-14',
    dDay: 3,
    status: 'active',
    description: 'NCS 기반 블라인드 채용. 전력사업 기획 및 재무 관리, 공공 요금체계 운영 업무를 수행합니다.',
    descriptionEn: 'NCS-based blind recruitment. Responsible for power utility business planning, financial management, and public rate system operations.',
    requirements: {
      minGpa: 0,
      minLanguage: 'TOEIC 700+ (가산점 850+)',
      requiredCerts: ['컴퓨터활용능력 1급', '한국사능력검정 1급'],
      preferredCerts: ['재경관리사', '전산세무 1급', 'KBS한국어능력']
    },
    link: 'https://home.kepco.co.kr'
  },
  {
    id: 'hyundai-mobility-sw',
    company: '현대자동차',
    companyEn: 'Hyundai Motor Company',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAigYNqJs13s_lCdilygo1ZnZD5u2OBpfYNpq2cFzNWEW30X_jdXDD_cMouyg70u0kidwu6LSaWzDj3D9xeepqo5Eqc_muObyQ7ElvUxvK_TMOu4TUBXpuPWZlQdTpiMwdfmeFwWIwhtoxR7kzhKW-fjQF9g-UirvBJprjnvqA1GfFAjuXD1cOlgsvJ4NsTwyJ-VOZkatT_-Or5rs2tplvSnGjtPgxbUaDEdWgW4S4M57I1tYl-iCzoAQ',
    initials: 'HY',
    title: '미래 모빌리티 SDV 소프트웨어 연구개발',
    titleEn: 'Future SDV Mobility Software R&D',
    corpType: 'corporation',
    category: 'it',
    categoryLabel: 'IT / 소프트웨어',
    categoryLabelEn: 'IT / Software',
    typeTag: '신입 / 경력',
    typeTagEn: 'Entry / Experienced',
    location: '남양연구소 / 판교',
    locationEn: 'Namyang R&D / Pangyo',
    startDate: '2024-12-05',
    endDate: '2024-12-20',
    dDay: 9,
    status: 'active',
    description: '자율주행, 차량용 인포테인먼트(ccOS), 인공지능 기반 커넥티드카 플랫폼 소프트웨어 엔지니어를 모집합니다.',
    descriptionEn: 'Recruiting software engineers for autonomous driving, vehicle infotainment (ccOS), and AI-based connected car platforms.',
    requirements: {
      minGpa: 3.0,
      minLanguage: 'SPA or OPIc IM3+',
      requiredCerts: ['C/C++ / Python / ROS 역량'],
      preferredCerts: ['정보처리기사', '소프트웨어 프로젝트 수상 이력']
    },
    link: 'https://talent.hyundai.com'
  },
  {
    id: 'naver-cloud-ai',
    company: '네이버',
    companyEn: 'NAVER',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWPey8x-1G8VitBQiDzCyl0RYVLJ8iMZpbppihnbANJBbwoCPGTAAMLRCQsK3oLpnmlkj1v5W_YJo6M2mdiS5YbwtunHd_vpiAfMx_t-GzN7R2lOWrH57nzpmarMBA5w3qUsrQEf6FSqovaRWUa3_gsJBzZUA6EIJqcOt8EbTlFoRVTSjXblnsA9Oh3wuxYBDM7Iq7nRRvCYULGUvYvQYhphMDNQgqdkL5z8-CSA488eUyFaZpRf1Ccg',
    initials: 'NV',
    title: 'HyperCLOVA X & 클라우드 분산시스템 신입 공채',
    titleEn: 'HyperCLOVA X & Cloud Distributed Systems Graduate Hiring',
    corpType: 'corporation',
    category: 'it',
    categoryLabel: 'IT / 소프트웨어',
    categoryLabelEn: 'IT / Software',
    typeTag: '신입 공채',
    typeTagEn: 'Campus Recruitment',
    location: '성남 분당 그린팩토리',
    locationEn: 'Seongnam 1784 HQ',
    startDate: '2025-02-10',
    endDate: '2025-02-25',
    dDay: 14,
    status: 'active',
    description: '초거대 AI 모델 서빙, 대규모 트래픽 분산 시스템 설계 및 웹 플랫폼 엔지니어링 포지션입니다.',
    descriptionEn: 'Hyper-scale AI model serving, distributed high-traffic backend architecture and full-scale web platform engineering positions.',
    requirements: {
      minGpa: 0,
      minLanguage: '어학 점수 무관 (실무 코딩테스트 중심)',
      requiredCerts: ['깃허브 및 기술 블로그 포트폴리오'],
      preferredCerts: ['오픈소스 기여', '대규모 트래픽 처리 경험']
    },
    link: 'https://recruit.navercorp.com'
  },
  {
    id: 'lg-electronics-2025',
    company: 'LG전자',
    companyEn: 'LG Electronics',
    logo: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=200&q=80',
    initials: 'LG',
    title: '2025년 상반기 DX/AI 신입 공개채용',
    titleEn: '2025 H1 DX / AI New Graduate Recruitment',
    corpType: 'corporation',
    category: 'it',
    categoryLabel: 'IT / 소프트웨어',
    categoryLabelEn: 'IT / Software',
    typeTag: '신입',
    typeTagEn: 'New Graduate',
    location: '서울 / 판교 / 광주',
    locationEn: 'Seoul / Pangyo / Gwangju',
    startDate: '2025-03-05',
    endDate: '2025-03-18',
    dDay: 6,
    status: 'active',
    description: 'AI·IoT·스마트홈 제품 개발과 소프트웨어 플랫폼 엔지니어를 함께 모집합니다.',
    descriptionEn: 'Recruiting engineers for AI, IoT, and smart home product development platforms.',
    requirements: {
      minGpa: 3.0,
      minLanguage: 'OPIc IM3 이상 우대',
      requiredCerts: ['기초 전산/코딩 역량'],
      preferredCerts: ['정보처리기사', 'AWS 자격증', '프로젝트 포트폴리오']
    },
    link: 'https://www.lgcareers.com'
  },
  {
    id: 'posco-2025',
    company: '포스코',
    companyEn: 'POSCO',
    logo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=200&q=80',
    initials: 'P',
    title: '포스코 신입사원 채용 (기술/연구개발)',
    titleEn: 'POSCO New Graduate Recruitment (Technical / R&D)',
    corpType: 'corporation',
    category: 'engineering',
    categoryLabel: '엔지니어링',
    categoryLabelEn: 'Engineering',
    typeTag: '신입',
    typeTagEn: 'New Graduate',
    location: '포항 / 광양 / 서울',
    locationEn: 'Pohang / Gwangyang / Seoul',
    startDate: '2024-11-18',
    endDate: '2024-12-02',
    dDay: 24,
    status: 'active',
    description: '철강/재료/기계 및 공정 개발 직무를 담당할 신입 인재를 모집합니다.',
    descriptionEn: 'Recruiting new graduates for steel, materials, mechanical process, and R&D roles.',
    requirements: {
      minGpa: 3.0,
      minLanguage: '토익 700+ 우대',
      requiredCerts: ['공학 전공 또는 관련 학과'],
      preferredCerts: ['기계기사', '금속재료기사', 'CAD/시뮬레이션 경험']
    },
    link: 'https://www.posco.com'
  },
  {
    id: 'korea-railway-2025',
    company: '한국철도공사',
    companyEn: 'KORAIL',
    logo: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=200&q=80',
    initials: 'KR',
    title: '철도운영/기술직 공개채용',
    titleEn: 'Railway Operations & Technical Public Recruitment',
    corpType: 'public',
    category: 'engineering',
    categoryLabel: '엔지니어링',
    categoryLabelEn: 'Engineering',
    typeTag: '공공기관',
    typeTagEn: 'Public Enterprise',
    location: '전국',
    locationEn: 'Nationwide',
    startDate: '2025-03-01',
    endDate: '2025-03-13',
    dDay: 3,
    status: 'active',
    description: '철도 운영, 유지보수, 안전 관리와 기술 직무에 필요한 인력을 선발합니다.',
    descriptionEn: 'Hiring professionals for railway operations, maintenance, safety systems, and technical roles.',
    requirements: {
      minGpa: 0,
      minLanguage: 'TOEIC 700+ 또는 공인영어 인증',
      requiredCerts: ['관련 전공 또는 자격 요건 충족'],
      preferredCerts: ['철도 관련 자격증', '기계/전기/전산 전공', '한국사 능력 1급']
    },
    link: 'https://recruit.korail.com'
  },
  {
    id: 'kb-bank-2025',
    company: 'KB국민은행',
    companyEn: 'KB Kookmin Bank',
    logo: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=200&q=80',
    initials: 'KB',
    title: '2025년 경영기획/리스크관리 신입 공개채용',
    titleEn: '2025 Management Planning & Risk Management Graduate Recruitment',
    corpType: 'corporation',
    category: 'finance',
    categoryLabel: '재무',
    categoryLabelEn: 'Finance',
    typeTag: '신입',
    typeTagEn: 'New Graduate',
    location: '서울 / 전국 지점',
    locationEn: 'Seoul / Nationwide Branches',
    startDate: '2025-04-12',
    endDate: '2025-04-20',
    dDay: 9,
    status: 'active',
    description: '은행 경영기획, 리스크 관리, 영업 지원 포지션을 대상으로 공정하고 체계적인 선발 절차를 진행합니다.',
    descriptionEn: 'Open recruitment for business planning, risk management, and branch support roles in banking operations.',
    requirements: {
      minGpa: 3.0,
      minLanguage: '영어 커뮤니케이션 능력 우대',
      requiredCerts: ['무관'],
      preferredCerts: ['재무관리사', '금융권 인턴 경험', '빅데이터/통계 역량']
    },
    link: 'https://www.kbstar.com'
  },
  {
    id: 'hyundaimobis-2025',
    company: '현대모비스',
    companyEn: 'Hyundai Mobis',
    logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=200&q=80',
    initials: 'HM',
    title: '모빌리티 전장·SW 신입 공개채용',
    titleEn: 'Mobility Electronics & SW New Graduate Recruitment',
    corpType: 'corporation',
    category: 'engineering',
    categoryLabel: '엔지니어링',
    categoryLabelEn: 'Engineering',
    typeTag: '신입',
    typeTagEn: 'New Graduate',
    location: '용인 / 광주 / 판교',
    locationEn: 'Yongin / Gwangju / Pangyo',
    startDate: '2025-01-15',
    endDate: '2025-01-29',
    dDay: 7,
    status: 'active',
    description: '자동차 전장 제어 소프트웨어와 첨단 센서 시스템 개발 직무를 모집합니다.',
    descriptionEn: 'Recruiting software and automotive electronics engineers for advanced mobility control systems.',
    requirements: {
      minGpa: 3.2,
      minLanguage: 'OPIc IM2 이상 우대',
      requiredCerts: ['전기전자/컴퓨터공학 전공'],
      preferredCerts: ['임베디드 개발 경험', 'C/C++ 역량', '자동차 관련 프로젝트']
    },
    link: 'https://recruit.mobis.co.kr'
  },
  {
    id: 'kogas-2025',
    company: '한국가스공사',
    companyEn: 'KOGAS',
    logo: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=200&q=80',
    initials: 'KG',
    title: '가스·에너지 사업본부 신입 공개채용',
    titleEn: 'Energy & Gas Business Unit New Graduate Recruitment',
    corpType: 'public',
    category: 'engineering',
    categoryLabel: '엔지니어링',
    categoryLabelEn: 'Engineering',
    typeTag: '공공기관',
    typeTagEn: 'Public Enterprise',
    location: '인천 / 전국',
    locationEn: 'Incheon / Nationwide',
    startDate: '2025-03-20',
    endDate: '2025-04-01',
    dDay: 13,
    status: 'active',
    description: '에너지 인프라, 가스 공급망, 안전 관리 및 건설기술 분야의 인재를 선발합니다.',
    descriptionEn: 'Recruiting talent in energy infrastructure, gas network operations, safety systems, and engineering roles.',
    requirements: {
      minGpa: 0,
      minLanguage: '영어 성적 가산점 우대',
      requiredCerts: ['전공 무관 가능'],
      preferredCerts: ['기계/전기/화학 전공', '안전관리자 자격증', '토익 700+']
    },
    link: 'https://recruit.kogas.or.kr'
  },
  {
    id: 'cj-enm-2024',
    company: 'CJ ENM',
    companyEn: 'CJ ENM',
    logo: 'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=200&q=80',
    initials: 'CJ',
    title: '콘텐츠 마케팅/브랜드 운영 신입 채용',
    titleEn: 'Content Marketing & Brand Operations Graduate Recruitment',
    corpType: 'corporation',
    category: 'marketing',
    categoryLabel: '마케팅',
    categoryLabelEn: 'Marketing',
    typeTag: '신입',
    typeTagEn: 'New Graduate',
    location: '서울 / 성남',
    locationEn: 'Seoul / Seongnam',
    startDate: '2024-08-20',
    endDate: '2024-09-02',
    dDay: 11,
    status: 'active',
    description: '콘텐츠 제작, 브랜드 전략, 마케팅 운영 역량을 갖춘 인재를 선발합니다.',
    descriptionEn: 'Hiring graduates for content strategy, brand operations, and media marketing roles.',
    requirements: {
      minGpa: 3.0,
      minLanguage: '영어 발표력 우대',
      requiredCerts: ['마케팅 관련 전공 우대'],
      preferredCerts: ['광고 공모전 수상', '콘텐츠 기획 경험', '영상 편집 역량']
    },
    link: 'https://careers.cjenm.com'
  },
  {
    id: 'seoul-metro-2025',
    company: '서울교통공사',
    companyEn: 'Seoul Metro',
    logo: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=200&q=80',
    initials: 'SM',
    title: '교통안전/운영관리 기술직 공개채용',
    titleEn: 'Transportation Safety & Operations Public Recruitment',
    corpType: 'public',
    category: 'engineering',
    categoryLabel: '엔지니어링',
    categoryLabelEn: 'Engineering',
    typeTag: '공공기관',
    typeTagEn: 'Public Enterprise',
    location: '서울',
    locationEn: 'Seoul',
    startDate: '2025-05-08',
    endDate: '2025-05-21',
    dDay: 15,
    status: 'active',
    description: '철도 및 도시교통 운영, 안전관리, 시설 유지보수 직무 인력을 선발합니다.',
    descriptionEn: 'Hiring for transportation operations, safety systems, and public transit infrastructure maintenance.',
    requirements: {
      minGpa: 0,
      minLanguage: '영어 능력 우대',
      requiredCerts: ['기초 전공 적합성'],
      preferredCerts: ['교통안전기사', '전기/기계 관련 자격증', '일반시설 안전관리자']
    },
    link: 'https://www.seoulmetro.co.kr'
  },
  {
    id: 'kakao-2026',
    company: '카카오',
    companyEn: 'Kakao',
    logo: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=200&q=80',
    initials: 'K',
    title: '2026 서비스 플랫폼/AI 신입 공개채용',
    titleEn: '2026 Service Platform & AI Graduate Recruitment',
    corpType: 'corporation',
    category: 'it',
    categoryLabel: 'IT / 소프트웨어',
    categoryLabelEn: 'IT / Software',
    typeTag: '신입',
    typeTagEn: 'New Graduate',
    location: '판교 / 성남',
    locationEn: 'Pangyo / Seongnam',
    startDate: '2026-08-14',
    endDate: '2026-08-28',
    dDay: 4,
    status: 'active',
    description: '서비스 플랫폼, AI/검색, 데이터 기반 소프트웨어 엔지니어를 선발합니다.',
    descriptionEn: 'Recruiting engineers for service platforms, AI/search, and data-driven product engineering.',
    requirements: {
      minGpa: 3.0,
      minLanguage: '영어/코딩 역량 우대',
      requiredCerts: ['기초 프로그래밍 역량'],
      preferredCerts: ['정보처리기사', '오픈소스 프로젝트', 'AWS 자격증']
    },
    link: 'https://careers.kakao.com'
  },
  {
    id: 'lh-2026',
    company: '한국토지주택공사',
    companyEn: 'Korea Land & Housing Corporation',
    logo: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=200&q=80',
    initials: 'LH',
    title: '주택·도시개발/기술직 공개채용',
    titleEn: 'Housing & Urban Development Public Recruitment',
    corpType: 'public',
    category: 'engineering',
    categoryLabel: '엔지니어링',
    categoryLabelEn: 'Engineering',
    typeTag: '공공기관',
    typeTagEn: 'Public Enterprise',
    location: '전국',
    locationEn: 'Nationwide',
    startDate: '2026-09-03',
    endDate: '2026-09-17',
    dDay: 10,
    status: 'active',
    description: '국토개발·도시계획·건설기술 직무 인력을 선발합니다.',
    descriptionEn: 'Recruiting talent for land development, urban planning, and construction engineering roles.',
    requirements: {
      minGpa: 0,
      minLanguage: '영어 점수 가산점 우대',
      requiredCerts: ['전공 적합성'],
      preferredCerts: ['건축기사', '토목기사', '한국사능력검정']
    },
    link: 'https://www.lh.or.kr'
  },
  {
    id: 'namdong-power-2026',
    company: '한국남동발전',
    companyEn: 'Namdong Power',
    logo: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=200&q=80',
    initials: 'ND',
    title: '발전소 운영·기계·전기 신입 공개채용',
    titleEn: 'Power Plant Operations & Mechanical/Electrical Graduate Recruitment',
    corpType: 'public',
    category: 'engineering',
    categoryLabel: '엔지니어링',
    categoryLabelEn: 'Engineering',
    typeTag: '공공기관',
    typeTagEn: 'Public Enterprise',
    location: '전남/경남 발전소',
    locationEn: 'Jeonnam / Gyeongnam Power Plants',
    startDate: '2026-08-08',
    endDate: '2026-08-22',
    dDay: 11,
    status: 'active',
    description: '발전 설비 운영, 유지보수, 전기·기계 분야 인재를 선발합니다. 발전소 현장 안전·운영 역량을 중요하게 봅니다.',
    descriptionEn: 'Recruiting talent in power generation operations, maintenance, and electrical/mechanical engineering. Strong emphasis on plant safety and operational capability.',
    requirements: {
      minGpa: 0,
      minLanguage: '영어 점수 가산점 우대',
      requiredCerts: ['기계/전기/화공/전산 전공 우대'],
      preferredCerts: ['기계기사', '전기기사', '산업안전기사', '발전설비 유지보수 실무 경험']
    },
    link: 'https://www.kospo.co.kr'
  },
  {
    id: 'hana-bank-2026',
    company: '하나은행',
    companyEn: 'Hana Bank',
    logo: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=200&q=80',
    initials: 'HB',
    title: '2026년 영업관리/리스크관리 채용',
    titleEn: '2026 Sales Management & Risk Management Recruitment',
    corpType: 'corporation',
    category: 'finance',
    categoryLabel: '재무',
    categoryLabelEn: 'Finance',
    typeTag: '신입',
    typeTagEn: 'New Graduate',
    location: '서울 / 지방',
    locationEn: 'Seoul / Regional Offices',
    startDate: '2026-10-08',
    endDate: '2026-10-21',
    dDay: 7,
    status: 'active',
    description: '금융 리스크 관리, 영업 전략 및 고객 기반 운영 포지션을 선발합니다.',
    descriptionEn: 'Hiring for risk management, sales strategy, and customer operations in banking.',
    requirements: {
      minGpa: 3.0,
      minLanguage: '영어 커뮤니케이션 우대',
      requiredCerts: ['무관'],
      preferredCerts: ['재무관리사', '금융권 인턴 경험', '통계/분석 역량']
    },
    link: 'https://www.hanabank.com'
  }
];

export const COMPANIES_INTELLIGENCE: CompanyIntelligence[] = [
  {
    id: 'samsung',
    name: '삼성전자',
    nameEn: 'Samsung Electronics',
    division: '전자 부문 (DX / DS)',
    divisionEn: 'Electronics Div. (DX / DS)',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAigYNqJs13s_lCdilygo1ZnZD5u2OBpfYNpq2cFzNWEW30X_jdXDD_cMouyg70u0kidwu6LSaWzDj3D9xeepqo5Eqc_muObyQ7ElvUxvK_TMOu4TUBXpuPWZlQdTpiMwdfmeFwWIwhtoxR7kzhKW-fjQF9g-UirvBJprjnvqA1GfFAjuXD1cOlgsvJ4NsTwyJ-VOZkatT_-Or5rs2tplvSnGjtPgxbUaDEdWgW4S4M57I1tYl-iCzoAQ',
    initials: 'S',
    category: '전자 / IT',
    categoryEn: 'Electronics / IT',
    competitionRate: '경쟁 치열',
    competitionRateEn: 'High Competition',
    overview: '전략적 포지셔닝을 위한 최고 수준의 기업 인재 영입 프로필, 평균 스펙 및 우대 자격증을 분석하세요.',
    overviewEn: 'Analyze top-tier enterprise talent acquisition profiles, average specifications, and preferred certifications for strategic positioning.',
    talentCuration: {
      icon: 'psychology',
      title: '인재 큐레이션',
      titleEn: 'Talent Curation',
      description: '삼성전자는 인성 검사 및 면접에서 다음 핵심 가치를 보여주는 지원자를 우선합니다.',
      descriptionEn: 'Samsung Electronics prioritizes candidates demonstrating these core values during behavioral assessments and interviews.',
      tags: [
        { icon: 'lightbulb', label: '혁신', labelEn: 'Innovation', primary: true },
        { icon: 'handshake', label: '진정성', labelEn: 'Integrity' },
        { icon: 'public', label: '글로벌 마인드', labelEn: 'Global Mindset' },
        { icon: 'bolt', label: '민첩성', labelEn: 'Agility' }
      ]
    },
    avgPassSpec: {
      gpa: 3.85,
      gpaMax: 4.5,
      gpaProgress: 85,
      gpaCutline: 3.3,
      opic: 'IH (최소 IM2)',
      opicEn: 'IH (Min. IM2)',
      opicMin: 'opic_ih',
      opicProgress: 75,
      toeic: '850+',
      toeicMin: 850,
      toeicProgress: 80,
      projectsAvg: '평균 2.5회',
      projectsAvgEn: '2.5 Avg',
      projectsProgress: 60
    },
    preferredCerts: [
      {
        title: '정보처리기사',
        titleEn: 'Engineer Information Processing',
        description: 'SW 개발 직무에 강력히 권장됩니다. 종종 기본 필터로 작용합니다.',
        descriptionEn: 'Highly recommended for SW development roles. Often acts as a baseline filter.',
        type: 'essential'
      },
      {
        title: '삼성 SW 역량 테스트',
        titleEn: 'Samsung SW Competency Test',
        description: 'B형 필수, A형 우대. 직접적인 SW 엔지니어링 트랙의 경우 필수입니다.',
        descriptionEn: 'Level B required, Level A preferred. Mandatory for direct SW engineering tracks.',
        type: 'essential'
      },
      {
        title: 'AWS 공인 솔루션스 아키텍트',
        titleEn: 'AWS Certified Solutions Architect',
        description: '선택 사항이지만 클라우드/인프라 포지션에서 상당한 가산점이 부여됩니다.',
        descriptionEn: 'Optional but provides significant bonus weight for cloud/infrastructure positions.',
        type: 'recommended'
      }
    ],
    interviewTips: [
      {
        title: 'SW 코딩테스트 집중 공략',
        titleEn: 'SW Coding Test Strategy',
        tip: '시뮬레이션, DFS/BFS 완전탐색 문제 위주로 3시간 2문제 완벽 구현 연습이 필수적입니다.',
        tipEn: 'Focus on simulation and DFS/BFS search problems with 2 problems in 3 hours implementation focus.'
      },
      {
        title: '직무 에세이 스토리라인',
        titleEn: 'Job Essay Storyline',
        tip: '지원 직무와 연결된 프로젝트에서 겪은 기술적 난관과 문제 해결 과정을 수치화하여 기술하세요.',
        tipEn: 'Quantify your technical problem-solving process and engineering hurdles in relevant projects.'
      }
    ]
  },
  {
    id: 'sk-hynix',
    name: 'SK하이닉스',
    nameEn: 'SK Hynix',
    division: '반도체 R&D / 양산기술',
    divisionEn: 'Semiconductor R&D / Manufacturing',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWPey8x-1G8VitBQiDzCyl0RYVLJ8iMZpbppihnbANJBbwoCPGTAAMLRCQsK3oLpnmlkj1v5W_YJo6M2mdiS5YbwtunHd_vpiAfMx_t-GzN7R2lOWrH57nzpmarMBA5w3qUsrQEf6FSqovaRWUa3_gsJBzZUA6EIJqcOt8EbTlFoRVTSjXblnsA9Oh3wuxYBDM7Iq7nRRvCYULGUvYvQYhphMDNQgqdkL5z8-CSA488eUyFaZpRf1Ccg',
    initials: 'SK',
    category: '반도체 / 하드웨어',
    categoryEn: 'Semiconductors',
    competitionRate: '상위 5%',
    competitionRateEn: 'Top 5%',
    overview: '세계 최고 수준의 HBM 및 초미세 메모리 반도체 혁신을 주도하는 글로벌 테크 기업의 인재 평가 기준입니다.',
    overviewEn: 'Talent evaluation criteria for the global leader in HBM and ultra-dense memory semiconductor engineering.',
    talentCuration: {
      icon: 'military_tech',
      title: '인재 큐레이션',
      titleEn: 'Talent Curation',
      description: 'SK하이닉스는 도전 정신과 실행력, 협업을 통한 기술적 돌파구를 만드는 인재를 지향합니다.',
      descriptionEn: 'SK Hynix seeks talent that drives technical breakthroughs through VWBE spirit, challenge, and collaboration.',
      tags: [
        { icon: 'military_tech', label: '패기 (VWBE)', labelEn: 'VWBE Spirit', primary: true },
        { icon: 'groups', label: '원팀 협업', labelEn: 'One Team' },
        { icon: 'analytics', label: '데이터 분석력', labelEn: 'Data Analytics' },
        { icon: 'verified', label: '전문성', labelEn: 'Engineering Depth' }
      ]
    },
    avgPassSpec: {
      gpa: 3.78,
      gpaMax: 4.5,
      gpaProgress: 82,
      gpaCutline: 3.4,
      opic: 'IM2 이상',
      opicEn: 'IM2+ (Min)',
      opicMin: 'opic_im2',
      opicProgress: 70,
      toeic: '820+',
      toeicMin: 800,
      toeicProgress: 75,
      projectsAvg: '학부 연구/실습 2회',
      projectsAvgEn: '2 Lab Projects',
      projectsProgress: 65
    },
    preferredCerts: [
      {
        title: '반도체 공정/소자 실습 수료',
        titleEn: 'Semiconductor Fab Lab Certification',
        description: '클린룸 공정 실습 또는 8대 공정 프로젝트 이수 증빙 시 서류 가산점.',
        descriptionEn: 'Verified completion of 8 semiconductor fab manufacturing processes.',
        type: 'essential'
      },
      {
        title: 'SQLD 또는 데이터 분석 자격증',
        titleEn: 'SQLD or Data Analytics Certificate',
        description: '수율 개선 및 계측 데이터 처리 직무에서 강한 우대 적용.',
        descriptionEn: 'Strong preference for yield improvement and metrology data analysis roles.',
        type: 'high_priority'
      },
      {
        title: '전자기사 / 정보처리기사',
        titleEn: 'Electronic / Info Processing Engineer',
        description: '회로 설계 및 테스트 장비 제어 직무 가산점.',
        descriptionEn: 'Bonus points for circuit design and test equipment automation tracks.',
        type: 'recommended'
      }
    ],
    interviewTips: [
      {
        title: 'SKCT 인적성 철저 대비',
        titleEn: 'SKCT Preparation',
        tip: '수리/추리 파트의 시간 안배와 오답 감점 룰을 고려하여 정확도 위주로 공략하세요.',
        tipEn: 'Maintain high accuracy given the negative scoring rule on the SKCT cognitive section.'
      }
    ]
  },
  {
    id: 'hyundai',
    name: '현대자동차',
    nameEn: 'Hyundai Motors',
    division: '모빌리티 / R&D 본부',
    divisionEn: 'Mobility / R&D Division',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAigYNqJs13s_lCdilygo1ZnZD5u2OBpfYNpq2cFzNWEW30X_jdXDD_cMouyg70u0kidwu6LSaWzDj3D9xeepqo5Eqc_muObyQ7ElvUxvK_TMOu4TUBXpuPWZlQdTpiMwdfmeFwWIwhtoxR7kzhKW-fjQF9g-UirvBJprjnvqA1GfFAjuXD1cOlgsvJ4NsTwyJ-VOZkatT_-Or5rs2tplvSnGjtPgxbUaDEdWgW4S4M57I1tYl-iCzoAQ',
    initials: 'HY',
    category: '자동차 / 모빌리티',
    categoryEn: 'Automotive / Mobility',
    competitionRate: '상위 8%',
    competitionRateEn: 'Top 8%',
    overview: 'SDV(소프트웨어 중심 자동차), 스마트 팩토리 및 친환경 전동화 모빌리티를 이끄는 글로벌 완성차 기업.',
    overviewEn: 'Leading SDV (Software-Defined Vehicles), smart manufacturing, and green electrification mobility.',
    talentCuration: {
      icon: 'directions_car',
      title: '인재 큐레이션',
      titleEn: 'Talent Curation',
      description: '소프트웨어 융합 역량과 실패를 두려워하지 않는 개척자적 실행력을 중시합니다.',
      descriptionEn: 'Values software convergence capabilities and bold execution in next-gen mobility.',
      tags: [
        { icon: 'directions_car', label: '고객 최우선', labelEn: 'Customer First', primary: true },
        { icon: 'memory', label: 'SW 융합', labelEn: 'SW Convergence' },
        { icon: 'speed', label: '실행력', labelEn: 'Execution' },
        { icon: 'eco', label: '지속가능성', labelEn: 'Sustainability' }
      ]
    },
    avgPassSpec: {
      gpa: 3.7,
      gpaMax: 4.5,
      gpaProgress: 78,
      gpaCutline: 3.2,
      opic: 'IM3 (or SPA Lv.4)',
      opicEn: 'IM3 (or SPA Lv.4)',
      opicMin: 'opic_im3',
      opicProgress: 72,
      toeic: '830+',
      toeicMin: 800,
      toeicProgress: 78,
      projectsAvg: 'SW/하드웨어 캡스톤 2회',
      projectsAvgEn: '2 Capstones',
      projectsProgress: 65
    },
    preferredCerts: [
      {
        title: '정보처리기사',
        titleEn: 'Engineer Information Processing',
        description: '차량 제어 SW 및 인포테인먼트 개발 직군 필수 우대.',
        descriptionEn: 'Essential preference for in-vehicle control SW and infotainment tracks.',
        type: 'essential'
      },
      {
        title: '자율주행/임베디드 관련 프로젝트',
        titleEn: 'Autonomous / Embedded Projects',
        description: 'ROS2, AUTOSAR, Linux Kernel 등 실무 경험 포트폴리오 가점.',
        descriptionEn: 'High value on hands-on portfolios with ROS2, AUTOSAR, and Linux Kernel.',
        type: 'high_priority'
      }
    ],
    interviewTips: [
      {
        title: '직무 중심 상시 채용 PT',
        titleEn: 'Role-Based Presentation',
        tip: '본인의 포트폴리오 코드를 직접 설명하고 아키텍처 의사결정 이유를 논리적으로 방어하세요.',
        tipEn: 'Defend your architectural trade-offs and code logic clearly during technical presentations.'
      }
    ]
  },
  {
    id: 'kepco',
    name: '한국전력공사',
    nameEn: 'KEPCO',
    division: '사무 / 송배전 엔지니어링',
    divisionEn: 'Admin / Power Transmission',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkH69D5h_xV-q1cBF6QltYTYUICuLBgx_lhRvygknOuG2WO57qsiu91Gm76zMZvdgWKPzZSq4OQnkpJNevCwciX0c0UEIq9WT_nYo_vws9Jw9cjZ8CzopvGHcUgiC8Yjx9gjPbfemNjhvgn_GHMM80q1ihfepAjXIgH93ycRjYiOfzbkHqsAwIw2WF5XsSunJNmKzlQ8Te7BjFvyN1goOmR9Bp4JD5XdPvJClxQly79Uxi3FuDl5i07A',
    initials: 'KE',
    category: '공기업 / 에너지',
    categoryEn: 'Public Energy',
    competitionRate: '경쟁 80:1',
    competitionRateEn: '80:1 Ratio',
    overview: '국가 전력 인프라를 책임지는 대표 공기업의 직무능력표준(NCS) 및 정량 가산점 분석입니다.',
    overviewEn: 'NCS competency framework and quantitative bonus certification breakdown for KEPCO.',
    talentCuration: {
      icon: 'bolt',
      title: '인재 큐레이션',
      titleEn: 'Talent Curation',
      description: '청렴성과 공공성, 기술적 전문성을 겸비한 미래 에너지 선도 인재를 선발합니다.',
      descriptionEn: 'Selects future energy leaders with high ethical integrity, public service mind, and technical rigor.',
      tags: [
        { icon: 'verified_user', label: '청렴 윤리', labelEn: 'Integrity & Ethics', primary: true },
        { icon: 'bolt', label: '에너지 전문성', labelEn: 'Energy Depth' },
        { icon: 'public', label: '공공 기여', labelEn: 'Public Service' },
        { icon: 'safety_check', label: '안전 의식', labelEn: 'Safety Mind' }
      ]
    },
    avgPassSpec: {
      gpa: 0,
      gpaMax: 4.5,
      gpaProgress: 70,
      gpaCutline: 0,
      opic: '선택 (토익 환산)',
      opicEn: 'Optional (TOEIC Eq)',
      opicMin: 'none',
      opicProgress: 80,
      toeic: '850 (만점 기준)',
      toeicMin: 850,
      toeicProgress: 90,
      projectsAvg: 'NCS 직무경험/인턴',
      projectsAvgEn: 'NCS Internships',
      projectsProgress: 50
    },
    preferredCerts: [
      {
        title: '전기기사 / 전기공사기사 (쌍기사)',
        titleEn: 'Dual Electrical Engineering Certs',
        description: '기술직 지원 시 서류 100점 만점권 도달을 위한 필수 쌍기사 조합.',
        descriptionEn: 'Essential double-cert combination for reaching max points in document screening.',
        type: 'essential'
      },
      {
        title: '한국사능력검정 1급 & 컴활 1급',
        titleEn: 'Korean History Lv.1 & Comp Specialist Lv.1',
        description: '공통 가산점 10점 만점 확보용 기본 자격증.',
        descriptionEn: 'Basic prerequisite credentials to maximize common 10-point bonus.',
        type: 'essential'
      },
      {
        title: 'KBS한국어능력시험 2+급',
        titleEn: 'KBS Korean Proficiency 2+',
        description: '사무 직렬 최상위 서류 통과를 위한 핵심 가산점 자격증.',
        descriptionEn: 'Key differentiator for administrative track paper screening.',
        type: 'high_priority'
      }
    ],
    interviewTips: [
      {
        title: 'NCS 직무 면접 & 한전 최근 이슈',
        titleEn: 'NCS & Utility Industry Issues',
        tip: 'SMP 전력 도매가격, 신재생 분산에너지법, 전기요금 정상화 방안에 대한 정책 이해를 숙지하세요.',
        tipEn: 'Understand SMP power wholesale pricing, distributed renewable energy act, and grid policies.'
      }
    ]
  },
  {
    id: 'naver',
    name: '네이버',
    nameEn: 'NAVER',
    division: '검색 / 플랫폼 / AI 서비스',
    divisionEn: 'Search / Platform / AI Services',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWPey8x-1G8VitBQiDzCyl0RYVLJ8iMZpbppihnbANJBbwoCPGTAAMLRCQsK3oLpnmlkj1v5W_YJo6M2mdiS5YbwtunHd_vpiAfMx_t-GzN7R2lOWrH57nzpmarMBA5w3qUsrQEf6FSqovaRWUa3_gsJBzZUA6EIJqcOt8EbTlFoRVTSjXblnsA9Oh3wuxYBDM7Iq7nRRvCYULGUvYvQYhphMDNQgqdkL5z8-CSA488eUyFaZpRf1Ccg',
    initials: 'NV',
    category: '플랫폼 / 빅테크',
    categoryEn: 'Platform / Big Tech',
    competitionRate: '경쟁 치열',
    competitionRateEn: 'Very High Competition',
    overview: '검색, 추천, 클라우드, AI 서비스 군을 아우르는 네이버는 문제 정의와 서비스 지표 개선 역량을 중시합니다.',
    overviewEn: 'NAVER evaluates candidates on product thinking, metric-driven problem solving, and service design anchored in real user impact.',
    talentCuration: {
      icon: 'travel_explore',
      title: '인재 큐레이션',
      titleEn: 'Talent Curation',
      description: '실사용자 기준 문제 정의와 데이터 기반 의사결정을 동시에 수행하는 인재를 선호합니다.',
      descriptionEn: 'NAVER favors candidates who can define product problems and justify decisions with measurable user impact.',
      tags: [
        { icon: 'insights', label: '데이터 드리븐', labelEn: 'Data Driven', primary: true },
        { icon: 'smart_toy', label: 'AI 감각', labelEn: 'AI Sense' },
        { icon: 'speed', label: '실행력', labelEn: 'Execution' },
        { icon: 'groups', label: '협업', labelEn: 'Collaboration' }
      ]
    },
    avgPassSpec: {
      gpa: 3.8,
      gpaMax: 4.5,
      gpaProgress: 80,
      gpaCutline: 3.2,
      opic: 'IM3 이상',
      opicEn: 'IM3+',
      opicMin: 'opic_im3',
      opicProgress: 78,
      toeic: '820+',
      toeicMin: 820,
      toeicProgress: 80,
      projectsAvg: '프로덕트 / AI 프로젝트 2회',
      projectsAvgEn: '2 Product / AI Projects',
      projectsProgress: 68
    },
    preferredCerts: [
      {
        title: '정보처리기사',
        titleEn: 'Engineer Information Processing',
        description: '서류 심사에서 기본 전산 역량을 증명하는 대표 자격증입니다.',
        descriptionEn: 'Representative technical credential for validating core software competency.',
        type: 'essential'
      },
      {
        title: 'SQLD / ADsP',
        titleEn: 'SQLD / ADsP',
        description: '서비스 지표 해석, 추천 모델, 데이터 기반 의사결정이 필요한 직무에서 강력한 가산점.',
        descriptionEn: 'High-value for analytics, recommendation systems, and metric-driven roles.',
        type: 'high_priority'
      },
      {
        title: 'AWS / Azure 자격증',
        titleEn: 'AWS / Azure Certification',
        description: '플랫폼 엔지니어링 또는 클라우드 서비스 직무에서 서류와 면접 모두에 유리합니다.',
        descriptionEn: 'Strong advantage in platform and cloud-focused engineering tracks.',
        type: 'recommended'
      }
    ],
    interviewTips: [
      {
        title: '서비스 지표 기반 답변',
        titleEn: 'Metric-Centered Answers',
        tip: '기술 설명 시 “어떤 지표가 개선됐는지”, “실험 설계는 어떻게 했는지”, “수치 근거를 어떻게 제시했는지”를 명확히 말해야 합니다.',
        tipEn: 'Explain metrics, experiment design, and measurable outcomes as part of every technical answer.'
      },
      {
        title: '코딩테스트는 시간 안배와 복잡도 설명',
        titleEn: 'Coding Test Efficiency',
        tip: '문제를 푸는 방법뿐 아니라 시간복잡도, 예외 처리, 테스트 케이스 설계까지 설명해 실무형 사고를 보여주세요.',
        tipEn: 'Describe time complexity, edge cases, and validation strategy to signal production-level thinking.'
      },
      {
        title: '프로덕트 리더십 질문 대비',
        titleEn: 'Product Leadership Prep',
        tip: '추천 서비스, 검색 품질, 사용자 경험 개선 사례를 떠올려 “문제 정의 → 가설 → 지표 → 개선” 흐름으로 답변하세요.',
        tipEn: 'Use the product-thinking framework of problem definition, hypothesis, metric, and iteration.'
      }
    ]
  },
  {
    id: 'lg-electronics',
    name: 'LG전자',
    nameEn: 'LG Electronics',
    division: 'AI / DX / 가전 플랫폼',
    divisionEn: 'AI / DX / Home Platform',
    logo: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=200&q=80',
    initials: 'LG',
    category: '전자 / 가전 / AI',
    categoryEn: 'Electronics / Home / AI',
    competitionRate: '경쟁 높음',
    competitionRateEn: 'High Competition',
    overview: '가전, AI, IoT, 디지털 전환 영역에서 제품 경영 인사이트와 기술 실무 역량을 함께 검증하는 기업입니다.',
    overviewEn: 'LG Electronics balances product strategy and technical execution, especially in AI, IoT, and digital transformation.',
    talentCuration: {
      icon: 'smartphone',
      title: '인재 큐레이션',
      titleEn: 'Talent Curation',
      description: '시장 감각과 기술 실행력을 함께 갖춘 인재를 선호하며, 제품 이해를 바탕으로 기술을 풀어내는 힘을 중시합니다.',
      descriptionEn: 'They value candidates who can connect market insight with technical implementation and product understanding.',
      tags: [
        { icon: 'smartphone', label: '제품감각', labelEn: 'Product Sense', primary: true },
        { icon: 'integration_instructions', label: '기술 연계', labelEn: 'Technical Integration' },
        { icon: 'hub', label: '시스템 사고', labelEn: 'Systems Thinking' },
        { icon: 'rocket_launch', label: '혁신 실행', labelEn: 'Innovation Execution' }
      ]
    },
    avgPassSpec: {
      gpa: 3.7,
      gpaMax: 4.5,
      gpaProgress: 78,
      gpaCutline: 3.2,
      opic: 'IM3 이상',
      opicEn: 'IM3+',
      opicMin: 'opic_im3',
      opicProgress: 76,
      toeic: '800+',
      toeicMin: 800,
      toeicProgress: 76,
      projectsAvg: '프로젝트 2~3개',
      projectsAvgEn: '2–3 Projects',
      projectsProgress: 62
    },
    preferredCerts: [
      {
        title: '정보처리기사',
        titleEn: 'Engineer Information Processing',
        description: '서류 전반에서 기술 기반 역량을 보여주는 대표 자격증입니다.',
        descriptionEn: 'A standard credential that signals core technical ability in documentation review.',
        type: 'essential'
      },
      {
        title: 'AWS / Azure 자격증',
        titleEn: 'AWS / Azure Certification',
        description: 'AI, 클라우드, 서비스 플랫폼 기획 직무에서 특히 좋은 비교 우위가 됩니다.',
        descriptionEn: 'Useful for AI, cloud, and platform strategy roles where infrastructure understanding matters.',
        type: 'high_priority'
      },
      {
        title: '제품/UX 프로젝트 경험',
        titleEn: 'Product / UX Experience',
        description: '가전 제품 서비스와 사용자 경험을 함께 이해하는 능력을 강조하는 포지션에서 강점입니다.',
        descriptionEn: 'Strong differentiator in roles related to consumer products and service experience.',
        type: 'recommended'
      }
    ],
    interviewTips: [
      {
        title: '제품 이해를 코드와 연결하기',
        titleEn: 'Link Product Understanding to Code',
        tip: '자기소개나 프로젝트 설명에서 “사용자 문제를 어떻게 정의했고, 왜 이 기술을 선택했는지”를 연결해서 말하세요.',
        tipEn: 'Tie product insight to technology choices and user pain points in every project story.'
      },
      {
        title: 'AI/IoT 프로젝트 설계 역량',
        titleEn: 'AI / IoT Design Thinking',
        tip: '센서, 네트워크, 사용자 흐름, 데이터 수집까지 포함한 시스템 관점 설명이 중요합니다.',
        tipEn: 'Stress end-to-end thinking: sensing, connectivity, user flow, and data collection logic.'
      },
      {
        title: '팀 협업 기반 답변 준비',
        titleEn: 'Team Collaboration Preparation',
        tip: '프로젝트에서 갈등이 생겼을 때, 기술적 우선순위와 협업 방식까지 구체적으로 설명하면 실무형 답변이 됩니다.',
        tipEn: 'Show how you resolve trade-offs and align engineering decisions in a team context.'
      }
    ]
  },
  {
    id: 'kb-bank',
    name: 'KB국민은행',
    nameEn: 'KB Kookmin Bank',
    division: '영업관리 / 리스크 / 경영기획',
    divisionEn: 'Sales / Risk / Strategy',
    logo: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=200&q=80',
    initials: 'KB',
    category: '금융 / 은행',
    categoryEn: 'Finance / Banking',
    competitionRate: '경쟁 높음',
    competitionRateEn: 'High Competition',
    overview: 'KB국민은행은 딜레마 해결 능력, 고객 이해, 리스크 인식, 데이터 기반 판단력을 함께 보려는 경향이 강합니다.',
    overviewEn: 'KB Kookmin Bank looks for candidates who can balance customer value, risk awareness, and data-informed decision making.',
    talentCuration: {
      icon: 'account_balance',
      title: '인재 큐레이션',
      titleEn: 'Talent Curation',
      description: '금융권은 숫자 감각과 고객 중심 사고를 동시에 보여주는 인재를 선호합니다.',
      descriptionEn: 'Banking roles emphasize analytical strength, customer empathy, and sound judgment under uncertainty.',
      tags: [
        { icon: 'trending_up', label: '숫자 감각', labelEn: 'Analytical Sense', primary: true },
        { icon: 'support_agent', label: '고객 이해', labelEn: 'Customer Insight' },
        { icon: 'warning', label: '리스크 인식', labelEn: 'Risk Awareness' },
        { icon: 'leaderboard', label: '운영성', labelEn: 'Operational Discipline' }
      ]
    },
    avgPassSpec: {
      gpa: 3.6,
      gpaMax: 4.5,
      gpaProgress: 75,
      gpaCutline: 3.0,
      opic: 'IM3 이상',
      opicEn: 'IM3+',
      opicMin: 'opic_im3',
      opicProgress: 74,
      toeic: '800+',
      toeicMin: 800,
      toeicProgress: 72,
      projectsAvg: '팀 프로젝트 2개 이상',
      projectsAvgEn: '2+ Team Projects',
      projectsProgress: 58
    },
    preferredCerts: [
      {
        title: '재무관리사 / 투자자산운용사',
        titleEn: 'Finance / Asset Management Certs',
        description: '리스크, 자산, 예산 운영 분야에서 전문성을 보여주기 좋습니다.',
        descriptionEn: 'Useful for demonstrating domain depth in risk, budgeting, and asset planning.',
        type: 'essential'
      },
      {
        title: 'SQLD / ADsP',
        titleEn: 'SQLD / ADsP',
        description: '데이터 기반 영업 기획과 리스크 분석에 높은 가산점이 됩니다.',
        descriptionEn: 'Strong advantage for data-led planning and operational risk analysis tasks.',
        type: 'high_priority'
      },
      {
        title: '금융권 인턴/실무 경험',
        titleEn: 'Finance Internship Experience',
        description: '어려운 고객 상황과 내부 운영 절차를 이해하는 기반이 됩니다.',
        descriptionEn: 'Signals readiness for bank-specific workflows, customer handling, and risk processes.',
        type: 'recommended'
      }
    ],
    interviewTips: [
      {
        title: '숫자 기반 사고를 보여주기',
        titleEn: 'Show Quantitative Judgment',
        tip: '예산, 수익, 리스크, 고객 이탈률 등 구체 수치로 설명할 수 있어야 분위기보다 실제 문제해결력을 보일 수 있습니다.',
        tipEn: 'Use concrete metrics such as revenue, risk, retention, or operating efficiency to show practical judgment.'
      },
      {
        title: '서류에서의 고객 중심 문제 정의',
        titleEn: 'Customer-Centered Storytelling',
        tip: '고객 문제를 해결한 경험을 “왜 그 문제가 중요했는지, 어떤 기준으로 판단했는지”까지 연결해 설명하세요.',
        tipEn: 'Explain why the customer problem mattered and how you prioritized the intervention.'
      },
      {
        title: '금융 이슈 질문 대비',
        titleEn: 'Finance Issue Awareness',
        tip: '금리 변동, 가계부채, 디지털 전환, 규제 변화에 대한 이해를 간단한 사례로 설명할 수 있어야 합니다.',
        tipEn: 'Be ready to discuss interest-rate changes, household debt, digital transformation, and regulatory shifts.'
      }
    ]
  },
  {
    id: 'hyundai-mobis',
    name: '현대모비스',
    nameEn: 'Hyundai Mobis',
    division: '전장 / 미션 컨트롤 / SW',
    divisionEn: 'Electronics / Control / SW',
    logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=200&q=80',
    initials: 'HM',
    category: '자동차 / 전장',
    categoryEn: 'Automotive / Electronics',
    competitionRate: '상위 10%',
    competitionRateEn: 'Top 10%',
    overview: '현대모비스는 전동화, ADAS, 임베디드 SW 설계 역량을 동시에 검증하는 기업입니다. 제품 안정성과 실무 구현능력을 중요하게 봅니다.',
    overviewEn: 'Hyundai Mobis values embedded software reliability, systems understanding, and the ability to design robust automotive electronics.',
    talentCuration: {
      icon: 'precision_manufacturing',
      title: '인재 큐레이션',
      titleEn: 'Talent Curation',
      description: '전기전자, 제어, 임베디드 SW 지식이 결합된 인재를 선호하며, 실무 적용 가능성을 중요하게 봅니다.',
      descriptionEn: 'They seek candidates who blend electrical engineering, control logic, and embedded software experience with field applicability.',
      tags: [
        { icon: 'memory', label: '임베디드', labelEn: 'Embedded', primary: true },
        { icon: 'developer_board', label: '전장', labelEn: 'Electronics' },
        { icon: 'precision_manufacturing', label: '품질', labelEn: 'Quality' },
        { icon: 'speed', label: '시스템 최적화', labelEn: 'System Optimization' }
      ]
    },
    avgPassSpec: {
      gpa: 3.7,
      gpaMax: 4.5,
      gpaProgress: 78,
      gpaCutline: 3.2,
      opic: 'IM2 이상',
      opicEn: 'IM2+',
      opicMin: 'opic_im2',
      opicProgress: 73,
      toeic: '800+',
      toeicMin: 800,
      toeicProgress: 74,
      projectsAvg: '임베디드/제어 프로젝트 2회',
      projectsAvgEn: '2 Embedded Projects',
      projectsProgress: 66
    },
    preferredCerts: [
      {
        title: '전자기사 / 전기기사',
        titleEn: 'Electrical / Electronics Engineer',
        description: '전장 제어/전원 설계 직무에서 실질적 경쟁력을 높여줍니다.',
        descriptionEn: 'Strong advantage in control, power, and electronics design tracks.',
        type: 'essential'
      },
      {
        title: 'C / C++ / RTOS 경험',
        titleEn: 'C / C++ / RTOS Experience',
        description: '임베디드 소프트웨어 구현 능력을 증명하는 가장 직접적인 역량입니다.',
        descriptionEn: 'Direct evidence of embedded software engineering capability and real-time thinking.',
        type: 'high_priority'
      },
      {
        title: '자동차 제어 프로젝트',
        titleEn: 'Automotive Control Projects',
        description: 'ADAS, 제어기, 센서, 통신 프로토콜 프로젝트가 매우 유리합니다.',
        descriptionEn: 'Highly valuable for ADAS, control units, sensor systems, and communication protocols.',
        type: 'recommended'
      }
    ],
    interviewTips: [
      {
        title: '임베디드 제어 로직 설명',
        titleEn: 'Embedded Control Logic Explanation',
        tip: '프로젝트 설명을 “입력 → 제어 로직 → 출력 → 검증” 흐름으로 정리해 논리적 설계 능력을 보여주세요.',
        tipEn: 'Explain projects in a clear flow: input, control logic, output, and verification.'
      },
      {
        title: '시스템 안정성 질문 준비',
        titleEn: 'Reliability / Stability Prep',
        tip: '센서 노이즈, 전원 변동, 타임아웃 처리, 재현 조건 등을 언급하며 안정성 설계를 설명하면 좋습니다.',
        tipEn: 'Show how you handle sensor noise, power fluctuations, timeout logic, and reproducibility issues.'
      },
      {
        title: '실무형 코딩테스트 전략',
        titleEn: 'Practical Coding Strategy',
        tip: '자료구조보다는 상황 기반 알고리즘, 조건 분기, 테스트 케이스 설계 능력을 강조하면 실무형 평가에 적합합니다.',
        tipEn: 'Focus on practical algorithmic thinking, branching logic, and test-case design rather than abstract complexity only.'
      }
    ]
  },
  {
    id: 'posco',
    name: '포스코',
    nameEn: 'POSCO',
    division: '철강 / 제조 / R&D',
    divisionEn: 'Steel / Manufacturing / R&D',
    logo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=200&q=80',
    initials: 'P',
    category: '제조 / 소재',
    categoryEn: 'Manufacturing / Materials',
    competitionRate: '중상위권',
    competitionRateEn: 'Mid-High Competition',
    overview: '포스코는 제조 공정, 재료학, 설비 최적화 역량을 통해 기술적 실무성과와 안전의식을 모두 평가합니다.',
    overviewEn: 'POSCO evaluates both technical execution and safety mindset in manufacturing, materials, and process optimization.',
    talentCuration: {
      icon: 'precision_manufacturing',
      title: '인재 큐레이션',
      titleEn: 'Talent Curation',
      description: '안전, 공정 이해, 설비 통합 문제 해결 능력을 갖춘 인재를 선호합니다.',
      descriptionEn: 'They prefer candidates with strong safety awareness, process insight, and systems-level problem solving.',
      tags: [
        { icon: 'precision_manufacturing', label: '공정 이해', labelEn: 'Process Expertise', primary: true },
        { icon: 'shield', label: '안전 의식', labelEn: 'Safety Mind' },
        { icon: 'build', label: '설비 역량', labelEn: 'Equipment Capability' },
        { icon: 'science', label: '재료 지식', labelEn: 'Materials Knowledge' }
      ]
    },
    avgPassSpec: {
      gpa: 3.6,
      gpaMax: 4.5,
      gpaProgress: 76,
      gpaCutline: 3.1,
      opic: 'IM2 이상',
      opicEn: 'IM2+',
      opicMin: 'opic_im2',
      opicProgress: 70,
      toeic: '700+',
      toeicMin: 700,
      toeicProgress: 68,
      projectsAvg: '프로젝트 2개',
      projectsAvgEn: '2 Projects',
      projectsProgress: 58
    },
    preferredCerts: [
      {
        title: '기계기사 / 금속재료기사',
        titleEn: 'Mechanical / Materials Engineer',
        description: '공정 및 설비 직무에서 핵심 경쟁력으로 작용합니다.',
        descriptionEn: 'Key differentiator for process and equipment roles.',
        type: 'essential'
      },
      {
        title: 'CAD / 시뮬레이션 실습',
        titleEn: 'CAD / Simulation Experience',
        description: '제조 설계와 공정 최적화 역량을 보여주기에 유리합니다.',
        descriptionEn: 'Useful for demonstrating manufacturing design and process optimization ability.',
        type: 'high_priority'
      }
    ],
    interviewTips: [
      {
        title: '공정 안전 중심 답변',
        titleEn: 'Safety-Centered Storytelling',
        tip: '프로젝트를 설명할 때 안전관리, 공정 안정성, 품질관리까지 연결해 설명하세요.',
        tipEn: 'Link project outcomes to safety, process stability, and quality control.'
      }
    ]
  },
  {
    id: 'korail',
    name: '한국철도공사',
    nameEn: 'KORAIL',
    division: '철도 운영 / 안전 / 유지보수',
    divisionEn: 'Rail Operations / Safety / Maintenance',
    logo: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=200&q=80',
    initials: 'KR',
    category: '교통 / 공공',
    categoryEn: 'Transport / Public Sector',
    competitionRate: '중간 수준',
    competitionRateEn: 'Moderate Competition',
    overview: '철도 인프라 및 안전 운영 분야에서 제도 이해, 현장 운영력, 협업 능력을 함께 검증합니다.',
    overviewEn: 'KORAIL evaluates operational understanding, safety discipline, and teamwork in rail infrastructure and service systems.',
    talentCuration: {
      icon: 'train',
      title: '인재 큐레이션',
      titleEn: 'Talent Curation',
      description: '안전 중심 사고와 교통 시스템 이해를 기반으로 공동운영 능력을 갖춘 인재를 선호합니다.',
      descriptionEn: 'Prefers candidates who combine safety awareness with transportation systems understanding and teamwork ability.',
      tags: [
        { icon: 'train', label: '철도 이해', labelEn: 'Rail Knowledge', primary: true },
        { icon: 'safety_check', label: '안전 의식', labelEn: 'Safety Mind' },
        { icon: 'groups', label: '현장 협업', labelEn: 'Field Teamwork' }
      ]
    },
    avgPassSpec: {
      gpa: 3.3,
      gpaMax: 4.5,
      gpaProgress: 70,
      gpaCutline: 0,
      opic: 'IM2 이상',
      opicEn: 'IM2+',
      opicMin: 'opic_im2',
      opicProgress: 66,
      toeic: '700+',
      toeicMin: 700,
      toeicProgress: 70,
      projectsAvg: '현장/기술 프로젝트 1회',
      projectsAvgEn: '1 Field Project',
      projectsProgress: 52
    },
    preferredCerts: [
      {
        title: '철도 관련 자격증',
        titleEn: 'Railway Certification',
        description: '직무와 연계된 자격증은 서류 평가에서 강한 메리트가 됩니다.',
        descriptionEn: 'High value for roles tied to rail systems and field operations.',
        type: 'essential'
      },
      {
        title: '기계/전기/전산 전공',
        titleEn: 'Mechanical / Electrical / IT Major',
        description: '운영, 유지보수, 안전관리 직무와 직접 연결됩니다.',
        descriptionEn: 'Directly aligned with operations, maintenance, and safety management roles.',
        type: 'high_priority'
      }
    ],
    interviewTips: [
      {
        title: '철도 시스템 이해',
        titleEn: 'Rail Systems Insight',
        tip: '열차 정차, 댐핑 시스템, 선로 안전, 정비 루틴 등을 설명할 준비를 해두세요.',
        tipEn: 'Prepare to discuss train operation flow, track safety, reliability issues, and maintenance routines.'
      }
    ]
  },
  {
    id: 'kogas',
    name: '한국가스공사',
    nameEn: 'KOGAS',
    division: '가스 / 에너지 인프라',
    divisionEn: 'Gas / Energy Infrastructure',
    logo: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=200&q=80',
    initials: 'KG',
    category: '에너지 / 공공',
    categoryEn: 'Energy / Public',
    competitionRate: '중상위권',
    competitionRateEn: 'Mid-High Competition',
    overview: '한국가스공사는 인프라 안정성, 안전관리, 에너지 공급망을 중심으로 기술력과 실무 신뢰성을 본다.',
    overviewEn: 'KOGAS focuses on infrastructure stability, safety management, and energy network reliability.',
    talentCuration: {
      icon: 'factory',
      title: '인재 큐레이션',
      titleEn: 'Talent Curation',
      description: '안전 규정 준수, 공급망 이해, 공공서비스 책임감이 강한 인재를 우대합니다.',
      descriptionEn: 'They prioritize candidates with strong safety discipline, network understanding, and public-service mindset.',
      tags: [
        { icon: 'factory', label: '인프라 이해', labelEn: 'Infrastructure Insight', primary: true },
        { icon: 'safety_check', label: '안전관리', labelEn: 'Safety Management' },
        { icon: 'analytics', label: '공급망 분석', labelEn: 'Supply Chain' }
      ]
    },
    avgPassSpec: {
      gpa: 3.4,
      gpaMax: 4.5,
      gpaProgress: 72,
      gpaCutline: 0,
      opic: 'IM2 이상',
      opicEn: 'IM2+',
      opicMin: 'opic_im2',
      opicProgress: 68,
      toeic: '700+',
      toeicMin: 700,
      toeicProgress: 68,
      projectsAvg: '인턴/프로젝트 1~2회',
      projectsAvgEn: '1–2 Intern Projects',
      projectsProgress: 50
    },
    preferredCerts: [
      {
        title: '기계 / 전기 / 화학 전공',
        titleEn: 'Mechanical / Electrical / Chemical Major',
        description: '에너지 인프라 직무와 직접 연결됩니다.',
        descriptionEn: 'Directly relevant to gas infrastructure and utility operations.',
        type: 'essential'
      },
      {
        title: '안전관리자 자격증',
        titleEn: 'Safety Manager Certification',
        description: '공급망 및 시설 안전 직무에서 큰 우대.',
        descriptionEn: 'Strong advantage for safety and facility operations roles.',
        type: 'high_priority'
      }
    ],
    interviewTips: [
      {
        title: '에너지 인프라 이해',
        titleEn: 'Energy Infrastructure Insight',
        tip: '가스 공급망, 수요 예측, 안전기준, 비상 대응 사례를 주제로 말할 준비를 해두세요.',
        tipEn: 'Discuss supply networks, demand forecasting, safety standards, and emergency response case thinking.'
      }
    ]
  },
  {
    id: 'cj-enm',
    name: 'CJ ENM',
    nameEn: 'CJ ENM',
    division: '콘텐츠 / 브랜드 / 마케팅',
    divisionEn: 'Content / Brand / Marketing',
    logo: 'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=200&q=80',
    initials: 'CJ',
    category: '미디어 / 마케팅',
    categoryEn: 'Media / Marketing',
    competitionRate: '중상위권',
    competitionRateEn: 'Moderately High',
    overview: 'CJ ENM은 콘텐츠 감각, 브랜드 이해, 트렌드 민감도를 기반으로 창의성과 실행력을 모두 평가합니다.',
    overviewEn: 'CJ ENM values creative instinct, trend understanding, and proof of execution in content and brand strategy.',
    talentCuration: {
      icon: 'movie',
      title: '인재 큐레이션',
      titleEn: 'Talent Curation',
      description: '콘텐츠 시장 감각과 브랜드 커뮤니케이션 역량이 함께 있는 인재를 선호합니다.',
      descriptionEn: 'They favor candidates who combine cultural awareness with strong brand communication execution.',
      tags: [
        { icon: 'movie', label: '콘텐츠 감각', labelEn: 'Content Sense', primary: true },
        { icon: 'campaign', label: '브랜드 전략', labelEn: 'Brand Strategy' },
        { icon: 'trending_up', label: '트렌드 리더십', labelEn: 'Trend Leadership' }
      ]
    },
    avgPassSpec: {
      gpa: 3.5,
      gpaMax: 4.5,
      gpaProgress: 74,
      gpaCutline: 3.0,
      opic: 'IM2 이상',
      opicEn: 'IM2+',
      opicMin: 'opic_im2',
      opicProgress: 68,
      toeic: '700+',
      toeicMin: 700,
      toeicProgress: 70,
      projectsAvg: '콘텐츠/캠페인 2개',
      projectsAvgEn: '2 Content Projects',
      projectsProgress: 60
    },
    preferredCerts: [
      {
        title: '마케팅/광고 관련 전공',
        titleEn: 'Marketing / Advertising Major',
        description: '브랜드 전략 포지션에 높은 적합성을 보입니다.',
        descriptionEn: 'Strongly relevant for brand and content planning roles.',
        type: 'recommended'
      },
      {
        title: '영상 편집 / 콘텐츠 제작 역량',
        titleEn: 'Video Editing / Content Production',
        description: '콘텐츠 실무와 직접적으로 연결되는 역량입니다.',
        descriptionEn: 'Directly demonstrates ability to operate in media production environments.',
        type: 'high_priority'
      }
    ],
    interviewTips: [
      {
        title: '트렌드 기반 답변',
        titleEn: 'Trend-Informed Response',
        tip: '기존 콘텐츠와 브랜드를 비교해 “무엇이 소비자에게 왜 먹히는지”를 말할 수 있어야 합니다.',
        tipEn: 'Speak in terms of audience behavior, market trends, and why content or brand choices resonate.'
      }
    ]
  },
  {
    id: 'seoul-metro',
    name: '서울교통공사',
    nameEn: 'Seoul Metro',
    division: '교통안전 / 운영관리',
    divisionEn: 'Transit Safety / Operations',
    logo: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=200&q=80',
    initials: 'SM',
    category: '교통 / 공공',
    categoryEn: 'Transport / Public',
    competitionRate: '중간 수준',
    competitionRateEn: 'Moderate Competition',
    overview: '서울교통공사는 교통 안전, 대중교통 운영, 지하철 설비 운영에서 실무성과와 공공서비스 마인드를 평가합니다.',
    overviewEn: 'Seoul Metro evaluates operational reliability, safety discipline, and public service mindset in transit systems.',
    talentCuration: {
      icon: 'directions_transit',
      title: '인재 큐레이션',
      titleEn: 'Talent Curation',
      description: '시스템 안정성과 시민 안전을 우선하는 운영형 인재를 선호합니다.',
      descriptionEn: 'They prefer candidates who prioritize system stability and public safety in operational decision making.',
      tags: [
        { icon: 'directions_transit', label: '교통 시스템', labelEn: 'Transit Systems', primary: true },
        { icon: 'safety_check', label: '안전관리', labelEn: 'Safety Management' },
        { icon: 'groups', label: '운영 협업', labelEn: 'Operational Teamwork' }
      ]
    },
    avgPassSpec: {
      gpa: 3.3,
      gpaMax: 4.5,
      gpaProgress: 70,
      gpaCutline: 0,
      opic: 'IM2 이상',
      opicEn: 'IM2+',
      opicMin: 'opic_im2',
      opicProgress: 67,
      toeic: '700+',
      toeicMin: 700,
      toeicProgress: 68,
      projectsAvg: '현장 운영 프로젝트 1회',
      projectsAvgEn: '1 Operations Project',
      projectsProgress: 50
    },
    preferredCerts: [
      {
        title: '교통안전기사 / 전기기사',
        titleEn: 'Transportation Safety / Electrical Engineer',
        description: '운영 및 시설 관리 직무와 직접 연결됩니다.',
        descriptionEn: 'Strongly relevant to transit systems and safety operations.',
        type: 'essential'
      }
    ],
    interviewTips: [
      {
        title: '시민 안전 중심 답변',
        titleEn: 'Public Safety Thinking',
        tip: '운영상 문제를 삼각적으로 해결하는 사례를 말하세요. “왜 급한지, 어떤 기준으로 판단했는지”가 핵심입니다.',
        tipEn: 'Explain how you prioritize operational issues using safety, service continuity, and public impact metrics.'
      }
    ]
  },
  {
    id: 'kakao',
    name: '카카오',
    nameEn: 'Kakao',
    division: '서비스 플랫폼 / AI / 검색',
    divisionEn: 'Service Platform / AI / Search',
    logo: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=200&q=80',
    initials: 'K',
    category: '플랫폼 / 서비스',
    categoryEn: 'Platform / Service',
    competitionRate: '경쟁 치열',
    competitionRateEn: 'Very High Competition',
    overview: '카카오는 서비스 설계, AI 활용, 사용자 반응 기반 개선 역량을 함께 본다. 빠른 실행력과 제품 감각이 강점이다.',
    overviewEn: 'Kakao values product thinking, AI fluency, and rapid user-centered execution across service experiences.',
    talentCuration: {
      icon: 'smart_toy',
      title: '인재 큐레이션',
      titleEn: 'Talent Curation',
      description: '실사용자 중심 문제 정의와 기술 구현을 빠르게 이어가는 인재를 선호합니다.',
      descriptionEn: 'Prefers candidates who quickly connect customer problems to technical implementation and measurable outcomes.',
      tags: [
        { icon: 'smart_toy', label: 'AI 감각', labelEn: 'AI Sense', primary: true },
        { icon: 'speed', label: '실행력', labelEn: 'Execution' },
        { icon: 'groups', label: '협업', labelEn: 'Collaboration' }
      ]
    },
    avgPassSpec: {
      gpa: 3.7,
      gpaMax: 4.5,
      gpaProgress: 78,
      gpaCutline: 3.1,
      opic: 'IM3 이상',
      opicEn: 'IM3+',
      opicMin: 'opic_im3',
      opicProgress: 74,
      toeic: '800+',
      toeicMin: 800,
      toeicProgress: 76,
      projectsAvg: '서비스/AI 프로젝트 2개',
      projectsAvgEn: '2 Product / AI Projects',
      projectsProgress: 64
    },
    preferredCerts: [
      {
        title: '정보처리기사',
        titleEn: 'Engineer Information Processing',
        description: '기본 개발 역량을 보여주는 대표 자격증입니다.',
        descriptionEn: 'Signals strong technical fundamentals for product engineering roles.',
        type: 'essential'
      },
      {
        title: 'AWS 자격증',
        titleEn: 'AWS Certification',
        description: '시스템 설계와 서비스 운영 역량을 보여주기에 유리합니다.',
        descriptionEn: 'Useful for platform and service architecture evaluations.',
        type: 'high_priority'
      }
    ],
    interviewTips: [
      {
        title: '서비스 관점의 기술 설명',
        titleEn: 'Service-Oriented Technical Storytelling',
        tip: '기술 자체보다 “사용자가 왜 이 기능을 필요로 하는지, 지표는 어떻게 달라졌는지”를 중심으로 설명하세요.',
        tipEn: 'Focus on user pain points, service impact, and measurable improvement rather than only infrastructure details.'
      }
    ]
  },
  {
    id: 'lh',
    name: '한국토지주택공사',
    nameEn: 'Korea Land & Housing Corporation',
    division: '주택 / 도시개발 / 건설',
    divisionEn: 'Housing / Urban Development / Construction',
    logo: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=200&q=80',
    initials: 'LH',
    category: '공공 / 건설',
    categoryEn: 'Public / Construction',
    competitionRate: '중간 수준',
    competitionRateEn: 'Moderate Competition',
    overview: 'LH는 주거 인프라와 도시개발, 공공부문 계획 역량을 중심으로 공공성, 실무성, 지역 사회 기여도를 본다.',
    overviewEn: 'LH values public-service orientation, planning capability, and practical understanding of housing and urban development.',
    talentCuration: {
      icon: 'apartment',
      title: '인재 큐레이션',
      titleEn: 'Talent Curation',
      description: '도시와 주거 인프라에 대한 이해와 정책적 사고를 동시에 갖춘 인재를 선호합니다.',
      descriptionEn: 'Prefer candidates who combine urban planning understanding with practical execution and public accountability.',
      tags: [
        { icon: 'apartment', label: '주택 이해', labelEn: 'Housing Insight', primary: true },
        { icon: 'maps_home_work', label: '도시계획', labelEn: 'Urban Planning' },
        { icon: 'public', label: '공공성', labelEn: 'Public Service' }
      ]
    },
    avgPassSpec: {
      gpa: 3.4,
      gpaMax: 4.5,
      gpaProgress: 72,
      gpaCutline: 0,
      opic: 'IM2 이상',
      opicEn: 'IM2+',
      opicMin: 'opic_im2',
      opicProgress: 69,
      toeic: '700+',
      toeicMin: 700,
      toeicProgress: 70,
      projectsAvg: '기획/설계 프로젝트 1~2회',
      projectsAvgEn: '1–2 Planning Projects',
      projectsProgress: 55
    },
    preferredCerts: [
      {
        title: '건축기사 / 토목기사',
        titleEn: 'Architect / Civil Engineer',
        description: '도시개발 및 공공인프라 직무에서 강력한 우대.',
        descriptionEn: 'High-value specialization for urban planning and infrastructure roles.',
        type: 'essential'
      },
      {
        title: '한국사능력검정',
        titleEn: 'Korean History Test',
        description: '공공기관 평가 요소로 자주 활용됩니다.',
        descriptionEn: 'Commonly used as a public-sector qualification signal.',
        type: 'recommended'
      }
    ],
    interviewTips: [
      {
        title: '공공정책 관점 설명',
        titleEn: 'Public Policy Framing',
        tip: '도시 개발, 공공재정, 주거안정, 부동산 정책과 연결해 문제 해결 구조를 설명하세요.',
        tipEn: 'Frame your experience through public-interest outcomes, policy alignment, and housing stability impact.'
      }
    ]
  },
  {
    id: 'hana-bank',
    name: '하나은행',
    nameEn: 'Hana Bank',
    division: '영업관리 / 리스크 / 운영',
    divisionEn: 'Sales / Risk / Operations',
    logo: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=200&q=80',
    initials: 'HB',
    category: '금융 / 은행',
    categoryEn: 'Finance / Banking',
    competitionRate: '중상위권',
    competitionRateEn: 'Mid-High Competition',
    overview: '하나은행은 고객 이해, 리스크 관리, 운영 효율을 모두 보며 데이터 기반 판단과 협업을 강조합니다.',
    overviewEn: 'Hana Bank values customer insight, risk judgment, and operational efficiency driven by data-informed decision making.',
    talentCuration: {
      icon: 'account_balance',
      title: '인재 큐레이션',
      titleEn: 'Talent Curation',
      description: '금융사 업무 특성상 고객중심성과 데이터 기반 판단력을 함께 보여주는 인재를 선호합니다.',
      descriptionEn: 'Banking roles favor candidates who combine customer empathy with disciplined, data-driven operational thinking.',
      tags: [
        { icon: 'trending_up', label: '숫자 감각', labelEn: 'Analytical Sense', primary: true },
        { icon: 'support_agent', label: '고객 이해', labelEn: 'Customer Insight' },
        { icon: 'warning', label: '리스크 인식', labelEn: 'Risk Awareness' }
      ]
    },
    avgPassSpec: {
      gpa: 3.5,
      gpaMax: 4.5,
      gpaProgress: 74,
      gpaCutline: 3.0,
      opic: 'IM3 이상',
      opicEn: 'IM3+',
      opicMin: 'opic_im3',
      opicProgress: 72,
      toeic: '800+',
      toeicMin: 800,
      toeicProgress: 72,
      projectsAvg: '팀 프로젝트 2개',
      projectsAvgEn: '2 Team Projects',
      projectsProgress: 58
    },
    preferredCerts: [
      {
        title: '재무관리사 / 금융 관련 자격증',
        titleEn: 'Finance Certification',
        description: '리스크와 영업관리 직무에서 경쟁력을 높여줍니다.',
        descriptionEn: 'Strong differentiator in risk and sales management tracks.',
        type: 'essential'
      },
      {
        title: 'SQLD / ADsP',
        titleEn: 'SQLD / ADsP',
        description: '데이터 기반 리스크 분석과 영업 전략에서 유리합니다.',
        descriptionEn: 'Useful for evidence-based planning and risk analysis.',
        type: 'high_priority'
      }
    ],
    interviewTips: [
      {
        title: '데이터 기반 판단',
        titleEn: 'Data-Driven Judgment',
        tip: '영업, 고객, 리스크 문제를 숫자와 기준으로 설명할 수 있어야 합니다.',
        tipEn: 'Use numbers and decision criteria to explain customer, risk, and sales trade-offs.'
      }
    ]
  },
  {
    id: 'namdong-power',
    name: '한국남동발전',
    nameEn: 'Namdong Power',
    division: '발전소 운영 / 전기·기계 설비',
    divisionEn: 'Power Plant Operations / Electrical & Mechanical',
    logo: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=200&q=80',
    initials: 'ND',
    category: '에너지 / 발전',
    categoryEn: 'Energy / Power Generation',
    competitionRate: '중상위권',
    competitionRateEn: 'Mid-High Competition',
    overview: '남동발전은 발전소 안전, 설비 유지보수, 전력 생산 안정성을 핵심 기준으로 삼고, 현장 운영 역량을 중시합니다.',
    overviewEn: 'Namdong Power emphasizes plant safety, equipment maintenance, and operational stability in power generation.',
    talentCuration: {
      icon: 'bolt',
      title: '인재 큐레이션',
      titleEn: 'Talent Curation',
      description: '현장 안전과 설비 운영 경험, 에너지 인프라 이해가 강한 인재를 선호합니다.',
      descriptionEn: 'Prefers candidates with strong safety awareness, equipment operations knowledge, and energy infrastructure understanding.',
      tags: [
        { icon: 'bolt', label: '발전 이해', labelEn: 'Power Systems', primary: true },
        { icon: 'safety_check', label: '안전관리', labelEn: 'Safety Management' },
        { icon: 'precision_manufacturing', label: '설비 운영', labelEn: 'Equipment Operations' }
      ]
    },
    avgPassSpec: {
      gpa: 3.3,
      gpaMax: 4.5,
      gpaProgress: 70,
      gpaCutline: 0,
      opic: 'IM2 이상',
      opicEn: 'IM2+',
      opicMin: 'opic_im2',
      opicProgress: 66,
      toeic: '700+',
      toeicMin: 700,
      toeicProgress: 68,
      projectsAvg: '전기/기계 실습 1~2회',
      projectsAvgEn: '1–2 Lab Projects',
      projectsProgress: 52
    },
    preferredCerts: [
      {
        title: '기계기사 / 전기기사',
        titleEn: 'Mechanical / Electrical Engineer',
        description: '발전소 설비 및 유지보수 직무와 높은 연관성을 가집니다.',
        descriptionEn: 'Highly relevant for power plant equipment and maintenance roles.',
        type: 'essential'
      },
      {
        title: '산업안전기사',
        titleEn: 'Industrial Safety Engineer',
        description: '안전관리와 현장 대응 역량을 보여주기에 유리합니다.',
        descriptionEn: 'Strong signal for safety-focused operational roles.',
        type: 'high_priority'
      }
    ],
    interviewTips: [
      {
        title: '현장 중심 답변 준비',
        titleEn: 'Field-Oriented Answers',
        tip: '발전소 안전, 설비 이상원인 분석, 유지보수 우선순위 등을 사례로 설명해 보세요.',
        tipEn: 'Prepare examples around plant safety, equipment failure analysis, and maintenance prioritization.'
      }
    ]
  }
];

export const LANGUAGE_LEVEL_MAP: Record<string, { rank: number; labelKo: string; labelEn: string }> = {
  'none': { rank: 0, labelKo: '없음', labelEn: 'None' },
  'toeic_speak_6': { rank: 3, labelKo: 'TOEIC Speaking Lv.6 (130-150)', labelEn: 'TOEIC Speaking Lv.6' },
  'opic_im2': { rank: 4, labelKo: 'OPIc IM2', labelEn: 'OPIc IM2' },
  'opic_im3': { rank: 5, labelKo: 'OPIc IM3', labelEn: 'OPIc IM3' },
  'toeic_speak_7': { rank: 6, labelKo: 'TOEIC Speaking Lv.7 (160-180)', labelEn: 'TOEIC Speaking Lv.7' },
  'opic_ih': { rank: 7, labelKo: 'OPIc IH', labelEn: 'OPIc IH' },
  'opic_al': { rank: 9, labelKo: 'OPIc AL', labelEn: 'OPIc AL' }
};

export function calculateDiagnosis(userSpec: UserSpec, companyId: string) {
  const company = COMPANIES_INTELLIGENCE.find(c => c.id === companyId) || COMPANIES_INTELLIGENCE[0];
  
  // Calculate GPA ratio
  const userGpa = userSpec.gpa;
  const cutlineGpa = company.avgPassSpec.gpaCutline || 3.3;
  const targetAvgGpa = company.avgPassSpec.gpa || 3.8;
  const gpaScore = Math.min(100, Math.round((userGpa / 4.5) * 100));
  const cutlineGpaScore = Math.round((cutlineGpa / 4.5) * 100);

  // Calculate Language ratio
  const userLangRank = LANGUAGE_LEVEL_MAP[userSpec.englishProficiency]?.rank || 0;
  const minLangRank = company.id === 'samsung' ? 7 : (company.id === 'sk-hynix' ? 4 : 5); // IH is 7, IM2 is 4
  const langScore = Math.min(100, Math.round((userLangRank / 9) * 100));
  const cutlineLangScore = Math.round((minLangRank / 9) * 100);
  const isLanguageWarning = userLangRank < minLangRank;

  // Calculate Certs ratio
  const certCount = userSpec.certifications.length;
  const hasEngineerCert = userSpec.certifications.some(c => c.includes('정보처리기사') || c.includes('전기기사'));
  const hasSqlCert = userSpec.certifications.some(c => c.includes('SQL') || c.includes('ADsP'));
  const certScore = Math.min(100, Math.round(((hasEngineerCert ? 50 : 20) + (hasSqlCert ? 30 : 0) + (certCount > 2 ? 20 : 10))));
  const cutlineCertScore = 75;

  // Calculate Project Exp
  const projectScore = Math.min(100, Math.round(userSpec.projectCount * 35));
  const cutlineProjectScore = 65;

  // Calculate Coding Test
  const codingScore = userSpec.hasCodingTestScore ? userSpec.codingTestScore : 50;
  const cutlineCodingScore = 75;

  // Calculate NCS / Aptitude test score
  const ncsScore = Math.min(50, Math.max(0, Number(userSpec.ncsScore ?? 0)));
  const cutlineNcsScore = 38;
  const isNcsWarning = ncsScore < cutlineNcsScore;

  // Overall Match Percentage
  const overallScore = Math.round(
    (gpaScore * 0.2) +
    (langScore * 0.2) +
    (certScore * 0.15) +
    (projectScore * 0.15) +
    (codingScore * 0.15) +
    ((ncsScore / 50) * 100 * 0.15)
  );

  // Generate dynamic Action Items
  const actionItems: Array<{
    id: string;
    level: 'critical' | 'warning' | 'solid';
    title: string;
    titleEn: string;
    description: string;
    descriptionEn: string;
    icon: string;
  }> = [];

  if (isLanguageWarning) {
    actionItems.push({
      id: 'action-lang',
      level: 'critical',
      title: 'OPIc IH 등급 필요',
      titleEn: 'OPIc IH Required',
      description: `현재: ${LANGUAGE_LEVEL_MAP[userSpec.englishProficiency]?.labelKo || '미달'}. ${company.name} IT는 최소 IH를 요구합니다. 이는 자동 필터링 기준입니다.`,
      descriptionEn: `Current: ${LANGUAGE_LEVEL_MAP[userSpec.englishProficiency]?.labelEn || 'Below cutoff'}. ${company.nameEn} mandates minimum IH. This is an auto-filter criteria.`,
      icon: 'error'
    });
  }

  if (!hasSqlCert) {
    actionItems.push({
      id: 'action-sql',
      level: 'warning',
      title: 'SQL 자격증 취득 권장',
      titleEn: 'SQL Certification Recommended',
      description: '지난 채용에서 합격자의 78%가 SQLD 또는 동등한 데이터 자격증을 보유했습니다.',
      descriptionEn: '78% of successful candidates in the last cycle held SQLD or equivalent credentials.',
      icon: 'warning'
    });
  }

  if (userGpa >= cutlineGpa) {
    actionItems.push({
      id: 'action-gpa',
      level: 'solid',
      title: '학점 안정권',
      titleEn: 'GPA Solid',
      description: `${userGpa.toFixed(1)}/4.5는 과거 커트라인인 ${cutlineGpa.toFixed(1)}보다 충분히 높습니다.`,
      descriptionEn: `${userGpa.toFixed(1)}/4.5 is comfortably above the historical ${cutlineGpa.toFixed(1)} cutline.`,
      icon: 'check_circle'
    });
  } else {
    actionItems.push({
      id: 'action-gpa-low',
      level: 'warning',
      title: '학점 보완 전략 필요',
      titleEn: 'GPA Compensating Strategy Needed',
      description: `${userGpa.toFixed(1)}/4.5는 목표 커트라인(${cutlineGpa.toFixed(1)})보다 다소 낮으므로 전공 프로젝트 및 코딩테스트 고득점으로 상쇄해야 합니다.`,
      descriptionEn: `${userGpa.toFixed(1)}/4.5 is below the target cutline (${cutlineGpa.toFixed(1)}). Compensate with high coding test scores and deep project portfolios.`,
      icon: 'warning'
    });
  }

  if (userSpec.projectCount < 2) {
    actionItems.push({
      id: 'action-projects',
      level: 'warning',
      title: '실무 프로젝트 경험 추가 권장',
      titleEn: 'Additional Real-World Project Recommended',
      description: '합격자 평균 프로젝트 수는 2.5회입니다. 배포 및 트래픽 경험을 담은 포트폴리오를 1개 이상 추가하세요.',
      descriptionEn: 'Average pass candidates have 2.5 projects. Add at least one production deployed project portfolio.',
      icon: 'warning'
    });
  }

  if (isNcsWarning) {
    actionItems.push({
      id: 'action-ncs',
      level: 'warning',
      title: 'NCS 시험 점수 보완 필요',
      titleEn: 'NCS Score Needs Improvement',
      description: `현재 NCS 점수는 ${ncsScore}점으로, 공기업/공공기관 전형 기준인 ${cutlineNcsScore}점 대비 낮습니다. NCS 유형별 문제풀이와 시간 배분 연습을 보완하세요.`,
      descriptionEn: `Current NCS score is ${ncsScore}, below the ${cutlineNcsScore} benchmark. Practice NCS logic problems and improve time management to close the gap.`,
      icon: 'assessment'
    });
  } else {
    actionItems.push({
      id: 'action-ncs-solid',
      level: 'solid',
      title: 'NCS 시험 안정권',
      titleEn: 'NCS Stability',
      description: `NCS 점수 ${ncsScore}점은 목표 기준선 ${cutlineNcsScore}점을 상회합니다. 유지와 보완 학습으로 안정적으로 대비할 수 있습니다.`,
      descriptionEn: `NCS score of ${ncsScore} exceeds the ${cutlineNcsScore} benchmark. Maintain your pace and keep reinforcing weak areas.`,
      icon: 'check_circle'
    });
  }

  return {
    overallScore,
    radarData: {
      gpa: { user: gpaScore, cutline: cutlineGpaScore, max: 100 },
      language: { user: langScore, cutline: cutlineLangScore, max: 100, isWarning: isLanguageWarning },
      certs: { user: certScore, cutline: cutlineCertScore, max: 100 },
      projectExp: { user: projectScore, cutline: cutlineProjectScore, max: 100 },
      codingTest: { user: codingScore, cutline: cutlineCodingScore, max: 100 },
      ncs: { user: ncsScore, cutline: cutlineNcsScore, max: 100, isWarning: isNcsWarning }
    },
    actionItems
  };
}
