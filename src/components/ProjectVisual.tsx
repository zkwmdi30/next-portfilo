export default function ProjectVisual({ slug }: { slug: string }) {
  if (slug === "enterprise-ax")
    return (
      <div className="project-visual visual-agents">
        <p className="visual-heading">업무 요청을 처리하는 구조</p>
        <div className="system-flow">
          <p className="flow-input">사용자의 업무 요청</p>
          <div className="flow-connector" aria-hidden="true">
            ↓
          </div>
          <div className="flow-node flow-node--primary">
            <strong>슈퍼바이저</strong>
            <span>근거를 확인하고 다음 작업을 선택</span>
          </div>
          <div className="flow-connector" aria-hidden="true">
            ↓
          </div>
          <ul className="flow-tools" aria-label="실행할 수 있는 작업">
            <li>
              <strong>문서 검색</strong>
              <span>RAG</span>
            </li>
            <li>
              <strong>업무 시스템</strong>
              <span>ERP · 그룹웨어</span>
            </li>
            <li>
              <strong>문서 처리</strong>
              <span>분석 · 번역</span>
            </li>
          </ul>
          <div className="flow-connector" aria-hidden="true">
            ↓
          </div>
          <div className="flow-node">
            <strong>검증된 결과 공유</strong>
            <span>블랙보드에 쌓아 다음 작업의 근거로 전달</span>
          </div>
        </div>
        <p className="visual-caption">
          슈퍼바이저가 전체 목표의 완료 여부를 확인합니다.
        </p>
      </div>
    );
  if (slug === "multi-llm")
    return (
      <div className="project-visual visual-models">
        <p className="visual-heading">여러 모델의 답변을 비교하는 구조</p>
        <div className="system-flow">
          <p className="flow-input">선택한 1~5개 모델에 병렬 요청</p>
          <ul className="flow-tools flow-tools--models" aria-label="지원 모델 예시">
            <li>
              <strong>OpenAI</strong>
            </li>
            <li>
              <strong>Claude</strong>
            </li>
            <li>
              <strong>Gemini</strong>
            </li>
          </ul>
          <div className="flow-connector" aria-hidden="true">
            ↓
          </div>
          <div className="flow-node flow-node--primary">
            <strong>답변 평가 · 선택</strong>
            <span>Evaluator가 응답을 비교해 최종 답변 선택</span>
          </div>
          <div className="flow-connector" aria-hidden="true">
            ↓
          </div>
          <div className="flow-node">
            <strong>최종 답변 전달</strong>
            <span>실제 토큰 사용량에 따라 크레딧 정산</span>
          </div>
        </div>
        <p className="visual-caption">
          약 30개 모델 중 사용자가 직접 선택합니다.
        </p>
      </div>
    );
  return (
    <div className="project-visual visual-delivery">
      <p className="visual-heading">고객과 합의한 실행 범위</p>
      <div className="system-flow">
        <div className="flow-node flow-node--primary">
          <strong>필요한 핵심 기능 2개 반영</strong>
          <span>고객에게 중요한 기능 확보</span>
        </div>
        <div className="flow-connector" aria-hidden="true">
          ↕
        </div>
        <div className="flow-node">
          <strong>기존 요구사항 5개 제외</strong>
          <span>합의를 통해 팀의 구현 부담 축소</span>
        </div>
      </div>
      <p className="visual-caption">
        프로젝트 완료 후 후속 사업 제안 6건이 들어왔습니다.
      </p>
    </div>
  );
}
