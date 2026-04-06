import React, { useState } from 'react';
import { Play, Maximize, ZoomIn, ZoomOut, FastForward, CheckCircle2, XCircle } from 'lucide-react';

export default function ContentArea({ activeUnit }) {
  const wrapClass = "w-full max-w-4xl mx-auto flex flex-col p-4 lg:p-8 animation-fade-in";

  const renderContent = () => {
    switch (activeUnit.type) {
      
      // 1. 인트로/기본형 (학습 시작 전 개요)
      case 'intro':
        return (
          <div className={wrapClass}>
            <div className="bg-[#F2F9F1] border border-[#E8F5E9] rounded-2xl p-8 lg:p-12 text-center mt-4">
               <h1 className="text-3xl lg:text-4xl font-bold text-[#2D5A27] mb-4">{activeUnit.title}</h1>
               <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
                 본 모듈에서는 시스템의 전반적인 구조와 디자인 원칙에 대해 학습합니다. 우측의 학습 도구(Q&A, 메모, 자료실)를 적극 활용하여 효율적으로 학습을 진행해보세요.
               </p>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                     <h3 className="font-bold text-[#2D5A27] tracking-wider mb-2 text-sm uppercase">학습 목표 1</h3>
                     <p className="text-sm text-gray-600">시스템 아키텍처의 기본 원리 이해하기</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                     <h3 className="font-bold text-[#2D5A27] tracking-wider mb-2 text-sm uppercase">학습 목표 2</h3>
                     <p className="text-sm text-gray-600">정보의 구조화 및 배치 패턴 습득</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                     <h3 className="font-bold text-[#2D5A27] tracking-wider mb-2 text-sm uppercase">학습 목표 3</h3>
                     <p className="text-sm text-gray-600">실시간 피드백 시스템 통합하기</p>
                  </div>
               </div>
               <button className="mt-10 bg-[#2D5A27] text-white px-8 py-3 rounded-full font-bold shadow-md hover:bg-opacity-90 transition transform hover:-translate-y-0.5 ring-2 ring-transparent focus:ring-offset-2 focus:ring-[#2D5A27]">
                  본격적으로 학습 시작하기
               </button>
            </div>
          </div>
        );

      // 2. 동영상형
      case 'video':
        return (
          <div className={wrapClass}>
            <div className="mb-6">
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">{activeUnit.title}</h1>
              <p className="text-sm text-gray-500 mt-2">끝까지 집중해서 시청한 후 다음 항목으로 넘어가세요.</p>
            </div>
            
            {/* 16:9 비율 비디오 래퍼 */}
            <div className="relative w-full pb-[56.25%] bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-800 group" aria-label="동영상 플레이어">
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 bg-[#2D5A27] text-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform focus:outline-none focus:ring-4 focus:ring-[#E8F5E9]" aria-label="영상 재생">
                  <Play className="w-8 h-8 ml-1" />
                </button>
              </div>
              {/* 재생 컨트롤 바 */}
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent flex items-center gap-4">
                 <div className="h-1.5 flex-grow bg-white/30 rounded-full overflow-hidden cursor-pointer" aria-label="타임라인">
                    <div className="h-full bg-[#E8F5E9] w-1/3 transition-all"></div>
                 </div>
                 <button aria-label="전체화면" className="focus:outline-none">
                   <Maximize className="w-5 h-5 text-white cursor-pointer hover:text-[#E8F5E9]" />
                 </button>
              </div>
            </div>
          </div>
        );
      
      // 3. 문서형
      case 'doc':
        return (
          <div className={wrapClass}>
             <div className="mb-8 flex flex-wrap gap-4 justify-between items-center border-b border-gray-100 pb-4 mt-2">
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">{activeUnit.title}</h1>
                <div className="flex gap-2 bg-gray-50 p-1 rounded-lg border border-gray-200">
                   <button aria-label="글씨 축소" className="p-1.5 text-gray-600 hover:text-[#2D5A27] hover:bg-[#E8F5E9] rounded focus:outline-none focus:bg-[#E8F5E9]"><ZoomOut className="w-4 h-4"/></button>
                   <button aria-label="글씨 확대" className="p-1.5 text-gray-600 hover:text-[#2D5A27] hover:bg-[#E8F5E9] rounded focus:outline-none focus:bg-[#E8F5E9]"><ZoomIn className="w-4 h-4"/></button>
                </div>
             </div>
             <article className="prose prose-stone lg:prose-lg text-gray-700 leading-loose max-w-none">
               <h2 className="text-xl font-bold mt-2 mb-4 text-[#2D5A27]">01. 레이아웃의 규칙</h2>
               <p className="mb-6 text-[15px] lg:text-base">웹 디자인의 핵심은 정보의 체계화입니다. 1:1 매핑 구조를 통해 사용자의 시선이 분산되지 않고 오로지 중앙의 콘텐츠 영역으로 자연스럽게 유도될 수 있습니다. 이를 위해서는 일관성 있는 색상, 여백, 타이포그래피가 필수적입니다.</p>
               
               <h2 className="text-xl font-bold mt-8 mb-4 text-[#2D5A27]">02. 기억해야 할 포인트</h2>
               <ul className="list-disc pl-5 space-y-3 mb-8 bg-gray-50 p-6 rounded-xl border border-gray-100 text-[15px] lg:text-base">
                 <li>상태 관리(State Management)를 활용하여 부드러운 전환 효과(Transition) 구성.</li>
                 <li>컨트롤 역할을 하는 메뉴(Navigation) 영역과 표출 영역(Main)의 역할을 확고히 분리.</li>
                 <li>웹 접근성을 위한 ARIA 적용을 필수 규칙으로 삼기.</li>
               </ul>
               <p className="mb-6 text-[15px] lg:text-base">모바일 화면에서도 이러한 원칙은 동일하게 적용되며, 공간의 제약이 있는 만큼 드로어 패턴을 이용해 필요할 때만 도구를 꺼내 쓰는 방식이 가장 이상적입니다.</p>
             </article>
          </div>
        );

      // 4. 음성/오디오형
      case 'audio':
        return (
          <div className={wrapClass}>
             <div className="mb-8">
               <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">{activeUnit.title}</h1>
               <p className="text-sm text-gray-500 mt-2">눈을 감고 편안히 들으며 청각으로 학습하는 팟캐스트 세션입니다.</p>
             </div>
             
             <div className="bg-gradient-to-br from-[#2D5A27] to-[#1E3C1A] p-8 lg:p-12 rounded-2xl shadow-lg flex flex-col items-center justify-center relative overflow-hidden text-white" aria-label="오디오 플레이어">
                <div className="text-center mb-8 z-10 w-full max-w-md">
                   <h3 className="text-xl font-bold mb-1 border-b border-white/20 pb-4 inline-block font-serif">미래 기술 트렌드 2026</h3>
                   <div className="text-xs font-semibold tracking-widest text-[#E8F5E9]/70 mt-4 uppercase">EPISODE 04</div>
                </div>
                <div className="w-full max-w-2xl flex flex-col items-center gap-6 z-10">
                   {/* 웨이브폼 시각화 */}
                   <div className="w-full flex items-center justify-center gap-1 h-16 xl:h-24 px-4 bg-black/10 rounded-xl">
                     {[...Array(40)].map((_, i) => {
                       // 중간이 길고 양 끝이 낮아지는 유사 파형 생성 로직
                       const heightVal = Math.max(10, Math.sin((i / 40) * Math.PI) * (Math.random() * 60 + 40))
                       return (
                         <div key={i} className="flex-1 bg-white/60 rounded-full" style={{ height: `${heightVal}%` }}></div>
                       )
                     })}
                   </div>
                   
                   <div className="flex items-center gap-6 mt-4 w-full justify-between">
                     <span className="text-xs font-medium font-mono text-white/70">12:35</span>
                     <div className="flex gap-4">
                        <button className="bg-white/20 px-3 py-1.5 rounded-lg text-xs font-bold focus:outline-none hover:bg-white/30 transition">
                          <FastForward className="w-4 h-4 inline mr-1 scale-x-[-1]"/> 15초
                        </button>
                        <button className="w-14 h-14 bg-white text-[#2D5A27] rounded-full flex items-center justify-center shrink-0 shadow-lg hover:scale-105 transition-transform mx-2 focus:outline-none focus:ring-4 focus:ring-white/40" aria-label="음성 재생">
                          <Play className="w-7 h-7 ml-1" />
                        </button>
                        <button className="bg-white/20 px-3 py-1.5 rounded-lg text-xs font-bold focus:outline-none hover:bg-white/30 transition">
                          <FastForward className="w-4 h-4 inline mr-1"/> 15초
                        </button>
                     </div>
                     <span className="text-xs font-medium font-mono text-white/70">45:00</span>
                   </div>
                </div>
             </div>
          </div>
        );

      // 5. 토론형
      case 'discussion':
        return (
          <div className={wrapClass}>
             <div className="mb-8 border-b border-gray-100 pb-6">
               <span className="bg-[#E8F5E9] text-[#2D5A27] px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full">주제 토론</span>
               <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-4">{activeUnit.title}</h1>
               <p className="text-[15px] text-gray-700 mt-4 leading-relaxed bg-gray-50 border border-gray-200 p-5 rounded-xl blockquote">
                 "UI를 디자인할 때 단순함(Minimalism)이 항상 사용성을 보장하는가?" 에 대하여 여러분의 견해를 자유롭게 나누어 봅시다.
               </p>
             </div>
             
             {/* 댓글/스레드 영역 */}
             <div className="space-y-6">
                {[
                  { user: "김개발", time: "2시간 전", text: "미니멀리즘은 시각적으로 아름답지만, 기능이 명확히 노출되지 않으면 초보자에게 오히려 어려움을 줄 수 있습니다." },
                  { user: "이디자인", time: "1시간 전", text: "동의합니다. 그래서 적절한 ARIA 라벨링과 툴팁이 추가되어야 진정한 UX 가치가 성립한다고 생각해요." }
                ].map((comment, i) => (
                  <div key={i} className="flex gap-4">
                     <div className="w-10 h-10 rounded-full bg-[#2D5A27] text-white flex items-center justify-center font-bold shrink-0">{comment.user[0]}</div>
                     <div className="flex-grow bg-white border border-gray-100 p-4 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-bold text-sm text-gray-900">{comment.user}</span>
                          <span className="text-xs text-gray-400">{comment.time}</span>
                        </div>
                        <p className="text-[14px] text-gray-700 leading-relaxed">{comment.text}</p>
                     </div>
                  </div>
                ))}
             </div>
             
             <div className="mt-8 pt-4 pb-12 top-shadow-sm sticky bottom-0 bg-white">
                <div className="flex items-start gap-4 p-4 border border-[#2D5A27]/20 bg-[#F2F9F1] rounded-xl shadow-sm">
                   <div className="w-10 h-10 rounded-full bg-gray-300 text-white flex items-center justify-center font-bold shrink-0">나</div>
                   <div className="flex-grow">
                      <textarea 
                        className="w-full bg-white border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2D5A27] resize-none leading-relaxed" 
                        rows="3" 
                        placeholder="이 토론 주제에 대한 의견을 작성해주세요..."
                        aria-label="의견 입력란"
                      />
                      <div className="flex justify-end mt-2">
                        <button className="bg-[#2D5A27] text-white px-5 py-2 rounded-lg text-sm font-bold shadow-sm hover:bg-opacity-90 transition">
                          의견 등록
                        </button>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        );

      // 6. 퀴즈/평가형
      case 'quiz':
        return (
          <div className={wrapClass}>
             <div className="mb-6 flex justify-between items-center">
               <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">{activeUnit.title}</h1>
               <span className="text-sm font-bold text-[#2D5A27] bg-[#E8F5E9] px-3 py-1 rounded-full">진행 중 (1/5)</span>
             </div>
             
             <div className="bg-white border border-[#E8F5E9] p-6 lg:p-10 rounded-xl shadow-sm mt-4">
               <h3 className="font-bold text-lg text-gray-800 mb-4">{`Q1. 중앙 표출 영역으로 이벤트를 전달(통신)하기 위해 React의 하위 컴포넌트 간에 흔히 사용되는 기능(패턴)은?`}</h3>
               <div className="space-y-3 mt-8">
                 {[
                   { text: 'CSS Transitions(전환 객체)', correct: false }, 
                   { text: 'State(상태값)와 Props 매핑', correct: true }, 
                   { text: 'LocalStorage', correct: false }, 
                   { text: 'HTML Iframe', correct: false }
                 ].map((opt, i) => (
                   <label key={i} className="flex items-center gap-4 p-5 border border-gray-200 rounded-xl hover:bg-gray-50 cursor-pointer transition focus-within:ring-2 focus-within:ring-[#2D5A27] focus-within:bg-[#E8F5E9]/40">
                     <input type="radio" name="quiz_q1" className="text-[#2D5A27] focus:ring-[#2D5A27] w-5 h-5 ml-1" />
                     <span className="text-[15px] text-gray-800 font-medium">{opt.text}</span>
                   </label>
                 ))}
               </div>
               
               {/* 오답노트 데모 토글 영역 (현재는 숨김이지만 시각적 목업) */}
               <div className="mt-6 bg-[#FEF2F2] border border-[#FCA5A5] rounded-xl p-4 hidden">
                  <div className="flex gap-2 text-red-600 font-bold items-center mb-2">
                     <XCircle className="w-5 h-5" /> 오답입니다
                  </div>
                  <p className="text-[13px] text-red-900 leading-relaxed">
                    오답 노트: 상태(State)를 사용하여 상위 컴포넌트가 정보를 관리하고, 하위 컴포넌트에 props를 전달하여 동적인 변화를 만들어내는 것이 표준입니다.
                  </p>
               </div>

               <div className="mt-10 pt-6 border-t border-gray-100 flex justify-between items-center">
                 <button className="text-gray-500 font-bold text-sm tracking-wide hover:text-gray-900 transition underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded px-2 py-1">나중에 마저 풀기</button>
                 <button className="bg-[#2D5A27] text-white px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 shadow-sm transition transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2D5A27]">
                   정답 제출 후 채점
                 </button>
               </div>
             </div>
          </div>
        );

      default:
        return (
          <div className="flex h-full items-center justify-center p-8">
            <span className="text-gray-400 font-medium">항목을 선택해주세요.</span>
          </div>
        );
    }
  };

  return (
    <main className="flex-grow bg-white lg:bg-[#fcfbfc] overflow-y-auto" role="main" aria-live="polite">
      {renderContent()}
    </main>
  );
}
