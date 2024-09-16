import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import TrendingProducts from "@/components/TrendingProducts";
import LatestCollection from "@/components/LatestCollection";
import PopularBrands from "@/components/PopularBrands";
import Subscribe from "@/components/Subscribe";

const Home = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <TrendingProducts />
      <LatestCollection />
      <PopularBrands />
      <Subscribe />
    </div>
  );
};

export default Home;
