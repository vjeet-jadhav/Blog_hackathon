import React from "react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getAllBlogs } from "../services/blogs";
import { deleteBlogs } from "../services/blogs";

function AllBlogs() {
  const [blogs, setBlogs] = useState([]);

  const getBlogs = async () => {
    const result = await getAllBlogs();

    if (result.status == "success") {
      setBlogs(result.data);
      // console.log(result.data)
    } else {
      toast.error(result.error);
    }
  };

  const onDeleteBlog = async (blogID)=>{
     const result = await deleteBlogs(blogID)

     if(result.status == 'success'){
      toast.success('Blog deleted successfully')
     }else{
      toast.error('Failed to delete blog.')
     }
     
  }
  useEffect(() => {
    getBlogs(), [];
  });

  return (
    <div className=" container mytable">
      <h1 className="page-heder">All blogs are here..</h1>
      <hr />
      <br />
      {blogs.length == 0 && (
        <h4>there are no blogs at the moment , please add one.</h4>
      )}
      {blogs.length > 0 && (
        <table className="table w-100 table-stripped">
          <thead className="thead">
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Contents</th>
              <th>Category</th>
              <th>Date</th>
              {/* <th>Author</th> */}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog,index) => {
              return (
                <tr key={blog.id}>
                  {/* <td>{blog.blogID}</td> */}
                  <td>{index + 1}</td>
                  <td>{blog.b_title}</td>
                  <td>{blog.contents }</td>
                  <td>{blog.c_title}</td>
                  <td>{blog.created_time}</td>
                  <td>
                    <button
                      onClick={() => {
                        onDeleteBlog(blog.blogID);
                      }}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AllBlogs;
