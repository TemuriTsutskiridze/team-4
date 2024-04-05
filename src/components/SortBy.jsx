import { FaAngleDown } from "react-icons/fa";

function SortBy() {
  return (
    <div className="w-full px-6 py-[18px] bg-blue-100 flex justify-between items-center">
      <div className="flex items-center">
        <p className="text-[13px] text-white-50 font-normal">Sort by :</p>
        <div className="flex items-end gap-1 ml-[3px]">
          <p className="text-[13px] text-white-100 font-semibold">
            Most Upvotes
          </p>
          <FaAngleDown className="fill-white-100" />
        </div>
      </div>
      <button
        className={`bg-purple-50 text-white-100 text-[14px] font-bold py-[12px] px-4 rounded-[10px] flexCenter`}
      >
        + Add Feedback
      </button>
    </div>
  );
}

export default SortBy;
