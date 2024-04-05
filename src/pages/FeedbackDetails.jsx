import BackButton from "../components/BackButton";
import Button from "../components/Button";

const FeedbackDetails = () => {
  return (
    <div className="flexCenter flex-col section gap-4 w-[730px] jost-font">
      <div className="flexBetween w-full">
        <BackButton />
        <Button bgColor="bg-blue-200" text="Edit Feedback" />
      </div>
      <div className="w-full bg-white-100">waiting data</div>
      <div className="w-full bg-white-100">comments</div>
      <div className="w-full bg-white-100 px-[32px]">
        <h4>Add Comment</h4>
        <input
          placeholder="Type your comment here"
          className="bg-white-10 w-full px-[20px] min-h-[80px] rounded-[5px]"
          type="text"
        />
        <div className="flexBetween">
          <p>250 Characters left</p>
          <Button bgColor="bg-purple-50" text="Edit Feedback" />
        </div>
      </div>
    </div>
  );
};

export default FeedbackDetails;
