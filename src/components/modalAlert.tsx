import Image from "next/image";

export const ModalAlert = ({
  url,
  closeModal,
}: {
  url: string;
  closeModal: () => void;
}) => (
  <div className="fixed inset-0 flex items-center justify-center z-50">
    <div
      className="absolute inset-0 bg-black opacity-25"
      onClick={closeModal}
    ></div>

    <div className="bg-white rounded-lg shadow-xl w-4/5 h-4/5 relative">
      <div className="p-8">
        <div className="flex flex-row-reverse">
          <button
            className="text-xl text-gray-500 hover:text-gray-700 focus:outline-none z-50"
            id="closeModal"
            onClick={closeModal}
          >
            x
          </button>
        </div>
        <div className="w-full h-full flex items-center justify-center py-8 z-20">
          <div className="text-black aspect-w-5 aspect-h-3 max-w-full max-h-full overflow-hidden">
            <Image
              className="object-contain absolute inset-0 z-20" // 이미지를 absolute로 설정하여 부모 요소에 따라 크기가 조절되도록 합니다.
              src={url}
              layout="fill"
              objectFit="contain"
              alt="고객정보"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);
