import Slider from "./Slider";
import { Typewriter } from "react-simple-typewriter";
import { Helmet } from "react-helmet-async";
import Testimonial from "./Testimonial";
import Recipes from "./Recipes";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home || Subscription Box</title>
      </Helmet>
      <div className="mb-10  bg-gray-100 shadow-2xl p-1 rounded-xl max-sm:h-[50vh]">
        <Slider />
      </div>

      <div className="">
        <h2 className="text-2xl font-bold my-9 w-4/5 mx-auto text-center text-gray-400 ">
          <Typewriter
            words={["🔥 These recipes are on fire!"]}
            loop={0}
            cursor
            cursorStyle="...✍️"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1800}
          />
          <span className="hidden sm:block text-xl font-normal mt-1">
            Check out the ones that everyone’s been liking lately – maybe you’ll
            find your next favorite dish.
          </span>
        </h2>
        <Recipes />
      </div>
      <Testimonial />
    </div>
  );
};

export default Home;
