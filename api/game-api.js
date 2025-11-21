// Secure Backend API for Beat the Babu Game
// This runs on the server and protects Firebase credentials

require('dotenv').config();
const admin = require('firebase-admin');

// Initialize Firebase Admin SDK with service account
// Store your service account key in environment variables or secure config
let privateKey = process.env.FIREBASE_PRIVATE_KEY;

// Handle different formats of private key
if (privateKey) {
  // Remove quotes if present
  privateKey = privateKey.replace(/^["']|["']$/g, '');
  // Replace literal \n with actual newlines
  privateKey = privateKey.replace(/\\n/g, '\n');
}

const serviceAccount = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  privateKey: privateKey
};

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    });
    console.log('✅ Firebase initialized successfully');
  } catch (error) {
    console.error('❌ Firebase initialization error:', error.message);
    console.error('Project ID:', process.env.FIREBASE_PROJECT_ID);
    console.error('Client Email:', process.env.FIREBASE_CLIENT_EMAIL);
    console.error('Private Key exists:', !!process.env.FIREBASE_PRIVATE_KEY);
  }
}

const db = admin.firestore();

// Rate limiting to prevent spam
const rateLimits = new Map();
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const MAX_REQUESTS = 10;

function checkRateLimit(ip) {
  const now = Date.now();
  const userRequests = rateLimits.get(ip) || [];
  const recentRequests = userRequests.filter(time => now - time < RATE_LIMIT_WINDOW);
  
  if (recentRequests.length >= MAX_REQUESTS) {
    return false;
  }
  
  recentRequests.push(now);
  rateLimits.set(ip, recentRequests);
  return true;
}

// Validate score (server-side validation)
function validateScore(score, timeSpent) {
  // Maximum theoretical score: 90 seconds / 2 seconds per question * 20 points = ~900
  // With combos, max realistic score is around 1500
  if (score > 2000) return false;
  if (score < 0) return false;
  if (timeSpent < 10) return false; // Game must last at least 10 seconds
  return true;
}

// Profanity filter
const badWords = ['badword1', 'badword2']; // Add your list
function filterProfanity(name) {
  let filtered = name.toLowerCase();
  badWords.forEach(word => {
    const regex = new RegExp(word, 'gi');
    filtered = filtered.replace(regex, '***');
  });
  return filtered.toUpperCase();
}

module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  try {
    // GET: Fetch leaderboard
    if (req.method === 'GET') {
      console.log('📊 Fetching leaderboard...');
      const scoresRef = db.collection('scores');
      const snapshot = await scoresRef
        .orderBy('score', 'desc')
        .limit(10)
        .get();
      
      const scores = [];
      snapshot.forEach(doc => {
        const data = doc.data();
        scores.push({
          name: data.name,
          score: data.score,
          timestamp: data.createdAt
        });
      });
      
      console.log(`✅ Found ${scores.length} scores`);
      return res.status(200).json({ success: true, scores });
    }

    // POST: Submit new score
    if (req.method === 'POST') {
      // Rate limiting
      if (!checkRateLimit(clientIp)) {
        return res.status(429).json({ 
          success: false, 
          error: 'Too many requests. Please wait a minute.' 
        });
      }

      const { name, score, timeSpent, gameData } = req.body;

      // Validation
      if (!name || typeof name !== 'string' || name.length > 12 || name.length < 1) {
        return res.status(400).json({ success: false, error: 'Invalid name' });
      }

      if (typeof score !== 'number' || !validateScore(score, timeSpent)) {
        return res.status(400).json({ success: false, error: 'Invalid score' });
      }

      // Filter profanity
      const cleanName = filterProfanity(name.trim());

      // Check if score qualifies for leaderboard
      const topScoresSnapshot = await db.collection('scores')
        .orderBy('score', 'desc')
        .limit(10)
        .get();
      
      const topScores = [];
      topScoresSnapshot.forEach(doc => topScores.push(doc.data().score));
      
      const minScore = topScores.length < 10 ? 0 : topScores[topScores.length - 1];
      
      if (score <= minScore && topScores.length >= 10) {
        return res.status(200).json({ 
          success: false, 
          error: 'Score not high enough for leaderboard',
          minRequired: minScore
        });
      }

      // Save to database
      console.log(`💾 Saving score: ${cleanName} - ${score}`);
      await db.collection('scores').add({
        name: cleanName,
        score: score,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
        ip: clientIp, // For abuse tracking
        timeSpent: timeSpent
      });

      console.log('✅ Score saved successfully');
      return res.status(200).json({ success: true, message: 'Score saved!' });
    }

    return res.status(405).json({ success: false, error: 'Method not allowed' });

  } catch (error) {
    console.error('❌ API Error:', error.message);
    console.error('Full error:', error);
    return res.status(500).json({ 
      success: false, 
      error: 'Server error',
      details: error.message 
    });
  }
};
