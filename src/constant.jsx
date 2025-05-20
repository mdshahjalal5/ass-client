const links = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "My Profile",
    path: "/my-profile",
  },
  {
    label: "FAQ",
    path: "/blogs",
  },
];

const blogs = [
  {
    question: "What is a subscription-based model and how does it work?",
    answer:
      "A subscription-based model charges users a recurring fee—monthly, quarterly, or yearly—to access a product or service. It's commonly used in SaaS platforms, streaming services, and content delivery businesses to ensure consistent revenue and customer retention.",
  },

  {
    question: "What are the key benefits of subscription services for users?",
    answer:
      "Users benefit from convenience, consistent access to updates or content, lower upfront costs, and enhanced support. Subscriptions also allow users to opt out anytime, giving them control without long-term commitment.",
  },
  {
    question: "How can you manage user subscriptions in a web app?",
    answer:
      "You can manage subscriptions using payment gateways like Stripe, PayPal, or Razorpay, which offer APIs for billing cycles, plan upgrades, and cancellation. On the frontend, React state and context can track user plans and access.",
  },
  {
    question:
      "What metrics are important to monitor in a subscription-based app?",
    answer:
      "Key metrics include Monthly Recurring Revenue (MRR), churn rate, customer lifetime value (CLTV), customer acquisition cost (CAC), and active subscriptions. Tracking these helps optimize pricing, retention, and growth strategies.",
  },
  {
    question: "How do you implement protected routes in a subscription app?",
    answer:
      "Protected routes are implemented by checking the user's authentication and subscription status before allowing access. If a user is not subscribed or logged in, they're redirected to the login or subscription page. This ensures only paying users access premium features.",
  },
];

const boxes = [
  {
    id: 1,
    name: "Smart Home Box",
    thumbnail: "https://example.com/images/smart-home-box-thumbnail.jpg",
    banner: "https://example.com/images/smart-home-box-banner.jpg",
    frequency: "Yearly",
    price: 199.99,
    description:
      "Transform your home into a smart home with curated smart devices, home automation products, and IoT gadgets.",
    tech_category: "Smart Home",
    features: [
      "Smart Home Devices",
      "Home Automation Tools",
      "Cutting-edge IoT Gadgets",
    ],
    subscription_benefits: [
      "Discount on Future Smart Home Purchases",
      "Exclusive Smart Home Tutorials",
      "Early Access to Product Releases",
    ],
    ratings: 4.8,
    number_of_reviews: 315,
  },
  {
    id: 2,
    name: "AI Developer Kit",
    thumbnail: "https://example.com/images/ai-developer-kit-thumbnail.jpg",
    banner: "https://example.com/images/ai-developer-kit-banner.jpg",
    frequency: "Monthly",
    price: 49.99,
    description:
      "Jumpstart your AI journey with components, tutorials, and tools for machine learning projects.",
    tech_category: "Artificial Intelligence",
    features: [
      "Neural Network Demos",
      "ML Hardware Boards",
      "Python-based Projects",
    ],
    subscription_benefits: [
      "Monthly AI Challenges",
      "Access to GitHub Repos",
      "Exclusive Webinars with Experts",
    ],
    ratings: 4.6,
    number_of_reviews: 198,
  },
  {
    id: 3,
    name: "Gaming Gear Crate",
    thumbnail: "https://example.com/images/gaming-gear-thumbnail.jpg",
    banner: "https://example.com/images/gaming-gear-banner.jpg",
    frequency: "Quarterly",
    price: 89.99,
    description:
      "Enhance your gaming experience with high-quality accessories and themed collectibles.",
    tech_category: "Gaming",
    features: ["Ergonomic Controllers", "Gaming Headsets", "RGB Accessories"],
    subscription_benefits: [
      "Beta Access to New Games",
      "Game-Themed Merch",
      "Community Gaming Events",
    ],
    ratings: 4.7,
    number_of_reviews: 254,
  },
  {
    id: 4,
    name: "Cybersecurity Toolkit",
    thumbnail: "https://example.com/images/cybersecurity-toolkit-thumbnail.jpg",
    banner: "https://example.com/images/cybersecurity-toolkit-banner.jpg",
    frequency: "Monthly",
    price: 59.99,
    description:
      "Learn and apply cybersecurity techniques with this monthly hands-on toolkit.",
    tech_category: "Cybersecurity",
    features: [
      "Pen Testing Tools",
      "Ethical Hacking Labs",
      "Security Best Practices",
    ],
    subscription_benefits: [
      "Online Labs Access",
      "Certificate of Completion",
      "Community Challenges",
    ],
    ratings: 4.5,
    number_of_reviews: 142,
  },
  {
    id: 5,
    name: "Drone Builder Box",
    thumbnail: "https://example.com/images/drone-builder-thumbnail.jpg",
    banner: "https://example.com/images/drone-builder-banner.jpg",
    frequency: "Bi-Monthly",
    price: 129.99,
    description:
      "Get all you need to build, fly, and learn drone technology from the ground up.",
    tech_category: "Drones",
    features: [
      "DIY Drone Kits",
      "Flight Controllers",
      "Drone Programming Tutorials",
    ],
    subscription_benefits: [
      "FPV Flight Training",
      "Exclusive Repair Guides",
      "Drone Racing Invites",
    ],
    ratings: 4.9,
    number_of_reviews: 391,
  },
  {
    id: 6,
    name: "Robotics Starter Pack",
    thumbnail: "https://example.com/images/robotics-starter-thumbnail.jpg",
    banner: "https://example.com/images/robotics-starter-banner.jpg",
    frequency: "Monthly",
    price: 74.99,
    description:
      "Learn robotics step-by-step with modular kits and educational content.",
    tech_category: "Robotics",
    features: ["Sensor Modules", "Motor Controllers", "Hands-on Robot Builds"],
    subscription_benefits: [
      "Video Tutorials",
      "Live Q&A Sessions",
      "STEM Learning Tracks",
    ],
    ratings: 4.4,
    number_of_reviews: 167,
  },
  {
    id: 7,
    name: "AR/VR Explorer Pack",
    thumbnail: "https://example.com/images/ar-vr-thumbnail.jpg",
    banner: "https://example.com/images/ar-vr-banner.jpg",
    frequency: "Quarterly",
    price: 109.99,
    description:
      "Dive into immersive technology with tools and experiences in AR and VR.",
    tech_category: "AR/VR",
    features: [
      "VR Headset Accessories",
      "AR Dev Kits",
      "Interactive Tutorials",
    ],
    subscription_benefits: [
      "Virtual Developer Meetups",
      "Pre-release Game Demos",
      "App Store Credit",
    ],
    ratings: 4.3,
    number_of_reviews: 121,
  },
  {
    id: 8,
    name: "Wearable Tech Kit",
    thumbnail: "https://example.com/images/wearable-tech-thumbnail.jpg",
    banner: "https://example.com/images/wearable-tech-banner.jpg",
    frequency: "Yearly",
    price: 149.99,
    description:
      "Experiment with smart wearable projects for health, fitness, and style.",
    tech_category: "Wearable Tech",
    features: [
      "Smartwatch Components",
      "Flexible Sensors",
      "Health Tracking Modules",
    ],
    subscription_benefits: [
      "Design Blueprints",
      "Fabrication Techniques",
      "Fitness Tech Insights",
    ],
    ratings: 4.7,
    number_of_reviews: 209,
  },
  {
    id: 9,
    name: "3D Printing Club Box",
    thumbnail: "https://example.com/images/3d-printing-thumbnail.jpg",
    banner: "https://example.com/images/3d-printing-banner.jpg",
    frequency: "Monthly",
    price: 69.99,
    description:
      "Advance your 3D printing skills with materials, models, and expert advice.",
    tech_category: "3D Printing",
    features: [
      "High-Quality Filaments",
      "CAD Templates",
      "Printer Maintenance Kits",
    ],
    subscription_benefits: [
      "Exclusive Model Library",
      "Print Competitions",
      "Pro Tips Newsletter",
    ],
    ratings: 4.6,
    number_of_reviews: 189,
  },
  {
    id: 10,
    name: "Cloud DevOps Crate",
    thumbnail: "https://example.com/images/cloud-devops-thumbnail.jpg",
    banner: "https://example.com/images/cloud-devops-banner.jpg",
    frequency: "Monthly",
    price: 59.99,
    description:
      "Master cloud and DevOps practices through curated learning paths and tools.",
    tech_category: "Cloud Computing",
    features: [
      "CI/CD Pipelines",
      "Containerization Labs",
      "Cloud Platform Guides",
    ],
    subscription_benefits: [
      "Practice Environments",
      "Industry Use Cases",
      "Mentor Support",
    ],
    ratings: 4.5,
    number_of_reviews: 146,
  },
];
export { links, blogs, boxes };
