import { useState } from "react";
import BackButton from "../components/BackButton";
import Button from "../components/Button";
import { IoIosArrowUp } from "react-icons/io";
import { TbMessageCircle2Filled } from "react-icons/tb";

const FeedbackDetails = () => {
  const [showPost, setShowPost] = useState(false);
  const togglePost = () => {
    setShowPost(!showPost);
  };
  return (
    <div className="flexCenter flex-col section gap-4 max-w-[730px] jost-font">
      <div className="flexBetween w-full">
        <BackButton />
        <Button bgColor="bg-blue-200 hover:bg-blue-10" text="Edit Feedback" />
      </div>

      <div className="flex justify-between gap-5 w-full bg-white-100 px-[34px] py-[28px]">
        <div
          className="bg-white-50 hover:bg-[#cfd7ff] w-[40px] h-[53px] py-[7px] 
        flex flex-col items-center rounded-[10px] cursor-pointer transition-all"
        >
          <IoIosArrowUp className="text-blue-200" />
          <span className="text-[13px] font-bold text-blue-50">99</span>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-[18px] font-bold tracking-[-0.25px] text-blue-50">
            Add a dark theme option
          </h3>
          <p className="text-[16px] text-blue-10">
            It would help people with light sensitivities and who prefer dark
            mode.
          </p>
          <span
            className="bg-white-50 w-[77px] rounded-[10px] text-[13px] 
            font-semibold text-blue-200 px-4 py-[4px]"
          >
            Feature
          </span>
        </div>
        <div className="flex items-center h-full gap-1">
          <TbMessageCircle2Filled className="text-[#cdd2ee] text-[18px]" />
          <span className="text-[16px] tracking-[-0.22px] font-bold text-blue-50">
            4
          </span>
        </div>
      </div>

      <div className="w-full bg-white-100 flex flex-col gap-8 rounded-[10px] px-[34px] py-[28px]">
        <h4 className="text-[18px] text-blue-50 tracking-[-0.25px] font-bold">
          Comments
        </h4>
        <div className="flex">
          <img src="" alt="adad" />
          <div className="flex flex-col px-7">
            <div className="flexBetween">
              <div>
                <h3 className="text-[14px] text-blue-50 tracking-[-0.19px] font-bold capitalize">
                  name lastname
                </h3>
                <span className="text-[14px] text-blue-10">@ddaa qad ada</span>
              </div>
              <span
                onClick={togglePost}
                className="text-blue-200 text-[13px] font-semibold hover:underline 
                transition-all cursor-pointer"
              >
                Reply
              </span>
            </div>

            <p className="my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              sunt repudiandae suscipit culpa qui, repellat quaerat sed odit
              nihil consectetur. Quis architecto nihil vitae velit consequuntur
              fuga enim vel vero!
            </p>
            {showPost && (
              <div className="flex items-start justify-between gap-5">
                <textarea
                  className="w-full min-h-[80px] h-[80px] rounded-[5px] bg-white-10 
                  text-blue-50 text-[15px] px-4 py-3 border border-solid 
                  border-transparent focus:border-blue-500 outline-none"
                  name="post"
                  placeholder=""
                  id="post"
                  cols="30"
                  rows="10"
                ></textarea>
                <Button
                  bgColor="bg-purple-100 hover:bg-blue-10 min-w-[125px]"
                  text="Post Reply"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="w-full bg-white-100 px-[32px]">
        <h4 className="text-[18px] font-bold tracking-[-0.25px] text-blue-50">
          Add Comment
        </h4>
        <textarea
          className="w-full min-h-[80px] h-[80px] rounded-[5px] bg-white-10
          text-blue-50 text-[15px] px-4 py-3 border border-solid 
                  border-transparent focus:border-blue-500 outline-none"
          name="post"
          placeholder="Type your comment here"
          id="post"
          cols="30"
          rows="10"
        ></textarea>

        <div className="flexBetween">
          <p>250 Characters left</p>
          <Button
            bgColor="bg-purple-100 hover:bg-purple-50"
            text="Edit Feedback"
          />
        </div>
      </div>
    </div>
  );
};

export default FeedbackDetails;
