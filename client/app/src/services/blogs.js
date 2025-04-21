import { config } from "./config";
import axios from "axios";

export async function getMyBlogs() {
  try {
    // create the API url
    // console.log('come in')
    const url = `${config.serverUrl}/blogs/myblogs`;

    const token = sessionStorage.getItem("token");
    const full_name = sessionStorage.getItem("full_name");
    // make the POST/user/register API call
    const response = await axios.get(url, {
      headers: {
        token,
        full_name,
      },
    });

    // return the response body to the caller
    // console.log(response.data)
    return response.data;
  } catch (e) {
    console.log(`exception :`, e);
  }
}

export async function getAllBlogs() {
  try {
    // create the API url
    // console.log('come in')
    const url = `${config.serverUrl}/blogs/allblogs`;

    const token = sessionStorage.getItem("token");
    const full_name = sessionStorage.getItem("full_name");
    // make the POST/user/register API call
    const response = await axios.get(url, {
      headers: {
        token,
        full_name,
      },
    });

    // return the response body to the caller
    // console.log(response.data)
    return response.data;
  } catch (e) {
    console.log(`exception :`, e);
  }
}

export async function deleteBlogs(blogID) {
  // console.log(blogID)
  const url = `${config.serverUrl}/blogs/deleteblog/${blogID}`;

  const token = sessionStorage.getItem("token");
  const full_name = sessionStorage.getItem("full_name");

  const response = await axios.delete(url, {
    headers: {
      token,
      full_name,
    },
  });

  return response.data;
}

export async function editBlog(title, contents, category_id, blogID) {
  // console.log(blogID)
  // console.log("edit service called")
  const body = { title, contents, category_id, blogID };
  const url = `${config.serverUrl}/blogs/editblog/${blogID}`;
  console.log(body);
  const token = sessionStorage.getItem("token");
  const full_name = sessionStorage.getItem("full_name");

  const response = await axios.put(url, body, {
    headers: {
      token,
      full_name,
    },
  });

  return response.data;
}
