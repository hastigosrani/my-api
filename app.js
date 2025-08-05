const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Import your recipes routes
const recipesRouter = require('./routes/recipes');

// Use the recipes routes on '/recipes' path
app.use('/recipes', recipesRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
