import Slider from "./Slider";
import SubscriptionServices from "./SubscriptionServices";
import { Helmet } from "react-helmet-async";
import Testimonial from "./Testimonial";
import Featured from "./Featured";
import BlogsPage from "./Blog";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home || Subscription Box</title>
      </Helmet>
      <div className="mb-10  bg-gray-100 shadow-2xl p-1 rounded-xl max-sm:h-[50vh]">
        <Slider />
      </div>
      <SubscriptionServices />

      <Testimonial />

      <div className="w-full bg-base-200 mt-16 rounded-xl">
        <BlogsPage />
      </div>
    </div>
  );
};

export default Home;
