import { useEffect, useRef, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import { Link } from "react-router-dom";
import SuggestionsSvg from "./SuggestionsSvg";

function SortBy({ setSortedFeedbacks, sortFeedbacks, filteredFeedbacks }) {
  const [sortBy, setSortBy] = useState("Most Upvotes");
  const [showDropDown, setShowDropdown] = useState(false);
  const [activeSort, setActiveSort] = useState("Most Upvotes");

  const capitalize = (str) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const handleSortClick = (option) => {
    setSortBy(option); // Update sortBy state
    setActiveSort(capitalize(option));
    setShowDropdown(false);
    const sortedFeedbacks = sortFeedbacks(option); // Sorting based on the selected criteria
    setSortedFeedbacks(sortedFeedbacks); // Setting sorted feedbacks
  };
  // By clicking outside of dropdown, it gets closed
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full px-6 py-[18px] bg-blue-100 flex justify-between items-center md:mt-[40px] md:rounded-lg md:py-[14px] md:px-0 md:pl-6 md:pr-3 lg:my-0">
      <div className="flex items-center">
        <SuggestionsSvg />
        <p className="hidden md:block md:ml-4 md:mr-[38px] md:text-white-50 md:text-[18px] md:font-bold">
          {filteredFeedbacks.length} Suggestions
        </p>
        <p className="text-[13px] text-white-50 font-normal">Sort by :</p>
        <div
          className="flex items-end gap-1 ml-[3px] relative lg:cursor-pointer"
          onClick={() => setShowDropdown(!showDropDown)}
        >
          <p className="text-[13px] text-white-100 font-semibold">
            {activeSort}
          </p>
          {!showDropDown ? (
            <FaAngleDown className="fill-white-100" />
          ) : (
            <FaAngleUp className="fill-white-100" />
          )}

          {showDropDown && (
            <div
              ref={dropdownRef}
              className="absolute top-[23px] left-[-49px] mt-1 bg-white-100 rounded-lg w-[168px] shadow-lg lg:cursor-pointer"
            >
              <div className="px-4 py-3 border-b-gray-400 border-b-[1px] flex items-center justify-between w-full">
                <p
                  className="text-[14px] text-blue-10 w-full"
                  onClick={() => handleSortClick("most Upvotes")}
                >
                  Most Upvotes
                </p>
                {activeSort === "Most Upvotes" && (
                  <IoMdCheckmark className="fill-purple-50" />
                )}
              </div>
              <div className="px-4 py-3 border-b-gray-400 border-b-[1px] flex items-center justify-between w-full">
                <p
                  className="text-[14px] text-blue-10 w-full"
                  onClick={() => handleSortClick("least Upvotes")}
                >
                  Least Upvotes
                </p>
                {activeSort === "Least Upvotes" && (
                  <IoMdCheckmark className="fill-purple-50" />
                )}
              </div>
              <div className="px-4 py-3 border-b-gray-400 border-b-[1px] flex items-center justify-between w-full">
                <p
                  className="text-[14px] text-blue-10 w-full"
                  onClick={() => handleSortClick("most Comments")}
                >
                  Most Comments
                </p>
                {activeSort === "Most Comments" && (
                  <IoMdCheckmark className="fill-purple-50" />
                )}
              </div>
              <div className="px-4 py-3 flex items-center justify-between w-full">
                <p
                  className="text-[14px] text-blue-10 w-full"
                  onClick={() => handleSortClick("least Comments")}
                >
                  Least Comments
                </p>
                {activeSort === "Least Comments" && (
                  <IoMdCheckmark className="fill-purple-50" />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <Link to={"/new-feedback"}>
        <button
          className={`bg-purple-50 text-white-100 text-[14px] font-bold py-[12px] px-4 rounded-[10px] flexCenter lg:hover:bg-purple-100 lg:transition lg:duration-300`}
        >
          + Add Feedback
        </button>
      </Link>
    </div>
  );
}

export default SortBy;
