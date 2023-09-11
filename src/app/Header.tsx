'use client';

import { useState, useEffect } from 'react';
import './Header.css';

export default function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
  });

  return (
    <header className="p-8 w-full">
      <div className={scrollPosition < 150 ? 'original_header' : 'change_header'}>
        <a className="text-yellow-500 text-2xl font-medium" href="/">
          portfolio
        </a>
      </div>
    </header>
  );
}
