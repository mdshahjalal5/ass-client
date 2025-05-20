const testimonials = [
  { name: "Ali", review: "Great value and quality tech gear!", rating: 5 },
  { name: "John", review: "Loved the smart home package.", rating: 4 },
  { name: "Sara", review: "Quick delivery and solid support!", rating: 5 },
  { name: "Ali", review: "Great value and quality tech gear!", rating: 5 },
  { name: "John", review: "Loved the smart home package.", rating: 4 },
  { name: "Sara", review: "Quick delivery and solid support!", rating: 5 },
  { name: "John", review: "Loved the smart home package.", rating: 4 },
  { name: "Sara", review: "Quick delivery and solid support!", rating: 5 },
  { name: "Ali", review: "Great value and quality tech gear!", rating: 5 },

  { name: "John", review: "Loved the smart home package.", rating: 4 },
  { name: "Sara", review: "Quick delivery and solid support!", rating: 5 },
  { name: "Ali", review: "Great value and quality tech gear!", rating: 5 },
];

const Testimonial = () => {
  return (
    <>
      <section className="py-10 bg-gray-50 rounded-xl my-16">
        <h2 className="text-2xl font-bold mb-6 text-center">
          📣 What Our Users Say
        </h2>
        <div className="grid md:grid-cols-3 gap-6 px-4">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-4 shadow rounded-xl">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 bg-blue-200 text-blue-800 rounded-full flex items-center justify-center font-bold">
                  {t.name[0]}
                </div>
                <p className="ml-3 font-medium">{t.name}</p>
              </div>
              <p className="text-sm text-gray-700 italic">"{t.review}"</p>
              <p className="text-yellow-500 mt-2">⭐ {t.rating}/5</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Testimonial;
