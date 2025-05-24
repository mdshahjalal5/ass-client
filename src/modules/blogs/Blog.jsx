import { Link } from "react-router";

const Blog = ({ blog }) => {
  return (
    <div
      key={blog.id}
      className="bg-white rounded-xl shadow hover:shadow-2xl transition-shadow duration-300 border border-orange-100 hover:border-orange-400"
    >
      <div className="p-5 flex flex-col h-full justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-800 hover:text-orange-600 transition-colors duration-200 mb-2">
            <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
          </h2>
          <p className="text-gray-600 text-sm mb-4">{blog.preview}</p>
          <div className="flex items-center gap-3 mb-2">
            <img
              src={blog.author.avatar}
              alt={blog.author.name}
              className="w-8 h-8 rounded-full"
            />
            <div className="text-sm text-gray-500">
              <p className="font-semibold">{blog.author.name}</p>
              <p>{blog.readTime} read</p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <Link
            to={`/blogs/${blog.id}`}
            className="text-orange-600 hover:underline font-medium"
          >
            Read More → ↪️
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
