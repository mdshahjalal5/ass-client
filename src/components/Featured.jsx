const Featured = () => {
  const featuredServices = [
    {
      id: 1,
      name: "Smart Living Box",
      thumbnail: "https://example.com/images/smart-living-box.jpg",
      description:
        "Transform your home with smart devices and automation tools.",
      ratings: 4.9,
      techCategory: "Smart Home",
    },
    {
      id: 2,
      name: "AI Essentials Pack",
      thumbnail: "https://example.com/images/ai-essentials.jpg",
      description:
        "Everything you need to explore artificial intelligence tools.",
      ratings: 4.7,
      techCategory: "Artificial Intelligence",
    },
    {
      id: 3,
      name: "Gaming Gear Box",
      thumbnail: "https://example.com/images/gaming-gear.jpg",
      description:
        "Latest gaming gadgets and accessories delivered to your door.",
      ratings: 4.8,
      techCategory: "Gaming",
    },
    {
      id: 4,
      name: "Developer Toolkit",
      thumbnail: "https://example.com/images/dev-toolkit.jpg",
      description: "Essential tools, licenses, and resources for developers.",
      ratings: 4.6,
      techCategory: "Software Development",
    },
    {
      id: 5,
      name: "Cybersecurity Starter Pack",
      thumbnail: "https://example.com/images/cybersecurity-pack.jpg",
      description: "Learn and protect with tools for staying safe online.",
      ratings: 4.5,
      techCategory: "Cybersecurity",
    },
    {
      id: 6,
      name: "DIY Tech Builder Kit",
      thumbnail: "https://example.com/images/diy-tech-kit.jpg",
      description:
        "Create gadgets and projects with this hands-on electronics kit.",
      ratings: 4.7,
      techCategory: "Electronics & DIY",
    },
  ];

  return (
    <section className="py-10 bg-white">
      <h2 className="text-2xl font-bold mb-6 text-center">
        🔥 Featured Tech Boxes
      </h2>
      <div className="grid md:grid-cols-3 gap-6 px-4">
        {featuredServices.map((service) => (
          <div key={service.id} className="bg-gray-100 p-4 rounded shadow">
            <img
              src={service.thumbnail}
              alt={service.name}
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="text-lg font-bold mt-3">{service.name}</h3>
            <p className="text-sm text-gray-600 mt-1">
              {service.description.slice(0, 70)}...
            </p>
            <p className="text-yellow-500 mt-1">⭐ {service.ratings}/5</p>
            <button className="mt-2 text-blue-600 hover:underline">
              Explore Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Featured;
