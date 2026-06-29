const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(__dirname));

// Health check endpoint
app.get('/', (req, res) => {
  res.redirect('/article.html');
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log(`📚 Article page: http://localhost:${PORT}/article.html`);
  console.log(`🌟 Sample page: http://localhost:${PORT}/sample.html`);
});
