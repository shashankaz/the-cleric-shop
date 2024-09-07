import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import LatestCollection from "@/components/LatestCollection";
import Subscribe from "@/components/Subscribe";

const Home = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <LatestCollection />
      <Subscribe />
    </div>
  );
};

export default Home;
