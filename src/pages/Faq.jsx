const faqs = [
  {
    question: "What is FlavorBook?",
    answer:
      "FlavorBook is a recipe-sharing platform where users can add, view, like, and save their favorite recipes from around the world.",
  },
  {
    question: "Do I need to create an account?",
    answer:
      "Yes, to add, update, or like recipes, you'll need to register and log in. But anyone can browse publicly shared recipes.",
  },
  {
    question: "Can I edit or delete my recipes?",
    answer:
      "Absolutely! Go to 'My Recipes' to edit or delete any recipes you’ve added.",
  },
  {
    question: "What kind of recipes can I upload?",
    answer:
      "Anything! From traditional family dishes to your latest kitchen experiments — if it’s delicious, it belongs here.",
  },
  {
    question: "How are Top Recipes selected?",
    answer:
      "Top Recipes are automatically selected based on the number of likes they receive from users.",
  },
];

const FAQ = () => {
  return (
    <section className="min-h-screen bg-gradient-to-bl from-orange-50 to-yellow-100 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-orange-400 mb-12">
          Frequently Asked Questions
        </h1>

        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-lg p-5 border-l-4 border-orange-400"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
