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
  codingTestScore: 72
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
    startDate: '2023-11-01',
    endDate: '2023-11-11',
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
    startDate: '2023-11-03',
    endDate: '2023-11-12',
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
    startDate: '2023-11-09',
    endDate: '2023-11-14',
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
    startDate: '2023-11-05',
    endDate: '2023-11-20',
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
    startDate: '2023-11-10',
    endDate: '2023-11-25',
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

  // Overall Match Percentage
  const overallScore = Math.round(
    (gpaScore * 0.25) +
    (langScore * 0.25) +
    (certScore * 0.2) +
    (projectScore * 0.15) +
    (codingScore * 0.15)
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

  return {
    overallScore,
    radarData: {
      gpa: { user: gpaScore, cutline: cutlineGpaScore, max: 100 },
      language: { user: langScore, cutline: cutlineLangScore, max: 100, isWarning: isLanguageWarning },
      certs: { user: certScore, cutline: cutlineCertScore, max: 100 },
      projectExp: { user: projectScore, cutline: cutlineProjectScore, max: 100 },
      codingTest: { user: codingScore, cutline: cutlineCodingScore, max: 100 }
    },
    actionItems
  };
}
