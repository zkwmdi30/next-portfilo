"use client";
import { useEffect, useState, useRef } from "react";
import ModalImage from "../../components/modalImage";
import { ModalAlert } from "../../components/modalAlert";

export default function Thewc() {
  const [modalOpen, setModalOpen] = useState(false); // 모달 열기/닫기 상태 관리
  const [selectedImage, setSelectedImage] = useState(""); // 선택된 이미지 URL 관리

  // 이미지를 클릭할 때 모달 열고 해당 이미지의 URL 설정
  const handleImageClick = (url: string) => {
    setSelectedImage(url);
    setModalOpen(true);
  };

  // 모달 닫기 핸들러
  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(""); // 선택된 이미지 URL 초기화
  };

  const tidDataSet = [
    {
      url: "/images/tid/tid1.png",
      alt: "tid 메인",
    },
    {
      url: "/images/tid/tid2.png",
      alt: "tid 메인",
    },

    {
      url: "/images/tid/tid3.png",
      alt: "tid 메인",
    },
    {
      url: "/images/tid/tid4.png",
      alt: "tid 메인",
    },

    {
      url: "/images/tid/tid5.png",
      alt: "tid 메인",
    },
    {
      url: "/images/tid/tid6.png",
      alt: "tid 메인",
    },
  ];

  const adotDataSet = [
    {
      url: "/images/tid/adot1.png",
      alt: "adot 메인",
    },
    {
      url: "/images/tid/adot2.png",
      alt: "adot 메인",
    },
    {
      url: "/images/tid/adot3.png",
      alt: "adot 메인",
    },
    {
      url: "/images/tid/adot4.png",
      alt: "adot 메인",
    },
    {
      url: "/images/tid/adot5.png",
      alt: "adot 메인",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center">
      <main className="pt-28 text-gray-300 mx-4">
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
                <li>
                  Vue 3.0 및 Nuxt.js (Typescript) 마이그레이션 프로젝트 수행
                </li>
                <li>Jenkins 배포 라인 수정</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <div className="mt-32">
        <h1 className="w-fit mx-auto">T-ID 공식 포털 유지보수 수행</h1>
        <div className="mt-8">
          <iframe
            src="https://t-id.co.kr"
            width={500}
            height={800}
            className="hidden md:block"
          ></iframe>
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
          {tidDataSet.map((data, index) => (
            <ModalImage
              url={data.url}
              alt={data.alt}
              handleImageClick={handleImageClick}
              key={index}
            />
          ))}
        </div>
        <div
          className="w-72 p-8 border-white border-2 border rounded-lg"
          style={{ borderColor: "rgb(234 179 8)" }}
        >
          <h1 className="mr-16 w-12 mx-auto font-semibold text-lg bg-gradient-to-r from-blue-300 via-white to-blue-400 text-transparent bg-clip-text">
            A.
          </h1>
          {adotDataSet.map((data, index) => (
            <ModalImage
              url={data.url}
              alt={data.alt}
              handleImageClick={handleImageClick}
              key={index}
            />
          ))}
        </div>
      </div>

      {modalOpen && <ModalAlert url={selectedImage} closeModal={closeModal} />}
    </div>
  );
}
