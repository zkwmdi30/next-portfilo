export type PublicSource = {
  url: string;
  label: string;
  location: string;
  verifiedAt: string;
};

export const multiLlmSource: PublicSource = {
  url: "https://www.ponylink.co.kr/it/core#page4",
  label: "포니링크 공식 홈페이지",
  location: "Works → AIoT → Multi LLM",
  verifiedAt: "2026.10.16",
};

export type CaseEvidence = {
  src: string;
  width: number;
  height: number;
  title: string;
  label: string;
  eyebrow: string;
  layout?: "wide";
  alt: string;
  caption: string;
  points: Array<{ title: string; body: string }>;
  source?: PublicSource;
  previewRegion?: { x: number; y: number; width: number; height: number };
};

export type CaseStudy = {
  slug: string;
  index: string;
  cardSummary: string;
  shortRole: string;
  highlight: string;
  highlightLabel: string;
  title: string;
  eyebrow: string;
  lead: string;
  period: string;
  role: string;
  team: string;
  scale: string;
  publication?: PublicSource;
  tags: string[];
  metrics: Array<{ value: string; label: string; detail?: string }>;
  context: string[];
  problems: Array<{ title: string; body: string }>;
  architecture: Array<{ name: string; detail: string }>;
  proof: {
    title: string;
    summary: string;
    flow: Array<{ title: string; detail: string }>;
    facts: Array<{ value: string; label: string }>;
    evidence?: CaseEvidence[];
    benchmark?: {
      caption: string;
      items: Array<{
        label: string;
        value: string;
        relative: number;
        highlight?: boolean;
      }>;
    };
  };
  decisions: Array<{
    index: string;
    title: string;
    situation: string;
    decision: string;
    tradeoff?: string;
  }>;
  ownership: string[];
  outcomes: string[];
  note?: string;
  accent: "blue" | "violet" | "green";
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "enterprise-ax",
    index: "01",
    cardSummary:
      "A.X 에이전트의 결과를 블랙보드에 모아 업무를 연결하고, 문서 분석의 병목을 개선했습니다.",
    shortRole: "Tech Lead",
    highlight: "34.8%",
    highlightLabel: "동일 문서 처리 시간 단축",
    title: "계열사 A.X 전환",
    eyebrow: "기업 AI 업무 전환",
    lead: "삼성제약과 젬백스앤카엘의 수기·분산 업무를 AI 기반 시스템으로 전환한 20억 원 규모 프로젝트입니다.",
    period: "2026.04 — 2026.08",
    role: "기술 리더",
    team: "전체 16명 · 개발자 10명",
    scale: "약 20억 원",
    tags: [
      "LangGraph",
      "FastAPI",
      "Kubernetes",
      "Keycloak",
      "Istio",
      "Argo CD",
    ],
    metrics: [
      {
        value: "34.8%",
        label: "Document Insight 처리 시간 단축",
        detail: "7.22MB·380페이지 PDF 기준",
      },
      {
        value: "12",
        label: "슈퍼바이저 연결 서브 에이전트",
        detail: "계획 기반 복수 실행",
      },
      {
        value: "10명",
        label: "개발팀 기술 리딩",
        detail: "전체 프로젝트 인원 16명",
      },
      {
        value: "9분 16초",
        label: "배포 파이프라인",
        detail: "테스트·이미지·SBOM 포함",
      },
    ],
    context: [
      "영업 관련 요청과 정보는 카카오톡, 이메일 등 여러 채널로 들어왔고 담당자가 이를 수기로 취합해야 했습니다. 채널에서 받은 데이터는 다시 Excel로 정리해 월별로 저장했으며, 흡수율과 이상치는 별도 프로그램을 실행한 뒤 육안으로 비교했습니다.",
      "목표는 단순 챗봇 도입이 아니었습니다. 분산된 채널과 수기 업무를 하나의 데이터 흐름으로 통합하고, AI가 데이터를 해석·적재·검색·출력하며 필요한 경우 ERP와 그룹웨어까지 연결되는 업무 시스템을 만드는 것이었습니다.",
      "사업 조건상 A.X 에이전트를 반드시 구현·활용해야 했습니다. 대화 상태를 갱신하는 흐름만으로는 여러 에이전트의 결과를 다음 업무로 이어가기 어려웠습니다. 검증된 정보를 공용 블랙보드에 축적하고, 슈퍼바이저가 이를 근거로 다음 작업을 결정하는 구조를 선택했습니다.",
    ],
    problems: [
      {
        title: "A.X 필수 활용 조건과 복합 업무의 연결",
        body: "A.X 에이전트를 실행 단위로 유지하면서 ERP, 그룹웨어, 문서 검색·요약·번역의 결과를 블랙보드에 모았습니다. 슈퍼바이저가 채택된 근거를 다음 작업에 전달해 하나의 요청을 끝까지 처리하도록 설계했습니다.",
      },
      {
        title: "상용화하기 어려운 문서 분석 속도",
        body: "SKT DI가 동일 데이터 처리에 59분 47초가 걸리는 문제를 확인하고, Azure API 구조와 호환되는 자체 Document Insight를 설계했습니다.",
      },
      {
        title: "설치 문서가 부족한 플랫폼 구축",
        body: "Keycloak 권한 구성을 로그와 실행 결과로 역추적하고, 인증·배포·관측·로그·트래픽까지 전체 플랫폼을 직접 연결했습니다.",
      },
    ],
    architecture: [
      { name: "사용자 화면", detail: "Vue · React · 통합 챗봇 · 문서함" },
      {
        name: "애플리케이션",
        detail: "Python · FastAPI · LangGraph 슈퍼바이저",
      },
      {
        name: "결과 공유",
        detail: "Run 단위 Blackboard · 검증된 근거 축적 · 다음 작업에 전달",
      },
      {
        name: "AI 플랫폼",
        detail: "Agent Gateway · Model Gateway · Knowledge",
      },
      { name: "데이터", detail: "PostgreSQL · Milvus · OpenSearch · Airflow" },
      { name: "인증과 권한", detail: "Keycloak · UMA · 정책 · 권한" },
      { name: "배포", detail: "GitLab CI · Harbor · Argo CD · SBOM" },
      { name: "실행 환경", detail: "Kubernetes · Istio · Vault · Phoenix" },
    ],
    proof: {
      title: "검증된 결과가 다음 작업의 근거가 됩니다.",
      summary:
        "슈퍼바이저는 사용자 요청과 블랙보드의 근거를 읽고 필요한 작업을 선택합니다. A.X 에이전트의 원본 결과는 보존하고, 서버 검사와 결과 검토를 통과한 근거만 블랙보드에 추가합니다. 개별 에이전트의 성공과 전체 요청의 완료를 구분해 마지막까지 확인합니다.",
      flow: [
        {
          title: "다음 작업 판단",
          detail: "사용자 목표·대화 문맥·채택된 근거 확인",
        },
        {
          title: "A.X 에이전트 실행",
          detail: "필요한 근거와 하위 작업을 전달",
        },
        {
          title: "검증 후 축적",
          detail: "검토를 통과한 결과만 블랙보드에 추가",
        },
        {
          title: "전체 목표 확인",
          detail: "미완료 시 다음 작업, 완료 시 최종 답변 검토",
        },
      ],
      facts: [
        { value: "12", label: "연결된 서브 에이전트" },
        { value: "Run 단위", label: "블랙보드 근거 공유 범위" },
        { value: "검증 후 채택", label: "다음 작업으로 전달하는 기준" },
      ],
      evidence: [
        {
          src: "/images/enterprise-ax-supervisor-flow.png",
          width: 2400,
          height: 4646,
          title: "실제 슈퍼바이저 실행 흐름",
          label: "슈퍼바이저 흐름도",
          eyebrow: "IMPLEMENTATION / BLACKBOARD",
          alt: "요청 접수부터 에이전트 실행, 결과 검증, 블랙보드 축적, 전체 목표 확인과 최종 답변까지 이어지는 슈퍼바이저 흐름도",
          caption:
            "2026.10.15 정리한 실행 흐름도입니다. 하단 DOC-1의 채팅 연결과 DOC-2/3·DOC-4/5는 미연결·예정 상태로 표기되어 있으며, 완료 성과에 포함하지 않습니다.",
          points: [
            {
              title: "결과를 쌓고, 필요한 근거를 전달",
              body: "요약 결과를 채택한 뒤 번역 에이전트에 넘기는 식입니다. 에이전트끼리 저장소를 직접 조회하지 않고, 슈퍼바이저가 검토된 내용을 다음 입력에 담습니다.",
            },
            {
              title: "원본과 채택된 근거를 구분",
              body: "원본 결과는 보존합니다. 형식·권한·안전·출처 검사와 작업 결과 검토를 거쳐 채택된 내용만 공용 근거에 추가해 오류의 전파를 막습니다.",
            },
            {
              title: "에이전트 성공과 요청 완료를 구분",
              body: "Completion Gate가 사용자 목표 전체를 확인합니다. 정보나 승인이 부족하면 대기하고, 응답을 저장한 뒤 같은 Run에서 재개합니다.",
            },
          ],
        },
        {
          src: "/images/enterprise-ax-organization-integration.png",
          width: 863,
          height: 664,
          title: "AI 플랫폼을 기존 업무 시스템에 연결했습니다.",
          label: "조직·사용자 연동 구조도",
          eyebrow: "INTEGRATION / ORGANIZATION & USERS",
          layout: "wide",
          alt: "AI 플랫폼과 ERP의 조직·사용자 정보 동기화, 그룹웨어와 클라우디움에서 AI 플랫폼으로 향하는 단방향 대사를 새벽 1회 수행하는 삼성제약 연동 구조도",
          caption:
            "삼성제약 조직·사용자 연동 구조입니다. 슈퍼바이저의 AI 실행 흐름과 별도로, 기존 업무 시스템의 정보를 AI 플랫폼에 연결하는 범위를 보여줍니다.",
          points: [
            {
              title: "세 업무 시스템과 연결",
              body: "ERP·그룹웨어·클라우디움의 조직·사용자 정보를 AI 플랫폼과 연결하는 구조입니다.",
            },
            {
              title: "부서와 사용자의 소속·직책",
              body: "계정만 연결하는 데 그치지 않고, 부서 정보와 사용자의 부서·직책까지 연동 범위에 포함했습니다.",
            },
            {
              title: "새벽 1회 동기화·대사",
              body: "ERP와는 정보를 동기화하고, 그룹웨어·클라우디움에서는 AI 플랫폼으로 단방향 대사하는 경로를 구성했습니다.",
            },
          ],
        },
      ],
      benchmark: {
        caption: "동일 7.22MB · 380페이지 PDF 처리 시간",
        items: [
          { label: "SKT Document Insight", value: "59분 47초", relative: 100 },
          {
            label: "자체 Document Insight",
            value: "38분 57.9초",
            relative: 65.2,
            highlight: true,
          },
        ],
      },
    },
    decisions: [
      {
        index: "01",
        title: "A.X 필수 활용 조건을 블랙보드 구조로 풀었습니다.",
        situation:
          "사업 요구상 A.X 에이전트를 반드시 구현해야 했지만, Agent Builder만으로 여러 업무의 결과를 이어받아 계획·실행·검토하는 통합 경험을 만들기는 어려웠습니다.",
        decision:
          "LangGraph 슈퍼바이저에 약 12개의 A.X 서브 에이전트를 연결하고 블랙보드 아키텍처를 적용했습니다. 대화 상태 중심의 분기보다 검증된 업무 결과의 축적을 중심에 두어, 다음 에이전트가 필요한 근거를 이어받도록 했습니다.",
        tradeoff:
          "A.X 활용 조건을 충족하면서 복합 업무의 실행 순서를 유연하게 구성할 수 있었습니다. 그 대가로 Run별 근거 격리, 원본 보존, 결과 채택 기준과 전체 목표 완료 판정을 별도로 설계해야 했습니다.",
      },
      {
        index: "02",
        title: "외부 SaaS 대신 자체 Document Insight를 만들었습니다.",
        situation:
          "기존 DI는 느렸고 Azure Document Intelligence는 추가 비용과 외부 데이터 전송이라는 제약이 있었습니다.",
        decision:
          "VLM 질의를 3~10개까지 병렬 처리해 테이블, 헤더, 이미지를 분석하는 자체 호환 API를 구현했습니다.",
        tradeoff:
          "문서는 VLM 한계로 한 번에 하나씩 처리하지만, 동일 데이터 처리 시간을 59분 47초에서 38분 57.9초로 줄였습니다.",
      },
      {
        index: "03",
        title: "기술 지원을 기다리기보다 설정을 역추적했습니다.",
        situation:
          "상세 설치 문서 없이 이미지 저장소를 전달받아 기존 Keycloak 설정과 권한 모델을 알 수 없었습니다.",
        decision:
          "가능한 설정과 로그를 반복 검증해 Realm, Client, Group, Policy, Permission 관계를 복원하고 플랫폼 개발팀에 확인받았습니다.",
        tradeoff:
          "초기 탐색 비용은 컸지만 외부 답변에 종속된 일정 위험을 줄이고 사내 설치·운영 역량을 남겼습니다.",
      },
    ],
    ownership: [
      "전체 아키텍처와 A.X API 연동 방향 수립",
      "초기 프로젝트·폴더 구조와 AI 개발 하네스 구성",
      "LangGraph 슈퍼바이저와 블랙보드 아키텍처 설계·구현 주도",
      "A.X Agent Builder 기반 서브 에이전트 5개 구성",
      "Document Insight 선행 연구와 성능 검증",
      "Kubernetes 플랫폼 전체 설치와 운영 기반 구축",
      "GitLab Merge Request 기반 리뷰와 최종 품질 승인",
    ],
    outcomes: [
      "사내 최초 Kubernetes 기반 A.X 플랫폼 설치·운영 역량 확보",
      "삼성제약 조직원 90명 중 초기 활성 사용자 14명 확보",
      "SKT 컨소시엄을 통한 제약 분야 후속 사업 공동 제안",
      "AI 개발 규칙을 Markdown과 하네스로 문서화해 팀 지식으로 축적",
    ],
    note: "성과는 2026년 8월 고객 검수·초기 확산 단계의 기록을 기준으로 합니다. 처리 시간은 동일한 7.22MB·380페이지 PDF를 비교한 결과입니다. E2E 자동화는 당시 구축 범위에 포함하지 못했습니다.",
    accent: "blue",
  },
  {
    slug: "multi-llm",
    index: "02",
    cardSummary:
      "모델 선택부터 가입·결제까지. 아이디어를 공개 가능한 AI 제품으로 만들었습니다.",
    shortRole: "PM · Architect",
    highlight: "3개월",
    highlightLabel: "기획부터 가입·결제 가능한 제품 출시까지",
    title: "Multi-LLM 솔루션",
    eyebrow: "AI 제품 기획부터 출시까지",
    lead: "회사의 AI 역량을 실제 제품으로 증명하기 위해, 아이디어 단계부터 가입·결제가 가능한 Multi-LLM 웹 서비스를 출시했습니다.",
    period: "2026.01 — 2026.04",
    role: "PM · 아키텍처 설계 · 핵심 개발",
    team: "본인 포함 4명 개발팀",
    scale: "아이디어 → 출시",
    publication: multiLlmSource,
    tags: [
      "OpenAI",
      "Claude",
      "Gemini",
      "MSA",
      "Kafka",
      "Keycloak",
      "KG이니시스",
    ],
    metrics: [
      { value: "~30", label: "선택 가능한 AI 모델", detail: "3개 모델 패밀리" },
      { value: "1—5", label: "동시 병렬 모델 호출", detail: "사용자 선택" },
      { value: "3개월", label: "기획부터 출시까지", detail: "2026.03.27 출시" },
      {
        value: "4명",
        label: "제품 개발팀",
        detail: "본인 포함 · 개발자 3명 리딩",
      },
    ],
    context: [
      "AI 사업 제안은 계속 들어왔지만 회사가 실제로 AI 제품을 설계하고 개발할 수 있는지 보여줄 근거가 부족했습니다. 제안서가 아니라 누구나 직접 사용할 수 있는 제품을 회사 홈페이지에 공개하는 것이 목표였습니다.",
      "일반적인 단일 Agent 챗봇 대신 여러 모델의 답변을 병렬로 비교·선택하는 구조를 제품의 차별점으로 정했습니다. 사용자가 품질, 비용, 모델 선호를 직접 조절하면서 HTML과 파일까지 생성할 수 있는 브라우저 기반 제품으로 구체화했습니다.",
    ],
    problems: [
      {
        title: "아이디어를 판매 가능한 제품으로",
        body: "간단한 초기 기획만 있는 상태에서 사용자 흐름, 기능 범위, 결제 정책, 디자인을 정의하고 4명 개발팀의 실행 계획으로 전환했습니다.",
      },
      {
        title: "모델의 품질과 스타일 편향",
        body: "OpenAI, Claude, Gemini 계열 약 30개 모델 중 1~5개를 병렬 호출하고 평가 모델이 최종 답변 하나를 선택하도록 구성했습니다.",
      },
      {
        title: "처음 구축하는 결제와 크레딧",
        body: "KG이니시스 단건 결제를 연동하고 실제 토큰 비용을 크레딧으로 차감하는 유료 서비스 구조를 설계했습니다.",
      },
    ],
    architecture: [
      { name: "인증과 사용자", detail: "Keycloak · UMA" },
      { name: "게이트웨이", detail: "외부 요청 진입점과 라우팅" },
      { name: "플랫폼", detail: "웹 제품 공통 기능" },
      { name: "에이전트", detail: "AI 작업과 파일 생성" },
      { name: "LLM 코어", detail: "모델 연결 · 병렬 호출 · 비용 계산" },
      { name: "결제", detail: "KG이니시스 · 크레딧 원장" },
      { name: "이벤트", detail: "REST API · Kafka" },
    ],
    proof: {
      title: "여러 번 개선하지 않고, 한 번 병렬 생성해 잘 선택했습니다.",
      summary:
        "사용자가 고른 모델들을 동시에 호출하고 품질 점수가 가장 높은 모델이 평가 역할을 맡습니다. 반복 생성 대신 선택 구조로 응답 비용과 대기 시간을 통제했습니다.",
      flow: [
        { title: "모델 선택", detail: "약 30개 모델 중 1~5개 선택" },
        { title: "병렬 호출", detail: "OpenAI · Claude · Gemini 동시 요청" },
        {
          title: "답변 평가",
          detail: "내부 점수 기반 최상위 모델이 답변 선택",
        },
        { title: "사용량 정산", detail: "실제 토큰 비용을 크레딧에서 차감" },
      ],
      facts: [
        { value: "1—5", label: "사용자 선택 병렬 호출" },
        { value: "3개", label: "모델 패밀리" },
        { value: "+1—2초", label: "최종 선택 추가 시간" },
      ],
      evidence: [
        {
          src: "/images/multi-llm-official.webp",
          width: 1200,
          height: 1992,
          previewRegion: { x: 100, y: 650, width: 970, height: 420 },
          title: "공식 소개 자료에 담긴 아키텍처",
          label: "Multi LLM 공개 아키텍처",
          eyebrow: "PUBLIC REFERENCE / ARCHITECTURE",
          layout: "wide",
          alt: "접근 계층, 오케스트레이터, 모델 서빙, 데이터 계층, 관측과 배포로 구성된 포니링크 Multi LLM 공식 아키텍처",
          caption:
            "회사에서 공개한 기업용 AI 플랫폼의 아키텍처 개요입니다. 공개 자료에 포함된 전체 기능과 이 프로젝트에서 직접 설계·구현한 범위는 구분해 기술했습니다.",
          source: multiLlmSource,
          points: [
            {
              title: "서비스 경계",
              body: "접근 계층·오케스트레이션·모델 서빙·데이터 계층을 나누어 소개합니다.",
            },
            {
              title: "운영 구성",
              body: "관측과 배포 영역까지 포함한 회사의 공개 아키텍처 개요입니다.",
            },
            {
              title: "직접 맡은 설계",
              body: "이 사례에서는 MSA 경계, 모델 병렬 호출·평가, 인증·결제 구조를 설계하고 핵심 개발을 담당했습니다.",
            },
          ],
        },
        {
          src: "/images/multi-llm-official.webp",
          width: 1200,
          height: 1992,
          previewRegion: { x: 598, y: 1124, width: 440, height: 452 },
          title: "모델 선택부터 답변 확인까지, 실제 제품 화면",
          label: "Multi LLM 제품 화면",
          eyebrow: "PUBLIC REFERENCE / PRODUCT UI",
          alt: "여러 AI 모델의 선택 목록, 질문 입력창과 생성된 답변을 보여주는 Multi LLM 대화 화면",
          caption: "포니링크 공식 소개 자료에 실린 모델 선택·대화 화면입니다.",
          source: multiLlmSource,
          points: [
            {
              title: "사용자가 선택하는 모델",
              body: "사용할 모델을 고르는 인터페이스를 실제 화면에서 확인할 수 있습니다.",
            },
            {
              title: "질문과 결과를 하나의 화면에서",
              body: "질문 입력, 모델 선택, 답변 확인으로 이어지는 제품 경험을 보여줍니다.",
            },
            {
              title: "회사 솔루션으로 공개",
              body: "포니링크 홈페이지의 AIoT 분류에서 Multi LLM 제품 소개와 함께 공개된 화면입니다.",
            },
          ],
        },
      ],
    },
    decisions: [
      {
        index: "01",
        title: "더 많이 생성하기보다 한 번 잘 선택했습니다.",
        situation:
          "반복 개선은 결과를 높일 수 있지만 출력 토큰과 사용자의 대기 비용도 함께 늘어납니다.",
        decision:
          "선택한 1~5개 모델을 한 번 병렬 호출하고, 내부 품질 점수가 가장 높은 평가 모델이 최종 답변을 선택하게 했습니다.",
        tradeoff:
          "반복 개선은 포기했지만 비용 예측 가능성과 응답 속도를 확보하고, 사용자에게 모델 선택권을 제공했습니다.",
      },
      {
        index: "02",
        title: "크레딧을 사용자보다 결제 도메인에 두었습니다.",
        situation:
          "크레딧은 사용자 잔액인 동시에 구매·취소·환불과 함께 움직이는 금전성 자산이었습니다.",
        decision:
          "사용자 원장은 Keycloak이 소유하게 두고, 애플리케이션이 통제해야 하는 크레딧은 결제 도메인이 책임지도록 경계를 정했습니다.",
        tradeoff:
          "사용자 조회 시 서비스 간 통신이 필요하지만 결제와 크레딧의 정합성 책임은 한 도메인에 모을 수 있었습니다.",
      },
      {
        index: "03",
        title: "상시 운영보다 제안 자산으로 전환했습니다.",
        situation:
          "제품은 출시됐지만 외부 활성 사용자와 매출을 확보하지 못했습니다.",
        decision:
          "상시 서버는 종료하고 필요할 때 데모 환경을 열어 AI 사업 제안의 기술 증빙으로 활용했습니다.",
        tradeoff:
          "소비자 서비스 성장은 검증하지 못했지만, 회사의 AI 설계·개발 역량을 보여주는 재사용 가능한 자산을 확보했습니다.",
      },
    ],
    ownership: [
      "제품 상세 기획과 사용자 흐름 정의",
      "MSA 도메인 경계와 전체 아키텍처 설계",
      "Multi-LLM 오케스트레이션과 평가 모델 구조 설계",
      "개발자 3명 업무 리딩과 핵심 기능 구현",
      "AI로 생성한 UI 디자인 검토와 수정",
      "가입·결제·크레딧을 포함한 출시 추진",
    ],
    outcomes: [
      "2026년 3월 27일 가입·결제 가능한 자체 AI 제품 출시",
      "포니링크 공식 홈페이지의 AIoT 분류에 Multi LLM 솔루션으로 소개",
      "여러 AI 사업 제안에서 제품 데모와 기술 증빙으로 활용",
      "OpenAI·Claude·Gemini 계열을 아우르는 모델 선택 경험 제공",
      "4명 개발팀으로 약 3개월 내 기획·인증·결제·AI 기능을 갖춘 제품 완성",
    ],
    note: "2026년 8월 기록 기준, 외부 매출과 활성 사용자는 확보하지 못했습니다. 상시 서버를 종료하고 필요한 시점에 데모 환경을 열어 사업 제안에 활용했습니다.",
    accent: "violet",
  },
  {
    slug: "skt-ai-agent",
    index: "03",
    title: "SKT AI 플랫폼 에이전트 고도화",
    eyebrow: "합의한 범위를 안정적인 납품으로",
    cardSummary:
      "핵심 기능을 반영하는 조건으로 개발 범위를 줄여 합의를 이끌었습니다. 안정적인 완료 이후 후속 사업 제안 6건이 직접 들어왔습니다.",
    shortRole: "프론트엔드 테크니컬 PM",
    highlight: "6건",
    highlightLabel: "프로젝트 완료 이후 직접 들어온 후속 사업 제안",
    lead: "SKT AI 플랫폼 2차 사업의 프론트엔드 테크니컬 PM으로 고객과 개발 범위를 협상하고 8인 팀의 설계·개발을 이끌었습니다. 배포 이후 중대한 이슈 없이 프로젝트를 마무리했고, 이후 후속 사업 제안 6건이 직접 들어왔습니다.",
    period: "2025.07 — 2026.01",
    role: "프론트엔드 테크니컬 PM · 설계 · 개발",
    team: "프로젝트 인원 8명",
    scale: "약 5억 원 · FE 프로젝트",
    tags: ["프론트엔드 테크니컬 PM", "범위 협상", "설계·개발", "Agile"],
    metrics: [
      {
        value: "6건",
        label: "후속 사업 직접 제안",
        detail: "프로젝트 완료 이후 유입",
      },
      {
        value: "안정적 완료",
        label: "배포 이후 프로젝트 마무리",
        detail: "중대한 이슈 없이 완료",
      },
      {
        value: "8명",
        label: "프로젝트 인원",
        detail: "프론트엔드 테크니컬 PM",
      },
      {
        value: "약 5억 원",
        label: "프론트엔드 사업 규모",
        detail: "SKT AI 플랫폼 2차 사업",
      },
    ],
    context: [
      "2024년 7월부터 SKT AI 플랫폼 1차 사업에서 프론트엔드 기술 리더로 참여했습니다. 사용자 페이지와 아키텍처, 폐쇄망 CI/CD를 구축한 경험을 바탕으로 2차 에이전트 고도화 사업에서는 PM 역할을 맡았습니다.",
      "2차 사업에서는 고객과의 Agile 협업을 통해 기능의 우선순위와 개발 범위를 함께 협의했습니다. 고객이 원하는 핵심 기능 2개를 반영하는 조건으로 기존 요구사항 5개를 제외하는 합의를 이끌었습니다. 고객에게는 필요한 기능을, 개발팀에는 구현 부담을 줄이고 핵심에 집중할 여력을 확보했습니다.",
    ],
    problems: [
      {
        title: "고객 가치와 팀의 실행 여력을 함께 확보",
        body: "요구사항을 일방적으로 줄이는 대신, 고객이 원하는 핵심 기능을 반영하는 교환 조건을 제시했습니다. 기존 범위를 줄이는 합의를 통해 추가 요청이 그대로 팀의 부담으로 쌓이지 않도록 조정했습니다.",
      },
      {
        title: "관리와 구현의 연결",
        body: "8인 프로젝트의 프론트엔드 테크니컬 PM으로 설계·개발을 병행해, 고객과 합의한 범위를 실제 구현과 배포로 이어갔습니다.",
      },
    ],
    architecture: [
      { name: "고객 협업", detail: "고객사와 Agile 협업 · 요구사항 협의" },
      { name: "프로젝트 관리", detail: "8인 팀 · 프론트엔드 범위와 일정 관리" },
      { name: "기술 실행", detail: "프론트엔드 설계 · 직접 개발 병행" },
    ],
    proof: {
      title: "범위 협상에서 안정적인 완료, 다음 사업 기회까지.",
      summary:
        "핵심 기능 반영과 기존 범위 축소를 하나의 합의로 묶었습니다. 조정한 범위를 직접 설계·개발하고 배포 이후까지 안정적으로 마무리한 경험이, 후속 사업 제안이 직접 들어오는 협업 관계로 이어졌습니다.",
      flow: [
        { title: "고객 가치 합의", detail: "필요한 핵심 기능 2개 반영" },
        {
          title: "실행 범위 확보",
          detail: "교환 조건으로 기존 요구사항 5개 제외",
        },
        {
          title: "안정적인 마무리",
          detail: "배포 이후 중대한 이슈 없이 완료",
        },
        { title: "후속 사업 기회", detail: "직접 들어온 사업 제안 6건" },
      ],
      facts: [
        { value: "핵심 기능 확보", label: "고객이 얻은 가치" },
        { value: "구현 부담 축소", label: "팀이 얻은 여력" },
        { value: "직접 제안 6건", label: "완료 이후의 사업 기회" },
      ],
    },
    decisions: [
      {
        index: "01",
        title: "핵심 기능을 교환 조건으로 범위 축소를 설득했습니다.",
        situation:
          "고객에게 필요한 기능을 반영하면서도 개발팀이 책임질 범위를 조율해야 했습니다. 기존 요구사항에 추가 기능을 모두 더하는 방식은 구현 부담을 키울 수 있었습니다.",
        decision:
          "고객과 우선순위를 협의해 핵심 기능 2개를 반영하고, 그 조건으로 기존 요구사항 5개를 제외하는 합의를 이끌었습니다.",
        tradeoff:
          "팀은 새 핵심 기능의 구현을 맡는 대신 기존 범위의 부담을 줄였습니다. 고객은 필요한 기능을 확보하고, 팀은 합의된 범위에 집중할 수 있어 양측이 수용할 수 있는 실행 계획을 만들었습니다.",
      },
      {
        index: "02",
        title: "프론트엔드 테크니컬 PM으로 구현까지 연결했습니다.",
        situation:
          "1차 사업에서 프론트엔드 기술 리더로 참여한 뒤, 2차 사업에서는 PM으로 역할이 확대됐습니다.",
        decision:
          "8인 프로젝트를 관리하면서 프론트엔드 설계와 개발에 함께 참여하고, 배포 이후 중대한 이슈 없이 프로젝트를 마무리했습니다.",
      },
    ],
    ownership: [
      "공공 AI 사업의 프론트엔드 테크니컬 PM 수행",
      "고객사 Agile 협업과 기능 교환 조건을 통한 범위 협상",
      "8인 프로젝트 관리",
      "프론트엔드 설계와 개발 병행",
    ],
    outcomes: [
      "핵심 기능을 확보한 고객과 구현 부담을 줄인 개발팀 모두가 수용하는 범위 합의",
      "배포 이후 중대한 이슈 없이 프로젝트 완료",
      "프로젝트 완료 이후 후속 사업 제안 6건 직접 유입",
      "1차 프론트엔드 기술 리딩에서 2차 프론트엔드 테크니컬 PM으로 책임 확대",
    ],
    note: "후속 6건은 본 프로젝트 완료 이후 직접 유입된 사업 제안입니다. 이후 제안·수주 활동은 별도 조직이 담당했으며, 이 사례에는 제안 유입까지의 성과를 기록했습니다.",
    accent: "green",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
