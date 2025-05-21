const Button = ({ label, className }) => {
  return (
    <button
      className={`border px-3 py-1 rounded-[9999px] bg-purple-500  font-semibold hover:bg-purple-700  focus:ring focus:ring-purple-400 active:bg-purple-800 outline-none hover:scale-95 active:scale-100 ${className ? className : ""}`}
    >
      {label}
    </button>
  );
};

export default Button;
