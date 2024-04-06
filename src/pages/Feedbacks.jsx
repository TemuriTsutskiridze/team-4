import { useContext, useState } from "react";
import { AppContext } from "../App";
import HeaderFeedbacks from "../components/HeaderFeedbacks";
import SortBy from "../components/SortBy";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

function Feedbacks() {
  const { appData, setAppData } = useContext(AppContext);

  //Filtering out feedbacks with status "suggestion"
  const suggestionFeedbacks = appData.productRequests.filter(
    (feedback) => feedback.status === "suggestion"
  );

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
    <div className="w-screen">
      <HeaderFeedbacks />
      <SortBy />
      <div className="px-6 pt-8 pb-[55px] flex flex-col items-center gap-y-4 w-full">
        {suggestionFeedbacks.map((feedback) => (
          <div
            className="bg-white-100 rounded-lg px-6 py-6 w-full flex flex-col items-start"
            key={feedback.id}
          >
            <p className="text-blue-50 text-[13px] font-bold">
              {feedback.title}
            </p>
            <p className="text-blue-10 text-[13px] font-normal mt-2">
              {feedback.description}
            </p>
            <button className="mt-2 rounded-lg bg-white-50 text-blue-200 text-[13px] font-bold capitalize py-[5px] px-4">
              {feedback.category}
            </button>
            <div className="flex flex-row items-center justify-between mt-4 w-full">
              <button
                onClick={() => handleUpvoteClick(feedback.id)}
                className="rounded-lg bg-white-50 text-blue-50 text-[13px] font-bold py-2 pl-4 pr-3 flex flex-row items-center gap-[10px]"
              >
                {upvoted.hasOwnProperty(feedback.id) && upvoted[feedback.id] ? (
                  <IoIosArrowDown className="fill-blue-200" />
                ) : (
                  <IoIosArrowUp className="fill-blue-200" />
                )}

                <p>
                  {upvoted.hasOwnProperty(feedback.id) && upvoted[feedback.id]
                    ? feedback.upvotes + 1
                    : feedback.upvotes}
                </p>
              </button>
              <div className="flex flex-row gap-[6px] items-center">
                <svg width="18" height="16" xmlns="http://www.w3.org/2000/svg">
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
        ))}
      </div>
    </div>
  );
}

export default Feedbacks;
