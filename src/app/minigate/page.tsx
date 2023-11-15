'use client';
import Image from 'next/image';

export default function Minigate() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <main className="pt-28 text-gray-300">
        <section id="font-bold m-32 leading-normal">미니게이트</section>
      </main>

      <div className="mt-32">
        <img src="https://lh3.google.com/u/1/d/1K7gfUVjFiHCtXjA3joTZ0pwpNgnaKhse=w4486-h3176-iv1" alt="포트폴리오 사진" />
      </div>
    </div>
  );
}
