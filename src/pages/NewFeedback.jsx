import { useState } from "react";
import BackButton from "../components/BackButton";
import CancelButton from "../components/cancelButton";
import Button from "../components/Button";
import NewIcon from "../components/Newicon";
import { Link } from "react-router-dom";

export default function NewFeedback() {
  const [feedbackDetail, setFeedbackDetail] = useState("");
  const [feedbackDetailError, setFeedbackDetailError] = useState(false);

  const handleFeedbackDetailChange = (event) => {
    const value = event.target.value;
    setFeedbackDetail(value);
    setFeedbackDetailError(value.trim() === "");
  };

  const handleSubmit = () => {
    if (feedbackDetail.trim() === "") {
      setFeedbackDetailError(true);
      return;
    }
    console.log("Submitting feedback:", feedbackDetail);
    // Proceed with submission
  };

  return (
    <div className="flexCenter flex-col section gap-8 w-[730px] jost-font ml-auto">
      <div className="flexBetween w-full">
        <Link to="/feedbacks">
          <BackButton />
        </Link>
        <br />
      </div>

      <div className="flex flex-col items-start gap-y-6 p-6 bg-[#ffffff] rounded-lg relative z-10 mt-[28px]">
        <br />
        <NewIcon />
        <div>
          <h1 className="font-jost font-semibold text-24 leading-34.68 tracking--0.33 mr-2 ">
            Create New Feedback
          </h1>
          <br />
          <label
            htmlFor="feedbackTitle"
            className="jost-font font-bold text-14 leading-[20.23px] tracking-[0.19px]"
          >
            Feedback Title
          </label>
          <p>Add a short, descriptive headline</p>
          <input
            type="text"
            id="feedbackTitle"
            className="w-full border border-gray-10 rounded-md py-2 px-3 mt-2 bg-[#F7F8FD]"
          />
        </div>

        <div>
          <label
            htmlFor="category"
            className="jost-font font-bold text-14 leading-[20.23px] tracking-[0.19px]"
          >
            Category
          </label>
          <p>Choose a category for your feedback</p>
          <select
            id="category"
            className="border border-gray-300 rounded-lg py-2 px-3 mt-2 w-full bg-[#F7F8FD]"
            value=""
            onChange={() => {}}
          >
            <option value="category1">Feature</option>
            <option value="category2">UI</option>
            <option value="category3">UX</option>
            <option value="category4">Enhancement</option>
            <option value="category5">Bug</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="feedbackDetail"
            className="jost-font font-bold text-14 leading-[20.23px] tracking-[0.19px]"
          >
            Feedback Detail
          </label>
          <p>
            Include any specific comments on what should be improved, added,
            etc.
          </p>
          <textarea
            id="feedbackDetail"
            className={`w-full border ${
              feedbackDetailError ? "border-red-500" : "border-gray-10"
            } rounded-md py-2 px-3 mt-2 bg-[#F7F8FD]`}
            value={feedbackDetail}
            onChange={handleFeedbackDetailChange}
          />
          {feedbackDetailError && (
            <p className="text-red-500 text-sm">Can't be empty</p>
          )}
        </div>
        <div className="flex justify-end gap-4 ml-auto">
          <CancelButton bgColor="bg-blue-50" text="Cancel" />
          <Button
            bgColor="bg-purple-50"
            text="Add Feedback"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}
