import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <Link href={`/product/${product._id}`}>
      <div className="flex flex-col h-72">
        <div className="h-4/5 w-52 overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/2065954/pexels-photo-2065954.jpeg"
            alt="Product"
            width={100}
            height={100}
            title={product.title}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h1 className="text-sm mt-3 truncate">{product.title}</h1>
          <p className="text-sm mt-1 font-semibold">${product.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
