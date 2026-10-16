import Link from "next/link";
export default function NotFound() {
  return (
    <main
      tabIndex={-1}
      id="main-content"
      className="shell"
      style={{ paddingBlock: "100px" }}
    >
      <p className="eyebrow">404 / PAGE NOT FOUND</p>
      <h1 style={{ marginBlock: "20px", fontSize: "clamp(28px, 5vw, 48px)" }}>
        페이지를 찾을 수 없습니다.
      </h1>
      <p style={{ marginBottom: "30px" }}>
        주소를 확인하거나 대표 프로젝트에서 다시 살펴보세요.
      </p>
      <Link className="button button-primary" href="/#work">
        대표 프로젝트로 돌아가기 →
      </Link>
    </main>
  );
}
