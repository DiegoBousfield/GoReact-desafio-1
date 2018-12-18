import React from "react";
import PropTypes from "prop-types";
import Post from "./Post";

const PostHeader = props => (
  <div className="post-header-container">
    <img src={props.avatar} alt="avatar" className="avatar" />

    <div className="data-container">
      <strong className="name">{props.author}</strong>
      <span> há {props.time} minutos </span>
    </div>
  </div>
);

PostHeader.propTypes = {
  avatar: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired
};

PostHeader.defaultProps = {
  avatar: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png"
};

export default PostHeader;
