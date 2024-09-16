import ProductCard from "@/components/ProductCard";

const RelatedProducts = ({ products }) => {
  return (
    <div className="py-10">
      <div>
        <h1 className="text-xl md:text-2xl font-medium mb-6">
          Related Products
        </h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 h-72 md:h-80 overflow-hidden">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
