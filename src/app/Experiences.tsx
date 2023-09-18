'use client';
import { Fragment, useEffect, useState, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  const [open, setOpen] = useState(true);
  const cancelButtonRef = useRef(null);

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
      <div className="font-bold text-4xl m-8">Experiences</div>
      <ul>
        <li className="m-12">
          <span className="text-4xl font-extrabold">더화이트커뮤니케이션</span>
          <p className="text-gray-400">프론트엔드 엔지니어</p>
          <p className="text-gray-400">2022.04 ~ 현재</p>
          <button className="mt-4 w-24 h-12 rounded-xl bg-gray-400">자세히 보기</button>
        </li>
        <li className="m-12">
          <span className="text-4xl font-extrabold">더화이트커뮤니케이션</span>
          <p className="text-gray-400">프론트엔드 엔지니어</p>
          <p className="text-gray-400">2022.04 ~ 현재</p>
          <button className="mt-4 w-24 h-12 rounded-xl bg-gray-400">자세히 보기</button>
        </li>
      </ul>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-gray-50 px-4 py-3">
                    <span className="text-4xl font-extrabold">더화이트커뮤니케이션</span>
                    <p className="text-gray-400">프론트엔드 엔지니어</p>
                    <p className="text-gray-400">2022.04 ~ 현재</p>
                    <button className="mt-4 w-24 h-12 rounded-xl bg-gray-400">자세히 보기</button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </section>
  );
}
