// Local Development Server for Beat the Babu API
// Run this for local testing: node api/local-server.js

const http = require('http');
const gameAPI = require('./game-api');

const PORT = 3001;

const server = http.createServer(async (req, res) => {
  // Parse request body for POST requests
  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', async () => {
      try {
        req.body = JSON.parse(body);
      } catch (e) {
        req.body = {};
      }
      await gameAPI(req, res);
    });
  } else {
    await gameAPI(req, res);
  }
});

server.listen(PORT, () => {
  console.log(`🎮 Beat the Babu API running on http://localhost:${PORT}`);
  console.log(`📝 Make sure you have .env file with Firebase credentials`);
  console.log(`\nTest endpoints:`);
  console.log(`  GET  http://localhost:${PORT}  - Get leaderboard`);
  console.log(`  POST http://localhost:${PORT}  - Submit score`);
});
