import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get('/api/data/:id/:age');
    setData(response.data);
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Data with ID 1 and age 1</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Age</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.id}</td>
            <td>{data.age}</td>
            <td>{data.name}</td>
            <td>{data.email}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )}
  export default App
