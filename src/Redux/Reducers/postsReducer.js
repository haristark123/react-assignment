const intialState = {
  posts: [],
  post: {},
};

export const postsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case "GET_ALL_POSTS":
      return { ...state, posts: payload };
    case "ADD_POST":
      return { ...state, posts: [...state.posts, payload] };
    case "UPDATE_POST":
      console.log(payload);
      let result = state.posts.filter(({ id }) => id != +payload.id);
      console.log(result);
      return { ...state, posts: [...result, payload.data] };
    case "GET_POST":
      return { ...state, post: payload };
    case "DELETE_POST":
      let resultData = state.posts.filter(({ id }) => id != +payload);
      return { ...state, posts: resultData };
    default:
      return state;
  }
};
