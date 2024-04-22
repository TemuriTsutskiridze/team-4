import { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import HeaderFeedbacks from "../components/HeaderFeedbacks";
import SortBy from "../components/SortBy";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";
import HeaderTablet from "../components/HeaderTablet";

function Feedbacks() {
  const { appData, showMenu, setShowMenu, activeCategory, setActiveCategory } =
    useContext(AppContext);

  //Filtering out feedbacks with status "suggestion"
  const suggestionFeedbacks = appData.productRequests.filter(
    (feedback) => feedback.status === "suggestion"
  );

  const [upvoted, setUpvoted] = useState({});
  const [sortedFeedbacks, setSortedFeedbacks] = useState([]);

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

  // Filtering feedbacks based on the active category
  const filteredFeedbacks =
    activeCategory.toLowerCase() === "all"
      ? suggestionFeedbacks
      : appData.productRequests.filter(
          (feedback) =>
            feedback.category.toLowerCase() === activeCategory.toLowerCase()
        );

  // Sorting function based on the selected criteria
  const sortFeedbacks = (criteria) => {
    switch (criteria) {
      case "Most Upvotes":
        return [...filteredFeedbacks].sort((a, b) => b.upvotes - a.upvotes);
      case "least Upvotes":
        return [...filteredFeedbacks].sort((a, b) => a.upvotes - b.upvotes);
      case "most Comments":
        return [...filteredFeedbacks].sort(
          (a, b) =>
            (b.comments ? b.comments.length : 0) +
            (b.comments
              ? b.comments.reduce(
                  (total, comment) =>
                    total + (comment.replies ? comment.replies.length : 0),
                  0
                )
              : 0) -
            ((a.comments ? a.comments.length : 0) +
              (a.comments
                ? a.comments.reduce(
                    (total, comment) =>
                      total + (comment.replies ? comment.replies.length : 0),
                    0
                  )
                : 0))
        );
      case "least Comments":
        return [...filteredFeedbacks].sort(
          (a, b) =>
            (a.comments ? a.comments.length : 0) -
            (b.comments ? b.comments.length : 0)
        );
      default:
        return filteredFeedbacks;
    }
  };

  useEffect(() => {
    setSortedFeedbacks(sortFeedbacks("Most Upvotes")); // Initial sorting.
  }, [activeCategory]); // Re-sort when the active category changes

  return (
    <div className="w-screen md:px-[40px] md:pt-[56px] md:pb-[113px] lg:px-[165px] lg:pt-[94px] lg:pb-[129px] lg:flex lg:flex-start">
      <HeaderFeedbacks
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <HeaderTablet
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <div
        className="lg:w-full lg:pl-[30px]"
        style={{
          background: showMenu ? "#000000" : "transparent",
          opacity: showMenu ? "0.5" : "1",
        }}
      >
        <div className="lg:w-full">
          <SortBy
            setSortedFeedbacks={setSortedFeedbacks}
            sortFeedbacks={sortFeedbacks}
            filteredFeedbacks={filteredFeedbacks}
          />
          <div className="px-6 pt-8 pb-[55px] md:px-0 md:pt-6 md:pb-0 flex flex-col items-center gap-y-4 w-full lg:px-0">
            {/* checking if filtered feedbacks array is empty. If it is, displaying message, if it's not, displaying cards*/}
            {sortedFeedbacks && sortedFeedbacks.length === 0 ? (
              <div className="py-[76px] px-6 bg-white-100 rounded-lg flex flex-col items-center w-full md:[pb-110px]">
                <img src="/assets/suggestions/empty-feedbacks-img.jpg" />
                <p className="text-blue-50 text-[18px] font-bold mt-[40px] md:text-[24px]">
                  There is no feedback yet.
                </p>
                <p className="text-[13px] text-blue-10 mt-[14px] text-center mb-6 md:text-[16px] md:w-[410px]">
                  Got a suggestion? Found a bug that needs to be squashed? We
                  love hearing about new ideas to improve our app.
                </p>
                <Link to={"/new-feedback"}>
                  <button
                    className={`bg-purple-50 text-white-100 text-[14px] font-bold py-[12px] px-4 rounded-[10px] flexCenter`}
                  >
                    + Add Feedback
                  </button>
                </Link>
              </div>
            ) : (
              sortedFeedbacks &&
              sortedFeedbacks.map((feedback) => (
                <Link
                  to={`/feedbackDetails/${feedback.id}`}
                  key={feedback.id}
                  className="w-full"
                >
                  <div className="md:w-full lg:w-full lg:px-0">
                    <div
                      className="bg-white-100 rounded-lg px-6 py-6 w-full flex flex-col items-start md:py-7 md:px-8 md:flex-row md:items-center md:justify-between"
                      key={feedback.id}
                    >
                      <div className="md:flex md:flex-start md:gap-x-[40px]">
                        {feedback.upvotes ? (
                          <button
                            onClick={(event) => {
                              event.preventDefault();
                              event.stopPropagation(); // Stop event propagation
                              handleUpvoteClick(feedback.id); // Call handleUpvoteClick
                            }}
                            className={`hidden  md:mt-0 mt-3 md:h-[53px] py-[7px] 
                          md:flex md:flex-col items-center rounded-[10px] md:w-[45px] w-[69px]  text-[13px] font-bold lg:transition lg:duration-300  ${
                            upvoted.hasOwnProperty(feedback.id) &&
                            upvoted[feedback.id]
                              ? "bg-blue-200 text-white-100 "
                              : "bg-white-50 text-blue-50 hover:bg-skyBlue-100 transition duration-150"
                          }`}
                          >
                            {upvoted.hasOwnProperty(feedback.id) &&
                            upvoted[feedback.id] ? (
                              <IoIosArrowDown className="fill-white" />
                            ) : (
                              <IoIosArrowUp className="fill-blue-200" />
                            )}
                            <p>
                              {upvoted.hasOwnProperty(feedback.id) &&
                              upvoted[feedback.id]
                                ? feedback.upvotes + 1
                                : feedback.upvotes}
                            </p>
                          </button>
                        ) : null}
                        <div className="flex flex-col">
                          <p className="text-blue-50 text-[13px] font-bold lg:text-[18px]">
                            {feedback.title}
                          </p>
                          <p className="text-blue-10 text-[13px] font-normal mt-2 w-[278px] lg:text-[16px] lg:w-full">
                            {feedback.description}
                          </p>
                          <button className="mt-2 rounded-lg bg-white-50 text-blue-200 text-[13px] font-bold capitalize py-[5px] px-4 max-w-[111px]">
                            {feedback.category}
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between mt-4 w-full md:hidden">
                        {feedback.upvotes ? (
                          <button
                            onClick={(event) => {
                              event.preventDefault();
                              event.stopPropagation(); // Stop event propagation
                              handleUpvoteClick(feedback.id); // Call handleUpvoteClick
                            }}
                            className="rounded-lg bg-white-50 text-blue-50 text-[13px] font-bold py-2 pl-4 pr-3 flex flex-row items-center gap-[5px] "
                          >
                            {upvoted.hasOwnProperty(feedback.id) &&
                            upvoted[feedback.id] ? (
                              <IoIosArrowDown className="fill-blue-200" />
                            ) : (
                              <IoIosArrowUp className="fill-blue-200" />
                            )}
                            <p>
                              {upvoted.hasOwnProperty(feedback.id) &&
                              upvoted[feedback.id]
                                ? feedback.upvotes + 1
                                : feedback.upvotes}
                            </p>
                          </button>
                        ) : null}
                        <div className="flex flex-row gap-[6px] items-center">
                          <svg
                            width="18"
                            height="16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.017 0-2.078-.137-3.025-.388A4.705 4.705 0 012.62 16z"
                              fill="#CDD2EE"
                              fillRule="nonzero"
                            />
                          </svg>
                          {/* check if there is any comment and comment replies, to then display their total quantity */}
                          {feedback.comments ? (
                            <p className="text-blue-50 text-[13px] font-bold mb-[3px]">
                              {feedback.comments.length +
                                feedback.comments.reduce(
                                  (total, comment) =>
                                    total +
                                    (comment.replies
                                      ? comment.replies.length
                                      : 0),
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
                      <div className="hidden md:flex flex-row gap-[6px] items-center">
                        <svg
                          width="18"
                          height="16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.017 0-2.078-.137-3.025-.388A4.705 4.705 0 012.62 16z"
                            fill="#CDD2EE"
                            fillRule="nonzero"
                          />
                        </svg>
                        {/* check if there is any comment and comment replies, to then display their total quantity for tablet */}
                        {feedback.comments ? (
                          <p className="text-blue-50 text-[13px] font-bold mb-[3px]">
                            {feedback.comments.length +
                              feedback.comments.reduce(
                                (total, comment) =>
                                  total +
                                  (comment.replies
                                    ? comment.replies.length
                                    : 0),
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
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedbacks;
