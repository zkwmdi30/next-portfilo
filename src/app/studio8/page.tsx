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
      url: "/images/12_1.png",
      alt: "런쳐",
    },
    {
      url: "/images/12_2.png",
      alt: "상점",
    },
    {
      url: "/images/12_3.png",
      alt: "스팀",
    },
    {
      url: "/images/12_4.png",
      alt: "쿠폰",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center">
      <main className="pt-28 text-gray-300 mx-4">
        <section id="font-bold m-32 leading-normal">
          <div className="">
            <h1 className="text-3xl font-bold text-center mb-6">
              스튜디오8 경력
            </h1>
            <div className="bg-white shadow-md rounded-lg p-6 text-gray-600">
              <h2 className="text-2xl font-semibold mb-4">인프라팀 / 사원</h2>
              <p className="font-medium  mb-4">
                <strong>2020.05 - 2021.05</strong>
              </p>

              <h3 className="mt-10 font-bold">
                온라인게임 아스텔리아 로얄 서비스 관리 및 운영
              </h3>
              <ul className="list-disc pl-5 space-y-2 mt-10">
                <li>
                  프로젝트 메인 기능 개발 (계정, 상품, 빌링, 프론트엔드 등)
                </li>
                <li>로컬 개발환경 전체 복구 (Repositories 16개)</li>
                <li>게임 런쳐 개발</li>
                <li>신규 서비스 오픈 대응 개발</li>
              </ul>

              <h3 className="mt-10 font-bold">
                통계용 백오피스 및 게임 런처 관리
              </h3>
              <ul className="list-disc pl-5 space-y-2 mt-10">
                <li>로그인 접속 기록 및 상품 누적판매 통계 툴 개발 관리</li>
              </ul>

              <h3 className="mt-10 font-bold">아스텔리아 로얄 스팀 런칭</h3>
              <ul className="list-disc pl-5 space-y-2 mt-10">
                <li>php, mfc</li>
                <li>프론트엔드 / 백엔드 개발</li>
                <li>서비스 커스터마이징 진행</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-3/4 h-32 my-32">
        {dataSet.map((data, index) => (
          <ModalImage
            url={data.url}
            alt={data.alt}
            handleImageClick={handleImageClick}
            key={index}
          />
        ))}
      </div>
      {modalOpen && <ModalAlert url={selectedImage} closeModal={closeModal} />}
    </div>
  );
}
