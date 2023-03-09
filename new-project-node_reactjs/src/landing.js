import React, { useState, useEffect } from 'react';

const Data = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch('/data')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      <p>ID: {data.id}</p>
      <p>Age: {data.age}</p>
      <p>name:{data.name}</p>
    </div>
  );
};

export default Data;
