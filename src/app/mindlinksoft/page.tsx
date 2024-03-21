'use client';
import Image from 'next/image';

export default function Mindlinksoft() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <main className="pt-28 text-gray-300 mx-4">
        <section id="font-bold m-32 leading-normal">
          <div className="">
            <h1 className="text-3xl font-bold text-center mb-6">마인드링크소프트 경력</h1>
            <div className="bg-white shadow-md rounded-lg p-6 text-gray-600">
              <h2 className="text-2xl font-semibold mb-4">개발팀 / 부대표</h2>
              <p className="font-medium  mb-4">
                <strong>2018.04 - 2020.05</strong>
              </p>

              <h3 className="mt-10 font-bold">스타트업 창업</h3>
              <ul className="list-disc pl-5 space-y-2 mt-10">
                <li>부대표 및 개발 책임자로 참여</li>
                <li>작은프로젝트의 경우 1인으로 수행, 큰 경우 프리랜서를 고용하여 퍼블리셔 포함 최대 8명의 팀이 구성</li>
                <li>기획, 개발, 배포, 운영 등 모든 부분 담당</li>
              </ul>

              <h3 className="mt-10 font-bold">인스타그램 리뷰연동 앱 리뷰얼마 개발</h3>
              <ul className="list-disc pl-5 space-y-2 mt-10">
                <li>access, refresh 토큰방식 구현</li>
                <li>인스타그램 웹 파싱 개발</li>
                <li>AWS 로드밸런서 서버 구성 및 AWS aurora 사용</li>
              </ul>

              <h3 className="mt-10 font-bold">초중고 급식정보기반 커뮤니티 앱 개발</h3>
              <ul className="list-disc pl-5 space-y-2 mt-10">
                <li>나이스 학생서비스내에 급식정보를 파싱하여 앱으로 제공</li>
                <li>커뮤니티 및 포인트 시스템 개발</li>
              </ul>

              <h3 className="mt-10 font-bold">대학홍보채널 웹API 서버 개발</h3>
              <ul className="list-disc pl-5 space-y-2 mt-10">
                <li>AWS lamda (API) 사용</li>
              </ul>

              <h3 className="mt-10 font-bold">SI 프로젝트 다수 진행</h3>
              <ul className="list-disc pl-5 space-y-2 mt-10">
                <li>세종대학교 교수학습 혁신플립러닝 플랫폼 개발</li>
                <li>스마트공장 태용엔지니어링 현장중심 공정관리시스템 개발</li>
                <li>MMS 발송관리 앱 웹 API 서버 개발</li>
                <li>상품판매관리시스템 ERP</li>
                <li>경민대학교 온라인교수학습플랫폼 개발</li>
                <li>경기도 지식멘토 홈페이지 구축</li>
                <li>원스톱 특허출원 시스템</li>
                <li>한국복지대학교 온라인학습관리시스템 개발</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <div className="relative w-full h-32 my-32">
        <Image className="mt-8" src="/images/11_1400.png" layout="responsive" width={500} height={300} alt="리뷰얼마" />
        <Image className="mt-8" src="/images/01_1400.png" layout="responsive" width={500} height={300} alt="피넛" />
        <Image className="mt-8" src="/images/02_1400.png" layout="responsive" width={500} height={300} alt="대학홍보" />
        <Image className="mt-8" src="/images/03_1400.png" layout="responsive" width={500} height={300} alt="복지대" />
        <Image className="mt-8" src="/images/09_1400.png" layout="responsive" width={500} height={300} alt="태용" />
        <Image className="mt-8" src="/images/08_1400.png" layout="responsive" width={500} height={300} alt="문자비서" />
        <Image className="mt-8" src="/images/07_1400.png" layout="responsive" width={500} height={300} alt="ERP" />
        <Image className="mt-8" src="/images/06_1400.png" layout="responsive" width={500} height={300} alt="특허" />
        <Image className="mt-8" src="/images/05_1400.png" layout="responsive" width={500} height={300} alt="지식멘토" />
        <Image className="mt-8" src="/images/04_1400.png" layout="responsive" width={500} height={300} alt="경민대" />
      </div>
    </div>
  );
}
