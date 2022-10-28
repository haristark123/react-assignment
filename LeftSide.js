import React,{useState} from "react";
import { getPost } from "../Redux/Actions/postActions";
import { useDispatch, useSelector } from "react-redux";

function LeftSide({ posts }) {
  const singlePost = useSelector((state) => state?.allPosts?.post);
  const [open,setOpen] = useState(false)
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(getPost(e.target.value));
    setOpen(true)
  };

  return (
    <div>
      <h5>Get Title by Id</h5>
      <select
        className="form-select"
        aria-label="Default select example"
        onChange={handleChange}
      >
        <option selected>Update Post</option>
        {posts?.map(({ id, title }) => (
          <option value={id}>{title}</option>
        ))}
      </select>
      {singlePost?.title && open &&(
        <ul class="list-group mt-3">
          <li class="list-group-item">{singlePost?.title}</li>
          <li class="list-group-item">{singlePost?.author}</li>
        </ul>
      )}
    </div>
  );
}

export default LeftSide;
