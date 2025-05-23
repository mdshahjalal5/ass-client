import { useParams } from "react-router";
import { Helmet } from "react-helmet-async";
import { blogs } from "./blog.constant";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) return <div className="text-center py-20">Blog not found.</div>;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <Helmet>
        <title>Blog Details || FlavorBook</title>
      </Helmet>
      <h1 className="text-3xl font-bold text-orange-600 mb-4">{blog.title}</h1>

      <div className="flex items-center gap-4 mb-6">
        <img
          src={blog.author.avatar}
          alt={blog.author.name}
          className="w-12 h-12 rounded-full"
        />
        <div>
          <p className="font-medium text-gray-800">{blog.author.name}</p>
          <p className="text-sm text-gray-500">{blog.readTime} read</p>
        </div>
      </div>

      <div className="text-sm text-gray-600 italic mb-6">
        {blog.tags.map((tag, idx) => (
          <span
            key={idx}
            className="inline-block bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs mr-2"
          >
            #{tag}
          </span>
        ))}
      </div>

      <p className="text-lg text-gray-700 mb-8">{blog.preview}</p>

      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-2">💬 Comments</h2>
        {blog.comments.length === 0 ? (
          <p className="text-gray-500">No comments yet.</p>
        ) : (
          blog.comments.map((c, idx) => (
            <div
              key={idx}
              className="bg-gray-100 border-l-4 border-orange-400 p-3 mb-3 rounded"
            >
              <p className="text-sm text-gray-700">
                <span className="font-semibold">{c.user}</span>: {c.text}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BlogDetails;
