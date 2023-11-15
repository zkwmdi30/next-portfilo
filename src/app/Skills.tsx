'use client';
import { useEffect, useState, useRef } from 'react';

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <section
      className="m-20 "
      ref={elementRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 1.0s ease 0s;'
      }}
    >
      <div className="font-bold text-4xl m-8">Skills</div>
      <div>
        <ul className="list-disc marker:text-gray-500 text-xl">
          <li className="leading-7 m-4">
            <span className="text-yellow-500">Javascript</span> 와 <span className="text-yellow-500">Vue.js</span> 에 익숙합니다.
          </li>
          <li className="leading-7 m-4">
            <span className="text-yellow-500">Jenkins, AWS Deploy, S3</span> 등의 DevOps 작업이 가능합니다.
          </li>
          <li className="leading-7 m-4">
            <span className="text-yellow-500">웹소켓</span>과 채팅상담 기능 구현에 능숙합니다.
          </li>
          <li className="leading-7 m-4">
            깃허브 <span className="text-yellow-500">PR</span>과 <span className="text-yellow-500">코드 리뷰 문화</span>에 숙련되어 있습니다.
          </li>
          <li className="leading-7 m-4">
            <span className="text-yellow-500">Cypress</span>를 통한 엔드포인트 테스팅 경험이 있습니다.
          </li>
          <li className="leading-7 m-4">
            <span className="text-yellow-500">Spring Boot</span>를 활용한 <span className="text-yellow-500">백엔드</span> 개발 경험이 있습니다.
          </li>
          <li className="leading-7 m-4">
            <span className="text-yellow-500">AWS</span>와 <span className="text-yellow-500">NCP</span>를 이용한 클라우드 서비스 구축 경험이 있습니다.
          </li>
          <li className="leading-7 m-4">
            <span className="text-yellow-500">프로젝트 관리</span> 및 <span className="text-yellow-500">팀 리더십 경험</span>이 있습니다.
          </li>
        </ul>
      </div>
    </section>
  );
}
