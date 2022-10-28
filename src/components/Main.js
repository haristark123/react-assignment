import React, { useState } from "react";
import { addPost } from "../Redux/Actions/postActions";
import { useDispatch } from "react-redux";
function Main() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost({ id: ~~(Math.random() * 50), title, author }));
    setTitle("");
    setAuthor("");
  };
  return (
    <div>
      <h5>Create Post</h5>
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
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div class="input-group input-group-sm mb-3">
          <span class="input-group-text" id="inputGroup-sizing-sm">
            Author
          </span>
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button type="submit" class="btn btn-primary btn-sm">
          Add Post
        </button>
      </form>
    </div>
  );
}

export default Main;
