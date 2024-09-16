import Image from "next/image";

const brands = [
  {
    name: "Gucci",
    image: "/brands/gucci.png",
  },
  {
    name: "Adidas",
    image: "/brands/adidas.png",
  },
  {
    name: "Zara",
    image: "/brands/zara.png",
  },
  {
    name: "Prada",
    image: "/brands/prada.png",
  },
  {
    name: "Louis Vuitton",
    image: "/brands/louis_vuitton.png",
  },
];

const PopularBrands = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 px-4 sm:px-8 md:px-16 py-10 max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl mb-4">Featured Brands</h1>
        <p className="text-sm sm:text-base max-w-2xl mx-auto">
          Discover top brands you love, all in one place. Explore exclusive
          collections from trusted names.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 overflow-hidden">
        {brands.map((brand) => (
          <div
            key={brand.name}
            className="flex items-center justify-center p-2"
          >
            <Image
              src={brand.image}
              alt={brand.name}
              width={1000}
              height={1000}
              draggable={false}
              className="object-contain h-12 filter grayscale opacity-60"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularBrands;
