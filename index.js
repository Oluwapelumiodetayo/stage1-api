const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

// Root endpoint
app.get('/', (req, res) => {
  res.status(200).json({ message: "API is running" });
});

// Health endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ message: "healthy" });
});

// Me endpoint
app.get('/me', (req, res) => {
  res.status(200).json({
    name: "Oluwapelumi Odetayo",
    email: "oluwapelumiodetayob@gmail.com",
    github: "https://github.com/Oluwapelumiodetayo"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
