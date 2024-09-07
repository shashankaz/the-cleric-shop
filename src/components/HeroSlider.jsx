import Image from "next/image";

const HeroSlider = ({ src, title }) => {
  return (
    <div className="px-4 sm:px-8 md:px-16 max-w-7xl mx-auto mb-4">
      <div className="hidden md:flex h-[452px] w-full border">
        <div className="flex items-center justify-center h-full w-1/2">
          <h1 className="text-3xl w-3/4 text-center">{title}</h1>
        </div>
        <div className="h-full w-1/2 overflow-hidden">
          <Image
            src={src}
            width={500}
            height={500}
            alt={title}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="md:hidden relative h-[452px] w-full border">
        <Image
          src={src}
          width={500}
          height={500}
          alt={title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <h1 className="text-2xl text-white text-center px-4">{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
