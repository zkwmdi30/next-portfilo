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
            <span className="text-yellow-500">Javascript</span> 와 <span className="text-yellow-500">Vue.js</span> 에 익숙
          </li>
          <li className="leading-7 m-4">
            <span className="text-yellow-500">Javascript</span> 와 <span className="text-yellow-500">Vue.js</span> 에 익숙 할지도 말지도 할지도 말지도
            할지도 말지도 말지도 할지도 말지도 말지도 할지도 말지도 말지도 말지도 할지도 말지도 말지도 말지도 할지도 말지도
          </li>
          <li className="leading-7 m-4">
            <span className="text-yellow-500">Javascript</span> 와 <span className="text-yellow-500">Vue.js</span> 에 익숙 할지도 말지도 할지도 말지도
            할지도 말지도 말지도 할지도 말지도 말지도 할지도 말지도 말지도 말지도 할지도 말지도 말지도 말지도 할지도 말지도
          </li>
          <li className="leading-7 m-4">
            <span className="text-yellow-500">Javascript</span> 와 <span className="text-yellow-500">Vue.js</span> 에 익숙 할지도 말지도 할지도 말지도
            할지도 말지도 말지도 할지도 말지도 말지도 할지도 말지도 말지도 말지도 할지도 말지도 말지도 말지도 할지도 말지도
          </li>
          <li className="leading-7 m-4">
            <span className="text-yellow-500">Javascript</span> 와 <span className="text-yellow-500">Vue.js</span> 에 익숙 할지도 말지도 할지도 말지도
            할지도 말지도 말지도 할지도 말지도 말지도 할지도 말지도 말지도 말지도 할지도 말지도 말지도 말지도 할지도 말지도
          </li>
        </ul>
      </div>
    </section>
  );
}
