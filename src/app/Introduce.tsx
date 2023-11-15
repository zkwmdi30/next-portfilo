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
      className="m-20"
      ref={elementRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 1.0s ease 0s;'
      }}
    >
      <ul className="list-disc marker:text-gray-500 text-xl leading-10">
        <li className="my-4">
          <b>다양한 기술 스펙을 깊이 이해합니다.</b>
          <div className="text-sm">
            클라우드 인프라와 최적화에 대한 전문 지식을 바탕으로 AWS와 네이버 클라우드 플랫폼을 활용하여 효율적인 시스템을 구축합니다.
          </div>
        </li>
        <li className="my-4">
          <b>독립적인 업무 수행 능력이 뛰어납니다.</b>
          <div className="text-sm">다양한 프로젝트를 동시에 관리하며 성공적으로 완료합니다.</div>
        </li>
        <li className="my-4">
          <b>리더십과 팀 관리 능력을 보유합니다.</b>
          <div className="text-sm">스타트업 창업 경험을 통해 팀을 이끄는 리더십을 발휘합니다.</div>
        </li>
        <li className="my-4">
          <b>지속적인 학습을 통해 기술을 습득하고 적용합니다.</b>
          <div className="text-sm">새로운 기술과 도구를 빠르게 배우고 이를 프로젝트에 효과적으로 적용하여 성공적인 결과를 만들어냅니다.</div>
        </li>
        <li className="my-4">
          <b>팀원들과의 긍정적인 협업을 유지합니다.</b>
          <div className="text-sm">맡은 역할을 효과적으로 수행하면서도 동료들과의 협력을 통해 팀워크를 강화합니다.</div>
        </li>
        <li className="my-4">
          <b>역할에 최상의 성과를 달성하려는 강한 의지가 있습니다.</b>
          <div className="text-sm">전문성과 경험을 바탕으로 당사에서 맡게 될 역할에서 최상의 성과를 달성할 자신이 있습니다.</div>
        </li>
        <li className="my-4">
          <b>일에 대한 열정과 근면성을 갖고 있습니다.</b>
          <div className="text-sm">어떠한 업무도 성실하고 열정적으로 수행합니다.</div>
        </li>
      </ul>
    </section>
  );
}
