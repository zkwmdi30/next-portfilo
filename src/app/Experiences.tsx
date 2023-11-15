'use client';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';

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
      <div className="font-bold text-4xl">Experiences</div>
      <ul>
        <li className="mt-12">
          <span className="text-4xl font-extrabold">더화이트커뮤니케이션</span>
          <p className="text-gray-400">프론트엔드</p>
          <p className="text-gray-400">2022.04 ~ 현재</p>
          <Link href="/thewc">
            <button className="mt-4 w-24 h-12 rounded-xl bg-gray-400">자세히 보기</button>
          </Link>
        </li>
        <li className="mt-12">
          <span className="text-4xl font-extrabold">미니게이트</span>
          <p className="text-gray-400">풀스택</p>
          <p className="text-gray-400">2021.08 ~ 2022.03</p>
          <Link href="/minigate">
            <button className="mt-4 w-24 h-12 rounded-xl bg-gray-400">자세히 보기</button>
          </Link>
        </li>
        <li className="mt-12">
          <span className="text-4xl font-extrabold">스튜디오8</span>
          <p className="text-gray-400">풀스택</p>
          <p className="text-gray-400">2020.05 ~ 2021.05</p>
          <Link href="/studio8">
            <button className="mt-4 w-24 h-12 rounded-xl bg-gray-400">자세히 보기</button>
          </Link>
        </li>
        <li className="mt-12">
          <span className="text-4xl font-extrabold">마인드링크소프트</span>
          <p className="text-gray-400">부대표(풀스택)</p>
          <p className="text-gray-400">2018.04 ~ 2020.05</p>
          <Link href="/mindlinksoft">
            <button className="mt-4 w-24 h-12 rounded-xl bg-gray-400">자세히 보기</button>
          </Link>
        </li>
        <li className="mt-12">
          <span className="text-4xl font-extrabold">씨씨미디어서비스</span>
          <p className="text-gray-400">웹개발</p>
          <p className="text-gray-400">2017.07 ~ 2018.03</p>
          <Link href="/ccmedia">
            <button className="mt-4 w-24 h-12 rounded-xl bg-gray-400">자세히 보기</button>
          </Link>
        </li>
        <li className="mt-12">
          <span className="text-4xl font-extrabold">디나인텍</span>
          <p className="text-gray-400">웹개발</p>
          <p className="text-gray-400">2016.09 ~ 2017.08</p>
          <Link href="/dninetec">
            <button className="mt-4 w-24 h-12 rounded-xl bg-gray-400">자세히 보기</button>
          </Link>
        </li>
      </ul>
    </section>
  );
}
