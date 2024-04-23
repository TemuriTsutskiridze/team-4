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
    <div className="w-screen px-6 pt-[34px] pb-[77px] md:pt-[56px] md:px-[114px] md:pb-[122px] lg:pt-[92px] lg:pb-[129px] lg:px-[450px]">
      <Link to={`/feedbackDetails/${post.id}`}>
        <BackButton />
      </Link>
      <div className="flex w-full flex-col items-start px-6 pb-6 pt-11 bg-[#ffffff] rounded-lg relative z-10 mt-[55px] md:px-[42px] md:pb-[40px] md:pt-[52px]">
        <EditIcon />
        <h1 className="font-jost font-bold text-[16px] text-blue-50 md:text-[24px]">
          Editing '{post.title}'
        </h1>
        <p className="text-[13px] text-blue-50 font-bold mt-6 md:mt-[50px] md:text-[16px]">
          Feedback Title
        </p>
        <p className="text-[13px] text-blue-10 mt-[3px] md:text-[14px]">
          Add a short, descriptive headline
        </p>
        <input
          type="text"
          id="feedbackTitle"
          className="w-full rounded-md py-3 px-4 mt-4 bg-[#F7F8FD] text-[13px] text-blue-50"
          placeholder={post.title}
        />

        <p className="text-[13px] text-blue-50 font-bold md:text-[16px] mt-6">
          Category
        </p>
        <p className="text-[13px] text-blue-10 mt-[3px] md:text-[14px]">
          Choose a category for your feedback
        </p>
        <select
          name="category"
          id="category"
          className="w-full rounded-md py-3 px-4 mt-4 bg-[#F7F8FD] text-[13px] text-blue-50"
        >
          <option className="capitalize">UI</option>
          <option className="capitalize">UX</option>
          <option className="capitalize">Enhancement</option>
          <option className="capitalize">Bug</option>
          <option className="capitalize">Feature</option>
        </select>

        <p className="text-[13px] text-blue-50 font-bold md:text-[16px] mt-6">
          Update Status
        </p>
        <p className="text-[13px] text-blue-10 mt-[3px] md:text-[14px]">
          Change feature state
        </p>
        <select
          name="category"
          id="category"
          className="w-full rounded-md py-3 px-4 mt-4 bg-[#F7F8FD] text-[13px] text-blue-50"
        >
          <option className="capitalize">Planned</option>
          <option className="capitalize">In-Progress</option>
          <option className="capitalize">Live</option>
        </select>

        <p className="text-[13px] text-blue-50 font-bold mt-6 md:text-[16px]">
          Feedback Detail
        </p>
        <p className="text-[13px] text-blue-10 mt-[3px] md:text-[14px]">
          Include any specific comments on what should be improved, added, etc.
        </p>
        <textarea className="w-full rounded-md py-3 px-4 mt-4 bg-[#F7F8FD] text-[13px] text-blue-50"></textarea>
        <div className="flex flex-col items-center gap-4 mt-10 w-full md:flex-row md:justify-between md:gap-0">
          <DeleteButton bgColor="bg-red-600" text="Delete" />
          <div className="flex flex-col items-center md:flex-row gap-4 w-full md:w-auto">
            <CancelButton bgColor="bg-blue-50" text="Cancel" />
            <Button
              bgColor="bg-purple-50 w-full md:w-[144px]"
              text="Save Changes"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
