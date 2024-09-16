import Image from "next/image";
import Link from "next/link";

const WishlistItem = ({ item, onRemove }) => {
  return (
    <Link href={`product/${item.product._id}`}>
      <div className="border rounded-lg p-4 flex flex-col items-center justify-between shadow-md">
        <div className="h-40 w-full rounded-md overflow-hidden mb-4">
          <Image
            src={
              item.product.imageUrl ||
              "https://images.pexels.com/photos/3305923/pexels-photo-3305923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            height={300}
            width={400}
            alt={item.product.name}
            className="h-full w-full object-cover"
          />
        </div>
        <h2 className="text-lg font-semibold truncate w-full text-center">
          {item.product.name}
        </h2>
        <p className="text-gray-600">${item.product.price.toFixed(2)}</p>
        <button
          onClick={(e) => {
            e.preventDefault();
            onRemove(item.product._id);
          }}
          className="mt-4 text-red-500 hover:text-red-700"
        >
          Remove from Wishlist
        </button>
      </div>
    </Link>
  );
};

export default WishlistItem;
