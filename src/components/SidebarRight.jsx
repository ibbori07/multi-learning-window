import React, { useState } from 'react';
import { X, MessageSquare, Edit3, DownloadCloud, Send } from 'lucide-react';

export default function SidebarRight({ isOpen, close }) {
  const [activeTab, setActiveTab] = useState('qa');

  const TABS = [
    { id: 'qa', icon: MessageSquare, label: '질의응답 (Q&A)' },
    { id: 'memo', icon: Edit3, label: '학습 메모' },
    { id: 'library', icon: DownloadCloud, label: '자료실' }
  ];

  return (
    <aside 
      className={`absolute lg:static top-0 right-0 h-full w-80 bg-white border-l border-[#E8F5E9] z-30 flex flex-col transition-transform duration-300 shadow-lg lg:shadow-none ${
        isOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'
      }`}
      aria-label="학습 도구 모음"
    >
      <div className="p-4 border-b border-gray-50 flex justify-between items-center shrink-0">
        <h2 className="font-semibold text-gray-800 tracking-tight">학습 확장 도구</h2>
        <button 
          onClick={close} 
          className="lg:hidden p-1 text-gray-400 hover:text-gray-600 rounded focus:ring-2 focus:ring-[#2D5A27] outline-none"
          aria-label="도구 닫기"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* 탭 네비게이션 */}
      <div className="flex border-b border-gray-100 shrink-0" role="tablist">
        {TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button 
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-3 flex flex-col items-center gap-1 transition-colors focus:outline-none focus:ring-inset focus:ring-2 focus:ring-[#2D5A27] ${
                isActive ? 'text-[#2D5A27] border-b-2 border-[#2D5A27] bg-[#E8F5E9]/30' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-[11px] font-bold tracking-wider">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* 탭 콘텐츠 영역 */}
      <div className="flex-grow overflow-y-auto bg-[#fafafa]">
        
        {/* 1. Q&A 챗바 */}
        {activeTab === 'qa' && (
          <div className="h-full flex flex-col" role="tabpanel" aria-label="질의응답 영역">
            <div className="flex-grow p-4 flex flex-col gap-3">
              <div className="bg-[#E8F5E9] text-[#2D5A27] text-xs p-3 rounded-lg rounded-tl-sm shadow-sm">
                안녕하세요! 학습 중 궁금한 점이 있으신가요? AI 튜터가 즉시 답변해드립니다.
              </div>
              <div className="bg-white border border-gray-100 text-gray-600 text-xs p-3 rounded-lg rounded-tr-sm self-end max-w-[85%] shadow-sm">
                반응형 레이아웃의 원리가 헷갈려요.
              </div>
            </div>
            <div className="p-3 border-t border-gray-100 bg-white">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="질문을 입력하세요..." 
                  className="w-full bg-gray-50 text-sm rounded-full pl-4 pr-10 py-2.5 outline-none focus:ring-2 focus:ring-[#2D5A27]"
                  aria-label="질문 입력창"
                />
                <button 
                   className="absolute right-2 top-1.5 p-1.5 rounded-full text-white bg-[#2D5A27] hover:bg-opacity-90 focus:ring-2 focus:ring-offset-1 focus:ring-[#2D5A27] outline-none"
                   aria-label="전송"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 2. 개인 메모장 */}
        {activeTab === 'memo' && (
          <div className="h-full p-4 flex flex-col" role="tabpanel" aria-label="메모장 영역">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-semibold text-gray-500">나만의 오답/학습 노트</span>
              <span className="text-[10px] text-[#2D5A27] bg-[#E8F5E9] px-2 py-0.5 rounded-full font-semibold">자동저장됨</span>
            </div>
            <textarea 
              className="flex-grow w-full border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2D5A27] resize-none leading-relaxed"
              placeholder="여기에 자유롭게 내용을 기록하세요..."
              defaultValue="모바일에서 컴포넌트가 적절히 숨겨지는지 확인할 것. ARIA 라벨의 중요성을 다시 한번 기억하자."
              aria-label="메모 입력 텍스트"
            />
          </div>
        )}

        {/* 3. 자료실 */}
        {activeTab === 'library' && (
          <div className="p-4 space-y-3" role="tabpanel" aria-label="자료구역">
            {[1, 2].map((i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#E8F5E9] text-[#2D5A27] rounded-md">
                    <DownloadCloud className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800">모듈1_핵심정리본_{i}.pdf</h4>
                    <p className="text-[10px] text-gray-400">2.4 MB</p>
                  </div>
                </div>
                <button 
                  className="text-[#2D5A27] font-bold text-xs hover:underline focus:outline-none focus:ring-2 focus:ring-[#2D5A27] rounded px-1"
                  aria-label="자료 다운로드"
                >
                  다운로드
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
}
