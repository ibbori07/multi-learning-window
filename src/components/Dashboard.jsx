import React, { useState } from 'react';
import Header from './Header';
import SidebarLeft from './SidebarLeft';
import SidebarRight from './SidebarRight';
import ContentArea from './ContentArea';

// 학습 목차 데이터 (6가지 유형 1:1 매핑용)
const CURRICULUM = [
  { id: 1, title: "0. 학습 오리엔테이션", type: "intro", duration: "5분", completed: true },
  { id: 2, title: "1. 시스템의 이해", type: "video", duration: "15분", completed: false },
  { id: 3, title: "2. 핵심 디자인 원칙", type: "doc", duration: "10분 읽기", completed: false },
  { id: 4, title: "3. 팟캐스트: 미래 기술", type: "audio", duration: "45분", completed: false },
  { id: 5, title: "4. 주제 심층 토론", type: "discussion", duration: "자유 참여", completed: false },
  { id: 6, title: "5. 모듈 1 단원 평가", type: "quiz", duration: "5문항", completed: false }
];

export default function Dashboard() {
  const [isLeftOpen, setIsLeftOpen] = useState(false);
  const [isRightOpen, setIsRightOpen] = useState(false);
  const [activeUnit, setActiveUnit] = useState(CURRICULUM[0]);

  const toggleLeft = () => {
    setIsLeftOpen(!isLeftOpen);
    if(isRightOpen && !isLeftOpen) setIsRightOpen(false);
  };

  const toggleRight = () => {
    setIsRightOpen(!isRightOpen);
    if(isLeftOpen && !isRightOpen) setIsLeftOpen(false);
  };

  return (
    <div className="h-screen bg-white text-gray-800 flex flex-col overflow-hidden font-sans">
      {/* 모바일 화면용 오버레이 */}
      {(isLeftOpen || isRightOpen) && (
        <div 
          className="fixed inset-0 bg-black/40 z-20 lg:hidden transition-opacity" 
          onClick={() => { setIsLeftOpen(false); setIsRightOpen(false); }}
          aria-hidden="true"
        />
      )}

      <Header toggleLeft={toggleLeft} toggleRight={toggleRight} />

      <div className="flex-grow flex relative overflow-hidden h-[calc(100vh-4rem)]">
        <SidebarLeft 
          isOpen={isLeftOpen} 
          close={() => setIsLeftOpen(false)} 
          curriculum={CURRICULUM}
          activeUnit={activeUnit}
          onSelectUnit={(unit) => {
            setActiveUnit(unit);
            // 모바일에서는 항목 선택 시 좌측 메뉴 목록 자동 닫힘
            if(window.innerWidth < 1024) setIsLeftOpen(false);
          }}
        />

        <ContentArea activeUnit={activeUnit} />

        <SidebarRight 
          isOpen={isRightOpen} 
          close={() => setIsRightOpen(false)} 
        />
      </div>
    </div>
  );
}
