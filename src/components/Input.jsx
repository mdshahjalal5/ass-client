const InputComp = ({ type, label, className }) => {
  return (
    <input
      type={type}
      placeholder={label}
      className={className ? className : ""}
    />
  );
};

export default InputComp;
