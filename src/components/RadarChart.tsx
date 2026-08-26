import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

interface RadarChartProps {
  userGpaScore: number;
  userLangScore: number;
  userCertScore: number;
  userProjectScore: number;
  cutlineGpa: number;
  cutlineLang: number;
  cutlineCert: number;
  cutlineProject: number;
  isLanguageWarning: boolean;
}

export const RadarChart: React.FC<RadarChartProps> = ({
  userGpaScore,
  userLangScore,
  userCertScore,
  userProjectScore,
  cutlineGpa,
  cutlineLang,
  cutlineCert,
  cutlineProject,
  isLanguageWarning
}) => {
  const { language } = useApp();
  const isKo = language === 'ko';

  const [hoveredMetric, setHoveredMetric] = useState<string | null>(null);

  // Center is (150, 150), radius is 110
  const cx = 150;
  const cy = 150;
  const maxR = 100;

  // 4 Axes: Top (0 deg / -90 from standard), Right (90 deg), Bottom (180 deg), Left (270 deg)
  // Coordinates mapping:
  // Top (GPA): x = cx, y = cy - (score/100)*maxR
  // Right (Certs): x = cx + (score/100)*maxR, y = cy
  // Bottom (Project): x = cx, y = cy + (score/100)*maxR
  // Left (Language): x = cx - (score/100)*maxR, y = cy

  const uTopY = cy - (Math.max(10, Math.min(100, userGpaScore)) / 100) * maxR;
  const uRightX = cx + (Math.max(10, Math.min(100, userCertScore)) / 100) * maxR;
  const uBottomY = cy + (Math.max(10, Math.min(100, userProjectScore)) / 100) * maxR;
  const uLeftX = cx - (Math.max(10, Math.min(100, userLangScore)) / 100) * maxR;

  const userPolygonPoints = `${cx},${uTopY} ${uRightX},${cy} ${cx},${uBottomY} ${uLeftX},${cy}`;

  const cTopY = cy - (cutlineGpa / 100) * maxR;
  const cRightX = cx + (cutlineCert / 100) * maxR;
  const cBottomY = cy + (cutlineProject / 100) * maxR;
  const cLeftX = cx - (cutlineLang / 100) * maxR;

  const cutlinePolygonPoints = `${cx},${cTopY} ${cRightX},${cy} ${cx},${cBottomY} ${cLeftX},${cy}`;

  return (
    <div className="relative w-full aspect-square max-w-[320px] flex items-center justify-center mx-auto my-2">
      {/* SVG Canvas for High-Precision Rendering */}
      <svg viewBox="0 0 300 300" className="w-full h-full overflow-visible">
        {/* Background Gradients & Filters */}
        <defs>
          <radialGradient id="radarGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0051d5" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#00236f" stopOpacity="0.0" />
          </radialGradient>
          <linearGradient id="userShapeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#316bf3" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#0051d5" stopOpacity="0.45" />
          </linearGradient>
        </defs>

        {/* Outer Glow Background */}
        <circle cx={cx} cy={cy} r={maxR + 10} fill="url(#radarGlow)" />

        {/* Concentric Structural Circles */}
        <circle
          cx={cx}
          cy={cy}
          r={maxR}
          fill="none"
          stroke="#c5c5d3"
          strokeWidth="1.2"
          strokeDasharray="4 3"
          opacity="0.6"
        />
        <circle
          cx={cx}
          cy={cy}
          r={maxR * 0.75}
          fill="none"
          stroke="#c5c5d3"
          strokeWidth="1"
          opacity="0.5"
        />
        <circle
          cx={cx}
          cy={cy}
          r={maxR * 0.5}
          fill="none"
          stroke="#c5c5d3"
          strokeWidth="1"
          opacity="0.4"
        />
        <circle
          cx={cx}
          cy={cy}
          r={maxR * 0.25}
          fill="none"
          stroke="#c5c5d3"
          strokeWidth="1"
          opacity="0.3"
        />

        {/* Main Axes */}
        <line x1={cx} y1={cy - maxR} x2={cx} y2={cy + maxR} stroke="#c5c5d3" strokeWidth="1" opacity="0.6" />
        <line x1={cx - maxR} y1={cy} x2={cx + maxR} y2={cy} stroke="#c5c5d3" strokeWidth="1" opacity="0.6" />

        {/* Diagonal Guideline Axes */}
        <line
          x1={cx - maxR * 0.7}
          y1={cy - maxR * 0.7}
          x2={cx + maxR * 0.7}
          y2={cy + maxR * 0.7}
          stroke="#c5c5d3"
          strokeWidth="0.7"
          strokeDasharray="2 2"
          opacity="0.35"
        />
        <line
          x1={cx - maxR * 0.7}
          y1={cy + maxR * 0.7}
          x2={cx + maxR * 0.7}
          y2={cy - maxR * 0.7}
          stroke="#c5c5d3"
          strokeWidth="0.7"
          strokeDasharray="2 2"
          opacity="0.35"
        />

        {/* Goal Cutline Shape (Background Target) */}
        <polygon
          points={cutlinePolygonPoints}
          fill="#1e3a8a"
          fillOpacity="0.12"
          stroke="#00236f"
          strokeWidth="1.8"
          strokeDasharray="4 3"
          className="transition-all duration-700"
        />

        {/* User Spec Shape (Foreground) */}
        <polygon
          points={userPolygonPoints}
          fill="url(#userShapeGrad)"
          stroke="#0051d5"
          strokeWidth="2.5"
          strokeLinejoin="round"
          className="transition-all duration-500 ease-out drop-shadow-sm cursor-pointer"
        />

        {/* User Data Point Markers */}
        {/* GPA Point */}
        <circle
          cx={cx}
          cy={uTopY}
          r="5"
          fill="#0051d5"
          stroke="#ffffff"
          strokeWidth="2"
          className="hover:r-7 transition-all cursor-pointer"
          onMouseEnter={() => setHoveredMetric('gpa')}
          onMouseLeave={() => setHoveredMetric(null)}
        />
        {/* Certs Point */}
        <circle
          cx={uRightX}
          cy={cy}
          r="5"
          fill="#0051d5"
          stroke="#ffffff"
          strokeWidth="2"
          className="hover:r-7 transition-all cursor-pointer"
          onMouseEnter={() => setHoveredMetric('certs')}
          onMouseLeave={() => setHoveredMetric(null)}
        />
        {/* Project Point */}
        <circle
          cx={cx}
          cy={uBottomY}
          r="5"
          fill="#0051d5"
          stroke="#ffffff"
          strokeWidth="2"
          className="hover:r-7 transition-all cursor-pointer"
          onMouseEnter={() => setHoveredMetric('project')}
          onMouseLeave={() => setHoveredMetric(null)}
        />
        {/* Language Point */}
        <circle
          cx={uLeftX}
          cy={cy}
          r="5"
          fill={isLanguageWarning ? '#ba1a1a' : '#0051d5'}
          stroke="#ffffff"
          strokeWidth="2"
          className="hover:r-7 transition-all cursor-pointer"
          onMouseEnter={() => setHoveredMetric('lang')}
          onMouseLeave={() => setHoveredMetric(null)}
        />
      </svg>

      {/* Axis Labels positioned around the circle */}
      {/* Top Label: GPA */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none">
        <span className="text-xs font-bold text-[#191c1e] tracking-tight">
          {isKo ? '학점' : 'GPA'}
        </span>
        <span className="text-[10px] font-semibold text-[#0051d5] bg-blue-50 px-1 rounded">
          {userGpaScore}%
        </span>
      </div>

      {/* Right Label: Certs */}
      <div className="absolute top-1/2 -right-10 -translate-y-1/2 flex flex-col items-center pointer-events-none">
        <span className="text-xs font-bold text-[#191c1e] tracking-tight">
          {isKo ? '자격증' : 'Certs'}
        </span>
        <span className="text-[10px] font-semibold text-[#0051d5] bg-blue-50 px-1 rounded">
          {userCertScore}%
        </span>
      </div>

      {/* Bottom Label: Project Exp */}
      <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none">
        <span className="text-xs font-bold text-[#191c1e] tracking-tight">
          {isKo ? '프로젝트 경험' : 'Project Exp'}
        </span>
        <span className="text-[10px] font-semibold text-[#0051d5] bg-blue-50 px-1 rounded">
          {userProjectScore}%
        </span>
      </div>

      {/* Left Label: Language (with warning if below cutoff) */}
      <div className="absolute top-1/2 -left-12 -translate-y-1/2 flex flex-col items-center pointer-events-none">
        <div className="flex items-center gap-0.5">
          {isLanguageWarning && (
            <span className="material-symbols-outlined text-[#ba1a1a] text-[15px] animate-bounce">
              warning
            </span>
          )}
          <span
            className={`text-xs font-bold tracking-tight ${
              isLanguageWarning ? 'text-[#ba1a1a]' : 'text-[#191c1e]'
            }`}
          >
            {isKo ? '어학' : 'Language'}
          </span>
        </div>
        <span
          className={`text-[10px] font-semibold px-1 rounded ${
            isLanguageWarning ? 'bg-red-50 text-[#ba1a1a]' : 'bg-blue-50 text-[#0051d5]'
          }`}
        >
          {userLangScore}%
        </span>
      </div>

      {/* Hover Info Tooltip */}
      {hoveredMetric && (
        <div className="absolute bottom-2 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#e2e8f0] shadow-lg text-[11px] font-medium text-[#191c1e] z-20 pointer-events-none animate-in fade-in">
          {hoveredMetric === 'gpa' &&
            (isKo ? `학점: 내 점수 ${userGpaScore}% / 목표선 ${cutlineGpa}%` : `GPA: You ${userGpaScore}% / Cutline ${cutlineGpa}%`)}
          {hoveredMetric === 'certs' &&
            (isKo ? `자격증: 내 점수 ${userCertScore}% / 목표선 ${cutlineCert}%` : `Certs: You ${userCertScore}% / Cutline ${cutlineCert}%`)}
          {hoveredMetric === 'project' &&
            (isKo ? `프로젝트: 내 점수 ${userProjectScore}% / 목표선 ${cutlineProject}%` : `Project: You ${userProjectScore}% / Cutline ${cutlineProject}%`)}
          {hoveredMetric === 'lang' &&
            (isKo ? `어학: 내 점수 ${userLangScore}% / 목표선 ${cutlineLang}%` : `Language: You ${userLangScore}% / Cutline ${cutlineLang}%`)}
        </div>
      )}
    </div>
  );
};
