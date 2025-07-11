const express = require('express');
const cors = require('cors'); // Allow requests from frontend
const app = express();
const PORT =process.env.PORT|| 5000;

app.use(cors()); // Allow frontend to connect
app.use(express.json());

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});
app.get('/', (req, res) => {
  res.send('Backend is running ✅');
});

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
