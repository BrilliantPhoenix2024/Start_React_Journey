import React, { useEffect, useState } from "react";
import axios from "axios";

const PostsComponent = () => {
  const [data, setData] = useState([]);
  const [sortAsc, setSortAsc] = useState(true);

  // API endpoint
  const API_URL = "http://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL);
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
      const response = await axios.post(API_URL, newItem);
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
      const response = await axios.put(`${API_URL}/${item.id}`, updatedItem);
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

    // Optimistically remove item from UI
    setData(data.filter((item) => item.id !== id));

    try {
      const response = await axios.delete(`${API_URL}/${id}`);

      // Optional: check for successful status
      if (response.status !== 200 && response.status !== 204) {
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      // Restore original data
      setData(originalItems);

      // Expected error: server responded with a known issue
      if (error.response) {
        const status = error.response.status;

        if (status === 404) {
          alert("Item not found. It may have already been deleted.");
        } else if (status === 403) {
          alert("You don't have permission to delete this item.");
        } else {
          alert(`Server error: ${status}`);
        }

        console.error("Expected error:", error.response.data);

        // Unexpected error: no response from server
      } else if (error.request) {
        alert("Network error. Please check your connection.");
        console.error("Unexpected error: No response received", error.request);

        // Something else went wrong
      } else {
        alert("An unexpected error occurred.");
        console.error("Unexpected error:", error.message);
      }
    }
  };

  return (
    <div>
      <h2>Posts Table</h2>
      <button className="btn btn-info " onClick={handleAdd}>
        Add
      </button>
      <button className="btn btn-secondary mx-4" onClick={sortData}>
        Sort by Title {sortAsc ? "🔼" : "🔽"}
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
