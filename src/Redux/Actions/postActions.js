import { request } from "../../CustomHooks/useFetch";

export const getAllPosts = () => async (dispatch) => {
  const data = await request("GET", "http://localhost:3000/posts");
  dispatch({ type: "GET_ALL_POSTS", payload: data });
};

export const addPost = (body) => async (dispatch) => {
  const data = await request("POST", "http://localhost:3000/posts", body);
  dispatch({ type: "ADD_POST", payload: data });
};

export const updatePost = (id, body) => async (dispatch) => {
  const data = await request("PUT", `http://localhost:3000/posts/${id}`, body);
  dispatch({ type: "UPDATE_POST", payload: { data: data, id: id } });
};
export const getPost = (id,type) => async (dispatch) => {
//   if (id === '') {
//     return dispatch({ type, payload: {} });
//   }
  const data = await request("GET", `http://localhost:3000/posts/${id}`);
  dispatch({ type, payload: data });
};

export const deletePost = (id) => async (dispatch) => {
  console.log(id);
  const data = await request("DELETE", `http://localhost:3000/posts/${id}`);
  const resultData = await request("GET", "http://localhost:3000/posts");
  // dispatch({ type: "DELETE_POST",payload:id});
  dispatch({ type: "DELETE_POST", payload: resultData });
};
