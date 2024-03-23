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

  const dataSet = [
    {
      url: "/images/img_func_010101.png",
      alt: "고객정보",
    },
    {
      url: "/images/img_func_010203.png",
      alt: "/티켓",
    },
    {
      url: "/images/img_func_010402.png",
      alt: "/템플릿",
    },

    {
      url: "/images/img_func_020101.png",
      alt: "콜",
    },

    {
      url: "/images/img_func_020103.png",
      alt: "메일",
    },

    {
      url: "/images/img_func_020201.png",
      alt: "톡",
    },

    {
      url: "/images/img_func_020202.png",
      alt: "주문정보",
    },

    {
      url: "/images/img_func_020203.png",
      alt: "알림",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center">
      <main className="pt-28 text-gray-300 mx-4">
        <section id="font-bold m-32 leading-normal">
          <div className="">
            <h1 className="text-3xl font-bold text-center mb-6">
              더화이트커뮤니케이션 경력
            </h1>
            <div className="bg-white shadow-md rounded-lg p-6 text-gray-600">
              <h2 className="text-2xl font-semibold mb-4">
                플랫폼서비스실 / 팀원
              </h2>
              <p className="font-medium  mb-4">
                <strong>2022.04 - 현재 재직 중</strong>
              </p>

              <h3 className="mt-10 font-bold">프론트엔드 시니어급으로 근무</h3>
              <ul className="list-disc pl-5 space-y-2 mt-10">
                <li>Vue.js</li>
                <li>프론트엔드 개발 리딩</li>
                <li>주요 기능 개발 (채널톡 서비스, 챗봇 등)</li>
              </ul>

              <h3 className="mt-10 font-bold">CI/CD 환경 구축</h3>
              <ul className="list-disc pl-5 space-y-2 mt-10">
                <li>Jenkins, AWS Deploy, S3</li>
                <li>프론트엔드 빌드 자동화</li>
                <li>배포 E2E 연동</li>
                <li>배포 라인 관련 문제 수정</li>
              </ul>

              <h3 className="mt-10 font-bold">멀티 브랜드 리뉴얼 프로젝트</h3>
              <ul className="list-disc pl-5 space-y-2 mt-10">
                <li>프론트엔드 개발 리딩</li>
                <li>프로젝트 전체 리펙토링</li>
                <li>레거시 코드 교체 및 소스 효율화</li>
                <li>
                  주요 기능 개발 (계정, 인증, 로그인, 채팅 상담, 계정 관리,상담
                  내역 관리)
                </li>
              </ul>

              <h3 className="mt-10 font-bold">개발 문화 도입</h3>
              <ul className="list-disc pl-5 space-y-2 mt-10">
                <li>jest, cypress, github</li>
                <li>jest 단위 테스트 스터디 리딩</li>
                <li>cypress 엔드포인드 테스트 도입</li>
                <li>깃허브 PR / 코드리뷰 문화 도입</li>
                <li>사내 cypress 강의 및 스터디 리딩</li>
              </ul>

              <h3 className="mt-10 font-bold">콜 상담데스크 개선 프로젝트</h3>
              <ul className="list-disc pl-5 space-y-2 mt-10">
                <li>프로젝트 전체 리펙토링</li>
                <li>클라이언트 로그 (IndexedDB) 효율화</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <div className="mt-32">
        <h1>* 소개 페이지</h1>
        <a
          className="text-sky-300"
          href="https://cloudgate.thewc.co.kr/cloudgate"
          target="_blank"
        >
          https://cloudgate.thewc.co.kr/cloudgate
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-3/4 h-32 my-32">
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
