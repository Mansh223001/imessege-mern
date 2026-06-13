import express from 'express';

import "dotenv/config";


const app = express();

const PORT = process.env.PORT || 3000;

const DB_URL = process.env.DB_URL;
console.log('Database URL:', DB_URL);

app.get('/', (req, res) => {
  res.send('Hello World!, This is the backend server.😉😮‍💨');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});