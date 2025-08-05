const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/recipes.db');

// Function to detect and fix [object Object] problem
function fixCorruptJson(data) {
  if (!data) return '[]';

  try {
    const parsed = JSON.parse(data);
    if (Array.isArray(parsed)) {
      return JSON.stringify(parsed.map(item =>
        typeof item === 'object' ? Object.values(item).join(', ') : item
      ));
    }
  } catch {
    // Try to clean raw string
    if (data.includes('[object Object]')) {
      return '[]';
    }

    // fallback: treat as comma separated
    return JSON.stringify(data.split(',').map(s => s.trim()).filter(Boolean));
  }
}

db.serialize(() => {
  db.all("SELECT id, ingredients, steps FROM recipes", (err, rows) => {
    if (err) return console.error("Error fetching rows:", err.message);

    rows.forEach(recipe => {
      const fixedIngredients = fixCorruptJson(recipe.ingredients);
      const fixedSteps = fixCorruptJson(recipe.steps);

      db.run(
        `UPDATE recipes SET ingredients = ?, steps = ? WHERE id = ?`,
        [fixedIngredients, fixedSteps, recipe.id],
        function (err) {
          if (err) {
            console.error(`❌ Error fixing ID ${recipe.id}:`, err.message);
          } else {
            console.log(`✅ Fixed recipe ID ${recipe.id}`);
          }
        }
      );
    });
  });
});
