import React from "react";
import PostHeader from "./PostHeader";
import PropTypes from "prop-types";

const Post = props => {
  const { content, author, time, avatar } = props.data;
  return (
    <div className="post">
      <PostHeader author={author} time={time} avatar={avatar} />
      <p>{content}</p>
    </div>
  );
};

Post.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  }).isRequired
};

export default Post;
