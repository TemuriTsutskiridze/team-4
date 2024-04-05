const Button = ({ bgColor, text, icon, onclick }) => {
  return (
    <button
      onClick={onclick}
      className={`${bgColor} text-white-100 text-[14px] font-bold py-[12px] px-[25px] rounded-[10px] flexCenter`}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
