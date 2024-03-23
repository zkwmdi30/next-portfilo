import Image from "next/image";
import Introduce from "./Introduce";
import Skills from "./Skills";
import Experiences from "./Experiences";
import Educations from "./Educations";
import "./page.css";

export default function Home() {
  return (
    <main className="max-w-4xl pt-28 text-gray-300 mx-auto">
      <section className="text-yellow-500 text-4xl md:text-7xl font-bold m-16 leading-normal md:leading-loose">
        <div className="flex flex-row items-center">
          <div className="absolute z-10 image-container mr-4 mb-40 opacity-75">
            <Image
              className="face"
              src="/images/face.JPG"
              width={200}
              height={200}
              alt="얼굴"
            />
          </div>
          <p className="z-20">안녕하세요.</p>
        </div>
        <p className="z-20 text-3xl md:text-6xl">프론트엔드 개발자</p>
        <p className="z-20 text-3xl md:text-6xl">이명필입니다.</p>
      </section>

      <Introduce />

      <Skills />

      <Experiences />

      <Educations />
    </main>
  );
}
