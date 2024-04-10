import { useEffect, useRef, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import { Link } from "react-router-dom";

function SortBy({ setSortedFeedbacks, sortFeedbacks }) {
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
    <div className="w-full px-6 py-[18px] bg-blue-100 flex justify-between items-center">
      <div className="flex items-center">
        <p className="text-[13px] text-white-50 font-normal">Sort by :</p>
        <div
          className="flex items-end gap-1 ml-[3px] relative"
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
              className="absolute top-[23px] left-[-49px] mt-1 bg-white-100 rounded-lg w-[168px] shadow-lg"
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
          className={`bg-purple-50 text-white-100 text-[14px] font-bold py-[12px] px-4 rounded-[10px] flexCenter`}
        >
          + Add Feedback
        </button>
      </Link>
    </div>
  );
}

export default SortBy;
