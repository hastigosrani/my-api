const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');

// Load recipe data from JSON file
const recipes = require('./recipeData');

// Connect to the SQLite database
const db = new sqlite3.Database('./db/recipes.db', (err) => {
  if (err) {
    console.error('❌ Failed to connect to DB:', err.message);
    return;
  }
  console.log('✅ Connected to SQLite DB');
});

// Create the table if it doesn't exist
db.run(`
  CREATE TABLE IF NOT EXISTS recipes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    cuisine TEXT,
    category TEXT,
    preparationTime TEXT,
    cookingTime TEXT,
    ingredients TEXT,
    steps TEXT
  )
`, (err) => {
  if (err) {
    console.error('❌ Error creating table:', err.message);
    return;
  }

  // Clear existing recipes (optional)
  db.run('DELETE FROM recipes', (err) => {
    if (err) {
      console.error('❌ Error deleting old data:', err.message);
      return;
    }

    // Insert recipes one by one
    const insert = db.prepare(`
      INSERT INTO recipes (
        name, cuisine, category, preparationTime, cookingTime, ingredients, steps
      ) VALUES (?, ?, ?, ?, ?, ?, ?)
    `);

    recipes.forEach(recipe => {
      try {
        insert.run(
          recipe.name,
          recipe.cuisine,
          recipe.category,
          recipe.preparationTime,
          recipe.cookingTime,
          JSON.stringify(recipe.ingredients),
          JSON.stringify(recipe.steps)
        );
      } catch (err) {
        console.error('❌ Failed to insert recipe:', recipe.name, err.message);
      }
    });

    insert.finalize((err) => {
      if (err) {
        console.error('❌ Finalize error:', err.message);
      } else {
        console.log(`✅ ${recipes.length} recipes inserted successfully.`);
      }
      db.close();
    });
  });
});
