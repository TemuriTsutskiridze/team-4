import { useContext, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";
import { AppContext } from "../App";
import TabletRoadmap from "../components/TabletRoadmap";

export default function Roadmap() {
  document.body.style.overflowY = "auto";
  const { appData, plannedFeedbacks, inProgressFeedbacks, liveFeedbacks } =
    useContext(AppContext);

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

  const [activeStatus, setActiveStatus] = useState("Planned");

  // Filtering feedbacks based on the active status
  const filteredFeedbacks =
    activeStatus.toLowerCase() === "planned"
      ? plannedFeedbacks
      : appData.productRequests.filter(
          (feedback) =>
            feedback.status.toLowerCase() === activeStatus.toLowerCase()
        );

  // function to handle status clicking to then set chosen status as active
  const handleStatusClick = (option) => {
    setActiveStatus(option);
  };

  return (
    <div className="w-screen  md:pt-[56px] md:px-[40px] lg:pt-[78px] lg:px-[165px] lg:pb-[120px]">
      <div className="w-full px-6 py-[26px] flex items-center justify-between bg-blue-100  md:rounded-lg">
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
      <TabletRoadmap
        plannedFeedbacks={plannedFeedbacks}
        inProgressFeedbacks={inProgressFeedbacks}
        liveFeedbacks={liveFeedbacks}
      />
      <div className="w-full flex justify-between border-b-gray-300 border-b md:hidden">
        <div
          className="py-5 w-[135px] flex items-center justify-center border-b-4 border-b-transparent"
          onClick={() => handleStatusClick("Planned")}
          style={
            activeStatus === "Planned"
              ? { borderBottomColor: "#f49f85" }
              : { borderBottomColor: "transparent" }
          }
        >
          <p
            className="text-[13px] cursor-pointer text-blue-50 font-bold"
            style={
              activeStatus === "Planned" ? { opacity: "1" } : { opacity: "0.4" }
            }
          >
            Planned ({plannedFeedbacks.length})
          </p>
        </div>
        <div
          className="py-5 w-[135px] flex items-center justify-center border-b-4 border-b-transparent"
          onClick={() => handleStatusClick("In-Progress")}
          style={
            activeStatus === "In-Progress"
              ? { borderBottomColor: "#AD1FEA" }
              : { borderBottomColor: "transparent" }
          }
        >
          <p
            className="text-[13px] cursor-pointer text-blue-50 font-bold"
            style={
              activeStatus === "In-Progress"
                ? { opacity: "1" }
                : { opacity: "0.4" }
            }
          >
            In-Progress ({inProgressFeedbacks.length})
          </p>
        </div>
        <div
          className="py-5 w-[135px] flex items-center justify-center border-b-4 border-b-transparent"
          onClick={() => handleStatusClick("Live")}
          style={
            activeStatus === "Live"
              ? { borderBottomColor: "#62bcfa" }
              : { borderBottomColor: "transparent" }
          }
        >
          <p
            className="text-[13px] cursor-pointer text-blue-50 font-bold"
            style={
              activeStatus === "Live" ? { opacity: "1" } : { opacity: "0.4" }
            }
          >
            Live ({liveFeedbacks.length})
          </p>
        </div>
      </div>
      <div className="px-6 pt-6 pb-[98px] flex flex-col items-start md:px-0 md:pt-8 md:hidden">
        <p className="text-[18px] font-bold text-blue-50 md:hidden">
          {activeStatus} ({filteredFeedbacks.length})
        </p>
        {activeStatus === "Planned" && (
          <p className="mt-2 text-[13px] text-blue-10 md:hidden">
            Ideas prioritized for research
          </p>
        )}
        {activeStatus === "In-Progress" && (
          <p className="mt-2 text-[13px] text-blue-10">
            Features currently being developed
          </p>
        )}
        {activeStatus === "Live" && (
          <p className="mt-2 text-[13px] text-blue-10">Released features</p>
        )}
        <div className="pt-6 md:px-0 md:pt-6 md:pb-0 flex flex-col items-center gap-y-4 w-full lg:px-0 md:hidden">
          {/* checking if filtered feedbacks array is empty. If it is, displaying message, if it's not, displaying cards*/}
          {filteredFeedbacks && filteredFeedbacks.length === 0 ? (
            <div className="py-[76px] px-6 bg-white-100 rounded-lg flex flex-col items-center w-full md:[pb-110px]">
              <img src="/assets/suggestions/empty-feedbacks-img.jpg" />
              <p className="text-blue-50 text-[18px] font-bold mt-[40px] md:text-[24px]">
                There is no feedback yet.
              </p>
              <p className="text-[13px] text-blue-10 mt-[14px] text-center mb-6 md:text-[16px] md:w-[410px]">
                Got a suggestion? Found a bug that needs to be squashed? We love
                hearing about new ideas to improve our app.
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
            filteredFeedbacks &&
            filteredFeedbacks.map((feedback) => (
              <Link
                to={`/feedbackDetails/${feedback.id}`}
                key={feedback.id}
                className="w-full"
              >
                <div className="md:w-full lg:w-full lg:px-0">
                  <div
                    className="bg-white-100 border-t-[6px] rounded-lg px-6 py-6 w-full flex flex-col items-start md:py-7 md:px-8 md:flex-row md:items-center md:justify-between"
                    key={feedback.id}
                    style={
                      activeStatus === "Live"
                        ? { borderTopColor: "#62bcfa" }
                        : activeStatus === "Planned"
                        ? { borderTopColor: "#f49f85" }
                        : activeStatus === "In-Progress"
                        ? { borderTopColor: "#AD1FEA" }
                        : { borderTopColor: "transparent" }
                    }
                  >
                    <div className="md:flex md:flex-start md:gap-x-[40px]">
                      <div className="flex flex-col">
                        {activeStatus === "Planned" && (
                          <div className="flex items-center gap-2 mb-4">
                            <div className="w-[8px] h-[8px] bg-tomato-50 rounded-full"></div>
                            <p className="text-[13px] text-blue-10">Planned</p>
                          </div>
                        )}
                        {activeStatus === "In-Progress" && (
                          <div className="flex items-center gap-2 mb-4">
                            <div className="w-[8px] h-[8px] bg-purple-50 rounded-full"></div>
                            <p className="text-[13px] text-blue-10">
                              In-Progress
                            </p>
                          </div>
                        )}
                        {activeStatus === "Live" && (
                          <div className="flex items-center gap-2 mb-4">
                            <div className="w-[8px] h-[8px] bg-skyBlue-50 rounded-full"></div>
                            <p className="text-[13px] text-blue-10">Live</p>
                          </div>
                        )}
                        <p className="text-blue-50 text-[13px] font-bold lg:text-[18px]">
                          {feedback.title}
                        </p>
                        <p className="text-blue-10 text-[13px] w-full font-normal mt-2 lg:text-[16px] lg:w-full">
                          {feedback.description}
                        </p>
                        <button className="mt-3 rounded-lg bg-white-50 text-blue-200 text-[13px] font-bold capitalize py-[5px] px-4 max-w-[111px]">
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
                          className={`rounded-lg text-[13px] font-bold py-2 pl-4 pr-3 flex flex-row items-center gap-[5px]  ${
                            upvoted.hasOwnProperty(feedback.id) &&
                            upvoted[feedback.id]
                              ? "bg-blue-600 text-white-100 "
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
                                (comment.replies ? comment.replies.length : 0),
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
  );
}
