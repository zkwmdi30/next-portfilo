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
        <li>열심히 잘 합니다. 열심히 잘 합니다. 열심히 잘 합니다. 열심히 잘 합니다.</li>
        <li>열심히 잘 합니다. 열심히 잘 합니다. 열심히 잘 합니다. 열심히 잘 합니다.</li>
        <li>열심히 잘 합니다. 열심히 잘 합니다. 열심히 잘 합니다. 열심히 잘 합니다.</li>
        <li>열심히 잘 합니다. 열심히 잘 합니다. 열심히 잘 합니다. 열심히 잘 합니다.</li>
        <li>열심히 잘 합니다. 열심히 잘 합니다. 열심히 잘 합니다. 열심히 잘 합니다.</li>
      </ul>
    </section>
  );
}
