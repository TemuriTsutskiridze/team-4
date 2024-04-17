import BackButton from "../components/BackButton";
import EditIcon from "../components/Editicon";
import CancelButton from "../components/cancelButton";
import Button from "../components/Button";
import DeleteButton from "../components/DeleteButton";
import { Link, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { AppContext } from "../App";

export default function EditFeedback() {
  const { id } = useParams();
  const { appData, setAppData } = useContext(AppContext);
  const initialPost =
    JSON.parse(localStorage.getItem("productRequests")) ||
    appData.productRequests[id - 1];

  const [post, setPost] = useState(initialPost);

  return (
    <div className="flexCenter flex-col section gap-8 w-[730px] jost-font ml-auto">
      <div className="flexBetween w-full">
        <Link to={`/feedbackDetails/${post.id}`}>
          <BackButton />
        </Link>
        <br />
      </div>

      <div className="flex flex-col items-start gap-y-6 p-6 pt-0 bg-[#ffffff] rounded-lg relative z-10">
        <br />
        <EditIcon />
        <div>
          <h1 className="font-jost font-semibold text-24 leading-34.68 tracking--0.33 mr-2">
            Editing "{post.title}"
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
          <select className="border border-gray-300 rounded-lg py-2 px-3 mt-2 w-full bg-[#F7F8FD]">
            <option value="category1">Feature</option>
            <option value="category2">UI</option>
            <option value="category3">UX</option>
            <option value="category4">Enhancement</option>
            <option value="category5">Bug</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="category"
            className="jost-font font-bold text-14 leading-[20.23px] tracking-[0.19px]"
          >
            Update Status
          </label>
          <p>Change feature state</p>
          <select className="border border-gray-300 rounded-lg py-2 px-3 mt-2 w-full bg-[#F7F8FD]">
            <option value="category1">Suggestion</option>
            <option value="category2">Planned</option>
            <option value="category3">In-Progress</option>
            <option value="category4">Live</option>
          </select>
        </div>

        <div className="flex items-center justify-between  gap-4 ml-auto">
          <DeleteButton bgColor="bg-red-600" text="Delete" />
          <CancelButton bgColor="bg-blue-50" text="Cancel" />
          <Button bgColor="bg-purple-50" text="Add Feedback" />
        </div>
      </div>
    </div>
  );
}
