import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="tabs">
        <ul className="navbar-nav mynav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/home/newblog">New Blogs</Link>
          </li>
          <li className="nav-item">
            <Link to="/home/allblogs">All Blogs</Link>
          </li>
          <li className="nav-item">
            <Link to="/home/myblogs">My Blogs</Link>
          </li>
          <li className="nav-item">
            <Link to="/home/allblogs">Find Blogs</Link>
          </li>
          <li className="nav-item">
            <Link to="/home/addcategory">Add Category</Link>
          </li>
          <li className="nav-item">
            <Link to="/home/showcategory">Show Category</Link>
          </li>
          <li className="nav-item">
            <Link to="/home/signout">Sign Out</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
