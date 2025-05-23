import { blogs } from "./blog.constant";
import Newsletter from "../../components/Newsletter";
import Blog from "./Blog";
const Blogs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center text-orange-600 mb-10">
        🍽️ FlavorBook Blog
      </h1>

      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
      </div>

      <Newsletter />
    </div>
  );
};

export default Blogs;
