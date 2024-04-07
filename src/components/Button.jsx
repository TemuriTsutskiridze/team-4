const Button = ({ bgColor, text, icon, onclick }) => {
  return (
    <button
      onClick={onclick}
      className={`${bgColor} text-white-100 md:text-[14px] text-[13px] font-bold py-[12px] px-[25px] rounded-[10px] flexCenter transition-all`}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
