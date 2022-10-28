import "./App.css";
import Header from "./components/Header";
import LeftSide from "./components/LeftSide";
import Footer from "./components/Footer";
import Main from "./components/Main";
import RightSide from "./components/RightSide";
import { useEffect } from "react";
import {useSelector,useDispatch} from 'react-redux'
import {getAllPosts} from './Redux/Actions/postActions'

function App() {
  const dispatch = useDispatch()
  const posts=useSelector(state=>state.allPosts.posts)
  useEffect(() => {
   dispatch(getAllPosts())
  }, [dispatch]);
 console.log(posts)
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 d-flex justify-content-center mt-1">
          <Header posts={posts} />
        </div>
      </div>
      <div className="row" style={{ height: "70vh" }}>
        <div className="col-md-4 text-center mt-3">
          <LeftSide posts={posts} />
        </div>
        <div className="col-md-4 text-center mt-3">
          <Main />
        </div>
        <div className="col-md-4 text-center mt-3">
          <RightSide posts={posts} />
        </div>
      </div>
      <div className="row">
        <div className="col-12 d-flex justify-content-center mb-2">
          <Footer posts={posts} />
        </div>
      </div>
    </div>
  );
}

export default App;
