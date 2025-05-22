import { Typewriter } from "react-simple-typewriter";
import { faqs } from "../constant";

const FAQ = () => {
  return (
    <section className="min-h-screen  py-10 px-3 my-10 rounded-xl shadow">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-orange-400 mb-12 font-kaushan">
          <Typewriter
            words={["Frequently Asked Questions"]}
            loop={0}
            cursor
            cursorStyle="...✍️"
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={1800}
          />
        </h1>

        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md hover:shadow-xl transition duration-300 rounded-xl p-6 border-l-4 border-orange-400 hover:border-orange-600 group cursor-pointer"
            >
              <h3 className="text-xl font-semibold text-slate-500 mb-2 group-hover:text-orange-900 transition-all duration-300">
                ❓ {faq.question}
              </h3>
              <p className="text-gray-700 group-hover:text-gray-900 leading-relaxed text-[16px]">
                💡 {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
