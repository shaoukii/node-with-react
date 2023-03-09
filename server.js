const express = require('express');
const app = express();

app.get('/api/data/:id/:age', (req, res) => {
  const id = req.params.id;
  const age = req.params.age;
  
  // Fetch the data with the specified ID and age
  const data = fetchData(id, age);

  res.json(data);
});


function fetchData(id, age) {
  // Use a database or other data source to fetch the data with the specified ID and age
  // For now, just return a sample object
  return { id: 1, age: 1, name: 'chawki', email: 'sallemishaouki@gmail.com' };
}

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
