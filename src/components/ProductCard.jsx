import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <Link href={`/product/${product._id}`}>
      <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-200 ease-in-out">
        <div className="relative h-40 sm:h-48 mb-4 bg-gray-200 animate-pulse">
          {/* <Image
            src={
              product.image ||
              "https://images.pexels.com/photos/2065954/pexels-photo-2065954.jpeg"
            }
            alt={product.title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          /> */}
        </div>
        <h2 className="text-md sm:text-base font-semibold mb-2 text-gray-800 truncate">
          {product.title}
        </h2>
        <p className="text-base sm:text-lg font-bold text-gray-900">
          ${product.price}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
