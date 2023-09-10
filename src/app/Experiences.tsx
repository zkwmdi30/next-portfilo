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
      <div className="font-bold text-4xl m-8">Experiences</div>
      <ul>
        <li className="m-12">
          <span className="text-4xl font-extrabold">더화이트커뮤니케이션</span>
          <p className="text-gray-400">프론트엔드 엔지니어</p>
          <p className="text-gray-400">2022.04 ~ 현재</p>
          <button className="mt-4 w-24 h-12 rounded-xl bg-gray-400">자세히 보기</button>
        </li>
        <li className="m-12">
          <span className="text-4xl font-extrabold">더화이트커뮤니케이션</span>
          <p className="text-gray-400">프론트엔드 엔지니어</p>
          <p className="text-gray-400">2022.04 ~ 현재</p>
          <button className="mt-4 w-24 h-12 rounded-xl bg-gray-400">자세히 보기</button>
        </li>
      </ul>
    </section>
  );
}
