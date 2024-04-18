import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Roadmap() {
  document.body.style.overflowY = "auto";
  return (
    <div className="w-screen">
      <div className="w-full px-6 py-[26px] flex items-center justify-between bg-blue-100">
        <div>
          <Link to={"/feedbacks"}>
            <button className="text-[13px] font-semibold text-white-100 hover:underline transition-all">
              <span className="flexCenter">
                <IoIosArrowBack className="mr-[15px] ml-[-3px]" />
                Go Back
              </span>
            </button>
          </Link>
          <p className="font-bold text-[18px] text-white-100">Roadmap</p>
        </div>
        <Link to={"/new-feedback"}>
          <button
            className={`bg-purple-50 text-white-100 text-[14px] font-bold py-[12px] px-4 rounded-[10px] flexCenter lg:hover:bg-purple-100 lg:transition lg:duration-300`}
          >
            + Add Feedback
          </button>
        </Link>
      </div>
    </div>
  );
}
