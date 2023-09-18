import Header from './Header';
import Introduce from './Introduce';
import Skills from './Skills';
import Experiences from './Experiences';
import Educations from './Educations';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <Header />

      <main className="pt-28 text-gray-300">
        <section className="text-yellow-500 text-7xl font-bold m-32 leading-normal">
          <p>안녕하세요.</p>
          <p>프론트엔드 개발자</p>
          <p>이명필입니다.</p>
        </section>

        <Introduce />

        <Skills />

        <Experiences />

        <Educations />
      </main>
    </div>
  );
}
