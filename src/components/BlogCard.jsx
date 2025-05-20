const BlogCard = ({ question, answer }) => {
  return (
    <>
      <div className="p-6 bg-white rounded-2xl shadow-lg space-y-4 border border-gray-200 grad-2">
        <h2 className="text-xl font-semibold text-sky-700 border-b-[2px] border-dotted pb-3 border-gray-400 font-courgette  ">
          {question}
        </h2>
        <p className="text-gray-500 text-base leading-relaxed">{answer}</p>
      </div>
    </>
  );
};

export default BlogCard;
