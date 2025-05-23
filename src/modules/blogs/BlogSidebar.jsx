import { NavLink } from "react-router-dom";

const BlogSidebar = () => {
  const navItems = [
    { path: "/", label: "🏠 Home" },
    { path: "/blogs", label: "📝 All Blogs" },
    { path: "create", label: "➕ Create Blog" },
    { path: "/my-recipes", label: "🍳 My Recipes" },
    { path: "/add-recipe", label: "🧾 Add Recipe" },
  ];

  return (
    <aside className="w-64 min-h-[80vh] bg-white dark:bg-gray-800 border-r p-4 rounded-md">
      <h2 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">
        Navigation
      </h2>
      <nav className="flex flex-col space-y-2">
        {navItems.map(({ path, label }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `px-4 py-2 rounded-md text-sm font-medium ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default BlogSidebar;
