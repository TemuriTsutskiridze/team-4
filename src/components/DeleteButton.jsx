const DeleteButton = ({ bgColor, text, icon, onclick }) => {
  return (
    <button
      onClick={onclick}
      className={`${bgColor} text-white-100 text-[14px] font-bold py-[12px] px-[25px] rounded-[10px] flexCenter w-full  md:w-[93px] lg:hover:bg-[#e98888] lg:transition lg:duration-200`}
    >
      {icon}
      {text}
    </button>
  );
};

export default DeleteButton;
