const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


// const port = 3000;


// // 🔐 Add your API key here
// const API_KEY = 'RecipeAPIForMyApp';
// app.set('API_KEY', API_KEY); // Store in app locals

app.use(express.json());

// Test route to check server
app.get('/', (req, res) => {
  res.send('API is running');
});

// Import recipes router
const recipesRouter = require('./routes/recipes');

// Use the recipes router on /recipes path
app.use('/recipes', recipesRouter);

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
