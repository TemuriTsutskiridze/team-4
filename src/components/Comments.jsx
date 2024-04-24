import { useState } from "react";
import Button from "./Button";

const Comments = ({ comment, onAddReply }) => {
  const [show, setShow] = useState(null);
  const [replyText, setReplyText] = useState("");
  const [replyingTo, setReplyingTo] = useState(null);

  const togglePost = (postId) => {
    setShow(show === postId ? null : postId);
    setReplyingTo(comment.user.username);
  };
  const toggleReply = (replyId) => {
    setShow(show === replyId ? null : replyId);
    setReplyingTo(comment.replies[replyId].user.username);
    console.log(comment.replies[replyId].user.username);
  };

  const handleReplyChange = (e) => {
    setReplyText(e.target.value);
  };

  const handleReplySubmit = () => {
    if (replyText.trim()) {
      onAddReply(replyText, replyingTo);
      setReplyText("");
      setShow(null);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex relative w-full">
        <img
          className="rounded-full w-[40px] h-[40px]"
          src={comment.user.image}
          alt={comment.user.name}
        />
        <div className="flex flex-col md:px-7 px-4 w-full">
          <div className="flexBetween">
            <div>
              <h3 className="md:text-[14px] text-[13px] text-blue-50 tracking-[-0.19px] font-bold capitalize">
                {comment.user.name}
              </h3>
              <span className="md:text-[14px] text-[13px] text-blue-10">
                @{comment.user.username}
              </span>
            </div>
            <span
              onClick={() => togglePost(comment.id)}
              className="text-blue-200 text-[13px] font-semibold hover:underline 
                             transition-all cursor-pointer"
            >
              Reply
            </span>
          </div>
          <p className="md:ml-0 ml-[-53px] pt-3 pb-4 md:text-[15px] text-[13px] text-blue-10">
            {comment.content}
          </p>

          {comment.replies &&
            comment.replies.map((reply, index) => (
              <div key={index} className="py-3 ml-[-25px]">
                <div className="flex">
                  <img
                    className="rounded-full w-[40px] h-[40px]"
                    src={reply.user.image}
                    alt={reply.user.name}
                  />
                  <div className="flex flex-col md:px-7 px-4 w-full">
                    <div className="flexBetween">
                      <div>
                        <h3 className="md:text-[14px] text-[13px] text-blue-50 tracking-[-0.19px] font-bold capitalize">
                          {reply.user.name}
                        </h3>
                        <span className="md:text-[14px] text-[13px] text-blue-10">
                          @{reply.user.username}
                        </span>
                      </div>
                      <span
                        onClick={() => toggleReply(index)}
                        className="text-blue-200 text-[13px] font-semibold hover:underline 
                             transition-all cursor-pointer"
                      >
                        Reply
                      </span>
                    </div>
                    <p className="md:ml-0 ml-[-53px] mt-3 md:text-[15px] text-[13px] text-blue-10">
                      <span className="text-purple-100 font-bold">
                        @{reply.replyingTo || replyingTo}
                      </span>{" "}
                      {reply.content}
                    </p>
                    {show === index && (
                      <div className="md:ml-0 ml-[-53px] flex md:flex-row flex-col md:items-start items-end justify-between gap-5 mt-4">
                        <textarea
                          className="w-full min-h-[80px] h-[80px] rounded-[5px] bg-white-10 
                               text-blue-50 text-[15px] px-4 py-3 border border-solid 
                              border-transparent focus:border-blue-500 outline-none"
                          name="post"
                          placeholder="Type your reply here..."
                          id="postTextarea"
                          cols="30"
                          rows="10"
                          value={replyText}
                          onChange={handleReplyChange}
                        ></textarea>
                        <Button
                          bgColor="bg-purple-50 hover:bg-purple-100 min-w-[125px]"
                          text="Post Reply"
                          onclick={handleReplySubmit}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}

          {show === comment.id && (
            <div className="md:ml-0 ml-[-53px] flex md:flex-row flex-col md:items-start items-end justify-between gap-5 mt-4">
              <textarea
                className="w-full min-h-[80px] h-[80px] rounded-[5px] bg-white-10 
                               text-blue-50 text-[15px] px-4 py-3 border border-solid 
                              border-transparent focus:border-blue-500 outline-none"
                name="post"
                placeholder="Type your reply here..."
                id="postTextarea"
                cols="30"
                rows="10"
                value={replyText}
                onChange={handleReplyChange}
              ></textarea>
              <Button
                bgColor="bg-purple-50 hover:bg-purple-100 min-w-[125px]"
                text="Post Reply"
                onclick={handleReplySubmit}
              />
            </div>
          )}
        </div>
        {comment.replies && (
          <div className="absolute md:top-[60px] top-[165px] md:left-[20px] left-[3px] w-[1px] md:h-[60%] h-[40%] bg-blue-10 opacity-10"></div>
        )}
      </div>
      <div className="w-full h-[1px] bg-[#8c92b3] opacity-25 my-4"></div>
    </div>
  );
};

export default Comments;
