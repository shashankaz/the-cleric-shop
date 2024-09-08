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
      </div>
    </Link>
  );
};

export default ProductPageCard;
