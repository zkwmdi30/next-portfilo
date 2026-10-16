import type { Metadata } from "next";
import Link from "next/link";
import { profile, experience, skills } from "@/content/profile";
import { multiLlmSource } from "@/content/case-studies";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata({
    path: "/resume",
    title: "이력서 · 이명필",
    description: profile.summary,
    image: "/og.png",
  });
}

function PageNumber({ page }: { page: number }) {
  return (
    <div className="resume-page-number">
      <span>이명필 · 풀스택 엔지니어 / 기술 PM</span>
      <span>{page} / 3</span>
    </div>
  );
}

export default function ResumePage() {
  return (
    <main tabIndex={-1} id="main-content" className="resume-page">
      <div className="shell">
        <div className="resume-toolbar">
          <div>
            <h1>경력을 한눈에.</h1>
            <p>문서 정리일 2026.10.16 · 프로젝트 성과는 각 기록 시점 기준</p>
          </div>
          <div className="button-row">
            <Link className="button button-quiet" href="/#work">
              프로젝트 보기
            </Link>
            <a
              className="button button-primary"
              href="/resume.pdf"
              download="이명필-이력서.pdf"
            >
              PDF 다운로드 <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
        <div className="resume-document">
          <section
            className="resume-sheet"
            aria-label="이력서 1쪽: 소개와 AI 제품 경험"
          >
            <h2 className="resume-name">이명필</h2>
            <p className="resume-title">풀스택 엔지니어 · 기술 PM</p>
            <div className="resume-contact">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <span>2016년부터 개발 · 20개 이상 프로젝트 수행</span>
            </div>
            <p className="resume-summary">{profile.summary}</p>
            <h2 className="resume-section-title">
              최근 AI 제품 경험 <span>포니링크 · 2024.07 — 현재 · 정규직</span>
            </h2>
            <article className="resume-project">
              <h3>계열사 A.X 전환</h3>
              <div className="resume-project-meta">
                2026.04 — 2026.08 · Tech Lead · 전체 16명 / 개발자 10명 · 약
                20억 원
              </div>
              <ul>
                <li>
                  제약 계열사의 ERP·그룹웨어·문서 업무를 통합하는 AI 시스템의
                  아키텍처와 핵심 구현 주도.
                </li>
                <li>
                  A.X 에이전트 필수 활용 조건에 맞춰 LangGraph 슈퍼바이저와
                  블랙보드 구조 설계. 약 12개 에이전트의 검증된 결과를 축적하고
                  다음 작업의 근거로 전달. 서브 에이전트 5개 직접 구성.
                </li>
                <li>
                  자체 Document Insight 설계·개발 및 성능 검증. 동일한
                  7.22MB·380페이지 PDF 처리 시간을 59분 47초에서 38분 57.9초로
                  34.8% 단축.
                </li>
                <li>
                  Kubernetes 기반 A.X 플랫폼 설치, Keycloak 인증·권한과 GitLab
                  CI·Argo CD 배포 환경 구축.
                </li>
                <li>
                  AI 개발 규칙과 리뷰 과정을 문서화하고 GitLab Merge Request의
                  최종 품질 승인 담당.
                </li>
              </ul>
              <p>
                성과 기준: 2026년 8월 고객 검수·초기 확산 단계. 기술 리딩과
                구현을 담당했으며, 개발자별 세부 업무 배정은 별도 PM이
                담당했습니다.
              </p>
            </article>
            <article className="resume-project">
              <h3>자체 Multi-LLM 솔루션</h3>
              <div className="resume-project-meta">
                2026.01 — 2026.04 · PM / Architect / 핵심 개발 · 본인 포함 4명
              </div>
              <ul>
                <li>
                  초기 아이디어를 제품 요구사항과 사용자 흐름으로 구체화하고
                  개발자 3명을 리딩. 약 3개월 내 가입·결제 가능한 웹 제품을
                  2026.03.27 출시.
                </li>
                <li>
                  약 30개 모델 중 사용자가 선택한 1~5개 모델을 병렬 호출하고
                  Evaluator가 최종 답변을 선택하는 구조 설계.
                </li>
                <li>
                  Keycloak 인증, MSA 도메인 경계, KG이니시스 결제와 토큰 사용량
                  기반 크레딧 구조 설계.
                </li>
                <li>
                  포니링크 공식 홈페이지의 AIoT 분류에 Multi LLM 솔루션으로
                  소개. 후속 AI 사업 제안의 기술 증빙으로 활용.
                </li>
              </ul>
              <p>
                공개 자료:{" "}
                <a href={multiLlmSource.url}>포니링크 공식 제품 소개 ↗</a>
                {" · "}
                {multiLlmSource.location}
                {" · "}
                {multiLlmSource.verifiedAt} 확인
              </p>
              <p>
                2026년 8월 기록 기준, 외부 매출·활성 사용자는 확보하지 못했으며
                상시 운영을 종료하고 필요 시 데모를 제공하는 방식으로
                전환했습니다.
              </p>
            </article>
            <PageNumber page={1} />
          </section>
          <section
            className="resume-sheet"
            aria-label="이력서 2쪽: 프로젝트 관리와 기술 리딩"
          >
            <div className="resume-mini-header">
              <strong>프로젝트 관리와 기술 리딩</strong>
              <span>이명필 · SELECTED EXPERIENCE</span>
            </div>
            <article className="resume-project">
              <h3>SKT AI 플랫폼 에이전트 고도화 · 2차 사업</h3>
              <div className="resume-project-meta">
                포니링크 · 2025.07 — 2026.01 · 프론트엔드 테크니컬 PM · 8명 · 약
                5억 원 FE 사업
              </div>
              <ul>
                <li>
                  프론트엔드 테크니컬 PM으로 고객사 Agile 협업과 8인 팀 관리를
                  맡고 설계·개발 병행.
                </li>
                <li>
                  고객에게 필요한 핵심 기능 2개를 반영하는 조건으로 기존
                  요구사항 5개를 제외하는 합의 도출. 고객 가치를 확보하면서 팀의
                  구현 부담 축소.
                </li>
                <li>
                  배포 이후 중대한 이슈 없이 프로젝트 완료. 이후 후속 사업 제안
                  6건이 직접 유입되어 새로운 사업 기회 확보.
                </li>
              </ul>
              <p>
                후속 6건은 직접 유입된 사업 제안 기준이며, 이후 제안·수주 활동은
                별도 조직이 담당했습니다.
              </p>
            </article>
            <article className="resume-project">
              <h3>SKT AI 플랫폼 · 1차 사업</h3>
              <div className="resume-project-meta">
                포니링크 · 2024.07 — 2025.03 · Tech Lead · 팀원 8명 · 약 3억 원
                FE 사업
              </div>
              <ul>
                <li>
                  Vue 3·TypeScript·vue-query·GraphQL 기반 프론트엔드 아키텍처
                  설계.
                </li>
                <li>
                  외부 API를 연동해 일반 채팅, 요약, RAG 등 사용자 페이지 개발.
                </li>
                <li>
                  폐쇄망 CI/CD를 구축하고 2차 사업으로 이어지는 기술 기반 확보.
                </li>
              </ul>
            </article>
            <article className="resume-project">
              <h3>SK플래닛 Passkey 개발자 포털</h3>
              <div className="resume-project-meta">
                포니링크 · 2024.04 — 2024.07 · Tech Lead · 팀원 5명
              </div>
              <ul>
                <li>
                  개발 진행도가 약 20%인 시점에 합류해 프레임워크와 공통 모듈,
                  핵심 기능 구현 담당.
                </li>
                <li>
                  Spring WebFlux·Vue 3·TypeScript 기반 신규 구축 및 FIDO2
                  브라우저 Passkey 로그인 구현.
                </li>
                <li>
                  전체 WBS 약 50%에 해당하는 개발을 수행하고 부서 내 교육 세션
                  운영. 프리랜서 참여 후 정규직 전환.
                </li>
              </ul>
            </article>
            <article className="resume-project">
              <h3>Cloud Gate 멀티 브랜드 리뉴얼</h3>
              <div className="resume-project-meta">
                더화이트커뮤니케이션 · 2022.09 — 2023.06 · FE Tech Lead · 개발자
                4명
              </div>
              <ul>
                <li>고객 Tenant 분리와 프론트엔드 레거시 리팩터링 담당.</li>
                <li>
                  Jest·Cypress 기반 단위·E2E 테스트와 GitHub PR 코드 리뷰 과정
                  도입.
                </li>
                <li>
                  테스트, PR, GitHub Actions, TDD에 관한 사내 교육 세션 진행.
                </li>
              </ul>
            </article>
            <h2 className="resume-section-title">주요 기술</h2>
            <div className="resume-skills">
              {skills.map((skill) => (
                <div key={skill.title}>
                  <h3>{skill.title}</h3>
                  <p>{skill.items}</p>
                </div>
              ))}
            </div>
            <PageNumber page={2} />
          </section>
          <section
            className="resume-sheet"
            aria-label="이력서 3쪽: 전체 경력과 학력"
          >
            <div className="resume-mini-header">
              <strong>전체 경력 · 학력</strong>
              <span>이명필 · CAREER OVERVIEW</span>
            </div>
            {experience.map((item) => (
              <article
                className="resume-career"
                key={`${item.company}-${item.period}`}
              >
                <div>
                  <h3>{item.company}</h3>
                  <time>{item.period}</time>
                </div>
                <span>
                  {item.role} · {item.type}
                </span>
                <p>{item.description}</p>
              </article>
            ))}
            <h2 className="resume-section-title">학력 · 자격</h2>
            <div className="resume-education">
              <div>
                <strong>학점은행제 · 컴퓨터공학</strong>
                <span>국가평생교육진흥원 · 2020.02 졸업</span>
              </div>
              <div>
                <strong>경민대학교 · 인터넷정보공학</strong>
                <span>2016.02 졸업</span>
              </div>
              <div>
                <strong>정보처리기사</strong>
                <span>2025.06 취득</span>
              </div>
            </div>
            <PageNumber page={3} />
          </section>
        </div>
      </div>
    </main>
  );
}
