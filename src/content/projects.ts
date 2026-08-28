export type Project = {
  slug: string;
  index: string;
  eyebrow: string;
  title: string;
  summary: string;
  period: string;
  role: string;
  team: string;
  tags: string[];
  metrics: Array<{ value: string; label: string }>;
  accent: "lime" | "blue";
};

export const projects: Project[] = [
  {
    slug: "enterprise-ax",
    index: "01",
    eyebrow: "Enterprise AI Transformation",
    title: "계열사 A.X 전환",
    summary:
      "삼성제약과 젬백스앤카엘의 수기·분산 업무를 AI 기반 시스템으로 전환한 엔터프라이즈 프로젝트입니다.",
    period: "2026.04 — 2026.08",
    role: "Tech Leader",
    team: "16명 · 개발자 10명",
    tags: ["LangGraph", "FastAPI", "Kubernetes", "Keycloak"],
    metrics: [
      { value: "34.8%", label: "DI 처리 시간 단축" },
      { value: "12", label: "서브 에이전트" },
    ],
    accent: "lime",
  },
  {
    slug: "multi-llm",
    index: "02",
    eyebrow: "Zero-to-One AI Product",
    title: "Multi-LLM 솔루션",
    summary:
      "여러 LLM의 답변을 비교·선택하고 실제 사용량에 따라 결제하는 공개형 AI 제품을 0에서 출시까지 이끌었습니다.",
    period: "2026.01 — 2026.04",
    role: "PM · Architect · Lead Developer",
    team: "4명 개발팀",
    tags: ["Multi-LLM", "MSA", "Kafka", "KG이니시스"],
    metrics: [
      { value: "~30", label: "선택 가능 모델" },
      { value: "1—5", label: "병렬 모델 호출" },
    ],
    accent: "blue",
  },
];
