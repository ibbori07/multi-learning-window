# Supabase 연동 구현 계획 (index.html)

현재 작성하신 `index.html`의 기능(목차 동적 로딩, 진도율 관리, 메모장 자동 저장, 실시간 질의응답/토론)을 구현하기 위해 데이터베이스 테이블을 구축하고 프론트엔드 연동을 진행합니다.

## User Review Required
> [!IMPORTANT]
> 본 작업은 사용자가 말씀하신 바와 같이 바닐라 자바스크립트가 적용된 **`index.html` 파일에 직접 연동하는 것을 기준**으로 작성되었습니다. 
> 혹시 파일트리에 보이는 React 컴포넌트(`src/components/...`) 쪽으로 작업을 원하시는 것이라면 진행 전에 미리 말씀해 주세요!

## Proposed Changes

### 1. 데이터베이스 스키마 구성 (Backend - Supabase MCP)
Supabase 프로젝트(`multi-learning-window`)에 직접 접속하여 아래 테이블들을 생성하고, 실시간 통신 기능(Realtime)을 활성화합니다.

- **`curriculum` 테이블**: 좌측 학습 목차 정보 저장 (구분: intro, video, doc 등. 소요시간, 상태 등)
- **`user_progress` 테이블**: 단원별 학습 진도 저장 (누가 어떤 단원을 완료했는지 정보)
- **`memos` 테이블**: 사용자의 학습 메모 자동 저장 (Upsert 처리)
- **`discussions` 테이블**: 토론 뷰와 우측 Q&A 패널에서 사용할 실시간 채팅 데이터 (보낸 사람, 내용 등)

> [!NOTE]
> 테이블 생성 후에는 디자인된 UI를 무너뜨리지 않도록, 기존 디자인에 맞는 '초기 더미 데이터(Seed Date)'를 스크립트로 넣어두겠습니다.

### 2. Frontend 수정 (`index.html`)

- **Supabase SDK 연동**: 
  - `<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>` 추가
  - 데이터베이스 URL과 Publishable Key 연동 (`ehdjrzpokwzeqoeyvdju`)
- **[1번 작업] 커리큘럼 및 진도율 동적 로드**:
  - `loadCurriculum()` 등 자바스크립트 함수를 작성하여, HTML에 더미로 박혀있는 내역을 지우고 DB에서 가져와 목록 렌더링.
- **[2번 작업] 진도율 계산 및 저장**:
  - 특정 탭 클릭이나 영상 완료 시 `user_progress` DB에 완료 처리. 이를 퍼센티지로 계산하여 상단 진도바(Progress Bar) 업데이트.
- **[3번 작업] 나의 메모 자동 저장**:
  - 메모장 `<textarea>`에 `input` 이벤트를 걸고, `setTimeout`을 활용한 디바운스(Debounce) 기법으로 텍스트 입력 시 DB에 자동 저장.
- **[4번 작업] 실시간 질의응답 & 토론방**:
  - 입력창에서 "전송" 이벤트 시 `discussions`에 INSERT.
  - `supabase.channel('custom-all-channel')`을 구독하여 새 채팅 데이터가 들어오면 즉각적으로 채팅 말풍선 HTML 추가 렌더링.

## Open Questions
- 사용자 인증(로그인) 기능 도입 전까지는, 진도나 메모가 섞이지 않도록 브라우저의 `localStorage` 기반으로 임시 'Guest ID'를 무작위 생성해서 유저를 구분하도록 작업해도 괜찮을까요?

## Verification Plan
1. 데이터베이스 연동 직후 브라우저에서 `index.html`을 열었을 때, 기존 UI와 동일하게 보이되 데이터는 DB에서 로드되는지 확인합니다.
2. 브라우저 탭을 2개 열어두고 한 쪽 토론장에서 메시지를 보냈을 때, 새로고침 없이 다른 브라우저 탭에도 나타나는지(Realtime) 직접 검증합니다.
3. 메모장에 글을 치고 새로고침 해도 글이 그대로 남아있는지 확인합니다.
