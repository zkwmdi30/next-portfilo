export default function ProjectVisual({ slug }: { slug: string }) {
  if (slug === "enterprise-ax")
    return (
      <div className="project-visual visual-agents" aria-hidden="true">
        <div className="visual-heading">
          <span>01 / SYSTEM ARCHITECTURE</span>
          <span className="visual-dot" />
        </div>
        <div className="agent-diagram">
          <div className="diagram-input">사용자의 업무 요청</div>
          <div className="diagram-stem" />
          <div className="diagram-core">
            <span>ORCHESTRATION</span>
            <strong>Supervisor</strong>
            <small>근거 확인 · 작업 선택 · 완료 판정</small>
          </div>
          <div className="diagram-branches">
            <i />
            <i />
            <i />
          </div>
          <div className="diagram-tools">
            <span>
              문서 검색<small>RAG</small>
            </span>
            <span>
              업무 시스템<small>ERP / 그룹웨어</small>
            </span>
            <span>
              문서 처리<small>분석 / 번역</small>
            </span>
          </div>
          <div className="diagram-blackboard">
            <strong>Blackboard</strong>
            <span>검증된 결과 축적 → 다음 작업의 근거</span>
          </div>
        </div>
        <div className="visual-caption">
          <span>LangGraph × A.X Platform</span>
          <span>12 sub-agents ↗</span>
        </div>
      </div>
    );
  if (slug === "multi-llm")
    return (
      <div className="project-visual visual-models" aria-hidden="true">
        <div className="visual-heading">
          <span>02 / MULTI-MODEL ORCHESTRATION</span>
          <span className="visual-dot" />
        </div>
        <div className="model-diagram">
          <div className="model-options">
            <span>OpenAI</span>
            <span>Claude</span>
            <span>Gemini</span>
          </div>
          <div className="model-lines">
            <i />
            <i />
            <i />
          </div>
          <div className="diagram-core">
            <span>COMPARE & SELECT</span>
            <strong>Evaluator</strong>
            <small>병렬 응답을 비교해 최종 답변 선택</small>
          </div>
          <div className="diagram-stem" />
          <div className="model-output">
            <span>선택된 답변</span>
            <span>사용량 정산 ↗</span>
          </div>
        </div>
        <div className="visual-caption">
          <span>선택 가능한 모델 약 30개</span>
          <span>1–5 parallel calls</span>
        </div>
      </div>
    );
  return (
    <div className="project-visual visual-delivery" aria-hidden="true">
      <div className="visual-heading">
        <span>03 / ALIGNMENT & DELIVERY</span>
        <span className="visual-dot" />
      </div>
      <div className="delivery-exchange">
        <div>
          <span>고객이 얻은 가치</span>
          <strong>핵심 기능 확보</strong>
          <small>필요한 기능 2개 반영</small>
        </div>
        <span className="exchange-symbol">↔</span>
        <div>
          <span>팀이 확보한 여력</span>
          <strong>구현 부담 축소</strong>
          <small>기존 요구사항 5개 제외</small>
        </div>
      </div>
      <div className="delivery-track">
        <span>범위 합의</span>
        <i />
        <span>안정적 완료</span>
        <i />
        <span>후속 제안 6건</span>
      </div>
      <div className="visual-caption">
        <span>8인 팀 · 프론트엔드 테크니컬 PM</span>
        <span>SKT AI Platform</span>
      </div>
    </div>
  );
}
