import React from "react";
import { deletePost } from "../Redux/Actions/postActions";
import { useDispatch, useSelector } from "react-redux";

function Footer({ posts }) {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(deletePost(e.target.value));
  };
  return (
    <div>
      <h5>Delete Post</h5>
      <select
        className="form-select"
        aria-label="Default select example"
        onChange={handleChange}
      >
        <option selected>Delete Post</option>
        {posts?.map(({ id, title }) => (
          <option value={id}>{title}</option>
        ))}
      </select>
    </div>
  );
}

export default Footer;
