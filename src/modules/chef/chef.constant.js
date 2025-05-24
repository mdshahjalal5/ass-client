const chefs = [
  {
    id: 1,
    name: "Giovanni Ricci",
    avatar: "https://i.pravatar.cc/150?img=7",
    bio: "Italian chef specializing in pasta and rustic dishes. 20+ years of experience.",
    specialty: "Italian Cuisine",
    rating: 4.9,
    pricePerHour: 80,
    location: "Rome, Italy",
    experience: "20+ years in authentic Italian kitchens.",
    cuisineTypes: ["Pasta", "Pizza", "Rustic Italian"],
    services: ["Private Dining", "Cooking Class", "Event Catering"],
    availableDates: ["2025-06-01", "2025-06-03", "2025-06-10"],
    reviews: [
      { user: "Maria", rating: 5, comment: "Authentic taste, just like Rome!" },
      {
        user: "Leo",
        rating: 4.5,
        comment: "Great experience and flavorful dishes.",
      },
    ],
  },
  {
    id: 2,
    name: "Nina Alvarez",
    avatar: "https://i.pravatar.cc/150?img=8",
    bio: "Nutritionist and private chef focused on healthy, budget-friendly meals.",
    specialty: "Healthy Cuisine",
    rating: 4.7,
    pricePerHour: 60,
    location: "Barcelona, Spain",
    experience: "12 years in healthy and nutritional meal prep.",
    cuisineTypes: ["Vegan", "Gluten-Free", "Low Carb"],
    services: ["Meal Planning", "Diet Consultations", "Weekly Meal Prep"],
    availableDates: ["2025-06-05", "2025-06-08", "2025-06-15"],
    reviews: [
      { user: "Tina", rating: 5, comment: "Perfect for my dietary needs!" },
      {
        user: "Carlos",
        rating: 4.5,
        comment: "Super helpful and delicious meals.",
      },
    ],
  },
  {
    id: 3,
    name: "Md. Shahjalal",
    avatar: "https://i.pravatar.cc/150?img=6",
    bio: "Founder of FlavorBook and expert in Bangladeshi comfort food.",
    specialty: "Bangladeshi Cuisine",
    rating: 5.0,
    pricePerHour: 50,
    location: "Dhaka, Bangladesh",
    experience: "15 years sharing authentic Bangladeshi recipes.",
    cuisineTypes: ["Bhuna Khichuri", "Begun Bharta", "Beef Curry"],
    services: ["Traditional Meals", "Cooking Tutorials", "Festive Catering"],
    availableDates: ["2025-06-02", "2025-06-06", "2025-06-09"],
    reviews: [
      {
        user: "Salma",
        rating: 5,
        comment: "Tastes just like my grandma's cooking!",
      },
      {
        user: "Arif",
        rating: 5,
        comment: "Highly recommend for traditional flavors.",
      },
    ],
  },
];

export { chefs };
