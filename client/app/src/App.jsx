import { Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Createblogs from "./pages/Createblogs";
import EditBlog from "./pages/EditBlog";
import Home from "./componenets/Home";
import AllBlogs from './pages/AllBlogs'
import AddCategory from "./pages/AddCategory copy";
import { ToastContainer} from 'react-toastify'
import Signout from "./pages/Signout";
import MyBlogs from "./pages/MyBlogs";
import DisplayCategory from "./pages/DisplayCategory";



function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="register" element={<Register></Register>}></Route>
        <Route path="/home" element={<Home></Home>}>
          <Route path="allblogs" element={<AllBlogs></AllBlogs>}></Route>
          <Route path="newblog" element={<Createblogs></Createblogs>}></Route>
          <Route path="myblogs" element={<MyBlogs></MyBlogs>}></Route>
          <Route path="editblog" element={<EditBlog></EditBlog>}></Route>
          <Route path="signout" element={<Signout></Signout>}></Route>
          <Route path="showcategory" element={<DisplayCategory></DisplayCategory>}></Route>
          <Route path="addcategory" element={<AddCategory></AddCategory>}></Route>
        </Route>
      </Routes>

      <ToastContainer />
      
    </div>
  );
}

export default App;
