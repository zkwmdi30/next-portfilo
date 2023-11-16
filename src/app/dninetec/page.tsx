'use client';

export default function Dninetec() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <main className="pt-28 text-gray-300">
        <section id="font-bold m-32 leading-normal">
          <div className="">
            <h1 className="text-3xl font-bold text-center mb-6">디나인텍 경력</h1>
            <div className="bg-white shadow-md rounded-lg p-6 text-gray-600">
              <h2 className="text-2xl font-semibold mb-4">SI사업부 / 사원</h2>
              <p className="font-medium  mb-4">
                <strong>2016.09 - 2017.08</strong>
              </p>

              <h3 className="mt-10 font-bold">2016년 의료기관인증평가시스템 기능개선사업</h3>
              <ul className="list-disc pl-5 space-y-2 mt-10">
                <li>2016.09 ~ 2017.07</li>
              </ul>

              <h3 className="mt-10 font-bold">의료기관평가인증원 홈페이지 유지보수</h3>
              <ul className="list-disc pl-5 space-y-2 mt-10">
                <li>2017.01 ~ 2017.12</li>
              </ul>

              <h3 className="mt-10 font-bold">의료기관평가인증원 홈페이지 민원게시판 개발</h3>
              <ul className="list-disc pl-5 space-y-2 mt-10">
                <li>2017.03 ~ 2017.04</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
