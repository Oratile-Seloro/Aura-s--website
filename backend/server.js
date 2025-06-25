import express from 'express';
import cors from 'cors';
import axios from 'axios';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.static(path.join(__dirname, '../frontend')));

// API endpoint to fetch GitHub repos
app.get('/api/github-projects', async (req, res) => {
  const githubUsername = 'Oratile-Seloro'; // <-- Replace with your GitHub username
  try {
    const response = await axios.get(`https://api.github.com/users/${githubUsername}/repos`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch GitHub projects' });
  }
});

// Fallback to index.html for SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
