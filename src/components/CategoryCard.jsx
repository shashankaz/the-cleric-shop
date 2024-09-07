import Image from "next/image";
import Link from "next/link";

const CategoryCard = ({ imageUrl, altText, src }) => {
  return (
    <div className="relative rounded-full overflow-hidden w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48">
      <Link href={`/${src.toLowerCase()}`}>
        <Image
          src={imageUrl}
          layout="fill"
          alt={altText}
          title={altText}
          className="absolute inset-0 object-cover"
        />
      </Link>
    </div>
  );
};

export default CategoryCard;
