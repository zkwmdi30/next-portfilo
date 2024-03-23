"use client";
import { useEffect, useState, useRef } from "react";
import ModalImage from "../../components/modalImage";
import { ModalAlert } from "../../components/modalAlert";

export default function Minigate() {
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

  const dataSet = [
    {
      url: "/images/13_1.jpg",
      alt: "메인화면",
    },
    {
      url: "/images/13_2.jpg",
      alt: "강의화면",
    },
    {
      url: "/images/13_3.jpg",
      alt: "문제화면  ",
    },
    {
      url: "/images/13_4.png",
      alt: "녹음화면",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center">
      <main className="pt-28 text-gray-300 mx-4">
        <section id="font-bold m-32 leading-normal">
          <div className="">
            <h1 className="text-3xl font-bold text-center mb-6">
              미니게이트 경력
            </h1>
            <div className="bg-white shadow-md rounded-lg p-6 text-gray-600">
              <h2 className="text-2xl font-semibold mb-4">
                플랫폼개발실 / 대리
              </h2>
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-3/4 h-32 my-32">
        {dataSet.map((data) => (
          <ModalImage
            url={data.url}
            alt={data.alt}
            handleImageClick={handleImageClick}
          />
        ))}
      </div>
      {modalOpen && <ModalAlert url={selectedImage} closeModal={closeModal} />}
    </div>
  );
}
