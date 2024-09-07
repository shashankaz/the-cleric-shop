import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProductPageCard = ({ product }) => {
  return (
    <Link href={`product/${product._id}`}>
      <div className="w-[276px] h-96 overflow-hidden rounded-md shadow-md">
        <div className="w-full h-64 overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/1084554/pexels-photo-1084554.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Product"
            width={1000}
            height={1000}
            className="h-full w-full object-cover hover:scale-105 transition duration-200"
          />
        </div>
        <div className="p-3 flex flex-col justify-between h-[8rem]">
          <h1 className="text-xl font-semibold truncate">{product.title}</h1>
          <p className="text-sm text-gray-700 mt-1 line-clamp-2">
            {product.shortDescription}
          </p>
          <div className="mt-auto flex justify-between items-center text-gray-900">
            <p className="text-lg font-bold">${product.price}</p>
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, index) => (
                <Star key={index} size={16} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductPageCard;
