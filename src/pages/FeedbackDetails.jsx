import { useContext, useState } from "react";

import BackButton from "../components/BackButton";
import Button from "../components/Button";
import { AppContext } from "../App";

import { v4 as uuidv4 } from "uuid";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { TbMessageCircle2Filled } from "react-icons/tb";
import Comments from "../components/Comments";
import { Link, useParams } from "react-router-dom";

const FeedbackDetails = () => {
  let { id } = useParams();
  const { appData, setAppData } = useContext(AppContext);

  const [text, setText] = useState("");
  const maxLength = 250;

  const initialPost =
    JSON.parse(localStorage.getItem("productRequests")) ||
    appData.productRequests[id - 1];

  const [post, setPost] = useState(initialPost);

  const giveVote = (postId, vote) => {
    const updatedProductRequests = appData.productRequests.map((post) => {
      if (post.id === postId) {
        post.upvotes += vote ? 1 : post.hasVoted ? -1 : 1;
        post.hasVoted = vote;
      }
      return post;
    });
    setAppData({ ...appData, productRequests: updatedProductRequests });
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const addReply = (commentId, replyContent) => {
    const updatedComments = post.comments.map((comment) => {
      if (comment.id === commentId) {
        const newReply = {
          id: uuidv4(),
          user: appData.currentUser,
          content: replyContent,
        };
        return {
          ...comment,
          replies: comment.replies
            ? [...comment.replies, newReply]
            : [newReply],
        };
      }
      return comment;
    });
    setPost({ ...post, comments: updatedComments });
    localStorage.setItem(
      "productRequests",
      JSON.stringify({ ...post, comments: updatedComments })
    );
  };

  const pushComment = () => {
    const newComment = {
      id: uuidv4(),
      user: appData.currentUser,
      content: text,
    };

    // Update comments array in newPost
    const updatedPost = {
      ...post,
      comments: post.comments ? [...post.comments, newComment] : [newComment],
    };

    setPost(updatedPost);
    localStorage.setItem("productRequests", JSON.stringify(updatedPost));

    setText("");
  };
  localStorage.clear();

  return (
    <>
      <div className="flexCenter flex-col section gap-6 max-w-[730px] jost-font">
        <div className="flexBetween w-full">
          <Link to="/feedbacks">
            <BackButton />
          </Link>
          <Link to="/edit-feedback">
            <Button
              bgColor="bg-blue-200 hover:bg-blue-10"
              text="Edit Feedback"
            />
          </Link>
        </div>

        <div
          key={post.id}
          className="relative flex justify-between md:items-center items-end gap-5 w-full bg-white-100 px-[34px] py-[28px] rounded-[10px]"
        >
          <div className="flex md:flex-row flex-col-reverse">
            <div
              onClick={() => giveVote(post.id, !post.hasVoted)}
              className="bg-white-50 hover:bg-[#cfd7ff] md:mt-0 mt-3 px-2.5 md:h-[53px] py-[7px] 
             flex md:flex-col flex-row items-center rounded-[10px] cursor-pointer transition-all md:w-[45px] w-[69px]"
            >
              {!post.hasVoted ? (
                <IoIosArrowUp className="text-blue-200" />
              ) : (
                <IoIosArrowDown className="text-blue-200" />
              )}
              <span className="text-[13px] font-bold text-blue-50 md:ml-0 ml-2">
                {post.upvotes}
              </span>
            </div>
            <div className="flex flex-col md:gap-1 gap-1.5 md:px-7 mx-0">
              <h3 className="md:text-[18px] text-[13px] font-bold tracking-[-0.25px] text-blue-50">
                {post.title}
              </h3>
              <p className="md:text-[16px] text-[13px] text-blue-10">
                {post.description}
              </p>
              <span
                className="bg-white-50 flexCenter rounded-[10px] text-[13px] 
            font-semibold text-blue-200 px-4 py-[4px] capitalize max-w-[110px]"
              >
                {post.category}
              </span>
            </div>
          </div>
          <div className="absolute md:bottom-14 bottom-8 right-7 flex items-end gap-1">
            <div className="flex items-center gap-1.5">
              <TbMessageCircle2Filled className="text-[#cdd2ee] text-[18px]" />
              <span className="md:text-[16px] text-[13px] tracking-[-0.22px] font-bold text-blue-50">
                {post.comments ? (
                  post.comments.length +
                  post.comments.reduce(
                    (total, comment) =>
                      total + (comment.replies ? comment.replies.length : 0),
                    0
                  )
                ) : (
                  <p className="text-blue-50 text-[13px] font-bold opacity-[0.5]">
                    0
                  </p>
                )}
              </span>
            </div>
          </div>
        </div>

        <div className="w-full bg-white-100 flex flex-col gap-8 rounded-[10px] md:px-[34px] px-[22px] md:py-[28px] py-[22px]">
          <h4 className="text-[18px] text-blue-50 tracking-[-0.25px] font-bold">
            {post.comments ? post.comments.length : 0} Comments
          </h4>
          {post.comments &&
            post.comments.map((comment) => (
              <Comments
                key={comment.id}
                comment={comment}
                addReply={(replyContent) => addReply(comment.id, replyContent)}
              />
            ))}
        </div>

        <div className="w-full bg-white-100 px-[34px] py-[28px] flex flex-col gap-5 rounded-[10px]">
          <h4 className="text-[18px] font-bold tracking-[-0.25px] text-blue-50">
            Add Comment
          </h4>
          <textarea
            className="w-full min-h-[80px] h-[80px] rounded-[5px] bg-white-10
          text-blue-50 md:text-[15px] text-[13px] px-4 py-3 border border-solid 
                  border-transparent focus:border-blue-500 outline-none"
            name="comment"
            placeholder="Type your comment here"
            id="commentTextarea"
            cols="30"
            rows="10"
            maxLength={maxLength}
            value={text}
            onChange={handleChange}
          ></textarea>

          <div className="flexBetween md:gap-9 gap-3">
            <p className="md:text-[15px] text-[13px] text-blue-10">
              {maxLength - text.length} Characters left
            </p>
            <Button
              bgColor="bg-purple-50 hover:bg-purple-100"
              text="Post Comment"
              onclick={pushComment}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedbackDetails;
