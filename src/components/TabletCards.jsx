import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

function TabletCards({
  upvotes,
  category,
  description,
  title,
  id,
  comments,
  feedbackStatus,
  bg,
}) {
  const [upvoted, setUpvoted] = useState({});

  // Function to handle upvote clicks
  const handleUpvoteClick = (feedbackId) => {
    // Check if the feedback has been upvoted
    if (upvoted.hasOwnProperty(feedbackId)) {
      // Toggle the upvote status for the feedback
      setUpvoted((prevUpvoted) => ({
        ...prevUpvoted,
        [feedbackId]: !prevUpvoted[feedbackId],
      }));
    } else {
      // If the feedback has not been upvoted yet, set the upvote status to true
      setUpvoted((prevUpvoted) => ({
        ...prevUpvoted,
        [feedbackId]: true,
      }));
    }
  };
  return (
    <div
      className="bg-white-100 w-[223px] lg:w-[350px] rounded-lg px-5 py-6 flex flex-col items-start border-t-[6px] "
      style={{ borderTopColor: `${bg}` }}
    >
      <div className="md:flex md:flex-start">
        <div className="flex flex-col">
          <div className="flex items-center gap-4 mb-[14px]">
            <div
              className="w-[8px] h-[8px] rounded-full"
              style={{ background: `${bg}` }}
            ></div>
            <p className="text-[13px] text-blue-10 capitalize lg:text-[16px]">
              {feedbackStatus}
            </p>
          </div>
          <p className="text-blue-50 text-[13px] font-bold lg:text-[18px] hover:text-blue-200 transition duration-200">
            {title}
          </p>
          <p className="text-blue-10 text-[13px] font-normal mt-2 w-full lg:text-[16px] lg:w-full">
            {description}
          </p>
          <button className="mt-2 rounded-lg bg-white-50 text-blue-200 text-[13px] font-bold capitalize py-[5px] px-4 max-w-[111px]">
            {category}
          </button>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between mt-4 w-full">
        {upvotes ? (
          <button
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation(); // Stop event propagation
              handleUpvoteClick(id); // Call handleUpvoteClick
            }}
            className={`rounded-lg text-[13px] font-bold py-2 pl-4 pr-3 flex flex-row items-center gap-[5px]  ${
              upvoted.hasOwnProperty(id) && upvoted[id]
                ? "bg-blue-600 text-white-100 "
                : "bg-white-50 text-blue-50 hover:bg-skyBlue-100 transition duration-150"
            }`}
          >
            {upvoted.hasOwnProperty(id) && upvoted[id] ? (
              <IoIosArrowDown className="fill-white" />
            ) : (
              <IoIosArrowUp className="fill-blue-200" />
            )}
            <p>
              {upvoted.hasOwnProperty(id) && upvoted[id]
                ? upvotes + 1
                : upvotes}
            </p>
          </button>
        ) : null}
        <div className="flex flex-row gap-[6px] items-center">
          <svg width="18" height="16" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.017 0-2.078-.137-3.025-.388A4.705 4.705 0 012.62 16z"
              fill="#CDD2EE"
              fillRule="nonzero"
            />
          </svg>
          {/* check if there is any comment and comment replies, to then display their total quantity */}
          {comments ? (
            <p className="text-blue-50 text-[13px] font-bold mb-[3px]">
              {comments.length +
                comments.reduce(
                  (total, comment) =>
                    total + (comment.replies ? comment.replies.length : 0),
                  0
                )}
            </p>
          ) : (
            <p className="text-blue-50 text-[13px] font-bold mb-[3px] opacity-[0.5]">
              0
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default TabletCards;
