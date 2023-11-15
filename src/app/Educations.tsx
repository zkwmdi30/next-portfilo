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
      <div className="font-bold text-4xl">Educations</div>
      <ul>
        <li className="mt-12">
          <span className="text-4xl font-extrabold">
            학점은행제<b className="text-2xl">(컴퓨터공학과)</b>
          </span>
          <p className="text-gray-400">2019.03 ~ 2020.02</p>
        </li>
        <li className="mt-12">
          <span className="text-4xl font-extrabold">
            경민대학교<b className="text-2xl">(인터넷정보공학과)</b>
          </span>
          <p className="text-gray-400">2011.03 ~ 2016.02</p>
        </li>
        <li className="mt-12">
          <span className="text-4xl font-extrabold">용문고등학교</span>
          <p className="text-gray-400">2008.03 ~ 2011.02</p>
        </li>
      </ul>
    </section>
  );
}
