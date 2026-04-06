import React from 'react';
import { X, CheckCircle2, PlayCircle, FileText, Headphones, HelpCircle, Lock, Info, MessageCircle } from 'lucide-react';

const UNIT_ICONS = {
  intro: Info,
  video: PlayCircle,
  doc: FileText,
  audio: Headphones,
  discussion: MessageCircle,
  quiz: HelpCircle
};

export default function SidebarLeft({ isOpen, close, curriculum, activeUnit, onSelectUnit }) {
  return (
    <aside 
      className={`absolute lg:static top-0 left-0 h-full w-72 bg-white border-r border-[#E8F5E9] z-30 flex flex-col transition-transform duration-300 shadow-lg lg:shadow-none ${
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}
      aria-label="학습 목차"
    >
      <div className="p-5 border-b border-gray-50 flex justify-between items-center shrink-0">
        <h2 className="font-semibold text-gray-800 tracking-tight">학습 목차 (커리큘럼)</h2>
        <button 
          onClick={close} 
          className="lg:hidden p-1 text-gray-400 hover:text-gray-600 rounded focus:ring-2 focus:ring-[#2D5A27] outline-none"
          aria-label="목차 닫기"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
      
      <nav className="flex-grow overflow-y-auto p-4 space-y-2">
        {curriculum.map((unit) => {
          const Icon = UNIT_ICONS[unit.type] || FileText;
          const isActive = activeUnit.id === unit.id;
          
          return (
            <button
              key={unit.id}
              onClick={() => onSelectUnit(unit)}
              aria-current={isActive ? "page" : undefined}
              className={`w-full flex text-left gap-3 px-3 py-3 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-[#2D5A27] ${
                isActive 
                  ? 'bg-[#E8F5E9] border border-[#2D5A27]/20 shadow-sm' 
                  : 'hover:bg-gray-50 border border-transparent'
              } ${!isActive && unit.completed ? 'opacity-70' : ''}`}
            >
              <div className={`mt-0.5 flex-shrink-0 ${isActive ? 'text-[#2D5A27]' : unit.completed ? 'text-[#2D5A27]' : 'text-gray-400'}`}>
                {unit.completed ? <CheckCircle2 className="w-5 h-5" aria-label="완료됨" /> : <Icon className="w-5 h-5" aria-hidden="true" />}
              </div>
              <div>
                <p className={`font-semibold text-sm ${isActive ? 'text-[#2D5A27]' : 'text-gray-700'}`}>
                  {unit.title}
                </p>
                <div className={`text-[11px] mt-1 font-medium px-1.5 py-0.5 inline-block rounded-md ${isActive ? 'bg-[#2D5A27]/10 text-[#2D5A27]' : 'bg-gray-100 text-gray-500'}`}>
                  {unit.type.toUpperCase()} • {unit.duration}
                </div>
              </div>
            </button>
          );
        })}
        
        {/* 잠긴 콘텐츠 */}
        <div 
          className="w-full flex text-left gap-3 px-3 py-3 rounded-xl opacity-50 cursor-not-allowed"
          aria-label="6번. 최종 수료 평가(잠김 상태)"
        >
          <div className="mt-0.5 text-gray-300">
            <Lock className="w-5 h-5" />
          </div>
          <div>
            <p className="font-semibold text-sm text-gray-500">6. 최종 수료 평가</p>
            <p className="text-[11px] mt-1 text-gray-400">잠김</p>
          </div>
        </div>
      </nav>
    </aside>
  );
}
