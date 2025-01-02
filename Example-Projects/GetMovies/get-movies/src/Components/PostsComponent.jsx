import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import axiosClient from "../utils/axiosClient";
import config from "../config.json";
import "react-toastify/dist/ReactToastify.css";
import * as Sentry from "@sentry/react";

const PostsComponent = () => {
  const [data, setData] = useState([]);
  const [sortAsc, setSortAsc] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axiosClient.get(config.apiEndpoint);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleAdd = async () => {
    const newItem = {
      title: "New Post",
      body: "This is a new post",
      userId: 1,
    };
    try {
      const response = await axiosClient.post(config.apiEndpoint, newItem);
      setData([response.data, ...data]);
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  const sortData = () => {
    const sorted = [...data].sort((a, b) => {
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();
      return sortAsc
        ? titleA.localeCompare(titleB)
        : titleB.localeCompare(titleA);
    });
    setData(sorted);
    setSortAsc(!sortAsc);
  };

  const handleUpdate = async (item) => {
    console.log(`Update item with ID: ${item.id}`);

    // Clone and modify the item
    const updatedItem = { ...item, title: "Updated" };

    try {
      const response = await axiosClient.put(
        `${config.apiEndpoint}/${item.id}`,
        updatedItem
      );
      const updatedData = response.data;

      // Update local state
      const items = [...data];
      const index = items.findIndex((i) => i.id === item.id);
      if (index !== -1) {
        items[index] = updatedData;
        setData(items);
      }
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  const handleDelete = async (id) => {
    const originalItems = data;

    // Optimistically update UI
    setData(data.filter((item) => item.id !== id));

    try {
      const response = await axiosClient.delete(`/posts/${id}`);

      if (response.status !== 200 && response.status !== 204) {
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      // Restore original data on failure
      setData(originalItems);
      // Error messages already handled by interceptor
    }
  };

  return (
    <div>
      <ToastContainer />
      <h2>Posts Table</h2>
      <button className="btn btn-info " onClick={handleAdd}>
        Add
      </button>
      <button className="btn btn-secondary mx-4" onClick={sortData}>
        Sort by Title {sortAsc ? "🔼" : "🔽"}
      </button>
      <button
        onClick={() => {
          throw new Error("This is your first error!");
        }}
      >
        Break the world
      </button>
      <table
        border="1"
        cellPadding="10"
        style={{ marginTop: "10px", width: "100%" }}
      >
        <thead>
          <tr>
            <th>Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => handleUpdate(item)}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(item.id)}
                  style={{ marginLeft: "10px" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostsComponent;
