'use client';
import Image from 'next/image';

export default function Minigate() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <main className="pt-28 text-gray-300">
        <section id="font-bold m-32 leading-normal">
          <div className="">
            <h1 className="text-3xl font-bold text-center mb-6">미니게이트 경력</h1>
            <div className="bg-white shadow-md rounded-lg p-6 text-gray-600">
              <h2 className="text-2xl font-semibold mb-4">플랫폼개발실 / 대리</h2>
              <p className="font-medium  mb-4">
                <strong>2021.08 - 2022.03</strong>
              </p>

              <h3 className="mt-10 font-bold">Gnb 페럴렉스 교육 SI 수행</h3>
              <ul className="list-disc pl-5 space-y-2 mt-10">
                <li>개발스택: Spring Boot, Vue, Nuxt 개발</li>
                <li>프론트엔드 주요 프레임워크 세팅 및 설계</li>
                <li>주요 로직 구현 : 로그인, 라우터, 인증, 녹음 등</li>
                <li>서버 세팅 및 백엔드 개발</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <div className="relative w-full h-32 my-32">
        <Image className="mt-8" src="/images/13_1400.png" layout="responsive" width={500} height={300} alt="고객정보" />
      </div>
    </div>
  );
}
