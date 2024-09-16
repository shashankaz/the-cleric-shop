import { Truck, RefreshCcw } from "lucide-react";

const ProductDetails = ({
  product,
  selectedColor,
  setSelectedColor,
  selectedSize,
  setSelectedSize,
  handleAddToCart,
  handleAddToWishlist,
}) => {
  return (
    <div className="min-h-[452px] w-full md:w-1/2 flex flex-col gap-4 px-4 md:px-6">
      <h1 className="text-2xl md:text-3xl font-bold">{product.title}</h1>
      <div className="flex items-center gap-2">
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
        <p className="text-xs sm:text-sm md:text-base text-gray-500">
          ({product.reviews.length} reviews)
        </p>
      </div>
      <h4 className="text-xl md:text-2xl font-bold">${product.price}</h4>
      <p className="text-sm md:text-base text-gray-700">
        {product.shortDescription}
      </p>
      <div>
        <p className="font-semibold text-sm md:text-base">Color</p>
        <div className="flex gap-2 mt-1">
          {product.colors.map((color, index) => (
            <button
              key={index}
              onClick={() => setSelectedColor(color)}
              className={`h-6 w-6 rounded-full border ${color
                .toLowerCase()
                .split(" ")
                .join()} ${selectedColor === color ? "border-black" : ""}`}
            ></button>
          ))}
        </div>
      </div>
      <div>
        <p className="font-semibold text-sm md:text-base">Size</p>
        <div className="flex gap-2 mt-1">
          {product.sizes.map((size, index) => (
            <button
              key={index}
              onClick={() => setSelectedSize(size)}
              className={`py-2 px-4 border border-black rounded text-sm md:text-base hover:bg-gray-100 ${
                selectedSize === size ? "bg-gray-200" : ""
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
      <div className="w-full flex gap-3">
        <button
          onClick={handleAddToWishlist}
          className="border rounded px-4 py-2 text-center bg-black text-white border-black hover:bg-gray-800 text-sm md:text-base w-1/2"
        >
          Add to Wishlist
        </button>
        <button
          onClick={handleAddToCart}
          className="border rounded px-4 py-2 text-center bg-black text-white border-black hover:bg-gray-800 text-sm md:text-base w-1/2"
        >
          Add to Cart
        </button>
      </div>
      <div className="flex justify-between text-gray-700 text-xs sm:text-sm md:text-base">
        {product.shipping.freeShipping && (
          <p className="flex items-center gap-2">
            <Truck size={16} />
            Free shipping
          </p>
        )}
        {product.shipping.returnPolicy && (
          <p className="flex items-center gap-2">
            <RefreshCcw size={16} />
            30-day return policy
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
