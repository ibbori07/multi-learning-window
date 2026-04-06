import React from 'react';
import { Menu, Wrench, GraduationCap } from 'lucide-react';

export default function Header({ toggleLeft, toggleRight }) {
  return (
    <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-4 lg:px-6 z-30 shrink-0 relative shadow-sm">
      <div className="flex items-center gap-3 w-1/4">
        {/* 좌측 사이드바 토글 버튼 (모바일) */}
        <button 
          onClick={toggleLeft}
          className="p-2 -ml-2 text-gray-500 hover:bg-[#E8F5E9] hover:text-[#2D5A27] rounded-lg lg:hidden transition-colors focus:ring-2 focus:ring-[#2D5A27] outline-none"
          aria-label="학습 목차 열기"
        >
          <Menu className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-2 font-bold text-lg tracking-tight text-gray-900" aria-label="통합학습창 홈">
          <div className="w-8 h-8 rounded-lg bg-[#2D5A27] flex items-center justify-center text-white shadow-sm">
            <GraduationCap className="w-5 h-5" />
          </div>
          <span className="hidden sm:block text-[#2D5A27]">에듀코어(EduCore)</span>
        </div>
      </div>

      {/* 중앙 통합 진도율 */}
      <div className="flex-grow max-w-md mx-4">
        <div className="flex justify-between items-end mb-1">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">단원 통합 진도율</span>
          <span className="text-xs font-bold text-[#2D5A27]">16%</span>
        </div>
        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden w-full">
          <div 
            className="h-full bg-[#2D5A27] rounded-full transition-all duration-500 ease-out" 
            style={{ width: '16%' }}
            role="progressbar" 
            aria-valuenow="16" 
            aria-valuemin="0" 
            aria-valuemax="100"
            aria-label="학습 진도율 16퍼센트"
          />
        </div>
      </div>

      <div className="flex items-center gap-3 w-1/4 justify-end">
        {/* 우측 사이드바 토글 버튼 (모바일) */}
        <button 
          onClick={toggleRight}
          className="p-2 -mr-2 text-gray-500 hover:bg-[#E8F5E9] hover:text-[#2D5A27] rounded-lg lg:hidden transition-colors focus:ring-2 focus:ring-[#2D5A27] outline-none"
          aria-label="학습 도구 열기"
        >
          <Wrench className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}
