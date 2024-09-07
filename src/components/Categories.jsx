import CategoryCard from "./CategoryCard";

const categories = [
  {
    imageUrl:
      "https://images.pexels.com/photos/27972377/pexels-photo-27972377/free-photo-of-a-man-in-a-suit-sitting-in-a-chair-with-a-glass-of-wine.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    altText: "Mens",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/26100578/pexels-photo-26100578/free-photo-of-bold-and-chic-modern-elegance-with-sleek-sunglasses.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    altText: "Womens",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/821652/pexels-photo-821652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    altText: "Electronics",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/27108726/pexels-photo-27108726/free-photo-of-a-basketball-hoop-with-a-net-and-a-basketball.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    altText: "Sports",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    altText: "Courses",
  },
];

const Categories = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 px-4 sm:px-8 md:px-16 py-12 md:py-20 max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl mb-4">Explore Categories</h1>
        <p className="text-sm sm:text-base max-w-2xl mx-auto">
          Explore our categories for everything you need—from fashion trends to
          essential electronics. Find your favorites now!
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-6">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            imageUrl={category.imageUrl}
            altText={category.altText}
            src={category.altText}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
