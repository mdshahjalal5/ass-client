const Button = ({ label, className }) => {
  return (
    <button
      className={`border px-5 py-3 rounded-[9999px] bg-blue-600  font-semibold hover:bg-blue-700  focus:ring focus:ring-blue-500 active:bg-blue-800 outline-none hover:scale-95 active:scale-100 ${className ? className : ""}`}
    >
      {label}
    </button>
  );
};

export default Button;
