import React, { useEffect, useState } from "react";
import { updatePost, getPost } from "../Redux/Actions/postActions";
import { useDispatch, useSelector } from "react-redux";

function Header({ posts }) {
  const dispatch = useDispatch();
  const singlePost = useSelector((state) => state?.allPosts?.post);
  const [postId, setPostId] = useState();
  const [title, setTitle] = useState(singlePost?.title);
  const [author, setAuthor] = useState(singlePost?.author);
  useEffect(() => {
    if (singlePost?.title) {
      setTitle(singlePost?.title);
      setAuthor(singlePost?.author);
    }
  }, [singlePost]);
  const handleChange = (e) => {
    setPostId(e.target.value);
    dispatch(getPost(e.target.value));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updatePost(postId, { title, author }));
    setTitle("")
    setAuthor("")
  };

  return (
    <div>
      <h5>Update Title</h5>
      <select
        className="form-select mb-3"
        aria-label="Default select example"
        onChange={handleChange}
      >
        <option selected>Update Post</option>
        {posts?.map(({ id, title }) => (
          <option value={id}>{title}</option>
        ))}
      </select>
      {postId && (
        <form onSubmit={handleSubmit}>
          <div class="input-group input-group-sm mb-3">
            <span class="input-group-text" id="inputGroup-sizing-sm">
              Title
            </span>
            <input
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div class="input-group input-group-sm mb-3">
            <span class="input-group-text" id="inputGroup-sizing-sm">
              Author
            </span>
            <input
              type="text"
              value={author}
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <button type="submit" class="btn btn-primary btn-sm">
            Update Post
          </button>
        </form>
      )}
    </div>
  );
}

export default Header;
