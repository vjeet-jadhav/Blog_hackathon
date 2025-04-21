import React, { useEffect, useState } from "react";
import { deleteCategory, getCategories } from "../services/category";
import { toast } from "react-toastify";

function DisplayCategory() {
  // create a state member for task list
  const [categoryList, setCategoryList] = useState([]);

  // get all tasks created by the user
  // console.log(categoryList)
  const getUserCategories = async () => {
    const result = await getCategories();
    if (result["status"] == "success") {
      setCategoryList(result["data"]);
    } else {
      toast.error(result["error"]);
    }
  };

  // take an action when the component is mounted
  useEffect(() => {
    // console.log(`TaskList is mounted`)
    getUserCategories();

    return () => {
      //   console.log(`TaskList is unmounted`)
    };
  }, []);

  const onDeleteCategory = async (id) => {
    // console.log(id)
    const result = await deleteCategory(id);
    if (result["status"] == "success") {
      toast.success("Successfully deleted the task");

      // refresh the screen
    //   console.log(result.data)
      getUserCategories();
    } else {
      toast.error(result["error"]);
    }
  };

  return (
    <div>
      <h1 className="page-header">Category List</h1>
      <hr />
      <br />
      <br />
      <div className="container">
        {categoryList.length == 0 && (
          <h4>There are not task at the moment. Please add a new task.</h4>
        )}

        {categoryList.length > 0 && (
          <table className="table table-stripped">
            <thead>
              <tr>
                <th>No</th>
                <th>Title</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {categoryList.map((cat, index) => {
                return (
                  <tr key={cat["id"]}>
                    <td>{index + 1}</td>
                    <td>{cat["title"]}</td>
                    <td>{cat["description"]}</td>
                    <td>
                      <button
                        onClick={() => {
                          onDeleteCategory(cat['category_id']);
                        }}
                        className="btn btn-danger btn-sm"
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default DisplayCategory;
