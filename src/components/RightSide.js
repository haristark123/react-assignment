import React from "react";
function RightSide({ posts }) {
  return (
    <div>
      <h5>Get All Data</h5>
      <ul class="list-group">
        {posts.map(({ title }) => (
          <li class="list-group-item">{title}</li>
        ))}
      </ul>
    </div>
  );
}
export default RightSide;
