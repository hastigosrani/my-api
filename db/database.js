const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const db = new sqlite3.Database(path.resolve(__dirname, 'recipes.db'), (err) => {
  if (err) return console.error("❌ DB Connection Error:", err.message);
  console.log('✅ Connected to SQLite database.');
});

// Create table if it doesn't exist
db.run(`
  CREATE TABLE IF NOT EXISTS recipes (
    id INTEGER PRIMARY KEY,
    name TEXT,
    cuisine TEXT,
    category TEXT,
    preparationTime TEXT,
    cookingTime TEXT,
    ingredients TEXT,
    steps TEXT
  )
`);


module.exports = db;
