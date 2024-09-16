import Image from "next/image";
import Link from "next/link";

const ProductPageCard = ({ product }) => {
  return (
    <Link href={`product/${product._id}`}>
      <div className="border border-gray-200 rounded-lg shadow-sm p-4 w-full h-full flex flex-col justify-between">
        <div className="relative w-full h-48 mb-4">
          <Image
            src="https://images.pexels.com/photos/1084554/pexels-photo-1084554.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt={product.title}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2 line-clamp-1">
            {product.title}
          </h2>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {product.description}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-xl font-bold mb-2">${product.price}</p>
          <div className="flex items-center">
            <div className="flex items-center justify-center gap-1 text-xs font-semibold bg-green-700 p-1 text-white rounded">
              4.4
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25l2.391 4.83 5.334.775-3.868 3.765.912 5.323-4.769-2.507-4.769 2.507.912-5.323L2.275 8.855l5.334-.775L12 2.25z"
                  clipRule="evenodd"
                />
              </svg>
            </div>  
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductPageCard;
