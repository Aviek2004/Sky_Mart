import Hero from "../components/Hero";
import Category from "../components/Category";
import ProductCard from "../components/ProductCard";
import Ratings from "../components/Ratings";
import Footer from "../components/Footer";

const Home = ({ products }) => {

  const user = JSON.parse(localStorage.getItem("user"));

  const userName =
    user?.name ||
    user?.displayName ||
    user?.email?.split("@")[0] ||
    "User";

  return (
    <div>

      <div className="p-5">
        <Hero userName={userName} />
      </div>

      <div>
        <ProductCard />
      </div>

      <div className="p-5">
        <Category products={products} />
      </div>

      <div className="p-4">
        <Ratings />
      </div>

      <Footer />

    </div>
  );
};

export default Home;