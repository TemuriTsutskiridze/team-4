import { useContext, useState } from "react";
import { AppContext } from "../App";
import TabletCards from "./TabletCards";
import { Link } from "react-router-dom";

function TabletRoadmap({
  plannedFeedbacks,
  inProgressFeedbacks,
  liveFeedbacks,
}) {
  return (
    <div className="hidden md:w-full mt-9 md:flex baseline justify-between pb-[95px]">
      <div className="flex flex-col items-start min-w-[223px] lg:min-w-[350px]">
        <p className="text-[14px] text-blue-100 font-bold lg:text-[18px]">
          Planned ({plannedFeedbacks.length})
        </p>
        <p className="text-[14px] text-blue-10 mt-1 mb-6 lg:text-[16px]">
          Ideas prioritized for research
        </p>
        {plannedFeedbacks &&
          plannedFeedbacks.map((feedback) => (
            <div className="mb-4" key={feedback.id}>
              <Link
                to={`/feedbackDetails/${feedback.id}`}
                key={feedback.id}
                className="w-full"
              >
                <TabletCards
                  title={feedback.title}
                  description={feedback.description}
                  upvotes={feedback.upvotes}
                  id={feedback.id}
                  category={feedback.category}
                  comments={feedback.comments}
                  feedbackStatus={feedback.status}
                  bg="#f49f85"
                />
              </Link>
            </div>
          ))}
      </div>
      <div className="flex flex-col items-start min-w-[223px]">
        <p className="text-[14px] text-blue-100 font-bold lg:text-[18px]">
          In-Progress ({inProgressFeedbacks.length})
        </p>
        <p className="text-[14px] text-blue-10 mt-1 mb-6 lg:text-[16px]">
          Currently being developed{" "}
        </p>
        {inProgressFeedbacks &&
          inProgressFeedbacks.map((feedback) => (
            <div className="mb-4" key={feedback.id}>
              <Link
                to={`/feedbackDetails/${feedback.id}`}
                key={feedback.id}
                className="w-full"
              >
                <TabletCards
                  title={feedback.title}
                  description={feedback.description}
                  upvotes={feedback.upvotes}
                  id={feedback.id}
                  category={feedback.category}
                  comments={feedback.comments}
                  feedbackStatus={feedback.status}
                  bg="#AD1FEA"
                />
              </Link>
            </div>
          ))}
      </div>
      <div className="flex flex-col items-start min-w-[223px]">
        <p className="text-[14px] text-blue-100 font-bold lg:text-[18px]">
          Live ({liveFeedbacks.length})
        </p>
        <p className="text-[14px] text-blue-10 mt-1 mb-6 lg:text-[16px]">
          Released features{" "}
        </p>
        {liveFeedbacks &&
          liveFeedbacks.map((feedback) => (
            <div className="mb-4" key={feedback.id}>
              <Link
                to={`/feedbackDetails/${feedback.id}`}
                key={feedback.id}
                className="w-full"
              >
                <TabletCards
                  title={feedback.title}
                  description={feedback.description}
                  upvotes={feedback.upvotes}
                  id={feedback.id}
                  category={feedback.category}
                  comments={feedback.comments}
                  feedbackStatus={feedback.status}
                  bg="#62bcfa"
                />
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default TabletRoadmap;
