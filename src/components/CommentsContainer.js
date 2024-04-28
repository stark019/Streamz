import React from "react";
import { generateRandomComments } from "../utils/helper";

const randomComments = generateRandomComments(10);

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex mt-4 shadow-sm bg-gray-100 p-2 rounded-lg">
      <img
        className="w-8 h-8"
        alt="profile-icon"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-2 p-2">
      <div className="flex">
        <img
          className="w-8 h-8"
          alt="comment-icon"
          src="https://www.svgrepo.com/show/522069/comment-2.svg"
        />
        <h1 className="text-xl font-bold ml-2">Comments</h1>
      </div>
      <CommentsList comments={randomComments.slice(0, Math.min(10, randomComments.length))} />
    </div>
  );
};

export default CommentsContainer;