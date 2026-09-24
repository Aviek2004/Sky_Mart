import Hero from "../components/Hero";
// import Features from "../components/Features";
import Category from "../components/Category";
import ProductCard from "../components/ProductCard";
import Ratings from "../components/Ratings";
import Footer from "../components/Footer";
import userIcon4 from "../assets/img/image (4).png";

const Home = ({ products }) => {
  return (
    <div>
      <div className="p-5">
        <Hero />
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