import Image from "next/image";

const ModalImage = ({
  url,
  alt,
  handleImageClick,
}: {
  url: string;
  alt: string;
  handleImageClick: (url: string) => void;
}) => {
  return (
    <Image
      className="mt-8 cursor-pointer"
      src={url}
      layout="responsive"
      width={500}
      height={300}
      alt={alt}
      onClick={() => handleImageClick(url)}
    />
  );
};

export default ModalImage;
