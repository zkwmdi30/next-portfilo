'use client';
import { useEffect, useState, useRef } from 'react';

export default function Thewc() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <main className="pt-28 text-gray-300">
        <section id="font-bold m-32 leading-normal">
          <div className="">
            <h1 className="text-3xl font-bold text-center mb-6">더화이트커뮤니케이션(주) 경력</h1>
            <div className="bg-white shadow-md rounded-lg p-6 text-gray-600">
              <h2 className="text-2xl font-semibold mb-4">플랫폼서비스실 / 팀원</h2>
              <p className="font-medium  mb-4">
                <strong>2022.04 - 현재 재직 중</strong>
              </p>

              <h3 className="mt-10 font-bold">프론트엔드 시니어급으로 근무</h3>
              <ul className="list-disc pl-5 space-y-2 mt-10">
                <li>사내 CS 통합지원 플랫폼 개발 [Vue.js]</li>
                <li>플랫폼 주요 기능 제작 - 웹소켓을 통한 채팅 상담, 챗봇 등</li>
                <li>주요 기능 개발 시 안정성에 극히 신경 써서 수행</li>
                <li>깃허브 PR 및 코드 리뷰 문화 습득</li>
                <li>Vue의 다양한 기능들 (mixin, extends, v-slot 등) 활용</li>
              </ul>

              <h3 className="mt-10 font-bold">배포라인 작업 및 DevOps 관련 업무</h3>
              <ul className="list-disc pl-5 space-y-2 mt-10">
                <li>데브옵스 담당자 미구인 상태에서 배포라인 작업 수행</li>
                <li>배포 라인 관련 문제 수정 (Jenkins, AWS Deploy, S3)</li>
                <li>프론트 빌드 자동화 및 메신저 툴 연동</li>
                <li>배포 시 E2E 테스트 관련 작업 수행</li>
              </ul>

              <h3 className="mt-10 font-bold">멀티브랜드 리뉴얼 프로젝트</h3>
              <ul className="list-disc pl-5 space-y-2 mt-10">
                <li>메인 키값 배열화 및 프로젝트 전반 리펙토링 작업</li>
                <li>화면 로딩 시 리스트로 변경, 비동기 처리 부분 확장</li>
                <li>무리한 일정 속 프론트팀 리딩 및 프로젝트 완수</li>
              </ul>

              <h3 className="mt-10 font-bold">E2E 테스트 도입 및 단위 테스트 스터디 진행</h3>
              <ul className="list-disc pl-5 space-y-2 mt-10">
                <li>레거시 코드 문제로 TDD 및 단위 테스트 도입 추진</li>
                <li>Cypress를 이용한 엔드포인트 테스트 구성</li>
                <li>단위 테스트에 대한 팀 내 스터디 리드 및 진행</li>
              </ul>

              <h3 className="mt-10 font-bold">콜 상담데스크 개선 프로젝트 (PM)</h3>
              <ul className="list-disc pl-5 space-y-2 mt-10">
                <li>콜 상담데스크의 주요 문제점 개선 주도 및 PM으로 프로젝트 참여</li>
                <li>전반적인 시스템 리펙토링 및 신규 기능 적용</li>
                <li>클라이언트 로그(IndexedDB) 효율화 작업으로 중복 로그 감소 및 데이터 추적 개선</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
