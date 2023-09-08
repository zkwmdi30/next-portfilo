import Image from 'next/image';

export default function Home() {
  return (
    <div
      style={{ position: 'relative', maxWidth: '900px', display: 'flex', flexDirection: 'column' }}
      className="flex min-h-screen flex-col items-center"
    >
      <header className="p-4">
        <a className="text-yellow-500 text-2xl font-medium">portfolio</a>
      </header>

      <main className="pt-28 text-gray-300">
        <section className="text-yellow-500 text-7xl font-bold m-16 leading-normal">
          <p>안녕하세요.</p>
          <p>프론트엔드 개발자</p>
          <p>이명필입니다.</p>
        </section>

        <section className="m-16">
          <ul className="list-disc marker:text-gray-500">
            <li>잘 합니다.</li>
            <li>잘 합니다.</li>
            <li>잘 합니다.</li>
            <li>잘 합니다.</li>
            <li>잘 합니다.</li>
            <li>잘 합니다.</li>
          </ul>
        </section>

        <section>
          <div className="font-bold text-2xl m-8">Skills</div>
          <div>
            <ul className="list-disc marker:text-gray-500">
              <li>
                <span className="text-yellow-500">Javascript</span> 와 <span className="text-yellow-500">Vue.js</span> 에 익숙
              </li>
              <li>
                <span className="text-yellow-500">Javascript</span> 와 <span className="text-yellow-500">Vue.js</span> 에 익숙
              </li>
              <li>
                <span className="text-yellow-500">Javascript</span> 와 <span className="text-yellow-500">Vue.js</span> 에 익숙
              </li>
              <li>
                <span className="text-yellow-500">Javascript</span> 와 <span className="text-yellow-500">Vue.js</span> 에 익숙
              </li>
              <li>
                <span className="text-yellow-500">Javascript</span> 와 <span className="text-yellow-500">Vue.js</span> 에 익숙
              </li>
            </ul>
          </div>
        </section>

        <section>
          <div className="font-bold text-2xl m-8">Experiences</div>
          <ul>
            <li className="m-8">
              <span className="text-2xl font-bold">더화이트커뮤니케이션</span>
              <p className="text-gray-400">프론트엔드 엔지니어</p>
              <p className="text-gray-400">2022.04 ~ 현재</p>
              <button className="mt-4 w-24 h-12 rounded-xl bg-gray-400">자세히 보기</button>
            </li>
            <li className="m-8">
              <span className="text-2xl font-bold">더화이트커뮤니케이션</span>
              <p className="text-gray-400">프론트엔드 엔지니어</p>
              <p className="text-gray-400">2022.04 ~ 현재</p>
              <button className="mt-4 w-24 h-12 rounded-xl bg-gray-400">자세히 보기</button>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
