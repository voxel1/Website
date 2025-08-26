// Run with: node server.js
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

// Global state accessible by all clients
let globalState = { isActive: true, banner: '', highlight: '' };

// Endpoint to get current state
app.get('/state', (req, res) => res.json(globalState));

// Endpoint to update state (admin panel)
app.post('/state', (req, res) => {
  const { isActive, banner, highlight } = req.body;
  if (typeof isActive === 'boolean') globalState.isActive = isActive;
  if (typeof banner === 'string') globalState.banner = banner;
  if (typeof highlight === 'string') globalState.highlight = highlight;
  res.json({ success: true, globalState });
});

// Start server
app.listen(3000, () => console.log('Admin server running on http://localhost:3000'));
