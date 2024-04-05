import { IoIosArrowBack } from "react-icons/io";

const BackButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="text-[14px] font-bold text-blue-10 ">
      <span className="flexCenter">
        <IoIosArrowBack className="mr-[15.7px]" />
        Go Back
      </span>
    </button>
  );
};

export default BackButton;
