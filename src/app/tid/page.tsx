"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function Thewc() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <main className="pt-28 text-gray-300">
        <section id="font-bold m-32 leading-normal">
          <div className="">
            <h1 className="text-3xl font-bold text-center mb-6">
              SK T-ID 경력 (freelancer)
            </h1>
            <div className="bg-white shadow-md rounded-lg p-6 text-gray-600">
              <h2 className="text-2xl font-semibold mb-4">
                SKT-ID 팀 (젬백스링크 소속) / 과장
              </h2>
              <p className="font-medium  mb-4">
                <strong>2024.01 - 현재 재직 중</strong>
              </p>

              <h3 className="mt-10 font-bold">풀스택, 과장으로 근무</h3>
              <ul className="list-disc pl-5 space-y-2 mt-10">
                <li>Vue.js</li>
                <li>Spring Boot</li>
                <li>프로젝트 유지보수 및 Vue.js 버전 업그레이드 진행</li>
              </ul>

              <h3 className="mt-10 font-bold">A. (에이닷)</h3>
              <ul className="list-disc pl-5 space-y-2 mt-10">
                <li>
                  <a
                    className="text-blue-400"
                    href="https://a.sktelecom.com"
                    target="_blank"
                  >
                    https://a.sktelecom.com
                  </a>
                </li>
                <li>웹뷰 기반 모바일 프론트엔드 개발 수행 (Vue.js)</li>
                <li>서비스​ 확장에 따른 에이닷 서비스 연동 개발 수행</li>
                <li>SKT-ID 관련 통합 로그인 유지보수</li>
                <li>서버 관련 유지보수 (Apache)</li>
              </ul>

              <h3 className="mt-10 font-bold">T-ID</h3>
              <ul className="list-disc pl-5 space-y-2 mt-10">
                <li>
                  <a
                    className="text-blue-400"
                    href="https://t-id.co.kr"
                    target="_blank"
                  >
                    https://t-id.co.kr
                  </a>
                </li>
                <li>메인 홈페이지 유지 보수 (Vue.js)</li>
                <li>
                  서비스 ​확장에 따른 약관 대응 및 T-ID 이용 서비스 목록 추가
                  표시 등 수행
                </li>
                <li>웹뷰 기반 모바일 프론트엔드 개발 수행 (딥링크등)</li>
                <li>Vue 3.0 및 Nuxt.js 마이그레이션 프로젝트 수행</li>
                <li>Jenkins 배포 라인 수정</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <div className="mt-32">
        <h1 className="w-fit mx-auto">T-ID 공식 포털 유지보수 수행</h1>
        <div className="mt-8">
          <iframe src="https://t-id.co.kr" width={500} height={800}></iframe>
        </div>
      </div>

      <div className="relative w-full h-32 my-32 grid md:grid-cols-2 grid-cols-1 gap-4 justify-items-center mb-8">
        <div
          className="w-72 p-8 border-white border-2 border rounded-lg"
          style={{ borderColor: "rgb(234 179 8)" }}
        >
          <h1 className="w-12 mx-auto font-semibold text-lg bg-gradient-to-r from-yellow-300 via-red-600 text-transparent bg-clip-text">
            T-ID
          </h1>
          <Image
            className="mt-8"
            src="/images/tid/tid1.png"
            layout="responsive"
            width={500}
            height={300}
            alt="tid 메인"
          />
          <Image
            className="mt-8"
            src="/images/tid/tid2.png"
            layout="responsive"
            width={200}
            height={300}
            alt="tid 메인"
          />
          <Image
            className="mt-8"
            src="/images/tid/tid3.png"
            layout="responsive"
            width={200}
            height={300}
            alt="tid 메인"
          />
          <Image
            className="mt-8"
            src="/images/tid/tid4.png"
            layout="responsive"
            width={200}
            height={300}
            alt="tid 메인"
          />
          <Image
            className="mt-8"
            src="/images/tid/tid5.png"
            layout="responsive"
            width={200}
            height={300}
            alt="tid 메인"
          />
          <Image
            className="mt-8"
            src="/images/tid/tid6.png"
            layout="responsive"
            width={200}
            height={300}
            alt="tid 메인"
          />
        </div>
        <div
          className="w-72 p-8 border-white border-2 border rounded-lg"
          style={{ borderColor: "rgb(234 179 8)" }}
        >
          <h1 className="mr-16 w-12 mx-auto font-semibold text-lg bg-gradient-to-r from-blue-300 via-white to-blue-400 text-transparent bg-clip-text">
            A.
          </h1>
          <Image
            className="mt-8"
            src="/images/tid/adot1.png"
            layout="responsive"
            width={200}
            height={300}
            alt="tid 메인"
          />
          <Image
            className="mt-8"
            src="/images/tid/adot2.png"
            layout="responsive"
            width={200}
            height={300}
            alt="tid 메인"
          />
          <Image
            className="mt-8"
            src="/images/tid/adot3.png"
            layout="responsive"
            width={200}
            height={300}
            alt="tid 메인"
          />
          <Image
            className="mt-8"
            src="/images/tid/adot4.png"
            layout="responsive"
            width={200}
            height={300}
            alt="tid 메인"
          />
          <Image
            className="mt-8"
            src="/images/tid/adot5.png"
            layout="responsive"
            width={200}
            height={300}
            alt="tid 메인"
          />
        </div>
      </div>
    </div>
  );
}
