import Introduce from './Introduce';
import Skills from './Skills';
import Experiences from './Experiences';
import Educations from './Educations';

export default function Home() {
  return (
    <main className="max-w-4xl pt-28 text-gray-300 mx-auto">
      <section className="text-yellow-500 text-7xl font-bold m-16 leading-normal">
        <p>안녕하세요.</p>
        <p>프론트엔드 개발자</p>
        <p>이명필입니다.</p>
      </section>

      <Introduce />

      <Skills />

      <Experiences />

      <Educations />
    </main>
  );
}
