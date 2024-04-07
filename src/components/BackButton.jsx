import { IoIosArrowBack } from "react-icons/io";

const BackButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="md:text-[14px] text-[13px] font-bold text-blue-10 hover:underline transition-all"
    >
      <span className="flexCenter">
        <IoIosArrowBack className="mr-[15.7px]" />
        Go Back
      </span>
    </button>
  );
};

export default BackButton;
