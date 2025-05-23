const blogs = [
  {
    id: 1,
    title: "The Secret Behind Perfect Dumplings 🥟",
    tags: ["Chinese", "Cooking Tips", "Dumplings"],
    readTime: "5 min",
    author: {
      name: "Lily Zhang",
      bio: "Chef and food writer focused on Asian cuisines and home-cooked meals.",
      avatar: "https://i.pravatar.cc/150?img=5",
    },
    preview:
      "Discover the ancient techniques behind the perfect dumpling fold and filling combinations. From choosing the right wrapper to creating a balanced filling with pork, shrimp, and aromatic spices, this guide walks you through the essentials. Learn how to pleat like a pro and steam your dumplings to juicy perfection with tips passed down from generations.",
    comments: [
      { user: "Anna", text: "Tried this and my dumplings were amazing!" },
      { user: "Raj", text: "The folding technique was tricky but fun!" },
    ],
  },
  {
    id: 2,
    title: "5 Spices Every Indian Kitchen Needs 🌶️",
    tags: ["Indian", "Spices", "Pantry Essentials"],
    readTime: "4 min",
    author: {
      name: "Rajiv Menon",
      bio: "Spice merchant and Indian cuisine enthusiast.",
      avatar: "https://i.pravatar.cc/150?img=11",
    },
    preview:
      "If you're starting to cook Indian food, here are the five essential spices you must have: turmeric, cumin, coriander, garam masala, and mustard seeds. Learn how each spice is used, its flavor profile, and how to store them properly to keep your dishes aromatic and flavorful.",
    comments: [{ user: "Shreya", text: "Perfect guide for beginners!" }],
  },
  {
    id: 3,
    title: "Bangladeshi Comfort Food: The Magic of Begun Bharta 🍆",
    tags: ["Bangladeshi", "Comfort Food", "Vegetarian"],
    readTime: "3 min",
    author: {
      name: "Md. Shahjalal",
      bio: "Founder of FlavorBook, passionate about Bangladeshi cuisine.",
      avatar: "https://i.pravatar.cc/150?img=6",
    },
    preview:
      "Begun Bharta, a classic mashed eggplant dish, brings warmth and comfort to every Bengali home. Smoked or grilled eggplant is mashed with mustard oil, green chilies, garlic, and salt, creating a bold, rustic flavor. It’s often paired with warm rice for a simple yet fulfilling meal.",
    comments: [{ user: "Salma", text: "Tastes just like my grandmother’s!" }],
  },
  {
    id: 4,
    title: "Mastering Italian Pasta From Scratch 🍝",
    tags: ["Italian", "Pasta", "Homemade"],
    readTime: "6 min",
    author: {
      name: "Giovanni Ricci",
      bio: "Italian chef teaching pasta-making for 20+ years.",
      avatar: "https://i.pravatar.cc/150?img=7",
    },
    preview:
      "Making pasta from scratch is an art. Learn how to create silky dough using just flour and eggs, then shape it into fettuccine, ravioli, or tagliatelle. This guide includes kneading tips, resting times, and sauce pairing ideas to elevate your homemade pasta game.",
    comments: [{ user: "Emily", text: "The tagliatelle was divine!" }],
  },
  {
    id: 5,
    title: "Healthy Eating on a Budget 💰🥗",
    tags: ["Healthy", "Budget", "Meal Planning"],
    readTime: "7 min",
    author: {
      name: "Nina Alvarez",
      bio: "Nutritionist dedicated to healthy, affordable meals.",
      avatar: "https://i.pravatar.cc/150?img=8",
    },
    preview:
      "Eating healthy doesn't mean breaking the bank. Learn how to shop smart, cook in batches, and store food effectively. From lentil soups to stir-fried vegetables, this post offers practical, budget-friendly meals that are as nutritious as they are delicious.",
    comments: [],
  },
  {
    id: 6,
    title: "Exploring Mexican Street Food 🌮",
    tags: ["Mexican", "Street Food", "Culture"],
    readTime: "6 min",
    author: {
      name: "Carlos Ramirez",
      bio: "Food traveler capturing the soul of street food.",
      avatar: "https://i.pravatar.cc/150?img=9",
    },
    preview:
      "Mexican street food is a culinary adventure. Dive into the vibrant world of tacos al pastor, elotes (grilled corn), tamales, and aguas frescas. Learn where to find the best vendors and how each dish reflects the diverse regions of Mexico.",
    comments: [{ user: "Diego", text: "Taco trucks are the best!" }],
  },
  {
    id: 7,
    title: "How to Bake the Perfect Chocolate Cake 🎂",
    tags: ["Baking", "Dessert", "Chocolate"],
    readTime: "5 min",
    author: {
      name: "Martha Bloom",
      bio: "Pastry chef and chocolate lover.",
      avatar: "https://i.pravatar.cc/150?img=10",
    },
    preview:
      "This chocolate cake is moist, rich, and easy to bake. With pantry staples like cocoa powder, flour, sugar, and eggs, you’ll whip up a dessert perfect for any occasion. Tips on frosting, layering, and even vegan options included.",
    comments: [],
  },
  {
    id: 8,
    title: "Vegan Recipes That Don’t Suck 🌱",
    tags: ["Vegan", "Plant-Based", "Easy Recipes"],
    readTime: "6 min",
    author: {
      name: "Lena Wu",
      bio: "Vegan food blogger transforming classic dishes.",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    preview:
      "Think vegan food is boring? Think again. These creative, flavorful recipes—like chickpea curry, lentil tacos, and cashew-based sauces—will change your mind. Perfect for new vegans or anyone looking to add more plant-based meals to their week.",
    comments: [],
  },
  {
    id: 9,
    title: "Cooking with Kids: Fun and Simple Recipes 👩‍🍳🧒",
    tags: ["Family", "Kids", "Fun Recipes"],
    readTime: "4 min",
    author: {
      name: "Tom Harris",
      bio: "Dad of three, makes cooking a family adventure.",
      avatar: "https://i.pravatar.cc/150?img=13",
    },
    preview:
      "Get your kids involved in the kitchen with these safe and fun recipes like mini pizzas, fruit kabobs, and no-bake cookies. Cooking builds confidence and creates lasting memories—plus, it’s a great way to teach basic skills.",
    comments: [],
  },
  {
    id: 10,
    title: "Kitchen Tools That Will Change Your Cooking 🔪",
    tags: ["Tools", "Tips", "Kitchen"],
    readTime: "5 min",
    author: {
      name: "Sara Noor",
      bio: "Gadget geek and home cook exploring tools that make a difference.",
      avatar: "https://i.pravatar.cc/150?img=14",
    },
    preview:
      "From microplanes to mandolins, these underrated kitchen tools can transform your prep work. Learn how investing in the right tools saves time, improves precision, and makes cooking more enjoyable.",
    comments: [],
  },
];

export { blogs };
