import Image from "next/image";
import Link from "next/link";

const CategoryCard = ({ imageUrl, altText, src }) => {
  return (
    <div className="relative rounded-full overflow-hidden w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 group">
      <Link href={`/${src.toLowerCase()}`}>
        <div className="block w-full h-full">
          <Image
            src={imageUrl}
            layout="fill"
            alt={altText}
            className="absolute inset-0 object-cover"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white text-sm md:text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {altText}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
