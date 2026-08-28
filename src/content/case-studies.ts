export type CaseStudy = {
  slug: string;
  title: string;
  eyebrow: string;
  lead: string;
  period: string;
  role: string;
  team: string;
  scale: string;
  tags: string[];
  metrics: Array<{ value: string; label: string; detail?: string }>;
  context: string[];
  problems: Array<{ title: string; body: string }>;
  architecture: Array<{ name: string; detail: string }>;
  decisions: Array<{
    index: string;
    title: string;
    situation: string;
    decision: string;
    tradeoff: string;
  }>;
  ownership: string[];
  outcomes: string[];
  note?: string;
  accent: "lime" | "blue";
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "enterprise-ax",
    title: "계열사 A.X 전환",
    eyebrow: "Enterprise AI Transformation",
    lead:
      "삼성제약과 젬백스앤카엘의 수기·분산 업무를 AI 기반 시스템으로 전환한 20억 원 규모 프로젝트입니다.",
    period: "2026.04 — 2026.08",
    role: "Tech Leader",
    team: "전체 16명 · 개발자 10명",
    scale: "약 20억 원",
    tags: ["LangGraph", "FastAPI", "Kubernetes", "Keycloak", "Istio", "Argo CD"],
    metrics: [
      {
        value: "34.8%",
        label: "Document Insight 처리 시간 단축",
        detail: "7.22MB·380페이지 PDF 기준",
      },
      { value: "12", label: "슈퍼바이저 연결 서브 에이전트", detail: "계획 기반 복수 실행" },
      { value: "70%", label: "테스트 커버리지", detail: "하네스와 CI/CD 추적" },
      { value: "9m 16s", label: "배포 파이프라인", detail: "테스트·이미지·SBOM 포함" },
    ],
    context: [
      "영업 관련 요청과 정보는 카카오톡, 이메일 등 여러 채널로 들어왔고 담당자가 이를 수기로 취합해야 했습니다. 채널에서 받은 데이터는 다시 Excel로 정리해 월별로 저장했으며, 흡수율과 이상치는 별도 프로그램을 실행한 뒤 육안으로 비교했습니다.",
      "목표는 단순 챗봇 도입이 아니었습니다. 분산된 채널과 수기 업무를 하나의 데이터 흐름으로 통합하고, AI가 데이터를 해석·적재·검색·출력하며 필요한 경우 ERP와 그룹웨어까지 연결되는 업무 시스템을 만드는 것이었습니다.",
    ],
    problems: [
      {
        title: "분산된 업무를 하나의 AI 경험으로",
        body:
          "ERP, 그룹웨어, 문서함, 번역과 파일 생성을 하나의 대화 흐름에서 이용하도록 슈퍼바이저·서브 에이전트 구조를 설계했습니다.",
      },
      {
        title: "상용화하기 어려운 문서 분석 속도",
        body:
          "SKT DI가 동일 데이터 처리에 59분 47초가 걸리는 문제를 확인하고, Azure API 구조와 호환되는 자체 Document Insight를 설계했습니다.",
      },
      {
        title: "설치 문서가 부족한 플랫폼 구축",
        body:
          "Keycloak 권한 구성을 로그와 실행 결과로 역추적하고, 인증·배포·관측·로그·트래픽까지 전체 플랫폼을 직접 연결했습니다.",
      },
    ],
    architecture: [
      { name: "Experience", detail: "Vue · React · 통합 챗봇 · 문서함" },
      { name: "Application", detail: "Python · FastAPI · LangGraph Supervisor" },
      { name: "AI Platform", detail: "Agent Gateway · Model Gateway · Knowledge" },
      { name: "Data", detail: "PostgreSQL · Milvus · OpenSearch · Airflow" },
      { name: "Identity", detail: "Keycloak · UMA · Policy · Permission" },
      { name: "Delivery", detail: "GitLab CI · Harbor · Argo CD · SBOM" },
      { name: "Runtime", detail: "Kubernetes · Istio · Vault · Phoenix" },
    ],
    decisions: [
      {
        index: "D1",
        title: "A.X Agent Builder를 버리지 않고 확장했습니다.",
        situation:
          "Agent Builder만으로는 스스로 계획하고 반복 실행하며 여러 업무를 조율하는 통합 챗봇을 구성하기 어려웠습니다.",
        decision:
          "LangGraph 기반 슈퍼바이저를 별도로 설계하고, A.X에서 구성한 에이전트는 약 12개의 서브 에이전트로 연결했습니다.",
        tradeoff:
          "플랫폼 활용이라는 사업 요구를 지키면서 오케스트레이션 자유도를 얻는 대신, 두 실행 환경 사이의 상태와 오류를 함께 관리해야 했습니다.",
      },
      {
        index: "D2",
        title: "외부 SaaS 대신 자체 Document Insight를 만들었습니다.",
        situation:
          "기존 DI는 느렸고 Azure Document Intelligence는 추가 비용과 외부 데이터 전송이라는 제약이 있었습니다.",
        decision:
          "VLM 질의를 3~10개까지 병렬 처리해 테이블, 헤더, 이미지를 분석하는 자체 호환 API를 구현했습니다.",
        tradeoff:
          "문서는 VLM 한계로 한 번에 하나씩 처리하지만, 동일 데이터 처리 시간을 59분 47초에서 38분 57.9초로 줄였습니다.",
      },
      {
        index: "D3",
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
      "LangGraph 슈퍼바이저 아키텍처와 구현 주도",
      "A.X Agent Builder 기반 서브 에이전트 5개 구성",
      "Document Insight 선행 연구와 성능 검증",
      "Kubernetes 플랫폼 전체 설치와 운영 기반 구축",
      "GitLab Merge Request 기반 리뷰와 최종 품질 승인",
    ],
    outcomes: [
      "사내 최초 Kubernetes 기반 A.X 플랫폼 설치·운영 역량 확보",
      "삼성제약 조직원 90명 중 초기 활성 사용자 14명 확보",
      "SKT 컨소시엄을 통한 제약 분야 후속 제안 2건",
      "AI 개발 규칙을 Markdown과 하네스로 문서화해 팀 지식으로 축적",
    ],
    note:
      "현재 고객 검수·초기 확산 단계의 프로젝트입니다. 공개된 수치는 해당 시점 기준이며 운영 확산에 따라 갱신합니다.",
    accent: "lime",
  },
  {
    slug: "multi-llm",
    title: "Multi-LLM 솔루션",
    eyebrow: "Zero-to-One AI Product",
    lead:
      "회사의 AI 역량을 실제 제품으로 증명하기 위해, 아이디어 단계부터 가입·결제가 가능한 Multi-LLM 웹 서비스를 출시했습니다.",
    period: "2026.01 — 2026.04",
    role: "PM · Architect · Lead Developer",
    team: "본인 포함 4명 개발팀",
    scale: "0 → 1 Product",
    tags: ["OpenAI", "Claude", "Gemini", "MSA", "Kafka", "Keycloak", "KG이니시스"],
    metrics: [
      { value: "~30", label: "선택 가능한 AI 모델", detail: "3개 모델 패밀리" },
      { value: "1—5", label: "동시 병렬 모델 호출", detail: "사용자 선택" },
      { value: "3 mo.", label: "기획부터 출시까지", detail: "2026.03.27 출시" },
      { value: "다수", label: "AI 사업 제안 활용", detail: "출시 후 지속 활용" },
    ],
    context: [
      "AI 사업 제안은 계속 들어왔지만 회사가 실제로 AI 제품을 설계하고 개발할 수 있는지 보여줄 근거가 부족했습니다. 제안서가 아니라 누구나 직접 사용할 수 있는 제품을 회사 홈페이지에 공개하는 것이 목표였습니다.",
      "일반적인 단일 Agent 챗봇 대신 여러 모델의 답변을 병렬로 비교·선택하는 구조를 제품의 차별점으로 정했습니다. 사용자가 품질, 비용, 모델 선호를 직접 조절하면서 HTML과 파일까지 생성할 수 있는 브라우저 기반 제품으로 구체화했습니다.",
    ],
    problems: [
      {
        title: "아이디어를 판매 가능한 제품으로",
        body:
          "간단한 초기 기획만 있는 상태에서 사용자 흐름, 기능 범위, 결제 정책, 디자인을 정의하고 4명 개발팀의 실행 계획으로 전환했습니다.",
      },
      {
        title: "모델의 품질과 스타일 편향",
        body:
          "OpenAI, Claude, Gemini 계열 약 30개 모델 중 1~5개를 병렬 호출하고 Evaluator가 최종 답변 하나를 선택하도록 구성했습니다.",
      },
      {
        title: "처음 구축하는 결제와 크레딧",
        body:
          "KG이니시스 단건 결제를 연동하고 실제 token 비용을 크레딧으로 차감하는 유료 서비스 구조를 설계했습니다.",
      },
    ],
    architecture: [
      { name: "Identity", detail: "Keycloak · UMA" },
      { name: "Gateway", detail: "외부 요청 진입점과 라우팅" },
      { name: "Platform", detail: "웹 제품 공통 기능" },
      { name: "Agent", detail: "AI 작업과 파일 생성" },
      { name: "LLM Core", detail: "모델 연결 · 병렬 호출 · 비용 계산" },
      { name: "Payment", detail: "KG이니시스 · 크레딧 원장" },
      { name: "Event", detail: "REST API · Kafka" },
    ],
    decisions: [
      {
        index: "D1",
        title: "더 많이 생성하기보다 한 번 잘 선택했습니다.",
        situation:
          "반복 개선은 결과를 높일 수 있지만 output token과 사용자의 대기 비용도 함께 늘어납니다.",
        decision:
          "선택한 1~5개 모델을 한 번 병렬 호출하고, 내부 품질 점수가 가장 높은 모델이 Evaluator가 되어 최종 답변을 선택하게 했습니다.",
        tradeoff:
          "반복 개선은 포기했지만 비용 예측 가능성과 응답 속도를 확보하고, 사용자에게 모델 선택권을 제공했습니다.",
      },
      {
        index: "D2",
        title: "크레딧을 사용자보다 결제 도메인에 두었습니다.",
        situation:
          "크레딧은 사용자 잔액인 동시에 구매·취소·환불과 함께 움직이는 금전성 자산이었습니다.",
        decision:
          "사용자 원장은 Keycloak이 소유하게 두고, 애플리케이션이 통제해야 하는 크레딧은 Payment 도메인이 책임지도록 경계를 정했습니다.",
        tradeoff:
          "사용자 조회 시 서비스 간 통신이 필요하지만 결제와 크레딧의 정합성 책임은 한 도메인에 모을 수 있었습니다.",
      },
      {
        index: "D3",
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
      "Multi-LLM 오케스트레이션과 Evaluator 구조 설계",
      "개발자 3명 업무 리딩과 핵심 기능 구현",
      "AI로 생성한 UI 디자인 검토와 수정",
      "가입·결제·크레딧을 포함한 출시 추진",
    ],
    outcomes: [
      "2026년 3월 27일 가입·결제 가능한 자체 AI 제품 출시",
      "회사 홈페이지와 여러 AI 사업 제안에서 기술 증빙으로 활용",
      "OpenAI·Claude·Gemini 계열을 아우르는 모델 선택 경험 제공",
      "제품 출시와 시장 검증을 구분하는 0→1 제품 경험 확보",
    ],
    note:
      "출시 후 외부 매출과 활성 사용자는 확보하지 못했습니다. 현재는 상시 서버를 종료하고 필요할 때 데모 환경을 여는 방식으로 활용합니다.",
    accent: "blue",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
