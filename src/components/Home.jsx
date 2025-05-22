import Slider from "./Slider";
import { Typewriter } from "react-simple-typewriter";
import { Helmet } from "react-helmet-async";
import Recipes from "./Recipes";
import About from "../pages/About";
import FAQ from "../pages/Faq";
import FeedbackPage from "../pages/FeedbackPage";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home || FlavorBook</title>
      </Helmet>
      <div className="mb-20  bg-gray-100 shadow-2xl -1 rounded-xl max-sm:h-[50vh] border-1 border-b-0 border-purple-200">
        <Slider />
      </div>

      <div className="bg-gray-100 my-10 py-3 rounded-xl">
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
      <About />
      <FAQ />
      <FeedbackPage />
    </div>
  );
};

export default Home;
