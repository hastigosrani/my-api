const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();

// const authMiddleware = require('../middleware/auth'); // 🔐 Import middleware

// // 🔐 Protect all routes in this file
// router.use(authMiddleware);



// Connect to DB
const db = new sqlite3.Database('./db/recipes.db');

// GET all recipes
router.get('/', (req, res) => {
  db.all('SELECT * FROM recipes', (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });

    const parsedRows = rows.map(recipe => ({
      ...recipe,
      ingredients: JSON.parse(recipe.ingredients),
      steps: JSON.parse(recipe.steps),
    }));

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(parsedRows, null, 2));
  });
});

// GET one recipe by ID
router.get('/:id', (req, res) => {
  const id = req.params.id;
  db.get('SELECT * FROM recipes WHERE id = ?', [id], (err, row) => {
    if (err) return res.status(500).json({ error: err.message });

    if (row) {
      row.ingredients = JSON.parse(row.ingredients);
      row.steps = JSON.parse(row.steps);
      res.json(row);
    } else {
      res.status(404).json({ error: 'Recipe not found' });
    }
  });
});


// GET /recipes/cuisine/:cuisine
router.get('/cuisine/:cuisine', (req, res) => {
  const { cuisine } = req.params;

  db.all('SELECT * FROM recipes WHERE cuisine = ?', [cuisine], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      const parsedRows = rows.map(row => ({
        ...row,
        ingredients: JSON.parse(row.ingredients),
        steps: JSON.parse(row.steps)
      }));
      res.json(parsedRows);
    }
  });
});

// GET /recipes/category/:category
router.get('/category/:category', (req, res) => {
  const { category } = req.params;

  db.all('SELECT * FROM recipes WHERE category = ?', [category], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      const parsedRows = rows.map(row => ({
        ...row,
        ingredients: JSON.parse(row.ingredients),
        steps: JSON.parse(row.steps)
      }));
      res.json(parsedRows);
    }
  });
});


// CREATE a new recipe
// router.post('/', (req, res) => {
//   const { name, cuisine, category, preparationTime, cookingTime, ingredients, steps } = req.body;
//   db.run(
//     `INSERT INTO recipes (name, cuisine, category, preparationTime, cookingTime, ingredients, steps)
//      VALUES (?, ?, ?, ?, ?, ?, ?)`,
//     [name, cuisine, category, preparationTime, cookingTime, JSON.stringify(ingredients), JSON.stringify(steps)],
//     function (err) {
//       if (err) return res.status(500).json({ error: err.message });
//       res.status(201).json({ id: this.lastID });
//     }
//   );
// });


// router.post('/', (req, res) => {
//   const { name, cuisine, category, preparationTime, cookingTime, ingredients, steps } = req.body;
//   db.run(
//     `INSERT INTO recipes (name, cuisine, category, preparationTime, cookingTime, ingredients, steps)
//      VALUES (?, ?, ?, ?, ?, ?, ?)`,
//     [name, cuisine, category, preparationTime, cookingTime, JSON.stringify(ingredients), JSON.stringify(steps)],
//     function (err) {
//       if (err) return res.status(500).json({ error: err.message });
      
//       // After insert, fetch the inserted recipe by lastID and return it
//       db.get('SELECT * FROM recipes WHERE id = ?', [this.lastID], (err, row) => {
//         if (err) return res.status(500).json({ error: err.message });

//         // Parse JSON fields before sending
//         if (row) {
//           row.ingredients = JSON.parse(row.ingredients);
//           row.steps = JSON.parse(row.steps);
//         }

//         res.status(201).json(row);
//       });
//     }
//   );
// });


// // UPDATE a recipe by ID
// router.put('/:id', (req, res) => {
//   const id = req.params.id;
//   const { name, cuisine, category, preparationTime, cookingTime, ingredients, steps } = req.body;
//   db.run(
//     `UPDATE recipes SET name=?, cuisine=?, category=?, preparationTime=?, cookingTime=?, ingredients=?, steps=?
//      WHERE id=?`,
//     [name, cuisine, category, preparationTime, cookingTime, JSON.stringify(ingredients), JSON.stringify(steps), id],
//     function (err) {
//       if (err) return res.status(500).json({ error: err.message });
//       this.changes ? res.json({ updated: true }) : res.status(404).json({ error: 'Recipe not found' });
//     }
//   );
// });

// // DELETE a recipe by ID
// router.delete('/:id', (req, res) => {
//   const id = req.params.id;
//   db.run('DELETE FROM recipes WHERE id=?', [id], function (err) {
//     if (err) return res.status(500).json({ error: err.message });
//     this.changes
//       ? res.json({ deleted: true })
//       : res.status(404).json({ error: 'Recipe not found' });
//   });
// });

module.exports = router;
