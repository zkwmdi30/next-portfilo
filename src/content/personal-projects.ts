export type PersonalProject = {
  slug: string;
  index: string;
  title: string;
  category: string;
  summary: string;
  lead: string;
  role: string;
  status: string;
  tags: string[];
  highlight: string;
  highlightLabel: string;
  images: Array<{
    src: string;
    width: number;
    height: number;
    alt: string;
    caption: string;
  }>;
  external?: { url: string; label: string };
  context: string;
  experienceTitle: string;
  experience: Array<{ title: string; body: string }>;
  decisions: Array<{ title: string; body: string }>;
  implementation: Array<{ title: string; body: string }>;
  outcomes: string[];
};

export const personalProjects: PersonalProject[] = [
  {
    slug: "lart-marketing",
    index: "01",
    title: "인스타그램 마케팅 자동화",
    category: "AI CONTENT OPERATIONS",
    summary:
      "브랜드 담당자의 반복 업무를 줄이기 위해 AI 초안 생성, Telegram 검수·수정, 승인 후 Instagram 게시를 하나의 흐름으로 연결했습니다.",
    lead: "지인 회사 LART의 반복적인 콘텐츠 제작·검수·게시 업무를 자동화한 개인 프로젝트입니다. Mac mini의 에이전트 환경과 Telegram 검수, 브라우저 게시 자동화를 직접 구성하고 실제 브랜드 계정 운영에 적용했습니다.",
    role: "자동화 설계 · 에이전트 환경 구축 · 운영",
    status: "실제 브랜드 계정에 적용",
    tags: ["OpenClaw", "OpenAI API", "Telegram Bot", "Peekaboo", "Mac mini"],
    highlight: "검수 후 게시",
    highlightLabel: "사람의 승인을 포함한 콘텐츠 자동화",
    images: [
      {
        src: "/images/personal/lart-instagram.png",
        width: 1179,
        height: 2556,
        alt: "LART Instagram 계정에 게시된 조명·빛·축제 관련 카드뉴스 피드",
        caption: "LART 운영 계정의 실제 콘텐츠 피드 · 제공받은 2026.10.16 화면",
      },
    ],
    external: {
      url: "https://www.instagram.com/lart_luminarie/",
      label: "Instagram에서 보기",
    },
    context:
      "브랜드 계정을 꾸준히 운영하려면 콘텐츠를 만들고, 수정 의견을 반영하고, 게시하는 작업을 반복해야 합니다. 이 과정을 하나의 흐름으로 연결하되, 브랜드에 맞는지 판단하고 공개를 승인하는 단계는 사람이 맡도록 구성했습니다.",
    experienceTitle: "Telegram에서 검수하고, 승인한 콘텐츠를 게시합니다.",
    experience: [
      {
        title: "예약 생성",
        body: "카드뉴스는 하루 2회, 영상은 하루 1회 생성하도록 예약하고 검토할 초안을 준비합니다.",
      },
      {
        title: "대화로 수정",
        body: "Telegram 봇에서 이미지·영상을 확인하고, 자연어로 수정 요청을 보내 결과물을 다시 생성합니다.",
      },
      {
        title: "승인 후 게시",
        body: "담당자가 승인하면 macOS UI 자동화가 브라우저를 제어해 Instagram 게시를 진행합니다.",
      },
      {
        title: "게시 결과 확인",
        body: "공유 결과와 프로필 반영 여부를 확인합니다. 실패한 작업은 승인된 콘텐츠와 함께 남겨 후속 처리를 이어갑니다.",
      },
    ],
    decisions: [
      {
        title: "생성 결과와 공개 승인을 분리했습니다.",
        body: "AI가 만든 초안을 바로 게시하지 않고 검수·수정·승인 단계를 거치게 했습니다. 자동화 속도보다 담당자가 콘텐츠를 통제할 수 있는 운영 구조를 우선했습니다.",
      },
      {
        title: "게시 시도와 게시 완료를 구분했습니다.",
        body: "실제 운영 중 Instagram 공유가 실패한 사례가 있었습니다. 재시도 후에도 게시물이 반영되지 않자 완료로 기록하지 않고 승인 상태와 생성 파일을 보존했습니다. 자동화가 어디까지 성공했는지 확인할 수 있게 한 사례입니다.",
      },
    ],
    implementation: [
      {
        title: "상시 실행 환경",
        body: "Mac mini에 OpenClaw 기반 에이전트 환경과 콘텐츠 생성 스케줄을 구성했습니다.",
      },
      {
        title: "검수와 수정 채널",
        body: "Telegram 봇으로 결과물 전달, 자연어 수정 요청, 재생성, 업로드 승인을 연결했습니다.",
      },
      {
        title: "브라우저 게시 자동화",
        body: "OpenClaw와 Peekaboo로 macOS의 브라우저를 제어하고 게시 결과를 확인했습니다.",
      },
    ],
    outcomes: [
      "실제 브랜드 계정에서 일 1~2건의 콘텐츠를 게시하는 파이프라인 운영",
      "콘텐츠 생성·게시의 반복 작업을 자동화하고 사람의 개입을 검수와 예외 처리에 집중",
      "게시 실패 시 승인 상태와 결과물을 보존해 후속 처리에 활용",
    ],
  },
  {
    slug: "chinese-vocabulary",
    index: "02",
    title: "단어한끼",
    category: "CHINESE LEARNING APP",
    summary:
      "짧은 학습을 이어갈 수 있도록 10문제 퀴즈와 오답 복습을 설계했습니다. Flutter 앱 개발과 콘텐츠 API 연동을 맡아 App Store에 출시했습니다.",
    lead: "학습 분량의 부담을 줄이고 짧은 복습을 이어가도록 만든 중국어 학습 앱입니다. 10문제 퀴즈와 노선형 학습 흐름을 설계하고 Flutter 화면·학습 기록·음성 기능을 구현했습니다. 콘텐츠 API 연동부터 App Store 배포까지 직접 진행했습니다.",
    role: "앱 UX 설계 · Flutter 개발 · API 연동 · 배포",
    status: "App Store 출시",
    tags: ["Flutter", "Dart", "GetX", "Hive", "TTS", "Spring Boot"],
    highlight: "한 역씩 이어가는 중국어 학습",
    highlightLabel:
      "학습 노선에서 다음 목표를 확인하고, 퀴즈와 발음 듣기로 단어를 익히고, 틀린 단어는 복습으로 이어갑니다.",
    images: [
      {
        src: "/images/personal/chinese-learning-route.png",
        width: 942,
        height: 2048,
        alt: "단어한끼의 지하철 노선형 학습 화면과 오답 복습, 누적 풀이 기록",
        caption: "현재 위치와 다음 목표를 보여주는 학습 노선",
      },
      {
        src: "/images/personal/chinese-learning-quiz.png",
        width: 942,
        height: 2048,
        alt: "중국어 단어와 병음, 발음 듣기, 네 개의 뜻 선택지를 제공하는 단어한끼 퀴즈 화면",
        caption: "단어·병음·발음을 함께 확인하는 10문제 퀴즈",
      },
    ],
    external: {
      url: "https://apps.apple.com/kr/app/%EB%8B%A8%EC%96%B4%ED%95%9C%EB%81%BC-%EC%A4%91%EA%B5%AD%EC%96%B4-%EB%8B%A8%EC%96%B4-%ED%95%99%EC%8A%B5/id6742045086",
      label: "App Store에서 보기",
    },
    context:
      "학습을 시작할 때 해야 할 분량이 많아 보이면 꾸준히 이어가기 어렵습니다. 한 번의 학습을 10문제로 나누고, 완료한 만큼 다음 역이 열리는 노선으로 진행 상황을 표현했습니다. 틀린 단어는 복습으로 다시 연결했습니다.",
    experienceTitle: "퀴즈를 마치면 다음 역이 열립니다.",
    experience: [
      {
        title: "오늘의 노선 선택",
        body: "현재 역과 잠긴 역, 전체 진행도를 한 화면에서 확인하고 학습을 시작합니다.",
      },
      {
        title: "10문제 풀이",
        body: "중국어 단어와 병음을 보고 뜻을 고릅니다. 발음을 듣고 정답을 확인할 수 있습니다.",
      },
      {
        title: "오답과 예문 복습",
        body: "헷갈린 단어를 다시 풀고 예문을 들으며 단어가 쓰이는 맥락을 확인합니다.",
      },
      {
        title: "학습 여정 이어가기",
        body: "누적 풀이와 평균 점수를 확인하고 다음 학습으로 이어갑니다.",
      },
    ],
    decisions: [
      {
        title: "작은 완료 경험을 반복하도록 구성했습니다.",
        body: "퀴즈를 10문제로 나누고 노선도·잠금 해제·고양이 응원 애니메이션으로 진행을 보여줍니다. 한 번에 많은 단어를 제시하기보다 지금 풀 분량과 다음 목표가 분명한 화면을 설계했습니다.",
      },
      {
        title: "학습 기록과 콘텐츠 API의 역할을 나눴습니다.",
        body: "학습 이력은 Hive에 로컬로 저장하고, 콘텐츠는 Spring Boot REST API와 연동했습니다. 발음과 예문 듣기에는 flutter_tts, 효과음에는 audioplayers를 사용했습니다.",
      },
    ],
    implementation: [
      {
        title: "앱과 인터랙션",
        body: "Flutter·Dart·GetX로 iOS 화면, 학습 노선, 잠금 상태와 응원 애니메이션을 구현했습니다.",
      },
      {
        title: "학습 데이터와 음성",
        body: "Hive 학습 기록과 TTS, 효과음을 연결해 풀이·피드백·복습 경험을 구성했습니다.",
      },
      {
        title: "서버와 출시",
        body: "Spring Boot REST API를 연동하고 Supabase·Koyeb을 사용했습니다. 앱 개발 이후 App Store 배포까지 진행했습니다.",
      },
    ],
    outcomes: [
      "단어 퀴즈·발음 듣기·예문·오답 복습을 갖춘 iOS 앱 출시",
      "노선형 진행 화면과 로컬 기록으로 학습을 이어갈 수 있는 제품 경험 구현",
      "App Store에서 실제 제품과 출시 내용을 확인 가능",
    ],
  },
];

export function getPersonalProject(slug: string) {
  return personalProjects.find((project) => project.slug === slug);
}
