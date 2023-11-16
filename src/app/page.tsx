import Image from 'next/image';
import Introduce from './Introduce';
import Skills from './Skills';
import Experiences from './Experiences';
import Educations from './Educations';
import './page.css';

export default function Home() {
  return (
    <main className="max-w-4xl pt-28 text-gray-300 mx-auto">
      <section className="text-yellow-500 text-7xl font-bold m-16 leading-normal">
        <div className="flex flex-row items-center">
          <div className="image-container mr-4">
            <Image className="face" src="/images/face.JPG" width={60} height={60} alt="얼굴" />
          </div>
          안녕하세요.
        </div>
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
