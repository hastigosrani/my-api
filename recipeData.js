// db/recipeData.js

const recipes = [
  {
    id: 1,
    name: "Gujarati Dal",
    cuisine: "Indian",
    category: "Main Course",
    preparationTime: "10 mins",
    cookingTime: "25 mins",
    ingredients: [
      { name: "Toor dal", quantity: "1 cup" },
      { name: "Turmeric powder", quantity: "1/2 tsp" },
      { name: "Salt", quantity: "to taste" },
      { name: "Water", quantity: "3 cups" },
      { name: "Oil", quantity: "1 tbsp" },
      { name: "Mustard seeds", quantity: "1 tsp" },
      { name: "Curry leaves", quantity: "8-10" }
    ],
    steps: [
      "Wash and soak toor dal for 30 minutes.",
      "Pressure cook dal with turmeric and water for 3-4 whistles.",
      "Heat oil, add mustard seeds and curry leaves for tempering.",
      "Add tempering to cooked dal, mix well and simmer for 5 minutes.",
      "Add salt to taste and serve hot."
    ]
  },
  {
    id: 2,
    name: "Paneer Butter Masala",
    cuisine: "Indian",
    category: "Main Course",
    preparationTime: "15 mins",
    cookingTime: "30 mins",
    ingredients: [
      { name: "Paneer", quantity: "200 g" },
      { name: "Tomato puree", quantity: "1 cup" },
      { name: "Butter", quantity: "2 tbsp" },
      { name: "Cream", quantity: "1/4 cup" },
      { name: "Ginger garlic paste", quantity: "1 tsp" },
      { name: "Kasuri methi", quantity: "1 tsp" },
      { name: "Salt", quantity: "to taste" }
    ],
    steps: [
      "Heat butter and sauté ginger garlic paste.",
      "Add tomato puree and cook until oil separates.",
      "Add paneer cubes, cream, kasuri methi and salt.",
      "Simmer for 10 minutes and serve."
    ]
  },
  {
    id: 3,
    name: "Vegetable Fried Rice",
    cuisine: "Chinese",
    category: "Main Course",
    preparationTime: "10 mins",
    cookingTime: "15 mins",
    ingredients: [
      { name: "Cooked rice", quantity: "2 cups" },
      { name: "Mixed vegetables (carrot, peas, beans)", quantity: "1 cup" },
      { name: "Soy sauce", quantity: "2 tbsp" },
      { name: "Oil", quantity: "2 tbsp" },
      { name: "Garlic (chopped)", quantity: "1 tsp" },
      { name: "Spring onions", quantity: "2 tbsp" },
      { name: "Salt", quantity: "to taste" }
    ],
    steps: [
      "Heat oil and sauté garlic.",
      "Add mixed vegetables and stir fry for 5 minutes.",
      "Add cooked rice and soy sauce, mix well.",
      "Cook for 5 more minutes, garnish with spring onions and serve."
    ]
  },
  {
    id: 4,
    name: "Masoor Dal",
    cuisine: "Indian",
    category: "Main Course",
    preparationTime: "10 mins",
    cookingTime: "20 mins",
    ingredients: [
      { name: "Masoor dal", quantity: "1 cup" },
      { name: "Onion", quantity: "1 medium, chopped" },
      { name: "Tomato", quantity: "1 medium, chopped" },
      { name: "Garlic", quantity: "2 cloves" },
      { name: "Turmeric powder", quantity: "1/2 tsp" },
      { name: "Salt", quantity: "to taste" },
      { name: "Oil", quantity: "1 tbsp" },
      { name: "Cumin seeds", quantity: "1 tsp" }
    ],
    steps: [
      "Wash and soak masoor dal for 20 minutes.",
      "Pressure cook with turmeric and water for 3 whistles.",
      "Heat oil, add cumin seeds, garlic, onion, and tomato. Cook until soft.",
      "Add cooked dal, salt, and simmer for 5 minutes.",
      "Serve hot with rice or roti."
    ]
  },
  {
    id: 5,
    name: "Vegetable Pulao",
    cuisine: "Indian",
    category: "Main Course",
    preparationTime: "15 mins",
    cookingTime: "25 mins",
    ingredients: [
      { name: "Basmati rice", quantity: "1 cup" },
      { name: "Mixed vegetables (carrot, peas, beans)", quantity: "1 cup" },
      { name: "Onion", quantity: "1 medium, sliced" },
      { name: "Green chili", quantity: "1, slit" },
      { name: "Ginger garlic paste", quantity: "1 tsp" },
      { name: "Cumin seeds", quantity: "1 tsp" },
      { name: "Salt", quantity: "to taste" },
      { name: "Oil", quantity: "2 tbsp" },
      { name: "Water", quantity: "2 cups" }
    ],
    steps: [
      "Wash rice and soak for 20 minutes.",
      "Heat oil, add cumin seeds and green chili.",
      "Add onions and ginger garlic paste, sauté until golden.",
      "Add vegetables and cook for 5 minutes.",
      "Add drained rice, salt, and water. Cook until rice is done.",
      "Fluff with fork and serve."
    ]
  },
  {
    id: 6,
    name: "Chole Masala",
    cuisine: "Indian",
    category: "Main Course",
    preparationTime: "15 mins",
    cookingTime: "45 mins",
    ingredients: [
      { name: "Chickpeas (chole)", quantity: "1 cup" },
      { name: "Onion", quantity: "1 large, chopped" },
      { name: "Tomato", quantity: "2 medium, pureed" },
      { name: "Ginger garlic paste", quantity: "1 tbsp" },
      { name: "Chole masala powder", quantity: "2 tbsp" },
      { name: "Oil", quantity: "3 tbsp" },
      { name: "Salt", quantity: "to taste" },
      { name: "Water", quantity: "3 cups" },
      { name: "Cumin seeds", quantity: "1 tsp" }
    ],
    steps: [
      "Soak chickpeas overnight and pressure cook till soft.",
      "Heat oil, add cumin seeds, onions and sauté till golden.",
      "Add ginger garlic paste and cook for 2 minutes.",
      "Add tomato puree, chole masala, and salt. Cook till oil separates.",
      "Add cooked chickpeas and water, simmer for 20 minutes.",
      "Serve hot with rice or bhature."
    ]
  },
  {
    id: 7,
    name: "Palak Paneer",
    cuisine: "Indian",
    category: "Main Course",
    preparationTime: "15 mins",
    cookingTime: "30 mins",
    ingredients: [
      { name: "Spinach (palak)", quantity: "200 g" },
      { name: "Paneer", quantity: "150 g" },
      { name: "Onion", quantity: "1 medium" },
      { name: "Tomato", quantity: "1 medium" },
      { name: "Ginger garlic paste", quantity: "1 tsp" },
      { name: "Cream", quantity: "2 tbsp" },
      { name: "Oil", quantity: "2 tbsp" },
      { name: "Salt", quantity: "to taste" },
      { name: "Cumin seeds", quantity: "1 tsp" }
    ],
    steps: [
      "Blanch spinach and grind into a smooth paste.",
      "Heat oil, add cumin seeds, onions and sauté.",
      "Add ginger garlic paste and tomatoes, cook till soft.",
      "Add spinach paste and cook for 5 minutes.",
      "Add paneer cubes, cream, salt and simmer for 5 minutes.",
      "Serve hot with roti or rice."
    ]
  },
  {
    id: 8,
    name: "Tomato Soup",
    cuisine: "Continental",
    category: "Soup",
    preparationTime: "10 mins",
    cookingTime: "20 mins",
    ingredients: [
      { name: "Tomatoes", quantity: "4 large" },
      { name: "Onion", quantity: "1 small" },
      { name: "Garlic", quantity: "2 cloves" },
      { name: "Butter", quantity: "2 tbsp" },
      { name: "Salt", quantity: "to taste" },
      { name: "Pepper powder", quantity: "1/2 tsp" },
      { name: "Cream", quantity: "2 tbsp" },
      { name: "Water", quantity: "2 cups" }
    ],
    steps: [
      "Chop tomatoes, onions, and garlic.",
      "Heat butter, sauté onions and garlic until translucent.",
      "Add tomatoes and cook until soft.",
      "Add water, salt, and pepper, boil for 10 minutes.",
      "Blend until smooth, add cream, and simmer for 5 minutes.",
      "Serve hot."
    ]
  },
  {
    id: 9,
    name: "Masala Dosa",
    cuisine: "South Indian",
    category: "Breakfast",
    preparationTime: "8 hrs (fermentation)",
    cookingTime: "30 mins",
    ingredients: [
      { name: "Rice", quantity: "2 cups" },
      { name: "Urad dal", quantity: "1/2 cup" },
      { name: "Potato", quantity: "3 medium" },
      { name: "Onion", quantity: "1 medium" },
      { name: "Green chili", quantity: "2" },
      { name: "Mustard seeds", quantity: "1 tsp" },
      { name: "Curry leaves", quantity: "8-10" },
      { name: "Oil", quantity: "2 tbsp" },
      { name: "Salt", quantity: "to taste" }
    ],
    steps: [
      "Soak rice and urad dal separately for 4-5 hours.",
      "Grind and ferment overnight for dosa batter.",
      "Boil potatoes, mash and sauté with onions, mustard seeds, green chili, and curry leaves for filling.",
      "Heat a pan, pour batter, spread thin, add filling and fold.",
      "Serve hot with chutney and sambar."
    ]
  },
  {
    id: 10,
    name: "Vegetable Manchurian",
    cuisine: "Chinese",
    category: "Snack",
    preparationTime: "20 mins",
    cookingTime: "25 mins",
    ingredients: [
      { name: "Cabbage", quantity: "1 cup shredded" },
      { name: "Carrot", quantity: "1 cup grated" },
      { name: "Capsicum", quantity: "1/2 cup chopped" },
      { name: "All-purpose flour", quantity: "1/2 cup" },
      { name: "Cornflour", quantity: "1/4 cup" },
      { name: "Soy sauce", quantity: "2 tbsp" },
      { name: "Garlic", quantity: "1 tsp chopped" },
      { name: "Oil", quantity: "for frying" },
      { name: "Salt", quantity: "to taste" }
    ],
    steps: [
      "Mix vegetables, flours, salt, and form small balls.",
      "Deep fry balls until golden brown, drain on paper towels.",
      "Prepare sauce with garlic, soy sauce, and water.",
      "Add fried balls to sauce, cook for 5 minutes.",
      "Serve hot as appetizer or snack."
    ]
  },
  {
    id: 11,
    name: "Aloo Gobi",
    cuisine: "Indian",
    category: "Main Course",
    preparationTime: "15 mins",
    cookingTime: "25 mins",
    ingredients: [
      { name: "Potatoes", quantity: "2 medium, diced" },
      { name: "Cauliflower", quantity: "1 medium, chopped" },
      { name: "Onion", quantity: "1 medium, chopped" },
      { name: "Tomato", quantity: "1 medium, chopped" },
      { name: "Ginger garlic paste", quantity: "1 tsp" },
      { name: "Turmeric powder", quantity: "1/2 tsp" },
      { name: "Red chili powder", quantity: "1 tsp" },
      { name: "Oil", quantity: "2 tbsp" },
      { name: "Salt", quantity: "to taste" }
    ],
    steps: [
      "Heat oil, sauté onions and ginger garlic paste.",
      "Add tomatoes and spices, cook till oil separates.",
      "Add potatoes and cauliflower, mix well.",
      "Cover and cook on low flame until vegetables are tender.",
      "Serve hot."
    ]
  },
  {
    id: 12,
    name: "Rajma Masala",
    cuisine: "Indian",
    category: "Main Course",
    preparationTime: "10 mins",
    cookingTime: "45 mins",
    ingredients: [
      { name: "Kidney beans (rajma)", quantity: "1 cup" },
      { name: "Onion", quantity: "1 large, chopped" },
      { name: "Tomato", quantity: "2 medium, pureed" },
      { name: "Ginger garlic paste", quantity: "1 tbsp" },
      { name: "Oil", quantity: "3 tbsp" },
      { name: "Cumin seeds", quantity: "1 tsp" },
      { name: "Salt", quantity: "to taste" },
      { name: "Water", quantity: "3 cups" }
    ],
    steps: [
      "Soak rajma overnight and pressure cook until soft.",
      "Heat oil, add cumin seeds, onions and sauté till golden.",
      "Add ginger garlic paste, tomato puree and cook till oil separates.",
      "Add cooked rajma, salt and water, simmer for 20 minutes.",
      "Serve hot with rice."
    ]
  },
  {
    id: 13,
    name: "Idli",
    cuisine: "South Indian",
    category: "Breakfast",
    preparationTime: "8 hrs (fermentation)",
    cookingTime: "15 mins",
    ingredients: [
      { name: "Rice", quantity: "2 cups" },
      { name: "Urad dal", quantity: "1 cup" },
      { name: "Fenugreek seeds", quantity: "1 tsp" },
      { name: "Salt", quantity: "to taste" }
    ],
    steps: [
      "Soak rice and urad dal separately for 4-5 hours.",
      "Grind to a smooth batter, mix and ferment overnight.",
      "Add salt and steam in idli molds for 15 minutes.",
      "Serve hot with chutney and sambar."
    ]
  },
  {
    id: 14,
    name: "Sambar",
    cuisine: "South Indian",
    category: "Main Course",
    preparationTime: "10 mins",
    cookingTime: "30 mins",
    ingredients: [
      { name: "Toor dal", quantity: "1 cup" },
      { name: "Mixed vegetables", quantity: "1 cup" },
      { name: "Tamarind paste", quantity: "2 tbsp" },
      { name: "Sambar powder", quantity: "2 tbsp" },
      { name: "Mustard seeds", quantity: "1 tsp" },
      { name: "Curry leaves", quantity: "10" },
      { name: "Oil", quantity: "2 tbsp" },
      { name: "Salt", quantity: "to taste" }
    ],
    steps: [
      "Cook toor dal until soft.",
      "Cook vegetables separately.",
      "Heat oil, add mustard seeds and curry leaves for tempering.",
      "Add tamarind paste and sambar powder to dal.",
      "Add cooked vegetables and tempering, simmer for 10 minutes.",
      "Serve hot with idli or dosa."
    ]
  },
  {
    id: 15,
    name: "Upma",
    cuisine: "South Indian",
    category: "Breakfast",
    preparationTime: "5 mins",
    cookingTime: "15 mins",
    ingredients: [
      { name: "Semolina (rava)", quantity: "1 cup" },
      { name: "Mustard seeds", quantity: "1 tsp" },
      { name: "Green chili", quantity: "1 chopped" },
      { name: "Ginger", quantity: "1 tsp grated" },
      { name: "Curry leaves", quantity: "10" },
      { name: "Onion", quantity: "1 small chopped" },
      { name: "Water", quantity: "2.5 cups" },
      { name: "Oil", quantity: "2 tbsp" },
      { name: "Salt", quantity: "to taste" }
    ],
    steps: [
      "Roast semolina until light golden and keep aside.",
      "Heat oil, add mustard seeds, green chili, ginger, curry leaves and onions.",
      "Add water and salt, bring to boil.",
      "Slowly add semolina, stirring continuously to avoid lumps.",
      "Cook for 5 minutes till water is absorbed.",
      "Serve hot."
    ]
  },
  {
    id: 16,
    name: "Vegetable Biryani",
    cuisine: "Indian",
    category: "Main Course",
    preparationTime: "20 mins",
    cookingTime: "40 mins",
    ingredients: [
      { name: "Basmati rice", quantity: "2 cups" },
      { name: "Mixed vegetables", quantity: "1.5 cups" },
      { name: "Onion", quantity: "1 large sliced" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Biryani masala", quantity: "2 tbsp" },
      { name: "Mint leaves", quantity: "1/4 cup" },
      { name: "Coriander leaves", quantity: "1/4 cup" },
      { name: "Oil", quantity: "3 tbsp" },
      { name: "Salt", quantity: "to taste" }
    ],
    steps: [
      "Wash and soak rice for 30 minutes.",
      "Heat oil, fry onions until golden.",
      "Add vegetables, yogurt, spices and cook for 10 minutes.",
      "Layer rice and vegetables, garnish with mint and coriander.",
      "Cook on low heat (dum) for 20 minutes.",
      "Serve hot with raita."
    ]
  },
  {
    id: 17,
    name: "Rajma Chawal",
    cuisine: "Indian",
    category: "Main Course",
    preparationTime: "15 mins",
    cookingTime: "45 mins",
    ingredients: [
      { name: "Kidney beans", quantity: "1 cup" },
      { name: "Basmati rice", quantity: "1 cup" },
      { name: "Onion", quantity: "1 large, chopped" },
      { name: "Tomato", quantity: "2 medium, pureed" },
      { name: "Ginger garlic paste", quantity: "1 tbsp" },
      { name: "Oil", quantity: "3 tbsp" },
      { name: "Salt", quantity: "to taste" },
      { name: "Water", quantity: "3 cups" }
    ],
    steps: [
      "Soak kidney beans overnight and pressure cook till soft.",
      "Cook rice separately and keep aside.",
      "Heat oil, sauté onions, ginger garlic paste, and tomato puree.",
      "Add cooked kidney beans and simmer for 20 minutes.",
      "Serve rajma with hot rice."
    ]
  },
  {
    id: 18,
    name: "Dhokla",
    cuisine: "Gujarati",
    category: "Snack",
    preparationTime: "10 mins",
    cookingTime: "20 mins",
    ingredients: [
      { name: "Gram flour (besan)", quantity: "1 cup" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Eno fruit salt", quantity: "1 tsp" },
      { name: "Green chili", quantity: "1 chopped" },
      { name: "Ginger", quantity: "1 tsp grated" },
      { name: "Mustard seeds", quantity: "1 tsp" },
      { name: "Curry leaves", quantity: "10" },
      { name: "Sugar", quantity: "1 tsp" },
      { name: "Salt", quantity: "to taste" },
      { name: "Oil", quantity: "2 tbsp" }
    ],
    steps: [
      "Mix besan, yogurt, sugar, salt, green chili, and ginger into a smooth batter.",
      "Add Eno just before steaming and mix gently.",
      "Pour batter into a greased tray and steam for 15-20 minutes.",
      "Heat oil, add mustard seeds and curry leaves for tempering and pour on top.",
      "Cut into pieces and serve."
    ]
  },
  {
    id: 19,
    name: "Pav Bhaji",
    cuisine: "Indian",
    category: "Street Food",
    preparationTime: "15 mins",
    cookingTime: "30 mins",
    ingredients: [
      { name: "Potatoes", quantity: "3 medium" },
      { name: "Tomatoes", quantity: "4 medium" },
      { name: "Green peas", quantity: "1/2 cup" },
      { name: "Onion", quantity: "1 large" },
      { name: "Ginger garlic paste", quantity: "1 tbsp" },
      { name: "Pav bhaji masala", quantity: "2 tbsp" },
      { name: "Butter", quantity: "3 tbsp" },
      { name: "Salt", quantity: "to taste" },
      { name: "Pav buns", quantity: "8" }
    ],
    steps: [
      "Boil potatoes, tomatoes, peas till soft.",
      "Mash vegetables and cook with onion, ginger garlic paste, pav bhaji masala and salt.",
      "Cook till thick and well combined.",
      "Toast pav buns with butter.",
      "Serve bhaji with buttered pav."
    ]
  },
  {
    id: 20,
    name: "Methi Thepla",
    cuisine: "Gujarati",
    category: "Snack",
    preparationTime: "15 mins",
    cookingTime: "20 mins",
    ingredients: [
      { name: "Whole wheat flour", quantity: "2 cups" },
      { name: "Fresh fenugreek leaves (methi)", quantity: "1 cup chopped" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Turmeric powder", quantity: "1/2 tsp" },
      { name: "Red chili powder", quantity: "1 tsp" },
      { name: "Salt", quantity: "to taste" },
      { name: "Oil", quantity: "2 tbsp" }
    ],
    steps: [
      "Mix all ingredients and knead into a soft dough.",
      "Roll out into thin circles.",
      "Cook on hot griddle with oil until golden brown on both sides.",
      "Serve with yogurt or pickle."
    ]
  },
  {
    id: 21,
    name: "Rava Kesari",
    cuisine: "Indian",
    category: "Dessert",
    preparationTime: "5 mins",
    cookingTime: "15 mins",
    ingredients: [
      { name: "Semolina (rava)", quantity: "1 cup" },
      { name: "Sugar", quantity: "1 cup" },
      { name: "Ghee", quantity: "3 tbsp" },
      { name: "Water", quantity: "2 cups" },
      { name: "Saffron", quantity: "a few strands" },
      { name: "Cashews", quantity: "10" },
      { name: "Raisins", quantity: "10" }
    ],
    steps: [
      "Heat ghee, roast semolina until fragrant.",
      "Boil water with saffron and add to semolina slowly while stirring.",
      "Add sugar, cook until mixture thickens.",
      "Add fried cashews and raisins.",
      "Serve warm."
    ]
  },
  {
    id: 22,
    name: "Veg Hakka Noodles",
    cuisine: "Chinese",
    category: "Main Course",
    preparationTime: "10 mins",
    cookingTime: "15 mins",
    ingredients: [
      { name: "Hakka noodles", quantity: "200 g" },
      { name: "Mixed vegetables (carrots, cabbage, capsicum)", quantity: "1 cup" },
      { name: "Soy sauce", quantity: "2 tbsp" },
      { name: "Garlic", quantity: "1 tsp chopped" },
      { name: "Oil", quantity: "2 tbsp" },
      { name: "Salt", quantity: "to taste" },
      { name: "Spring onions", quantity: "2 tbsp chopped" }
    ],
    steps: [
      "Cook noodles according to package instructions and drain.",
      "Heat oil, sauté garlic and vegetables for 5 minutes.",
      "Add noodles, soy sauce and salt, toss well.",
      "Garnish with spring onions and serve hot."
    ]
  },
  {
    id: 23,
    name: "Corn Pulao",
    cuisine: "Indian",
    category: "Main Course",
    preparationTime: "10 mins",
    cookingTime: "20 mins",
    ingredients: [
      { name: "Basmati rice", quantity: "1 cup" },
      { name: "Corn kernels", quantity: "1 cup" },
      { name: "Onion", quantity: "1 medium" },
      { name: "Green chili", quantity: "1" },
      { name: "Cumin seeds", quantity: "1 tsp" },
      { name: "Oil", quantity: "2 tbsp" },
      { name: "Salt", quantity: "to taste" },
      { name: "Water", quantity: "2 cups" }
    ],
    steps: [
      "Wash and soak rice for 20 minutes.",
      "Heat oil, add cumin seeds, onions and green chili, sauté until golden.",
      "Add corn kernels and sauté for 5 minutes.",
      "Add rice, salt, and water, cook until rice is fluffy.",
      "Serve hot."
    ]
  },
  {
    id: 24,
    name: "Stuffed Capsicum",
    cuisine: "Indian",
    category: "Main Course",
    preparationTime: "20 mins",
    cookingTime: "25 mins",
    ingredients: [
      { name: "Capsicum (bell peppers)", quantity: "4 medium" },
      { name: "Potato", quantity: "2 medium boiled and mashed" },
      { name: "Onion", quantity: "1 medium chopped" },
      { name: "Ginger garlic paste", quantity: "1 tsp" },
      { name: "Turmeric powder", quantity: "1/2 tsp" },
      { name: "Red chili powder", quantity: "1 tsp" },
      { name: "Oil", quantity: "2 tbsp" },
      { name: "Salt", quantity: "to taste" }
    ],
    steps: [
      "Cut capsicum tops and remove seeds.",
      "Prepare stuffing by sautéing onion, ginger garlic paste, and spices. Mix with mashed potatoes.",
      "Stuff capsicum with potato mixture.",
      "Place stuffed capsicum in a pan, cover and cook on low flame until capsicum is tender.",
      "Serve hot."
    ]
  },
  {
    id: 25,
    name: "Matar Paneer",
    cuisine: "Indian",
    category: "Main Course",
    preparationTime: "15 mins",
    cookingTime: "30 mins",
    ingredients: [
      { name: "Paneer", quantity: "200 g" },
      { name: "Green peas", quantity: "1 cup" },
      { name: "Onion", quantity: "1 medium" },
      { name: "Tomato", quantity: "1 medium" },
      { name: "Ginger garlic paste", quantity: "1 tsp" },
      { name: "Cream", quantity: "2 tbsp" },
      { name: "Oil", quantity: "2 tbsp" },
      { name: "Salt", quantity: "to taste" },
      { name: "Garam masala", quantity: "1 tsp" }
    ],
    steps: [
      "Heat oil, sauté onions and ginger garlic paste.",
      "Add tomatoes and cook until soft.",
      "Add peas, paneer, salt and cook for 10 minutes.",
      "Add cream and garam masala, simmer for 5 minutes.",
      "Serve hot."
    ]
  },
  {
  id: 26,
  name: "Bhindi Masala",
  cuisine: "Indian",
  category: "Main Course",
  preparationTime: "10 mins",
  cookingTime: "20 mins",
  ingredients: [
    { name: "Bhindi (Okra)", quantity: "250 g" },
    { name: "Onion", quantity: "1 medium" },
    { name: "Tomato", quantity: "1 medium" },
    { name: "Ginger garlic paste", quantity: "1 tsp" },
    { name: "Turmeric powder", quantity: "1/2 tsp" },
    { name: "Red chili powder", quantity: "1 tsp" },
    { name: "Oil", quantity: "2 tbsp" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Wash and dry bhindi, cut into pieces.",
    "Heat oil, sauté onions and ginger garlic paste.",
    "Add tomatoes and spices, cook until oil separates.",
    "Add bhindi, salt, and cook until tender.",
    "Serve hot with roti or rice."
  ]
},
{
  id: 27,
  name: "Aloo Paratha",
  cuisine: "Indian",
  category: "Breakfast",
  preparationTime: "15 mins",
  cookingTime: "20 mins",
  ingredients: [
    { name: "Whole wheat flour", quantity: "2 cups" },
    { name: "Potatoes", quantity: "3 medium boiled and mashed" },
    { name: "Green chili", quantity: "1 chopped" },
    { name: "Coriander leaves", quantity: "2 tbsp chopped" },
    { name: "Salt", quantity: "to taste" },
    { name: "Ghee or oil", quantity: "2 tbsp" }
  ],
  steps: [
    "Mix flour with water and knead into soft dough.",
    "Mix potatoes with chili, coriander, salt.",
    "Roll dough, stuff with potato mixture and seal.",
    "Roll stuffed dough into flat paratha.",
    "Cook on hot griddle with ghee/oil until golden.",
    "Serve hot with yogurt or pickle."
  ]
},
{
  id: 28,
  name: "Besan Chilla",
  cuisine: "Indian",
  category: "Breakfast",
  preparationTime: "10 mins",
  cookingTime: "15 mins",
  ingredients: [
    { name: "Gram flour (besan)", quantity: "1 cup" },
    { name: "Onion", quantity: "1 small chopped" },
    { name: "Green chili", quantity: "1 chopped" },
    { name: "Coriander leaves", quantity: "2 tbsp chopped" },
    { name: "Turmeric powder", quantity: "1/4 tsp" },
    { name: "Salt", quantity: "to taste" },
    { name: "Water", quantity: "as required" },
    { name: "Oil", quantity: "2 tbsp" }
  ],
  steps: [
    "Mix besan with water to make a smooth batter.",
    "Add onion, chili, coriander, turmeric, and salt.",
    "Heat pan, pour batter and spread thin like pancake.",
    "Cook until golden on both sides.",
    "Serve hot with chutney."
  ]
},
{
  id: 29,
  name: "Mixed Vegetable Curry",
  cuisine: "Indian",
  category: "Main Course",
  preparationTime: "15 mins",
  cookingTime: "30 mins",
  ingredients: [
    { name: "Mixed vegetables", quantity: "2 cups" },
    { name: "Onion", quantity: "1 large chopped" },
    { name: "Tomato", quantity: "1 large chopped" },
    { name: "Ginger garlic paste", quantity: "1 tbsp" },
    { name: "Turmeric powder", quantity: "1/2 tsp" },
    { name: "Coriander powder", quantity: "1 tsp" },
    { name: "Red chili powder", quantity: "1 tsp" },
    { name: "Oil", quantity: "3 tbsp" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Heat oil, sauté onions and ginger garlic paste.",
    "Add tomatoes and spices, cook till oil separates.",
    "Add vegetables and salt, cook covered till tender.",
    "Serve hot with rice or roti."
  ]
},
{
  id: 30,
  name: "Paneer Tikka",
  cuisine: "Indian",
  category: "Snack",
  preparationTime: "20 mins",
  cookingTime: "20 mins",
  ingredients: [
    { name: "Paneer", quantity: "250 g" },
    { name: "Yogurt", quantity: "1/2 cup" },
    { name: "Red chili powder", quantity: "1 tsp" },
    { name: "Garam masala", quantity: "1 tsp" },
    { name: "Lemon juice", quantity: "1 tbsp" },
    { name: "Salt", quantity: "to taste" },
    { name: "Oil", quantity: "2 tbsp" }
  ],
  steps: [
    "Mix yogurt with spices, lemon juice, and salt.",
    "Marinate paneer cubes in mixture for 1 hour.",
    "Skewer and grill or bake until charred edges appear.",
    "Serve hot with green chutney."
  ]
},
{
  id: 31,
  name: "Tomato Rice",
  cuisine: "South Indian",
  category: "Main Course",
  preparationTime: "10 mins",
  cookingTime: "20 mins",
  ingredients: [
    { name: "Cooked rice", quantity: "2 cups" },
    { name: "Tomato", quantity: "2 medium chopped" },
    { name: "Onion", quantity: "1 medium chopped" },
    { name: "Green chili", quantity: "1 chopped" },
    { name: "Mustard seeds", quantity: "1 tsp" },
    { name: "Curry leaves", quantity: "10" },
    { name: "Oil", quantity: "2 tbsp" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Heat oil, add mustard seeds and curry leaves.",
    "Add onions and chili, sauté until soft.",
    "Add tomatoes and cook until mushy.",
    "Add cooked rice and salt, mix well and heat through.",
    "Serve hot."
  ]
},
{
  id: 32,
  name: "Dal Tadka",
  cuisine: "Indian",
  category: "Main Course",
  preparationTime: "10 mins",
  cookingTime: "25 mins",
  ingredients: [
    { name: "Toor dal", quantity: "1 cup" },
    { name: "Onion", quantity: "1 medium chopped" },
    { name: "Tomato", quantity: "1 medium chopped" },
    { name: "Garlic", quantity: "3 cloves" },
    { name: "Mustard seeds", quantity: "1 tsp" },
    { name: "Cumin seeds", quantity: "1 tsp" },
    { name: "Ghee or oil", quantity: "2 tbsp" },
    { name: "Red chili powder", quantity: "1 tsp" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Cook toor dal until soft.",
    "Heat ghee, add mustard and cumin seeds, garlic, onions and sauté.",
    "Add tomatoes and spices, cook until oil separates.",
    "Add cooked dal and simmer for 5 minutes.",
    "Serve hot with rice or roti."
  ]
},
{
  id: 33,
  name: "Vegetable Soup",
  cuisine: "Continental",
  category: "Soup",
  preparationTime: "10 mins",
  cookingTime: "20 mins",
  ingredients: [
    { name: "Mixed vegetables", quantity: "2 cups chopped" },
    { name: "Onion", quantity: "1 medium chopped" },
    { name: "Garlic", quantity: "2 cloves minced" },
    { name: "Vegetable broth", quantity: "4 cups" },
    { name: "Salt", quantity: "to taste" },
    { name: "Pepper", quantity: "to taste" },
    { name: "Oil", quantity: "1 tbsp" }
  ],
  steps: [
    "Heat oil, sauté onions and garlic.",
    "Add vegetables and cook for 5 minutes.",
    "Add broth, salt, and pepper, simmer until vegetables are tender.",
    "Blend partially if desired and serve hot."
  ]
},
{
  id: 34,
  name: "Khichdi",
  cuisine: "Indian",
  category: "Main Course",
  preparationTime: "10 mins",
  cookingTime: "20 mins",
  ingredients: [
    { name: "Rice", quantity: "1 cup" },
    { name: "Moong dal", quantity: "1/2 cup" },
    { name: "Turmeric powder", quantity: "1/2 tsp" },
    { name: "Ginger", quantity: "1 tsp grated" },
    { name: "Salt", quantity: "to taste" },
    { name: "Ghee", quantity: "1 tbsp" },
    { name: "Water", quantity: "4 cups" }
  ],
  steps: [
    "Wash rice and dal.",
    "Heat ghee, add ginger and sauté.",
    "Add rice, dal, turmeric, salt, and water.",
    "Cook until soft and mushy.",
    "Serve hot with pickle or yogurt."
  ]
},
{
  id: 35,
  name: "Vegetable Cutlets",
  cuisine: "Indian",
  category: "Snack",
  preparationTime: "15 mins",
  cookingTime: "20 mins",
  ingredients: [
    { name: "Mixed boiled vegetables", quantity: "2 cups mashed" },
    { name: "Bread crumbs", quantity: "1 cup" },
    { name: "Green chili", quantity: "1 chopped" },
    { name: "Ginger", quantity: "1 tsp grated" },
    { name: "Coriander leaves", quantity: "2 tbsp chopped" },
    { name: "Salt", quantity: "to taste" },
    { name: "Oil", quantity: "for frying" }
  ],
  steps: [
    "Mix all ingredients except oil, form small patties.",
    "Coat with bread crumbs.",
    "Deep fry until golden brown.",
    "Serve hot with chutney."
  ]
},
{
  id: 36,
  name: "Tomato Chutney",
  cuisine: "South Indian",
  category: "Condiment",
  preparationTime: "10 mins",
  cookingTime: "10 mins",
  ingredients: [
    { name: "Tomatoes", quantity: "3 medium chopped" },
    { name: "Onion", quantity: "1 small chopped" },
    { name: "Dry red chili", quantity: "2" },
    { name: "Mustard seeds", quantity: "1 tsp" },
    { name: "Oil", quantity: "2 tbsp" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Heat oil, add mustard seeds and dry red chili.",
    "Add onions and sauté.",
    "Add tomatoes and cook until soft.",
    "Cool and blend to smooth chutney.",
    "Serve with dosa or idli."
  ]
},
{
  id: 37,
  name: "Moong Dal Chilla",
  cuisine: "Indian",
  category: "Breakfast",
  preparationTime: "10 mins",
  cookingTime: "15 mins",
  ingredients: [
    { name: "Moong dal", quantity: "1 cup soaked" },
    { name: "Green chili", quantity: "1 chopped" },
    { name: "Ginger", quantity: "1 tsp grated" },
    { name: "Salt", quantity: "to taste" },
    { name: "Oil", quantity: "2 tbsp" }
  ],
  steps: [
    "Grind soaked moong dal with chili and ginger to batter.",
    "Add salt, mix well.",
    "Heat pan, pour batter and spread thin.",
    "Cook until golden on both sides.",
    "Serve hot with chutney."
  ]
},
{
  id: 38,
  name: "Vegetable Spring Rolls",
  cuisine: "Chinese",
  category: "Snack",
  preparationTime: "20 mins",
  cookingTime: "15 mins",
  ingredients: [
    { name: "Spring roll wrappers", quantity: "10" },
    { name: "Cabbage", quantity: "1 cup shredded" },
    { name: "Carrot", quantity: "1 cup grated" },
    { name: "Capsicum", quantity: "1/2 cup chopped" },
    { name: "Soy sauce", quantity: "1 tbsp" },
    { name: "Garlic", quantity: "1 tsp chopped" },
    { name: "Oil", quantity: "for frying" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Sauté garlic and vegetables with soy sauce and salt.",
    "Cool mixture, fill wrappers and roll tightly.",
    "Deep fry until golden and crisp.",
    "Serve hot with sauce."
  ]
},
{
  id: 39,
  name: "Kadhi Pakora",
  cuisine: "Indian",
  category: "Main Course",
  preparationTime: "15 mins",
  cookingTime: "40 mins",
  ingredients: [
    { name: "Gram flour (besan)", quantity: "1 cup" },
    { name: "Yogurt", quantity: "1 cup" },
    { name: "Tamarind paste", quantity: "1 tbsp" },
    { name: "Turmeric powder", quantity: "1/2 tsp" },
    { name: "Red chili powder", quantity: "1 tsp" },
    { name: "Oil", quantity: "2 tbsp" },
    { name: "Salt", quantity: "to taste" },
    { name: "Mustard seeds", quantity: "1 tsp" },
    { name: "Fenugreek seeds", quantity: "1/2 tsp" }
  ],
  steps: [
    "Make pakoras from gram flour batter and deep fry.",
    "Mix yogurt with gram flour and spices, add water.",
    "Cook mixture till thick, add pakoras.",
    "Prepare tempering with mustard and fenugreek seeds and add to kadhi.",
    "Simmer for 10 minutes and serve hot."
  ]
},
{
  id: 40,
  name: "Vegetable Cutlet",
  cuisine: "Indian",
  category: "Snack",
  preparationTime: "15 mins",
  cookingTime: "20 mins",
  ingredients: [
    { name: "Boiled mixed vegetables", quantity: "2 cups mashed" },
    { name: "Bread crumbs", quantity: "1 cup" },
    { name: "Green chili", quantity: "1 chopped" },
    { name: "Salt", quantity: "to taste" },
    { name: "Oil", quantity: "for frying" }
  ],
  steps: [
    "Mix all ingredients and form patties.",
    "Coat patties with bread crumbs.",
    "Deep fry until golden brown.",
    "Serve hot with ketchup or chutney."
  ]
},
{
  id: 41,
  name: "Lemon Rice",
  cuisine: "South Indian",
  category: "Main Course",
  preparationTime: "10 mins",
  cookingTime: "15 mins",
  ingredients: [
    { name: "Cooked rice", quantity: "2 cups" },
    { name: "Mustard seeds", quantity: "1 tsp" },
    { name: "Green chili", quantity: "1 chopped" },
    { name: "Peanuts", quantity: "2 tbsp" },
    { name: "Curry leaves", quantity: "10" },
    { name: "Lemon juice", quantity: "2 tbsp" },
    { name: "Oil", quantity: "2 tbsp" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Heat oil, add mustard seeds, peanuts, green chili, and curry leaves.",
    "Add cooked rice and salt, mix well.",
    "Add lemon juice, toss and serve hot."
  ]
},
{
  id: 42,
  name: "Aloo Tikki",
  cuisine: "Indian",
  category: "Snack",
  preparationTime: "15 mins",
  cookingTime: "20 mins",
  ingredients: [
    { name: "Boiled potatoes", quantity: "3 medium mashed" },
    { name: "Green chili", quantity: "1 chopped" },
    { name: "Coriander leaves", quantity: "2 tbsp chopped" },
    { name: "Bread crumbs", quantity: "1/2 cup" },
    { name: "Salt", quantity: "to taste" },
    { name: "Oil", quantity: "for frying" }
  ],
  steps: [
    "Mix potatoes with chili, coriander and salt.",
    "Shape into flat patties, coat with bread crumbs.",
    "Shallow fry until golden on both sides.",
    "Serve hot with chutney."
  ]
},
{
  id: 43,
  name: "Vegetable Upma",
  cuisine: "South Indian",
  category: "Breakfast",
  preparationTime: "5 mins",
  cookingTime: "15 mins",
  ingredients: [
    { name: "Semolina (rava)", quantity: "1 cup" },
    { name: "Mixed vegetables", quantity: "1/2 cup chopped" },
    { name: "Mustard seeds", quantity: "1 tsp" },
    { name: "Curry leaves", quantity: "10" },
    { name: "Green chili", quantity: "1 chopped" },
    { name: "Oil", quantity: "2 tbsp" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Heat oil, add mustard seeds, curry leaves, and chili.",
    "Add vegetables and sauté for 5 minutes.",
    "Add semolina and roast for 2 minutes.",
    "Add water and salt, cook till semolina absorbs water and thickens.",
    "Serve hot."
  ]
},
{
  id: 44,
  name: "Masala Dosa",
  cuisine: "South Indian",
  category: "Breakfast",
  preparationTime: "15 mins",
  cookingTime: "20 mins",
  ingredients: [
    { name: "Dosa batter", quantity: "2 cups" },
    { name: "Potatoes", quantity: "3 medium boiled and mashed" },
    { name: "Onion", quantity: "1 medium chopped" },
    { name: "Green chili", quantity: "1 chopped" },
    { name: "Mustard seeds", quantity: "1 tsp" },
    { name: "Curry leaves", quantity: "10" },
    { name: "Oil", quantity: "2 tbsp" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Prepare potato filling by sautéing mustard seeds, onions, chili, curry leaves, and mixing with mashed potatoes.",
    "Heat pan and pour dosa batter to form thin crepe.",
    "Place filling on dosa and fold.",
    "Serve hot with chutney and sambar."
  ]
},
{
  id: 45,
  name: "Palak Paneer",
  cuisine: "Indian",
  category: "Main Course",
  preparationTime: "15 mins",
  cookingTime: "30 mins",
  ingredients: [
    { name: "Spinach (palak)", quantity: "300 g" },
    { name: "Paneer", quantity: "200 g" },
    { name: "Onion", quantity: "1 medium chopped" },
    { name: "Tomato", quantity: "1 medium chopped" },
    { name: "Ginger garlic paste", quantity: "1 tsp" },
    { name: "Cream", quantity: "2 tbsp" },
    { name: "Oil", quantity: "2 tbsp" },
    { name: "Salt", quantity: "to taste" },
    { name: "Garam masala", quantity: "1 tsp" }
  ],
  steps: [
    "Blanch spinach and blend to puree.",
    "Heat oil, sauté onions and ginger garlic paste.",
    "Add tomatoes and cook till soft.",
    "Add spinach puree, salt, and garam masala, cook for 10 minutes.",
    "Add paneer cubes and cream, simmer for 5 minutes.",
    "Serve hot."
  ]
},
{
  id: 46,
  name: "Chole",
  cuisine: "Punjabi",
  category: "Main Course",
  preparationTime: "15 mins",
  cookingTime: "45 mins",
  ingredients: [
    { name: "Chickpeas (chole)", quantity: "1 cup soaked overnight" },
    { name: "Onion", quantity: "1 large chopped" },
    { name: "Tomato", quantity: "2 medium pureed" },
    { name: "Ginger garlic paste", quantity: "1 tbsp" },
    { name: "Chole masala", quantity: "2 tbsp" },
    { name: "Oil", quantity: "3 tbsp" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Pressure cook chickpeas till soft.",
    "Heat oil, sauté onions and ginger garlic paste.",
    "Add tomato puree and chole masala, cook until oil separates.",
    "Add chickpeas and simmer for 20 minutes.",
    "Serve hot with bhature or rice."
  ]
},
{
  id: 47,
  name: "Vegetable Fried Rice",
  cuisine: "Chinese",
  category: "Main Course",
  preparationTime: "10 mins",
  cookingTime: "15 mins",
  ingredients: [
    { name: "Cooked rice", quantity: "2 cups" },
    { name: "Mixed vegetables", quantity: "1 cup chopped" },
    { name: "Soy sauce", quantity: "2 tbsp" },
    { name: "Garlic", quantity: "1 tsp chopped" },
    { name: "Oil", quantity: "2 tbsp" },
    { name: "Salt", quantity: "to taste" },
    { name: "Spring onions", quantity: "2 tbsp chopped" }
  ],
  steps: [
    "Heat oil, sauté garlic and vegetables.",
    "Add cooked rice and soy sauce, mix well.",
    "Cook for 5 minutes, garnish with spring onions.",
    "Serve hot."
  ]
},
{
  id: 48,
  name: "Vegetable Biryani",
  cuisine: "Indian",
  category: "Main Course",
  preparationTime: "20 mins",
  cookingTime: "40 mins",
  ingredients: [
    { name: "Basmati rice", quantity: "1 cup" },
    { name: "Mixed vegetables", quantity: "1 cup chopped" },
    { name: "Onion", quantity: "1 large sliced" },
    { name: "Tomato", quantity: "1 medium chopped" },
    { name: "Yogurt", quantity: "1/2 cup" },
    { name: "Biryani masala", quantity: "2 tbsp" },
    { name: "Mint leaves", quantity: "1/4 cup" },
    { name: "Coriander leaves", quantity: "1/4 cup" },
    { name: "Oil", quantity: "3 tbsp" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Cook rice till 70% done.",
    "Heat oil, sauté onions until golden.",
    "Add tomatoes, vegetables, yogurt, and biryani masala, cook for 10 minutes.",
    "Layer rice over vegetables, garnish with mint and coriander.",
    "Cook on low heat (dum) for 20 minutes.",
    "Serve hot."
  ]
},
{
  id: 49,
  name: "Vegetable Manchurian",
  cuisine: "Chinese",
  category: "Snack",
  preparationTime: "20 mins",
  cookingTime: "25 mins",
  ingredients: [
    { name: "Mixed vegetables", quantity: "2 cups grated" },
    { name: "All purpose flour", quantity: "1/2 cup" },
    { name: "Corn flour", quantity: "1/4 cup" },
    { name: "Ginger garlic paste", quantity: "1 tsp" },
    { name: "Soy sauce", quantity: "2 tbsp" },
    { name: "Chili sauce", quantity: "1 tbsp" },
    { name: "Oil", quantity: "for frying" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Mix vegetables, flours, ginger garlic paste, salt, and make small balls.",
    "Deep fry balls until golden and crisp.",
    "Prepare sauce with soy sauce, chili sauce, and water.",
    "Add fried balls to sauce and cook for 5 minutes.",
    "Serve hot."
  ]
},
{
  id: 50,
  name: "Pesarattu",
  cuisine: "South Indian",
  category: "Breakfast",
  preparationTime: "10 mins",
  cookingTime: "15 mins",
  ingredients: [
    { name: "Green gram (moong dal)", quantity: "1 cup soaked" },
    { name: "Green chili", quantity: "1 chopped" },
    { name: "Ginger", quantity: "1 inch piece" },
    { name: "Salt", quantity: "to taste" },
    { name: "Oil", quantity: "2 tbsp" }
  ],
  steps: [
    "Grind soaked moong dal with chili and ginger to smooth batter.",
    "Heat pan and pour batter thinly like dosa.",
    "Cook until golden and crisp on both sides.",
    "Serve hot with chutney or sambar."
  ]
},
{
  id: 51,
  name: "Vegetable Pulao",
  cuisine: "Indian",
  category: "Main Course",
  preparationTime: "15 mins",
  cookingTime: "25 mins",
  ingredients: [
    { name: "Basmati rice", quantity: "1 cup" },
    { name: "Mixed vegetables", quantity: "1 cup chopped" },
    { name: "Onion", quantity: "1 medium sliced" },
    { name: "Green chili", quantity: "1 chopped" },
    { name: "Cumin seeds", quantity: "1 tsp" },
    { name: "Ginger garlic paste", quantity: "1 tsp" },
    { name: "Oil", quantity: "2 tbsp" },
    { name: "Salt", quantity: "to taste" },
    { name: "Water", quantity: "2 cups" }
  ],
  steps: [
    "Heat oil, add cumin seeds and sauté onions and green chili.",
    "Add ginger garlic paste and vegetables, cook for 5 minutes.",
    "Add rice, salt, and water; bring to boil.",
    "Cook covered on low heat till rice is done.",
    "Serve hot."
  ]
},
{
  id: 52,
  name: "Cabbage Sabzi",
  cuisine: "Indian",
  category: "Main Course",
  preparationTime: "10 mins",
  cookingTime: "20 mins",
  ingredients: [
    { name: "Cabbage", quantity: "2 cups shredded" },
    { name: "Mustard seeds", quantity: "1 tsp" },
    { name: "Green chili", quantity: "1 chopped" },
    { name: "Turmeric powder", quantity: "1/2 tsp" },
    { name: "Oil", quantity: "2 tbsp" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Heat oil, add mustard seeds and green chili.",
    "Add cabbage, turmeric, and salt.",
    "Cook covered until cabbage is soft.",
    "Serve hot."
  ]
},
{
  id: 53,
  name: "Paneer Butter Masala",
  cuisine: "Indian",
  category: "Main Course",
  preparationTime: "15 mins",
  cookingTime: "30 mins",
  ingredients: [
    { name: "Paneer", quantity: "250 g" },
    { name: "Butter", quantity: "3 tbsp" },
    { name: "Tomato puree", quantity: "1 cup" },
    { name: "Cream", quantity: "1/4 cup" },
    { name: "Ginger garlic paste", quantity: "1 tsp" },
    { name: "Red chili powder", quantity: "1 tsp" },
    { name: "Garam masala", quantity: "1 tsp" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Heat butter, sauté ginger garlic paste.",
    "Add tomato puree and spices, cook until oil separates.",
    "Add paneer and cream, simmer for 10 minutes.",
    "Serve hot with naan or rice."
  ]
},
{
  id: 54,
  name: "Veg Sandwich",
  cuisine: "Continental",
  category: "Snack",
  preparationTime: "10 mins",
  cookingTime: "5 mins",
  ingredients: [
    { name: "Bread slices", quantity: "4" },
    { name: "Cucumber", quantity: "1 sliced" },
    { name: "Tomato", quantity: "1 sliced" },
    { name: "Lettuce", quantity: "4 leaves" },
    { name: "Cheese slices", quantity: "2" },
    { name: "Butter", quantity: "2 tbsp" },
    { name: "Salt", quantity: "to taste" },
    { name: "Pepper", quantity: "to taste" }
  ],
  steps: [
    "Butter bread slices.",
    "Layer cucumber, tomato, lettuce, and cheese.",
    "Sprinkle salt and pepper.",
    "Close sandwich and toast if desired.",
    "Serve fresh."
  ]
},
{
  id: 55,
  name: "Vegetable Pasta",
  cuisine: "Italian",
  category: "Main Course",
  preparationTime: "10 mins",
  cookingTime: "20 mins",
  ingredients: [
    { name: "Pasta", quantity: "200 g" },
    { name: "Mixed vegetables", quantity: "1 cup chopped" },
    { name: "Tomato sauce", quantity: "1 cup" },
    { name: "Olive oil", quantity: "2 tbsp" },
    { name: "Garlic", quantity: "2 cloves minced" },
    { name: "Salt", quantity: "to taste" },
    { name: "Pepper", quantity: "to taste" },
    { name: "Basil", quantity: "1 tbsp chopped" }
  ],
  steps: [
    "Cook pasta as per package instructions.",
    "Heat olive oil, sauté garlic and vegetables.",
    "Add tomato sauce, salt, pepper, and basil; simmer.",
    "Mix cooked pasta with sauce.",
    "Serve hot."
  ]
},
{
  id: 56,
  name: "Veg Tacos",
  cuisine: "Mexican",
  category: "Snack",
  preparationTime: "15 mins",
  cookingTime: "10 mins",
  ingredients: [
    { name: "Taco shells", quantity: "6" },
    { name: "Mixed vegetables", quantity: "1 cup chopped and sautéed" },
    { name: "Cheese", quantity: "1/2 cup grated" },
    { name: "Salsa", quantity: "1/2 cup" },
    { name: "Lettuce", quantity: "1 cup shredded" },
    { name: "Sour cream", quantity: "1/4 cup" }
  ],
  steps: [
    "Warm taco shells.",
    "Fill with sautéed vegetables, cheese, lettuce, salsa, and sour cream.",
    "Serve immediately."
  ]
},
{
  id: 57,
  name: "Paneer Bhurji",
  cuisine: "Indian",
  category: "Main Course",
  preparationTime: "10 mins",
  cookingTime: "15 mins",
  ingredients: [
    { name: "Paneer", quantity: "200 g crumbled" },
    { name: "Onion", quantity: "1 medium chopped" },
    { name: "Tomato", quantity: "1 medium chopped" },
    { name: "Green chili", quantity: "1 chopped" },
    { name: "Turmeric powder", quantity: "1/2 tsp" },
    { name: "Oil", quantity: "2 tbsp" },
    { name: "Salt", quantity: "to taste" },
    { name: "Coriander leaves", quantity: "2 tbsp chopped" }
  ],
  steps: [
    "Heat oil, sauté onions and green chili.",
    "Add tomatoes and spices, cook until soft.",
    "Add crumbled paneer and salt, cook for 5 minutes.",
    "Garnish with coriander leaves and serve."
  ]
},
{
  id: 58,
  name: "Vegetable Stew",
  cuisine: "South Indian",
  category: "Main Course",
  preparationTime: "15 mins",
  cookingTime: "30 mins",
  ingredients: [
    { name: "Mixed vegetables", quantity: "2 cups chopped" },
    { name: "Coconut milk", quantity: "1 cup" },
    { name: "Green chili", quantity: "1 chopped" },
    { name: "Ginger", quantity: "1 inch piece grated" },
    { name: "Mustard seeds", quantity: "1 tsp" },
    { name: "Curry leaves", quantity: "10" },
    { name: "Oil", quantity: "2 tbsp" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Heat oil, add mustard seeds and curry leaves.",
    "Add green chili and ginger, sauté.",
    "Add vegetables and salt, cook till tender.",
    "Add coconut milk, simmer for 5 minutes.",
    "Serve hot with rice."
  ]
},
{
  id: 59,
  name: "Veggie Wrap",
  cuisine: "Continental",
  category: "Snack",
  preparationTime: "10 mins",
  cookingTime: "5 mins",
  ingredients: [
    { name: "Tortilla wrap", quantity: "2" },
    { name: "Lettuce", quantity: "1 cup shredded" },
    { name: "Cucumber", quantity: "1 sliced" },
    { name: "Carrot", quantity: "1 grated" },
    { name: "Hummus", quantity: "3 tbsp" }
  ],
  steps: [
    "Spread hummus on tortilla wraps.",
    "Layer lettuce, cucumber, and carrot.",
    "Roll tightly and cut in half.",
    "Serve fresh."
  ]
},
{
  id: 60,
  name: "Masoor Dal",
  cuisine: "Indian",
  category: "Main Course",
  preparationTime: "10 mins",
  cookingTime: "25 mins",
  ingredients: [
    { name: "Masoor dal", quantity: "1 cup" },
    { name: "Onion", quantity: "1 medium chopped" },
    { name: "Tomato", quantity: "1 medium chopped" },
    { name: "Garlic", quantity: "3 cloves" },
    { name: "Turmeric powder", quantity: "1/2 tsp" },
    { name: "Oil", quantity: "2 tbsp" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Cook masoor dal until soft.",
    "Heat oil, sauté onions and garlic.",
    "Add tomatoes, turmeric, and salt; cook till soft.",
    "Add cooked dal and simmer for 5 minutes.",
    "Serve hot."
  ]
},
{
  id: 61,
  name: "Veggie Burger",
  cuisine: "Continental",
  category: "Snack",
  preparationTime: "15 mins",
  cookingTime: "20 mins",
  ingredients: [
    { name: "Burger buns", quantity: "4" },
    { name: "Vegetable patties", quantity: "4" },
    { name: "Lettuce", quantity: "4 leaves" },
    { name: "Tomato slices", quantity: "4" },
    { name: "Cheese slices", quantity: "4" },
    { name: "Mayonnaise", quantity: "4 tbsp" }
  ],
  steps: [
    "Cook vegetable patties as per instructions.",
    "Toast buns lightly.",
    "Assemble burgers with mayonnaise, lettuce, tomato, patties, and cheese.",
    "Serve hot."
  ]
},
{
  id: 62,
  name: "Vegetable Sambar",
  cuisine: "South Indian",
  category: "Main Course",
  preparationTime: "15 mins",
  cookingTime: "40 mins",
  ingredients: [
    { name: "Toor dal", quantity: "1 cup" },
    { name: "Mixed vegetables", quantity: "2 cups chopped" },
    { name: "Tamarind paste", quantity: "2 tbsp" },
    { name: "Sambar powder", quantity: "2 tbsp" },
    { name: "Mustard seeds", quantity: "1 tsp" },
    { name: "Curry leaves", quantity: "10" },
    { name: "Oil", quantity: "2 tbsp" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Cook toor dal till soft.",
    "Cook vegetables separately.",
    "Mix tamarind paste and sambar powder with dal and vegetables.",
    "Prepare tempering with mustard seeds, curry leaves, and oil.",
    "Add tempering to sambar, simmer for 10 minutes.",
    "Serve hot with rice or dosa."
  ]
},
{
  id: 63,
  name: "Vegetable Pakora",
  cuisine: "Indian",
  category: "Snack",
  preparationTime: "10 mins",
  cookingTime: "20 mins",
  ingredients: [
    { name: "Gram flour (besan)", quantity: "1 cup" },
    { name: "Mixed vegetables", quantity: "1 cup grated" },
    { name: "Green chili", quantity: "1 chopped" },
    { name: "Salt", quantity: "to taste" },
    { name: "Oil", quantity: "for frying" }
  ],
  steps: [
    "Mix gram flour, vegetables, chili, and salt with water to make batter.",
    "Deep fry spoonfuls until golden brown.",
    "Serve hot with chutney."
  ]
},
{
  id: 64,
  name: "Sweet Pongal",
  cuisine: "South Indian",
  category: "Dessert",
  preparationTime: "10 mins",
  cookingTime: "20 mins",
  ingredients: [
    { name: "Rice", quantity: "1 cup" },
    { name: "Moong dal", quantity: "1/2 cup" },
    { name: "Jaggery", quantity: "1 cup grated" },
    { name: "Ghee", quantity: "3 tbsp" },
    { name: "Cashews", quantity: "10" },
    { name: "Raisins", quantity: "10" },
    { name: "Cardamom powder", quantity: "1/2 tsp" }
  ],
  steps: [
    "Cook rice and moong dal together till soft.",
    "Add jaggery and cook until dissolved.",
    "Heat ghee, fry cashews and raisins, add to pongal.",
    "Add cardamom powder and mix well.",
    "Serve warm."
  ]
},
{
  id: 65,
  name: "Vegetable Omelette (Besan)",
  cuisine: "Indian",
  category: "Breakfast",
  preparationTime: "10 mins",
  cookingTime: "10 mins",
  ingredients: [
    { name: "Gram flour (besan)", quantity: "1 cup" },
    { name: "Onion", quantity: "1 small chopped" },
    { name: "Tomato", quantity: "1 small chopped" },
    { name: "Green chili", quantity: "1 chopped" },
    { name: "Coriander leaves", quantity: "2 tbsp chopped" },
    { name: "Turmeric powder", quantity: "1/4 tsp" },
    { name: "Salt", quantity: "to taste" },
    { name: "Oil", quantity: "2 tbsp" }
  ],
  steps: [
    "Mix all ingredients with water to form batter.",
    "Heat pan, pour batter to form omelette shape.",
    "Cook on both sides until golden.",
    "Serve hot with chutney."
  ]
},
{
  id: 66,
  name: "Vegetable Stir Fry",
  cuisine: "Chinese",
  category: "Main Course",
  preparationTime: "10 mins",
  cookingTime: "15 mins",
  ingredients: [
    { name: "Mixed vegetables", quantity: "2 cups chopped" },
    { name: "Soy sauce", quantity: "2 tbsp" },
    { name: "Garlic", quantity: "1 tsp minced" },
    { name: "Ginger", quantity: "1 tsp minced" },
    { name: "Oil", quantity: "2 tbsp" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Heat oil, sauté garlic and ginger.",
    "Add vegetables and stir fry for 10 minutes.",
    "Add soy sauce and salt, mix well.",
    "Serve hot."
  ]
},
{
  id: 67,
  name: "Ragi Mudde",
  cuisine: "South Indian",
  category: "Main Course",
  preparationTime: "5 mins",
  cookingTime: "15 mins",
  ingredients: [
    { name: "Ragi flour", quantity: "1 cup" },
    { name: "Water", quantity: "2 cups" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Boil water with salt.",
    "Add ragi flour gradually while stirring continuously.",
    "Cook till dough thickens and comes together.",
    "Shape into balls and serve with sambar or chutney."
  ]
},
{
  id: 68,
  name: "Masala Vada",
  cuisine: "South Indian",
  category: "Snack",
  preparationTime: "20 mins",
  cookingTime: "15 mins",
  ingredients: [
    { name: "Chana dal", quantity: "1 cup soaked" },
    { name: "Green chili", quantity: "2 chopped" },
    { name: "Ginger", quantity: "1 inch piece grated" },
    { name: "Curry leaves", quantity: "10 chopped" },
    { name: "Salt", quantity: "to taste" },
    { name: "Oil", quantity: "for frying" }
  ],
  steps: [
    "Grind chana dal with chili, ginger, and curry leaves coarsely.",
    "Add salt and mix.",
    "Shape into small patties.",
    "Deep fry till golden brown.",
    "Serve hot with chutney."
  ]
},
{
  id: 69,
  name: "Vegetable Idli",
  cuisine: "South Indian",
  category: "Breakfast",
  preparationTime: "10 mins",
  cookingTime: "15 mins",
  ingredients: [
    { name: "Idli batter", quantity: "2 cups" },
    { name: "Mixed vegetables", quantity: "1/2 cup grated" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Mix vegetables with idli batter and salt.",
    "Pour batter into idli molds.",
    "Steam for 10-15 minutes until cooked.",
    "Serve hot with chutney and sambar."
  ]
},
{
  id: 70,
  name: "Vegetable Cutlet",
  cuisine: "Indian",
  category: "Snack",
  preparationTime: "15 mins",
  cookingTime: "20 mins",
  ingredients: [
    { name: "Boiled potatoes", quantity: "2 medium mashed" },
    { name: "Mixed vegetables", quantity: "1 cup boiled and chopped" },
    { name: "Bread crumbs", quantity: "1/2 cup" },
    { name: "Green chili", quantity: "1 chopped" },
    { name: "Ginger", quantity: "1 tsp grated" },
    { name: "Salt", quantity: "to taste" },
    { name: "Oil", quantity: "for frying" }
  ],
  steps: [
    "Mix all ingredients except oil and bread crumbs.",
    "Shape mixture into cutlets, coat with bread crumbs.",
    "Deep fry until golden brown.",
    "Serve hot with sauce."
  ]
},
{
  id: 71,
  name: "Paneer Tikka",
  cuisine: "Indian",
  category: "Snack",
  preparationTime: "20 mins",
  cookingTime: "15 mins",
  ingredients: [
    { name: "Paneer", quantity: "250 g cubed" },
    { name: "Yogurt", quantity: "1/2 cup" },
    { name: "Red chili powder", quantity: "1 tsp" },
    { name: "Garam masala", quantity: "1 tsp" },
    { name: "Lemon juice", quantity: "1 tbsp" },
    { name: "Salt", quantity: "to taste" },
    { name: "Oil", quantity: "2 tbsp" }
  ],
  steps: [
    "Mix yogurt and spices, marinate paneer for 30 minutes.",
    "Skewer paneer pieces and grill or bake until slightly charred.",
    "Serve hot with chutney."
  ]
},
{
  id: 72,
  name: "Tomato Soup",
  cuisine: "Continental",
  category: "Soup",
  preparationTime: "10 mins",
  cookingTime: "20 mins",
  ingredients: [
    { name: "Tomatoes", quantity: "4 large chopped" },
    { name: "Onion", quantity: "1 medium chopped" },
    { name: "Garlic", quantity: "2 cloves" },
    { name: "Butter", quantity: "2 tbsp" },
    { name: "Salt", quantity: "to taste" },
    { name: "Pepper", quantity: "to taste" },
    { name: "Cream", quantity: "2 tbsp" }
  ],
  steps: [
    "Heat butter, sauté onions and garlic.",
    "Add tomatoes and cook until soft.",
    "Blend mixture until smooth.",
    "Simmer, add salt, pepper, and cream.",
    "Serve hot."
  ]
},
{
  id: 73,
  name: "Veg Spring Rolls",
  cuisine: "Chinese",
  category: "Snack",
  preparationTime: "20 mins",
  cookingTime: "15 mins",
  ingredients: [
    { name: "Spring roll wrappers", quantity: "10" },
    { name: "Mixed vegetables", quantity: "2 cups shredded" },
    { name: "Soy sauce", quantity: "1 tbsp" },
    { name: "Garlic", quantity: "1 tsp minced" },
    { name: "Oil", quantity: "for frying" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Sauté vegetables with garlic and soy sauce.",
    "Fill wrappers with vegetable mixture and roll tightly.",
    "Deep fry until golden and crisp.",
    "Serve hot with sauce."
  ]
},
{
  id: 74,
  name: "Corn Salad",
  cuisine: "Continental",
  category: "Salad",
  preparationTime: "10 mins",
  cookingTime: "0 mins",
  ingredients: [
    { name: "Boiled corn", quantity: "1 cup" },
    { name: "Onion", quantity: "1 small chopped" },
    { name: "Tomato", quantity: "1 small chopped" },
    { name: "Cucumber", quantity: "1 small chopped" },
    { name: "Lemon juice", quantity: "1 tbsp" },
    { name: "Salt", quantity: "to taste" },
    { name: "Pepper", quantity: "to taste" }
  ],
  steps: [
    "Mix all ingredients in a bowl.",
    "Chill before serving.",
    "Serve fresh."
  ]
},
{
  id: 75,
  name: "Vegetable Korma",
  cuisine: "Indian",
  category: "Main Course",
  preparationTime: "15 mins",
  cookingTime: "30 mins",
  ingredients: [
    { name: "Mixed vegetables", quantity: "2 cups chopped" },
    { name: "Yogurt", quantity: "1/2 cup" },
    { name: "Cashew nuts", quantity: "10 soaked and ground" },
    { name: "Onion", quantity: "1 medium chopped" },
    { name: "Ginger garlic paste", quantity: "1 tsp" },
    { name: "Oil", quantity: "2 tbsp" },
    { name: "Salt", quantity: "to taste" },
    { name: "Garam masala", quantity: "1 tsp" }
  ],
  steps: [
    "Heat oil, sauté onions and ginger garlic paste.",
    "Add vegetables, yogurt, and ground cashews.",
    "Cook covered until vegetables are tender.",
    "Add salt and garam masala, simmer 5 minutes.",
    "Serve hot."
  ]
},
{
  id: 76,
  name: "Aloo Paratha",
  cuisine: "Punjabi",
  category: "Breakfast",
  preparationTime: "20 mins",
  cookingTime: "15 mins",
  ingredients: [
    { name: "Wheat flour", quantity: "2 cups" },
    { name: "Boiled potatoes", quantity: "3 medium mashed" },
    { name: "Green chili", quantity: "1 chopped" },
    { name: "Coriander leaves", quantity: "2 tbsp chopped" },
    { name: "Salt", quantity: "to taste" },
    { name: "Oil/Ghee", quantity: "2 tbsp" }
  ],
  steps: [
    "Mix flour with water to make dough.",
    "Mix potatoes, chili, coriander, and salt.",
    "Roll dough, place filling inside and seal.",
    "Roll again and cook on hot tawa with oil/ghee.",
    "Serve hot with yogurt or pickle."
  ]
},
{
  id: 77,
  name: "Rajma Masala",
  cuisine: "Punjabi",
  category: "Main Course",
  preparationTime: "15 mins",
  cookingTime: "60 mins",
  ingredients: [
    { name: "Kidney beans (rajma)", quantity: "1 cup soaked overnight" },
    { name: "Onion", quantity: "2 medium chopped" },
    { name: "Tomato", quantity: "2 medium pureed" },
    { name: "Ginger garlic paste", quantity: "1 tbsp" },
    { name: "Rajma masala", quantity: "2 tbsp" },
    { name: "Oil", quantity: "3 tbsp" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Pressure cook rajma till soft.",
    "Heat oil, sauté onions and ginger garlic paste.",
    "Add tomato puree and rajma masala, cook until oil separates.",
    "Add rajma and simmer for 30 minutes.",
    "Serve hot with rice or roti."
  ]
},
{
  id: 78,
  name: "Paneer Butter Masala",
  cuisine: "Indian",
  category: "Main Course",
  preparationTime: "15 mins",
  cookingTime: "30 mins",
  ingredients: [
    { name: "Paneer", quantity: "250 g cubed" },
    { name: "Butter", quantity: "3 tbsp" },
    { name: "Tomato puree", quantity: "1 cup" },
    { name: "Cream", quantity: "1/4 cup" },
    { name: "Ginger garlic paste", quantity: "1 tsp" },
    { name: "Red chili powder", quantity: "1 tsp" },
    { name: "Garam masala", quantity: "1 tsp" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Heat butter, sauté ginger garlic paste.",
    "Add tomato puree and spices, cook until oil separates.",
    "Add paneer and cream, simmer for 10 minutes.",
    "Serve hot with naan or rice."
  ]
},
{
  id: 79,
  name: "Veg Hakka Noodles",
  cuisine: "Chinese",
  category: "Main Course",
  preparationTime: "10 mins",
  cookingTime: "15 mins",
  ingredients: [
    { name: "Hakka noodles", quantity: "200 g" },
    { name: "Mixed vegetables", quantity: "1 cup chopped" },
    { name: "Soy sauce", quantity: "2 tbsp" },
    { name: "Garlic", quantity: "1 tsp minced" },
    { name: "Oil", quantity: "2 tbsp" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Cook noodles as per instructions and drain.",
    "Heat oil, sauté garlic and vegetables.",
    "Add noodles, soy sauce, salt; toss well.",
    "Cook for 5 minutes and serve hot."
  ]
},
{
  id: 80,
  name: "Mushroom Masala",
  cuisine: "Indian",
  category: "Main Course",
  preparationTime: "15 mins",
  cookingTime: "25 mins",
  ingredients: [
    { name: "Mushrooms", quantity: "250 g sliced" },
    { name: "Onion", quantity: "1 medium chopped" },
    { name: "Tomato", quantity: "1 medium chopped" },
    { name: "Ginger garlic paste", quantity: "1 tsp" },
    { name: "Turmeric powder", quantity: "1/2 tsp" },
    { name: "Red chili powder", quantity: "1 tsp" },
    { name: "Oil", quantity: "2 tbsp" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Heat oil, sauté onions and ginger garlic paste.",
    "Add tomatoes and spices, cook until soft.",
    "Add mushrooms, cook till tender.",
    "Serve hot."
  ]
},
{
  id: 81,
  name: "Vegetable Quesadilla",
  cuisine: "Mexican",
  category: "Snack",
  preparationTime: "10 mins",
  cookingTime: "10 mins",
  ingredients: [
    { name: "Tortilla", quantity: "2 large" },
    { name: "Cheese", quantity: "1 cup grated" },
    { name: "Mixed vegetables", quantity: "1 cup chopped" },
    { name: "Olive oil", quantity: "1 tbsp" }
  ],
  steps: [
    "Heat olive oil, sauté vegetables.",
    "Place one tortilla on pan, add vegetables and cheese.",
    "Cover with second tortilla and cook until golden on both sides.",
    "Cut into wedges and serve."
  ]
},
{
  id: 82,
  name: "Vegetable Chow Mein",
  cuisine: "Chinese",
  category: "Main Course",
  preparationTime: "10 mins",
  cookingTime: "15 mins",
  ingredients: [
    { name: "Chow mein noodles", quantity: "200 g" },
    { name: "Mixed vegetables", quantity: "1 cup chopped" },
    { name: "Soy sauce", quantity: "2 tbsp" },
    { name: "Garlic", quantity: "1 tsp minced" },
    { name: "Oil", quantity: "2 tbsp" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Cook noodles and drain.",
    "Heat oil, sauté garlic and vegetables.",
    "Add noodles, soy sauce, salt; toss well.",
    "Serve hot."
  ]
},
{
  id: 83,
  name: "Corn Soup",
  cuisine: "Continental",
  category: "Soup",
  preparationTime: "10 mins",
  cookingTime: "15 mins",
  ingredients: [
    { name: "Corn kernels", quantity: "1 cup" },
    { name: "Onion", quantity: "1 medium chopped" },
    { name: "Garlic", quantity: "2 cloves minced" },
    { name: "Butter", quantity: "2 tbsp" },
    { name: "Salt", quantity: "to taste" },
    { name: "Pepper", quantity: "to taste" },
    { name: "Cream", quantity: "2 tbsp" }
  ],
  steps: [
    "Heat butter, sauté onions and garlic.",
    "Add corn kernels and cook 5 minutes.",
    "Blend partially and simmer with salt, pepper, and cream.",
    "Serve hot."
  ]
},
{
  id: 84,
  name: "Paneer Tikka Masala",
  cuisine: "Indian",
  category: "Main Course",
  preparationTime: "20 mins",
  cookingTime: "30 mins",
  ingredients: [
    { name: "Paneer", quantity: "250 g cubed" },
    { name: "Yogurt", quantity: "1/2 cup" },
    { name: "Red chili powder", quantity: "1 tsp" },
    { name: "Garam masala", quantity: "1 tsp" },
    { name: "Tomato puree", quantity: "1 cup" },
    { name: "Cream", quantity: "1/4 cup" },
    { name: "Oil", quantity: "2 tbsp" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Marinate paneer in yogurt and spices for 30 mins.",
    "Grill or pan fry paneer pieces.",
    "Prepare tomato gravy and add cream.",
    "Add grilled paneer to gravy and simmer.",
    "Serve hot."
  ]
},
{
  id: 85,
  name: "Vegetable Fried Rice",
  cuisine: "Chinese",
  category: "Main Course",
  preparationTime: "10 mins",
  cookingTime: "15 mins",
  ingredients: [
    { name: "Cooked rice", quantity: "2 cups" },
    { name: "Mixed vegetables", quantity: "1 cup chopped" },
    { name: "Soy sauce", quantity: "2 tbsp" },
    { name: "Garlic", quantity: "1 tsp minced" },
    { name: "Oil", quantity: "2 tbsp" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Heat oil, sauté garlic and vegetables.",
    "Add cooked rice and soy sauce, mix well.",
    "Cook for 5 minutes, serve hot."
  ]
},
{
  id: 86,
  name: "Baingan Bharta",
  cuisine: "Punjabi",
  category: "Main Course",
  preparationTime: "10 mins",
  cookingTime: "30 mins",
  ingredients: [
    { name: "Eggplant (baingan)", quantity: "1 large" },
    { name: "Onion", quantity: "1 medium chopped" },
    { name: "Tomato", quantity: "1 medium chopped" },
    { name: "Green chili", quantity: "1 chopped" },
    { name: "Oil", quantity: "2 tbsp" },
    { name: "Salt", quantity: "to taste" },
    { name: "Coriander leaves", quantity: "2 tbsp chopped" }
  ],
  steps: [
    "Roast eggplant until skin chars, peel and mash pulp.",
    "Heat oil, sauté onions and chili.",
    "Add tomatoes and cook until soft.",
    "Add mashed eggplant and salt; cook 10 minutes.",
    "Garnish with coriander and serve."
  ]
},
{
  id: 87,
  name: "Vegetable Kathi Roll",
  cuisine: "Indian",
  category: "Snack",
  preparationTime: "20 mins",
  cookingTime: "15 mins",
  ingredients: [
    { name: "Paratha", quantity: "4" },
    { name: "Mixed vegetables", quantity: "1 cup sautéed" },
    { name: "Green chutney", quantity: "1/4 cup" },
    { name: "Onion", quantity: "1 sliced" }
  ],
  steps: [
    "Warm paratha.",
    "Spread green chutney, add sautéed vegetables and onions.",
    "Roll tightly and serve."
  ]
},
{
  id: 88,
  name: "Masala Chai",
  cuisine: "Indian",
  category: "Beverage",
  preparationTime: "5 mins",
  cookingTime: "10 mins",
  ingredients: [
    { name: "Water", quantity: "1 cup" },
    { name: "Milk", quantity: "1 cup" },
    { name: "Tea leaves", quantity: "2 tsp" },
    { name: "Cardamom", quantity: "2 crushed" },
    { name: "Ginger", quantity: "1 inch piece crushed" },
    { name: "Sugar", quantity: "to taste" }
  ],
  steps: [
    "Boil water with spices.",
    "Add tea leaves and boil for 2 minutes.",
    "Add milk and sugar, boil again.",
    "Strain and serve hot."
  ]
},
{
  id: 89,
  name: "Vegetable Soup",
  cuisine: "Continental",
  category: "Soup",
  preparationTime: "10 mins",
  cookingTime: "20 mins",
  ingredients: [
    { name: "Mixed vegetables", quantity: "2 cups chopped" },
    { name: "Onion", quantity: "1 medium chopped" },
    { name: "Garlic", quantity: "2 cloves minced" },
    { name: "Salt", quantity: "to taste" },
    { name: "Pepper", quantity: "to taste" },
    { name: "Water", quantity: "4 cups" }
  ],
  steps: [
    "Sauté onions and garlic.",
    "Add vegetables and water, cook until tender.",
    "Blend partially or fully as preferred.",
    "Season and serve hot."
  ]
},
{
  id: 90,
  name: "Dal Tadka",
  cuisine: "Indian",
  category: "Main Course",
  preparationTime: "10 mins",
  cookingTime: "25 mins",
  ingredients: [
    { name: "Toor dal", quantity: "1 cup" },
    { name: "Onion", quantity: "1 medium chopped" },
    { name: "Tomato", quantity: "1 medium chopped" },
    { name: "Garlic", quantity: "3 cloves" },
    { name: "Mustard seeds", quantity: "1 tsp" },
    { name: "Cumin seeds", quantity: "1 tsp" },
    { name: "Oil", quantity: "2 tbsp" },
    { name: "Salt", quantity: "to taste" },
    { name: "Red chili powder", quantity: "1/2 tsp" }
  ],
  steps: [
    "Cook dal until soft.",
    "Heat oil, add mustard and cumin seeds, garlic, onions and tomatoes.",
    "Add spices and cooked dal, simmer for 5 minutes.",
    "Serve hot."
  ]
},
{
  id: 91,
  name: "Veggie Pizza",
  cuisine: "Italian",
  category: "Main Course",
  preparationTime: "20 mins",
  cookingTime: "25 mins",
  ingredients: [
    { name: "Pizza base", quantity: "1" },
    { name: "Tomato sauce", quantity: "1/2 cup" },
    { name: "Cheese", quantity: "1 cup grated" },
    { name: "Mixed vegetables", quantity: "1 cup chopped" },
    { name: "Olive oil", quantity: "1 tbsp" }
  ],
  steps: [
    "Preheat oven to 200°C.",
    "Spread tomato sauce on base.",
    "Add vegetables and cheese.",
    "Bake for 20-25 minutes until cheese melts.",
    "Serve hot."
  ]
},
{
  id: 92,
  name: "Vegetable Porridge",
  cuisine: "Continental",
  category: "Breakfast",
  preparationTime: "5 mins",
  cookingTime: "15 mins",
  ingredients: [
    { name: "Rolled oats", quantity: "1 cup" },
    { name: "Mixed vegetables", quantity: "1 cup chopped" },
    { name: "Water", quantity: "2 cups" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Boil water with salt.",
    "Add oats and vegetables.",
    "Cook until oats soften.",
    "Serve warm."
  ]
},
{
  id: 93,
  name: "Paneer Sandwich",
  cuisine: "Continental",
  category: "Snack",
  preparationTime: "10 mins",
  cookingTime: "5 mins",
  ingredients: [
    { name: "Bread slices", quantity: "4" },
    { name: "Paneer", quantity: "100 g grated" },
    { name: "Butter", quantity: "2 tbsp" },
    { name: "Green chili", quantity: "1 chopped" },
    { name: "Salt", quantity: "to taste" },
    { name: "Pepper", quantity: "to taste" }
  ],
  steps: [
    "Mix paneer, chili, salt, and pepper.",
    "Butter bread slices, add paneer mixture.",
    "Toast sandwich until golden.",
    "Serve hot."
  ]
},
{
  id: 94,
  name: "Vegetable Upma",
  cuisine: "South Indian",
  category: "Breakfast",
  preparationTime: "10 mins",
  cookingTime: "15 mins",
  ingredients: [
    { name: "Semolina (rava)", quantity: "1 cup" },
    { name: "Mixed vegetables", quantity: "1 cup chopped" },
    { name: "Mustard seeds", quantity: "1 tsp" },
    { name: "Green chili", quantity: "1 chopped" },
    { name: "Curry leaves", quantity: "10" },
    { name: "Oil", quantity: "2 tbsp" },
    { name: "Salt", quantity: "to taste" },
    { name: "Water", quantity: "2 cups" }
  ],
  steps: [
    "Roast semolina till aromatic.",
    "Heat oil, add mustard seeds, chili, curry leaves, and vegetables.",
    "Add water and salt, bring to boil.",
    "Slowly add semolina, stirring continuously.",
    "Cook till thickened, serve hot."
  ]
},
{
  id: 95,
  name: "Vegetable Biryani",
  cuisine: "Indian",
  category: "Main Course",
  preparationTime: "20 mins",
  cookingTime: "40 mins",
  ingredients: [
    { name: "Basmati rice", quantity: "1 cup" },
    { name: "Mixed vegetables", quantity: "1 cup chopped" },
    { name: "Onion", quantity: "1 large sliced" },
    { name: "Tomato", quantity: "1 medium chopped" },
    { name: "Yogurt", quantity: "1/2 cup" },
    { name: "Biryani masala", quantity: "2 tbsp" },
    { name: "Mint leaves", quantity: "1/4 cup" },
    { name: "Coriander leaves", quantity: "1/4 cup" },
    { name: "Oil", quantity: "3 tbsp" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Cook rice till 70% done.",
    "Heat oil, sauté onions until golden.",
    "Add tomatoes, vegetables, yogurt, and biryani masala, cook for 10 minutes.",
    "Layer rice over vegetables, garnish with mint and coriander.",
    "Cover and cook on low heat for 15 minutes.",
    "Serve hot."
  ]
},
{
  id: 96,
  name: "Masala Dosa",
  cuisine: "South Indian",
  category: "Breakfast",
  preparationTime: "10 mins",
  cookingTime: "20 mins",
  ingredients: [
    { name: "Dosa batter", quantity: "2 cups" },
    { name: "Boiled potatoes", quantity: "3 medium mashed" },
    { name: "Mustard seeds", quantity: "1 tsp" },
    { name: "Curry leaves", quantity: "10" },
    { name: "Green chili", quantity: "1 chopped" },
    { name: "Oil", quantity: "2 tbsp" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Heat oil, add mustard seeds, curry leaves, and chili.",
    "Add potatoes and salt, sauté.",
    "Spread dosa batter on hot pan, cook till crisp.",
    "Place potato filling, fold dosa and serve."
  ]
},
{
  id: 97,
  name: "Tandoori Roti",
  cuisine: "North Indian",
  category: "Bread",
  preparationTime: "15 mins",
  cookingTime: "10 mins",
  ingredients: [
    { name: "Whole wheat flour", quantity: "2 cups" },
    { name: "Salt", quantity: "1 tsp" },
    { name: "Water", quantity: "as needed" },
    { name: "Oil", quantity: "1 tbsp" }
  ],
  steps: [
    "Make soft dough with flour, salt, water, and oil.",
    "Roll into rotis and cook on hot tawa or oven.",
    "Serve hot with curry."
  ]
},
{
  id: 98,
  name: "Vegetable Manchurian",
  cuisine: "Chinese",
  category: "Snack",
  preparationTime: "20 mins",
  cookingTime: "20 mins",
  ingredients: [
    { name: "Mixed vegetables", quantity: "2 cups grated" },
    { name: "All-purpose flour", quantity: "1/2 cup" },
    { name: "Cornflour", quantity: "1/4 cup" },
    { name: "Soy sauce", quantity: "2 tbsp" },
    { name: "Garlic", quantity: "1 tsp minced" },
    { name: "Oil", quantity: "for frying" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Mix vegetables with flours, salt, and soy sauce.",
    "Shape into balls and deep fry until golden.",
    "Prepare sauce with garlic and soy sauce, toss fried balls in sauce.",
    "Serve hot."
  ]
},
{
  id: 99,
  name: "Cucumber Raita",
  cuisine: "Indian",
  category: "Side Dish",
  preparationTime: "10 mins",
  cookingTime: "0 mins",
  ingredients: [
    { name: "Curd (yogurt)", quantity: "1 cup" },
    { name: "Cucumber", quantity: "1 small grated" },
    { name: "Cumin powder", quantity: "1/2 tsp" },
    { name: "Salt", quantity: "to taste" },
    { name: "Coriander leaves", quantity: "1 tbsp chopped" }
  ],
  steps: [
    "Mix all ingredients.",
    "Chill and serve."
  ]
},
{
  id: 100,
  name: "Vegetable Sambar",
  cuisine: "South Indian",
  category: "Main Course",
  preparationTime: "15 mins",
  cookingTime: "40 mins",
  ingredients: [
    { name: "Toor dal", quantity: "1 cup" },
    { name: "Mixed vegetables", quantity: "2 cups chopped" },
    { name: "Tamarind paste", quantity: "2 tbsp" },
    { name: "Sambar powder", quantity: "2 tbsp" },
    { name: "Mustard seeds", quantity: "1 tsp" },
    { name: "Curry leaves", quantity: "10" },
    { name: "Oil", quantity: "2 tbsp" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Cook toor dal until soft.",
    "Cook vegetables separately.",
    "Heat oil, add mustard seeds and curry leaves.",
    "Add cooked dal, vegetables, tamarind, and sambar powder.",
    "Simmer for 15 minutes, serve hot."
  ]
},
{
  id: 101,
  name: "Vegetable Pakora",
  cuisine: "Indian",
  category: "Snack",
  preparationTime: "15 mins",
  cookingTime: "20 mins",
  ingredients: [
    { name: "Besan (gram flour)", quantity: "1 cup" },
    { name: "Mixed vegetables", quantity: "1 cup chopped" },
    { name: "Red chili powder", quantity: "1 tsp" },
    { name: "Carom seeds", quantity: "1/2 tsp" },
    { name: "Salt", quantity: "to taste" },
    { name: "Water", quantity: "as needed" },
    { name: "Oil", quantity: "for deep frying" }
  ],
  steps: [
    "Mix besan with water to make a thick batter.",
    "Add vegetables, spices, and salt to batter.",
    "Drop spoonfuls into hot oil and deep fry until golden.",
    "Drain and serve hot with chutney."
  ]
},
{
  id: 102,
  name: "Palak Paneer",
  cuisine: "Indian",
  category: "Main Course",
  preparationTime: "15 mins",
  cookingTime: "25 mins",
  ingredients: [
    { name: "Spinach (palak)", quantity: "2 cups blanched and pureed" },
    { name: "Paneer", quantity: "200 g cubed" },
    { name: "Onion", quantity: "1 medium chopped" },
    { name: "Tomato", quantity: "1 medium chopped" },
    { name: "Ginger garlic paste", quantity: "1 tsp" },
    { name: "Oil", quantity: "2 tbsp" },
    { name: "Salt", quantity: "to taste" },
    { name: "Cream", quantity: "2 tbsp (optional)" }
  ],
  steps: [
    "Heat oil, sauté onions and ginger garlic paste.",
    "Add tomatoes and cook until soft.",
    "Add spinach puree, salt and cook for 5 minutes.",
    "Add paneer cubes and cream, simmer for 10 minutes.",
    "Serve hot with roti or rice."
  ]
},
{
  id: 103,
  name: "Veggie Burrito",
  cuisine: "Mexican",
  category: "Snack",
  preparationTime: "15 mins",
  cookingTime: "10 mins",
  ingredients: [
    { name: "Tortilla wraps", quantity: "2 large" },
    { name: "Cooked rice", quantity: "1 cup" },
    { name: "Black beans", quantity: "1/2 cup cooked" },
    { name: "Corn", quantity: "1/2 cup" },
    { name: "Cheese", quantity: "1/2 cup grated" },
    { name: "Salsa", quantity: "1/4 cup" }
  ],
  steps: [
    "Warm tortillas.",
    "Layer rice, beans, corn, cheese, and salsa.",
    "Roll tightly and serve."
  ]
},
{
  id: 104,
  name: "Vegetable Pasta",
  cuisine: "Italian",
  category: "Main Course",
  preparationTime: "15 mins",
  cookingTime: "20 mins",
  ingredients: [
    { name: "Pasta", quantity: "200 g" },
    { name: "Mixed vegetables", quantity: "1 cup chopped" },
    { name: "Tomato sauce", quantity: "1 cup" },
    { name: "Olive oil", quantity: "2 tbsp" },
    { name: "Garlic", quantity: "2 cloves minced" },
    { name: "Salt", quantity: "to taste" },
    { name: "Basil", quantity: "1 tsp chopped" }
  ],
  steps: [
    "Cook pasta as per instructions.",
    "Heat oil, sauté garlic and vegetables.",
    "Add tomato sauce, salt, and basil.",
    "Mix pasta with sauce and serve."
  ]
},
{
  id: 105,
  name: "Tomato Bruschetta",
  cuisine: "Italian",
  category: "Snack",
  preparationTime: "10 mins",
  cookingTime: "5 mins",
  ingredients: [
    { name: "Baguette slices", quantity: "8" },
    { name: "Tomatoes", quantity: "2 medium diced" },
    { name: "Basil", quantity: "2 tbsp chopped" },
    { name: "Olive oil", quantity: "1 tbsp" },
    { name: "Garlic", quantity: "1 clove minced" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Toast baguette slices lightly.",
    "Mix tomatoes, basil, garlic, olive oil, and salt.",
    "Top toasted slices with tomato mixture and serve."
  ]
},
{
  id: 106,
  name: "Chole Masala",
  cuisine: "Punjabi",
  category: "Main Course",
  preparationTime: "20 mins",
  cookingTime: "40 mins",
  ingredients: [
    { name: "Chickpeas (chole)", quantity: "1 cup soaked overnight" },
    { name: "Onion", quantity: "2 medium chopped" },
    { name: "Tomato puree", quantity: "1 cup" },
    { name: "Ginger garlic paste", quantity: "1 tbsp" },
    { name: "Chole masala", quantity: "2 tbsp" },
    { name: "Oil", quantity: "3 tbsp" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Pressure cook chickpeas until soft.",
    "Heat oil, sauté onions and ginger garlic paste.",
    "Add tomato puree and chole masala, cook until oil separates.",
    "Add chickpeas, simmer for 20 minutes.",
    "Serve hot with bhature or rice."
  ]
},
{
  id: 107,
  name: "Minestrone Soup",
  cuisine: "Italian",
  category: "Soup",
  preparationTime: "10 mins",
  cookingTime: "30 mins",
  ingredients: [
    { name: "Mixed vegetables", quantity: "2 cups chopped" },
    { name: "Tomato puree", quantity: "1 cup" },
    { name: "Pasta", quantity: "1/2 cup" },
    { name: "Vegetable broth", quantity: "4 cups" },
    { name: "Olive oil", quantity: "2 tbsp" },
    { name: "Garlic", quantity: "2 cloves minced" },
    { name: "Salt", quantity: "to taste" },
    { name: "Pepper", quantity: "to taste" }
  ],
  steps: [
    "Heat olive oil, sauté garlic and vegetables.",
    "Add tomato puree and broth, bring to boil.",
    "Add pasta and cook until tender.",
    "Season with salt and pepper.",
    "Serve hot."
  ]
},
{
  id: 108,
  name: "Vegetable Enchiladas",
  cuisine: "Mexican",
  category: "Main Course",
  preparationTime: "20 mins",
  cookingTime: "30 mins",
  ingredients: [
    { name: "Tortillas", quantity: "6" },
    { name: "Mixed vegetables", quantity: "2 cups sautéed" },
    { name: "Cheese", quantity: "1 cup grated" },
    { name: "Enchilada sauce", quantity: "1 cup" }
  ],
  steps: [
    "Preheat oven to 180°C.",
    "Fill tortillas with vegetables and cheese, roll up.",
    "Place in baking dish, cover with enchilada sauce and cheese.",
    "Bake for 20 minutes until bubbly.",
    "Serve hot."
  ]
},
{
  id: 109,
  name: "Vegetable Stir Fry",
  cuisine: "Chinese",
  category: "Main Course",
  preparationTime: "10 mins",
  cookingTime: "15 mins",
  ingredients: [
    { name: "Mixed vegetables", quantity: "2 cups chopped" },
    { name: "Soy sauce", quantity: "2 tbsp" },
    { name: "Garlic", quantity: "1 tsp minced" },
    { name: "Ginger", quantity: "1 tsp grated" },
    { name: "Oil", quantity: "2 tbsp" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Heat oil, sauté garlic and ginger.",
    "Add vegetables, cook on high heat for 10 minutes.",
    "Add soy sauce and salt, toss well.",
    "Serve hot."
  ]
},
{
  id: 110,
  name: "Greek Salad",
  cuisine: "Mediterranean",
  category: "Salad",
  preparationTime: "10 mins",
  cookingTime: "0 mins",
  ingredients: [
    { name: "Cucumber", quantity: "1 chopped" },
    { name: "Tomato", quantity: "2 chopped" },
    { name: "Olives", quantity: "1/2 cup" },
    { name: "Feta cheese", quantity: "1/2 cup crumbled" },
    { name: "Olive oil", quantity: "2 tbsp" },
    { name: "Oregano", quantity: "1 tsp" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Mix all ingredients in a bowl.",
    "Drizzle olive oil and sprinkle oregano.",
    "Serve fresh."
  ]
},
{
  id: 111,
  name: "Pumpkin Soup",
  cuisine: "Continental",
  category: "Soup",
  preparationTime: "10 mins",
  cookingTime: "30 mins",
  ingredients: [
    { name: "Pumpkin", quantity: "2 cups chopped" },
    { name: "Onion", quantity: "1 medium chopped" },
    { name: "Garlic", quantity: "2 cloves minced" },
    { name: "Vegetable broth", quantity: "4 cups" },
    { name: "Cream", quantity: "1/4 cup" },
    { name: "Salt", quantity: "to taste" },
    { name: "Pepper", quantity: "to taste" }
  ],
  steps: [
    "Sauté onions and garlic.",
    "Add pumpkin and broth, cook until pumpkin soft.",
    "Blend until smooth.",
    "Add cream, salt and pepper.",
    "Serve hot."
  ]
},
{
  id: 112,
  name: "Vegetable Fajitas",
  cuisine: "Mexican",
  category: "Main Course",
  preparationTime: "15 mins",
  cookingTime: "15 mins",
  ingredients: [
    { name: "Bell peppers", quantity: "2 sliced" },
    { name: "Onion", quantity: "1 sliced" },
    { name: "Tortillas", quantity: "4" },
    { name: "Olive oil", quantity: "2 tbsp" },
    { name: "Fajita seasoning", quantity: "1 tbsp" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Heat oil, sauté peppers and onions with seasoning.",
    "Warm tortillas.",
    "Serve vegetables wrapped in tortillas."
  ]
},
{
  id: 113,
  name: "Tomato Rice",
  cuisine: "South Indian",
  category: "Main Course",
  preparationTime: "10 mins",
  cookingTime: "20 mins",
  ingredients: [
    { name: "Cooked rice", quantity: "2 cups" },
    { name: "Tomatoes", quantity: "2 medium chopped" },
    { name: "Onion", quantity: "1 medium chopped" },
    { name: "Mustard seeds", quantity: "1 tsp" },
    { name: "Curry leaves", quantity: "10" },
    { name: "Green chili", quantity: "1 chopped" },
    { name: "Oil", quantity: "2 tbsp" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Heat oil, add mustard seeds, curry leaves, and chili.",
    "Sauté onions and tomatoes until soft.",
    "Add cooked rice and salt, mix well.",
    "Serve hot."
  ]
},
{
  id: 114,
  name: "Pasta Primavera",
  cuisine: "Italian",
  category: "Main Course",
  preparationTime: "15 mins",
  cookingTime: "20 mins",
  ingredients: [
    { name: "Pasta", quantity: "200 g" },
    { name: "Mixed vegetables", quantity: "1 cup chopped" },
    { name: "Olive oil", quantity: "2 tbsp" },
    { name: "Garlic", quantity: "2 cloves minced" },
    { name: "Parmesan cheese", quantity: "1/4 cup grated" },
    { name: "Salt", quantity: "to taste" },
    { name: "Black pepper", quantity: "to taste" }
  ],
  steps: [
    "Cook pasta as per instructions.",
    "Sauté garlic and vegetables in olive oil.",
    "Mix pasta with vegetables and cheese.",
    "Season with salt and pepper.",
    "Serve warm."
  ]
},
{
  id: 115,
  name: "Vegetable Cutlets",
  cuisine: "Indian",
  category: "Snack",
  preparationTime: "15 mins",
  cookingTime: "20 mins",
  ingredients: [
    { name: "Boiled potatoes", quantity: "2 medium mashed" },
    { name: "Mixed vegetables", quantity: "1 cup boiled and chopped" },
    { name: "Bread crumbs", quantity: "1/2 cup" },
    { name: "Green chili", quantity: "1 chopped" },
    { name: "Ginger", quantity: "1 tsp grated" },
    { name: "Salt", quantity: "to taste" },
    { name: "Oil", quantity: "for frying" }
  ],
  steps: [
    "Mix all ingredients except oil and bread crumbs.",
    "Shape mixture into cutlets, coat with bread crumbs.",
    "Deep fry until golden brown.",
    "Serve hot with sauce."
  ]
},
{
  id: 116,
  name: "Paneer Tikka",
  cuisine: "Indian",
  category: "Snack",
  preparationTime: "20 mins",
  cookingTime: "15 mins",
  ingredients: [
    { name: "Paneer", quantity: "250 g cubed" },
    { name: "Yogurt", quantity: "1/2 cup" },
    { name: "Red chili powder", quantity: "1 tsp" },
    { name: "Garam masala", quantity: "1 tsp" },
    { name: "Lemon juice", quantity: "1 tbsp" },
    { name: "Salt", quantity: "to taste" },
    { name: "Oil", quantity: "2 tbsp" }
  ],
  steps: [
    "Mix yogurt and spices, marinate paneer for 30 minutes.",
    "Skewer paneer pieces and grill or bake until slightly charred.",
    "Serve hot with chutney."
  ]
},
{
  id: 117,
  name: "Tomato Soup",
  cuisine: "Continental",
  category: "Soup",
  preparationTime: "10 mins",
  cookingTime: "20 mins",
  ingredients: [
    { name: "Tomatoes", quantity: "4 large chopped" },
    { name: "Onion", quantity: "1 medium chopped" },
    { name: "Garlic", quantity: "2 cloves" },
    { name: "Butter", quantity: "2 tbsp" },
    { name: "Salt", quantity: "to taste" },
    { name: "Pepper", quantity: "to taste" },
    { name: "Cream", quantity: "2 tbsp" }
  ],
  steps: [
    "Heat butter, sauté onions and garlic.",
    "Add tomatoes and cook until soft.",
    "Blend mixture until smooth.",
    "Simmer, add salt, pepper, and cream.",
    "Serve hot."
  ]
},
{
  id: 118,
  name: "Veg Spring Rolls",
  cuisine: "Chinese",
  category: "Snack",
  preparationTime: "20 mins",
  cookingTime: "15 mins",
  ingredients: [
    { name: "Spring roll wrappers", quantity: "10" },
    { name: "Mixed vegetables", quantity: "2 cups shredded" },
    { name: "Soy sauce", quantity: "1 tbsp" },
    { name: "Garlic", quantity: "1 tsp minced" },
    { name: "Oil", quantity: "for frying" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Sauté vegetables with garlic and soy sauce.",
    "Fill wrappers with vegetable mixture and roll tightly.",
    "Deep fry until golden and crisp.",
    "Serve hot with sauce."
  ]
},
{
  id: 119,
  name: "Corn Salad",
  cuisine: "Continental",
  category: "Salad",
  preparationTime: "10 mins",
  cookingTime: "0 mins",
  ingredients: [
    { name: "Boiled corn", quantity: "1 cup" },
    { name: "Onion", quantity: "1 small chopped" },
    { name: "Tomato", quantity: "1 small chopped" },
    { name: "Cucumber", quantity: "1 small chopped" },
    { name: "Lemon juice", quantity: "1 tbsp" },
    { name: "Salt", quantity: "to taste" },
    { name: "Pepper", quantity: "to taste" }
  ],
  steps: [
    "Mix all ingredients in a bowl.",
    "Chill before serving.",
    "Serve fresh."
  ]
},
{
  id: 120,
  name: "Vegetable Korma",
  cuisine: "Indian",
  category: "Main Course",
  preparationTime: "15 mins",
  cookingTime: "30 mins",
  ingredients: [
    { name: "Mixed vegetables", quantity: "2 cups chopped" },
    { name: "Yogurt", quantity: "1/2 cup" },
    { name: "Cashew nuts", quantity: "10 soaked and ground" },
    { name: "Onion", quantity: "1 medium chopped" },
    { name: "Ginger garlic paste", quantity: "1 tsp" },
    { name: "Oil", quantity: "2 tbsp" },
    { name: "Salt", quantity: "to taste" },
    { name: "Garam masala", quantity: "1 tsp" }
  ],
  steps: [
    "Heat oil, sauté onions and ginger garlic paste.",
    "Add vegetables and cook for 10 minutes.",
    "Add yogurt and cashew paste, cook till gravy thickens.",
    "Add salt and garam masala.",
    "Serve hot with rice or roti."
  ]
},
{
  id: 121,
  name: "Falafel",
  cuisine: "Middle Eastern",
  category: "Snack",
  preparationTime: "20 mins",
  cookingTime: "20 mins",
  ingredients: [
    { name: "Chickpeas", quantity: "1 cup soaked overnight" },
    { name: "Onion", quantity: "1 small chopped" },
    { name: "Garlic", quantity: "2 cloves" },
    { name: "Parsley", quantity: "1/4 cup chopped" },
    { name: "Cumin powder", quantity: "1 tsp" },
    { name: "Coriander powder", quantity: "1 tsp" },
    { name: "Flour", quantity: "2 tbsp" },
    { name: "Salt", quantity: "to taste" },
    { name: "Oil", quantity: "for frying" }
  ],
  steps: [
    "Grind chickpeas with onion, garlic, and herbs.",
    "Add spices, flour and salt to form dough.",
    "Shape into balls and deep fry until golden.",
    "Serve with tahini or chutney."
  ]
},
{
  id: 122,
  name: "Vegetable Pulao",
  cuisine: "Indian",
  category: "Main Course",
  preparationTime: "15 mins",
  cookingTime: "30 mins",
  ingredients: [
    { name: "Basmati rice", quantity: "1 cup" },
    { name: "Mixed vegetables", quantity: "1 cup chopped" },
    { name: "Onion", quantity: "1 medium sliced" },
    { name: "Whole spices", quantity: "2 bay leaves, 4 cloves, 4 cardamom" },
    { name: "Ginger garlic paste", quantity: "1 tsp" },
    { name: "Oil", quantity: "2 tbsp" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Heat oil, sauté whole spices and onions.",
    "Add ginger garlic paste and vegetables.",
    "Add washed rice and water.",
    "Cook until rice is fluffy and done.",
    "Serve hot."
  ]
},
{
  id: 123,
  name: "Hakka Noodles",
  cuisine: "Chinese",
  category: "Main Course",
  preparationTime: "10 mins",
  cookingTime: "15 mins",
  ingredients: [
    { name: "Noodles", quantity: "200 g" },
    { name: "Mixed vegetables", quantity: "1 cup chopped" },
    { name: "Soy sauce", quantity: "2 tbsp" },
    { name: "Garlic", quantity: "1 tsp minced" },
    { name: "Oil", quantity: "2 tbsp" },
    { name: "Salt", quantity: "to taste" },
    { name: "Pepper", quantity: "to taste" }
  ],
  steps: [
    "Cook noodles as per instructions.",
    "Heat oil, sauté garlic and vegetables.",
    "Add noodles, soy sauce, salt, and pepper.",
    "Toss well and serve hot."
  ]
},
{
  id: 124,
  name: "Masala Chai",
  cuisine: "Indian",
  category: "Beverage",
  preparationTime: "5 mins",
  cookingTime: "10 mins",
  ingredients: [
    { name: "Water", quantity: "1 cup" },
    { name: "Milk", quantity: "1 cup" },
    { name: "Tea leaves", quantity: "1 tsp" },
    { name: "Cardamom", quantity: "2 pods crushed" },
    { name: "Ginger", quantity: "1 tsp grated" },
    { name: "Sugar", quantity: "to taste" }
  ],
  steps: [
    "Boil water with cardamom and ginger.",
    "Add tea leaves and boil.",
    "Add milk and sugar, simmer for 5 minutes.",
    "Strain and serve hot."
  ]
},
{
  id: 125,
  name: "Vegetable Fried Rice",
  cuisine: "Chinese",
  category: "Main Course",
  preparationTime: "10 mins",
  cookingTime: "20 mins",
  ingredients: [
    { name: "Cooked rice", quantity: "2 cups" },
    { name: "Mixed vegetables", quantity: "1 cup chopped" },
    { name: "Soy sauce", quantity: "2 tbsp" },
    { name: "Garlic", quantity: "1 tsp minced" },
    { name: "Oil", quantity: "2 tbsp" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Heat oil, sauté garlic and vegetables.",
    "Add cooked rice and soy sauce.",
    "Stir fry for 5-7 minutes.",
    "Serve hot."
  ]
},
{
  id: 126,
  name: "Aloo Gobi",
  cuisine: "North Indian",
  category: "Main Course",
  preparationTime: "15 mins",
  cookingTime: "25 mins",
  ingredients: [
    { name: "Potatoes", quantity: "2 medium diced" },
    { name: "Cauliflower", quantity: "1 medium chopped" },
    { name: "Onion", quantity: "1 medium chopped" },
    { name: "Tomato", quantity: "1 medium chopped" },
    { name: "Ginger garlic paste", quantity: "1 tsp" },
    { name: "Turmeric powder", quantity: "1/2 tsp" },
    { name: "Red chili powder", quantity: "1 tsp" },
    { name: "Oil", quantity: "3 tbsp" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Heat oil, sauté onions and ginger garlic paste.",
    "Add tomatoes and spices, cook till oil separates.",
    "Add potatoes and cauliflower, mix well.",
    "Cover and cook on low heat until vegetables are tender.",
    "Serve hot."
  ]
},
{
  id: 127,
  name: "Paneer Butter Masala",
  cuisine: "North Indian",
  category: "Main Course",
  preparationTime: "20 mins",
  cookingTime: "25 mins",
  ingredients: [
    { name: "Paneer", quantity: "250 g cubed" },
    { name: "Tomato puree", quantity: "1 cup" },
    { name: "Butter", quantity: "3 tbsp" },
    { name: "Cream", quantity: "1/4 cup" },
    { name: "Ginger garlic paste", quantity: "1 tsp" },
    { name: "Kasuri methi", quantity: "1 tsp" },
    { name: "Red chili powder", quantity: "1 tsp" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Heat butter, sauté ginger garlic paste.",
    "Add tomato puree and spices, cook till oil separates.",
    "Add paneer cubes and cream, simmer for 10 minutes.",
    "Sprinkle kasuri methi and serve hot."
  ]
},
{
  id: 128,
  name: "Palak Soup",
  cuisine: "Indian",
  category: "Soup",
  preparationTime: "10 mins",
  cookingTime: "15 mins",
  ingredients: [
    { name: "Spinach", quantity: "2 cups chopped" },
    { name: "Onion", quantity: "1 small chopped" },
    { name: "Garlic", quantity: "2 cloves" },
    { name: "Vegetable broth", quantity: "3 cups" },
    { name: "Salt", quantity: "to taste" },
    { name: "Pepper", quantity: "to taste" }
  ],
  steps: [
    "Sauté onions and garlic.",
    "Add spinach and broth, cook until spinach is tender.",
    "Blend until smooth.",
    "Season with salt and pepper.",
    "Serve hot."
  ]
},
{
  id: 129,
  name: "Veg Hakka Soup",
  cuisine: "Chinese",
  category: "Soup",
  preparationTime: "10 mins",
  cookingTime: "20 mins",
  ingredients: [
    { name: "Mixed vegetables", quantity: "1 cup chopped" },
    { name: "Vegetable broth", quantity: "4 cups" },
    { name: "Soy sauce", quantity: "1 tbsp" },
    { name: "Ginger", quantity: "1 tsp grated" },
    { name: "Garlic", quantity: "1 tsp minced" },
    { name: "Cornflour", quantity: "1 tbsp" },
    { name: "Salt", quantity: "to taste" },
    { name: "Pepper", quantity: "to taste" }
  ],
  steps: [
    "Boil vegetables in broth.",
    "Add ginger, garlic, and soy sauce.",
    "Mix cornflour with water and add to soup to thicken.",
    "Season with salt and pepper.",
    "Serve hot."
  ]
},
{
  id: 130,
  name: "Matar Paneer",
  cuisine: "North Indian",
  category: "Main Course",
  preparationTime: "15 mins",
  cookingTime: "30 mins",
  ingredients: [
    { name: "Paneer", quantity: "250 g cubed" },
    { name: "Green peas", quantity: "1 cup" },
    { name: "Onion", quantity: "1 medium chopped" },
    { name: "Tomato puree", quantity: "1 cup" },
    { name: "Ginger garlic paste", quantity: "1 tsp" },
    { name: "Garam masala", quantity: "1 tsp" },
    { name: "Oil", quantity: "3 tbsp" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Heat oil, sauté onions and ginger garlic paste.",
    "Add tomato puree and spices, cook till oil separates.",
    "Add peas and paneer, cook for 15 minutes.",
    "Serve hot."
  ]
},
{
  id: 131,
  name: "Dhokla",
  cuisine: "Gujarati",
  category: "Snack",
  preparationTime: "15 mins",
  cookingTime: "20 mins",
  ingredients: [
    { name: "Gram flour (besan)", quantity: "1 cup" },
    { name: "Yogurt", quantity: "1/2 cup" },
    { name: "Eno fruit salt", quantity: "1 tsp" },
    { name: "Green chili", quantity: "1 chopped" },
    { name: "Ginger", quantity: "1 tsp grated" },
    { name: "Mustard seeds", quantity: "1 tsp" },
    { name: "Curry leaves", quantity: "10" },
    { name: "Oil", quantity: "2 tbsp" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Mix gram flour, yogurt, chili, ginger, and salt.",
    "Add Eno and mix gently.",
    "Pour batter into greased pan and steam for 15-20 mins.",
    "Tempering: Heat oil, add mustard seeds and curry leaves, pour over dhokla.",
    "Serve hot."
  ]
},
{
  id: 132,
  name: "Vegetable Upma",
  cuisine: "South Indian",
  category: "Breakfast",
  preparationTime: "10 mins",
  cookingTime: "15 mins",
  ingredients: [
    { name: "Semolina (rava)", quantity: "1 cup" },
    { name: "Mixed vegetables", quantity: "1/2 cup chopped" },
    { name: "Mustard seeds", quantity: "1 tsp" },
    { name: "Green chili", quantity: "1 chopped" },
    { name: "Ginger", quantity: "1 tsp grated" },
    { name: "Curry leaves", quantity: "10" },
    { name: "Oil", quantity: "2 tbsp" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Dry roast semolina until fragrant.",
    "Heat oil, add mustard seeds, chili, ginger, curry leaves.",
    "Add vegetables and sauté.",
    "Add water and salt, bring to boil.",
    "Add semolina gradually, stirring continuously.",
    "Cook until water is absorbed and upma is fluffy.",
    "Serve hot."
  ]
},
{
  id: 133,
  name: "Veg Sandwich",
  cuisine: "Continental",
  category: "Snack",
  preparationTime: "10 mins",
  cookingTime: "5 mins",
  ingredients: [
    { name: "Bread slices", quantity: "4" },
    { name: "Butter", quantity: "2 tbsp" },
    { name: "Tomato", quantity: "1 sliced" },
    { name: "Cucumber", quantity: "1 sliced" },
    { name: "Cheese", quantity: "2 slices" },
    { name: "Salt", quantity: "to taste" },
    { name: "Pepper", quantity: "to taste" }
  ],
  steps: [
    "Butter the bread slices.",
    "Layer tomato, cucumber, and cheese.",
    "Sprinkle salt and pepper.",
    "Toast or grill sandwiches until cheese melts.",
    "Serve hot."
  ]
},
{
  id: 134,
  name: "Vegetable Biryani",
  cuisine: "Indian",
  category: "Main Course",
  preparationTime: "20 mins",
  cookingTime: "45 mins",
  ingredients: [
    { name: "Basmati rice", quantity: "1.5 cups" },
    { name: "Mixed vegetables", quantity: "2 cups chopped" },
    { name: "Onion", quantity: "1 large sliced" },
    { name: "Biryani masala", quantity: "2 tbsp" },
    { name: "Yogurt", quantity: "1/2 cup" },
    { name: "Mint leaves", quantity: "1/4 cup" },
    { name: "Coriander leaves", quantity: "1/4 cup" },
    { name: "Oil", quantity: "3 tbsp" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Cook rice till 70% done, drain.",
    "Heat oil, sauté onions and vegetables.",
    "Add biryani masala, yogurt, and salt, cook for 10 mins.",
    "Layer rice and vegetable mixture in a pot.",
    "Cover and cook on low heat for 20 minutes.",
    "Garnish with mint and coriander, serve hot."
  ]
},
{
  id: 135,
  name: "Corn Soup",
  cuisine: "Chinese",
  category: "Soup",
  preparationTime: "10 mins",
  cookingTime: "20 mins",
  ingredients: [
    { name: "Corn kernels", quantity: "1 cup" },
    { name: "Vegetable broth", quantity: "4 cups" },
    { name: "Onion", quantity: "1 small chopped" },
    { name: "Garlic", quantity: "1 clove minced" },
    { name: "Cornflour", quantity: "1 tbsp" },
    { name: "Salt", quantity: "to taste" },
    { name: "Pepper", quantity: "to taste" }
  ],
  steps: [
    "Sauté onions and garlic.",
    "Add corn and broth, boil until corn soft.",
    "Mix cornflour with water, add to soup to thicken.",
    "Season with salt and pepper.",
    "Serve hot."
  ]
},
{
  id: 136,
  name: "Tomato Pachadi",
  cuisine: "South Indian",
  category: "Side Dish",
  preparationTime: "10 mins",
  cookingTime: "10 mins",
  ingredients: [
    { name: "Tomatoes", quantity: "3 medium chopped" },
    { name: "Mustard seeds", quantity: "1 tsp" },
    { name: "Chana dal", quantity: "1 tbsp" },
    { name: "Urad dal", quantity: "1 tsp" },
    { name: "Dry red chili", quantity: "1" },
    { name: "Curry leaves", quantity: "10" },
    { name: "Oil", quantity: "2 tbsp" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Heat oil, add mustard seeds, dals, chili, and curry leaves.",
    "Add tomatoes and salt, cook until soft.",
    "Cool and blend lightly.",
    "Serve as side with rice."
  ]
},
{
  id: 137,
  name: "Rava Idli",
  cuisine: "South Indian",
  category: "Breakfast",
  preparationTime: "10 mins",
  cookingTime: "15 mins",
  ingredients: [
    { name: "Semolina (rava)", quantity: "1 cup" },
    { name: "Yogurt", quantity: "1 cup" },
    { name: "Mustard seeds", quantity: "1 tsp" },
    { name: "Baking soda", quantity: "1/2 tsp" },
    { name: "Green chili", quantity: "1 chopped" },
    { name: "Ginger", quantity: "1 tsp grated" },
    { name: "Curry leaves", quantity: "10" },
    { name: "Oil", quantity: "2 tbsp" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Dry roast semolina, cool.",
    "Mix with yogurt, salt, chili, ginger, and curry leaves.",
    "Add baking soda just before steaming.",
    "Steam batter in molds for 15 minutes.",
    "Serve hot with chutney."
  ]
},
{
  id: 138,
  name: "Veggie Tacos",
  cuisine: "Mexican",
  category: "Snack",
  preparationTime: "15 mins",
  cookingTime: "10 mins",
  ingredients: [
    { name: "Taco shells", quantity: "6" },
    { name: "Mixed vegetables", quantity: "2 cups sautéed" },
    { name: "Cheese", quantity: "1/2 cup grated" },
    { name: "Salsa", quantity: "1/4 cup" }
  ],
  steps: [
    "Warm taco shells.",
    "Fill with sautéed vegetables and cheese.",
    "Top with salsa and serve."
  ]
},
{
  id: 139,
  name: "Mixed Vegetable Curry",
  cuisine: "Indian",
  category: "Main Course",
  preparationTime: "20 mins",
  cookingTime: "30 mins",
  ingredients: [
    { name: "Mixed vegetables", quantity: "3 cups chopped" },
    { name: "Onion", quantity: "1 medium chopped" },
    { name: "Tomato puree", quantity: "1 cup" },
    { name: "Ginger garlic paste", quantity: "1 tbsp" },
    { name: "Cumin seeds", quantity: "1 tsp" },
    { name: "Turmeric powder", quantity: "1/2 tsp" },
    { name: "Red chili powder", quantity: "1 tsp" },
    { name: "Oil", quantity: "3 tbsp" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Heat oil, add cumin seeds, sauté onions and ginger garlic paste.",
    "Add tomato puree and spices, cook till oil separates.",
    "Add vegetables, salt, and cook covered until tender.",
    "Serve hot."
  ]
},
{
  id: 140,
  name: "Veg Spring Roll",
  cuisine: "Chinese",
  category: "Snack",
  preparationTime: "15 mins",
  cookingTime: "15 mins",
  ingredients: [
    { name: "Spring roll wrappers", quantity: "10" },
    { name: "Cabbage", quantity: "1 cup shredded" },
    { name: "Carrot", quantity: "1 cup shredded" },
    { name: "Bell pepper", quantity: "1/2 cup chopped" },
    { name: "Soy sauce", quantity: "1 tbsp" },
    { name: "Oil", quantity: "for frying" }
  ],
  steps: [
    "Sauté vegetables with soy sauce.",
    "Fill wrappers, roll tightly.",
    "Deep fry until golden and crisp.",
    "Serve hot with sauce."
  ]
},
{
  id: 141,
  name: "Pongal",
  cuisine: "South Indian",
  category: "Breakfast",
  preparationTime: "10 mins",
  cookingTime: "25 mins",
  ingredients: [
    { name: "Rice", quantity: "1 cup" },
    { name: "Moong dal", quantity: "1/2 cup" },
    { name: "Ginger", quantity: "1 tsp grated" },
    { name: "Pepper", quantity: "1 tsp" },
    { name: "Cumin seeds", quantity: "1 tsp" },
    { name: "Cashews", quantity: "10" },
    { name: "Curry leaves", quantity: "10" },
    { name: "Ghee", quantity: "2 tbsp" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Cook rice and dal together until soft.",
    "Heat ghee, sauté cumin, pepper, ginger, cashews and curry leaves.",
    "Add to cooked rice mixture, mix well.",
    "Serve hot."
  ]
},
{
  id: 142,
  name: "Corn Chaat",
  cuisine: "Indian",
  category: "Snack",
  preparationTime: "10 mins",
  cookingTime: "5 mins",
  ingredients: [
    { name: "Boiled corn", quantity: "1 cup" },
    { name: "Onion", quantity: "1 small chopped" },
    { name: "Tomato", quantity: "1 small chopped" },
    { name: "Chaat masala", quantity: "1 tsp" },
    { name: "Lemon juice", quantity: "1 tbsp" },
    { name: "Coriander leaves", quantity: "2 tbsp chopped" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Mix all ingredients.",
    "Serve chilled or at room temperature."
  ]
},
{
  id: 143,
  name: "Idli",
  cuisine: "South Indian",
  category: "Breakfast",
  preparationTime: "12 hrs (fermentation)",
  cookingTime: "15 mins",
  ingredients: [
    { name: "Rice", quantity: "2 cups" },
    { name: "Urad dal", quantity: "1 cup" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Soak rice and dal separately for 4-6 hours.",
    "Grind and ferment overnight.",
    "Add salt and steam batter in molds for 15 minutes.",
    "Serve hot with chutney."
  ]
},
{
  id: 144,
  name: "Veggie Omelette (Eggless)",
  cuisine: "Indian",
  category: "Breakfast",
  preparationTime: "10 mins",
  cookingTime: "10 mins",
  ingredients: [
    { name: "Besan (gram flour)", quantity: "1 cup" },
    { name: "Onion", quantity: "1 small chopped" },
    { name: "Tomato", quantity: "1 small chopped" },
    { name: "Green chili", quantity: "1 chopped" },
    { name: "Turmeric powder", quantity: "1/4 tsp" },
    { name: "Salt", quantity: "to taste" },
    { name: "Oil", quantity: "2 tbsp" }
  ],
  steps: [
    "Mix all ingredients with water to form batter.",
    "Heat oil, pour batter like an omelette.",
    "Cook on both sides until done.",
    "Serve hot."
  ]
},
{
  id: 145,
  name: "Pasta Primavera",
  cuisine: "Italian",
  category: "Main Course",
  preparationTime: "15 mins",
  cookingTime: "20 mins",
  ingredients: [
    { name: "Pasta", quantity: "200 g" },
    { name: "Mixed vegetables", quantity: "1.5 cups chopped" },
    { name: "Olive oil", quantity: "2 tbsp" },
    { name: "Garlic", quantity: "2 cloves minced" },
    { name: "Parmesan cheese", quantity: "1/4 cup grated" },
    { name: "Salt", quantity: "to taste" },
    { name: "Pepper", quantity: "to taste" }
  ],
  steps: [
    "Cook pasta until al dente.",
    "Sauté garlic and vegetables in olive oil.",
    "Mix pasta with vegetables.",
    "Sprinkle parmesan, salt, and pepper.",
    "Serve warm."
  ]
},
{
  id: 146,
  name: "Veggie Burrito",
  cuisine: "Mexican",
  category: "Main Course",
  preparationTime: "15 mins",
  cookingTime: "10 mins",
  ingredients: [
    { name: "Tortilla wraps", quantity: "2 large" },
    { name: "Black beans", quantity: "1 cup cooked" },
    { name: "Rice", quantity: "1 cup cooked" },
    { name: "Corn", quantity: "1/2 cup" },
    { name: "Cheese", quantity: "1/2 cup shredded" },
    { name: "Salsa", quantity: "1/4 cup" }
  ],
  steps: [
    "Warm tortillas.",
    "Fill with beans, rice, corn, cheese, and salsa.",
    "Roll tightly and serve."
  ]
},
{
  id: 147,
  name: "Chow Mein",
  cuisine: "Chinese",
  category: "Main Course",
  preparationTime: "15 mins",
  cookingTime: "20 mins",
  ingredients: [
    { name: "Noodles", quantity: "200 g" },
    { name: "Mixed vegetables", quantity: "1.5 cups chopped" },
    { name: "Soy sauce", quantity: "2 tbsp" },
    { name: "Garlic", quantity: "2 cloves minced" },
    { name: "Oil", quantity: "2 tbsp" },
    { name: "Salt", quantity: "to taste" },
    { name: "Pepper", quantity: "to taste" }
  ],
  steps: [
    "Cook noodles as per package instructions.",
    "Sauté garlic and vegetables in oil.",
    "Add noodles, soy sauce, salt, and pepper.",
    "Toss and serve hot."
  ]
},
{
  id: 148,
  name: "Rasam",
  cuisine: "South Indian",
  category: "Soup",
  preparationTime: "10 mins",
  cookingTime: "15 mins",
  ingredients: [
    { name: "Tamarind pulp", quantity: "2 tbsp" },
    { name: "Tomato", quantity: "1 medium chopped" },
    { name: "Mustard seeds", quantity: "1 tsp" },
    { name: "Cumin seeds", quantity: "1 tsp" },
    { name: "Garlic", quantity: "2 cloves minced" },
    { name: "Curry leaves", quantity: "10" },
    { name: "Dry red chili", quantity: "1" },
    { name: "Turmeric powder", quantity: "1/2 tsp" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Boil tamarind pulp, tomato, and spices in water.",
    "Prepare tempering with mustard, cumin, garlic, chili, and curry leaves.",
    "Add tempering to rasam.",
    "Serve hot."
  ]
},
{
  id: 149,
  name: "Vegetable Pakora",
  cuisine: "Indian",
  category: "Snack",
  preparationTime: "15 mins",
  cookingTime: "15 mins",
  ingredients: [
    { name: "Mixed vegetables", quantity: "2 cups grated or chopped" },
    { name: "Gram flour (besan)", quantity: "1 cup" },
    { name: "Rice flour", quantity: "2 tbsp" },
    { name: "Chili powder", quantity: "1 tsp" },
    { name: "Salt", quantity: "to taste" },
    { name: "Water", quantity: "as needed" },
    { name: "Oil", quantity: "for deep frying" }
  ],
  steps: [
    "Mix flours, spices, salt, and water to make a thick batter.",
    "Add vegetables to batter.",
    "Drop spoonfuls in hot oil and deep fry until golden.",
    "Drain and serve hot with chutney."
  ]
},
{
  id: 150,
  name: "Cabbage Thoran",
  cuisine: "South Indian",
  category: "Side Dish",
  preparationTime: "10 mins",
  cookingTime: "15 mins",
  ingredients: [
    { name: "Cabbage", quantity: "2 cups shredded" },
    { name: "Grated coconut", quantity: "1/2 cup" },
    { name: "Mustard seeds", quantity: "1 tsp" },
    { name: "Dry red chili", quantity: "1" },
    { name: "Curry leaves", quantity: "10" },
    { name: "Oil", quantity: "2 tbsp" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Heat oil, add mustard seeds, chili, and curry leaves.",
    "Add cabbage and salt, sauté till tender.",
    "Mix in grated coconut and cook for 2 more minutes.",
    "Serve hot."
  ]
},
{
  id: 151,
  name: "Baingan Bharta",
  cuisine: "North Indian",
  category: "Main Course",
  preparationTime: "15 mins",
  cookingTime: "30 mins",
  ingredients: [
    { name: "Eggplant", quantity: "1 large" },
    { name: "Onion", quantity: "1 medium chopped" },
    { name: "Tomato", quantity: "1 medium chopped" },
    { name: "Green chili", quantity: "1 chopped" },
    { name: "Ginger garlic paste", quantity: "1 tsp" },
    { name: "Oil", quantity: "3 tbsp" },
    { name: "Salt", quantity: "to taste" },
    { name: "Coriander leaves", quantity: "2 tbsp chopped" }
  ],
  steps: [
    "Roast the eggplant directly on flame until skin chars and flesh softens.",
    "Peel and mash the eggplant.",
    "Heat oil, sauté onions, ginger garlic paste, and green chili.",
    "Add tomatoes and cook till soft.",
    "Add mashed eggplant, salt, and cook for 10 minutes.",
    "Garnish with coriander leaves and serve hot."
  ]
},
{
  id: 152,
  name: "Vegetable Manchurian",
  cuisine: "Chinese",
  category: "Snack",
  preparationTime: "20 mins",
  cookingTime: "25 mins",
  ingredients: [
    { name: "Cabbage", quantity: "1 cup grated" },
    { name: "Carrot", quantity: "1 cup grated" },
    { name: "Capsicum", quantity: "1/2 cup finely chopped" },
    { name: "Cornflour", quantity: "1/2 cup" },
    { name: "All-purpose flour", quantity: "1/4 cup" },
    { name: "Garlic", quantity: "2 cloves minced" },
    { name: "Soy sauce", quantity: "2 tbsp" },
    { name: "Chili sauce", quantity: "1 tbsp" },
    { name: "Oil", quantity: "for frying" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Mix grated vegetables with flours and salt to form dough.",
    "Shape into small balls and deep fry until golden.",
    "Prepare sauce by sautéing garlic with soy and chili sauce.",
    "Add fried balls to sauce and toss well.",
    "Serve hot."
  ]
},
{
  id: 153,
  name: "Veggie Quesadilla",
  cuisine: "Mexican",
  category: "Snack",
  preparationTime: "10 mins",
  cookingTime: "10 mins",
  ingredients: [
    { name: "Tortilla", quantity: "2 large" },
    { name: "Cheese", quantity: "1 cup shredded" },
    { name: "Bell peppers", quantity: "1/2 cup sliced" },
    { name: "Onion", quantity: "1/4 cup sliced" },
    { name: "Olive oil", quantity: "1 tbsp" },
    { name: "Salt", quantity: "to taste" },
    { name: "Pepper", quantity: "to taste" }
  ],
  steps: [
    "Heat oil, sauté bell peppers and onion.",
    "Place one tortilla on pan, sprinkle half cheese, vegetables, and rest cheese.",
    "Cover with second tortilla and cook until golden on both sides.",
    "Cut into wedges and serve."
  ]
},
{
  id: 154,
  name: "Vegetable Sambar",
  cuisine: "South Indian",
  category: "Main Course",
  preparationTime: "15 mins",
  cookingTime: "40 mins",
  ingredients: [
    { name: "Toor dal", quantity: "1 cup" },
    { name: "Mixed vegetables", quantity: "2 cups chopped" },
    { name: "Tamarind paste", quantity: "2 tbsp" },
    { name: "Sambar powder", quantity: "2 tbsp" },
    { name: "Mustard seeds", quantity: "1 tsp" },
    { name: "Dry red chili", quantity: "1" },
    { name: "Curry leaves", quantity: "10" },
    { name: "Oil", quantity: "2 tbsp" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Cook toor dal until soft.",
    "Add vegetables, tamarind paste, sambar powder, and salt to dal, cook until vegetables are tender.",
    "Prepare tempering with mustard seeds, dry chili, and curry leaves in oil.",
    "Add tempering to sambar and mix well.",
    "Serve hot."
  ]
},
{
  id: 155,
  name: "Vegetable Fried Momos",
  cuisine: "Tibetan/Chinese",
  category: "Snack",
  preparationTime: "25 mins",
  cookingTime: "20 mins",
  ingredients: [
    { name: "Momo wrappers", quantity: "20" },
    { name: "Cabbage", quantity: "1 cup finely chopped" },
    { name: "Carrot", quantity: "1/2 cup finely chopped" },
    { name: "Onion", quantity: "1 small chopped" },
    { name: "Garlic", quantity: "2 cloves minced" },
    { name: "Soy sauce", quantity: "1 tbsp" },
    { name: "Oil", quantity: "for frying" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Mix vegetables with soy sauce and salt.",
    "Fill wrappers with vegetable mixture and seal.",
    "Steam momos for 10 minutes.",
    "Deep fry steamed momos until crispy.",
    "Serve hot with chutney."
  ]
},
{
  id: 156,
  name: "Vegetable Pulao",
  cuisine: "Indian",
  category: "Main Course",
  preparationTime: "15 mins",
  cookingTime: "30 mins",
  ingredients: [
    { name: "Basmati rice", quantity: "1 cup" },
    { name: "Mixed vegetables", quantity: "1 cup chopped" },
    { name: "Onion", quantity: "1 medium sliced" },
    { name: "Whole spices", quantity: "2 bay leaves, 4 cloves, 4 cardamom" },
    { name: "Ginger garlic paste", quantity: "1 tsp" },
    { name: "Oil", quantity: "2 tbsp" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Heat oil, sauté whole spices and onions.",
    "Add ginger garlic paste and vegetables.",
    "Add washed rice and water.",
    "Cook until rice is fluffy and done.",
    "Serve hot."
  ]
},
{
  id: 157,
  name: "Spinach and Corn Curry",
  cuisine: "Indian",
  category: "Main Course",
  preparationTime: "15 mins",
  cookingTime: "20 mins",
  ingredients: [
    { name: "Spinach", quantity: "2 cups chopped" },
    { name: "Corn kernels", quantity: "1 cup" },
    { name: "Onion", quantity: "1 medium chopped" },
    { name: "Tomato puree", quantity: "1/2 cup" },
    { name: "Garlic", quantity: "2 cloves minced" },
    { name: "Oil", quantity: "2 tbsp" },
    { name: "Salt", quantity: "to taste" },
    { name: "Red chili powder", quantity: "1/2 tsp" }
  ],
  steps: [
    "Heat oil, sauté onions and garlic.",
    "Add tomato puree and spices, cook till oil separates.",
    "Add spinach and corn, cook till done.",
    "Serve hot."
  ]
},
{
  id: 158,
  name: "Masala Dosa",
  cuisine: "South Indian",
  category: "Breakfast",
  preparationTime: "12 hrs (fermentation)",
  cookingTime: "30 mins",
  ingredients: [
    { name: "Rice", quantity: "2 cups" },
    { name: "Urad dal", quantity: "1 cup" },
    { name: "Potatoes", quantity: "3 medium boiled and mashed" },
    { name: "Onion", quantity: "1 medium chopped" },
    { name: "Mustard seeds", quantity: "1 tsp" },
    { name: "Curry leaves", quantity: "10" },
    { name: "Turmeric powder", quantity: "1/2 tsp" },
    { name: "Oil", quantity: "2 tbsp" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Soak rice and dal separately, grind and ferment overnight.",
    "Prepare potato filling by sautéing onions, mustard seeds, curry leaves, turmeric and mashed potatoes.",
    "Make thin dosa batter and cook on griddle.",
    "Place filling on dosa and fold.",
    "Serve hot with chutney and sambar."
  ]
},
{
  id: 159,
  name: "Chana Masala",
  cuisine: "North Indian",
  category: "Main Course",
  preparationTime: "15 mins",
  cookingTime: "35 mins",
  ingredients: [
    { name: "Chickpeas", quantity: "1 cup soaked overnight" },
    { name: "Onion", quantity: "1 medium chopped" },
    { name: "Tomato puree", quantity: "1 cup" },
    { name: "Ginger garlic paste", quantity: "1 tsp" },
    { name: "Chana masala powder", quantity: "2 tbsp" },
    { name: "Oil", quantity: "3 tbsp" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Cook chickpeas until soft.",
    "Heat oil, sauté onions and ginger garlic paste.",
    "Add tomato puree and chana masala powder, cook till oil separates.",
    "Add chickpeas, salt and simmer for 15 minutes.",
    "Serve hot."
  ]
},
{
  id: 160,
  name: "Rajma",
  cuisine: "North Indian",
  category: "Main Course",
  preparationTime: "15 mins",
  cookingTime: "45 mins",
  ingredients: [
    { name: "Kidney beans", quantity: "1 cup soaked overnight" },
    { name: "Onion", quantity: "1 medium chopped" },
    { name: "Tomato puree", quantity: "1 cup" },
    { name: "Ginger garlic paste", quantity: "1 tsp" },
    { name: "Garam masala", quantity: "1 tsp" },
    { name: "Oil", quantity: "3 tbsp" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Cook kidney beans until soft.",
    "Heat oil, sauté onions and ginger garlic paste.",
    "Add tomato puree and spices, cook till oil separates.",
    "Add beans, salt and simmer for 30 minutes.",
    "Serve hot."
  ]
},
{
  id: 161,
  name: "Vegetable Pasta",
  cuisine: "Italian",
  category: "Main Course",
  preparationTime: "15 mins",
  cookingTime: "20 mins",
  ingredients: [
    { name: "Pasta", quantity: "200 g" },
    { name: "Mixed vegetables", quantity: "1.5 cups chopped" },
    { name: "Tomato sauce", quantity: "1 cup" },
    { name: "Garlic", quantity: "2 cloves minced" },
    { name: "Olive oil", quantity: "2 tbsp" },
    { name: "Salt", quantity: "to taste" },
    { name: "Pepper", quantity: "to taste" }
  ],
  steps: [
    "Cook pasta until al dente.",
    "Sauté garlic and vegetables in olive oil.",
    "Add tomato sauce and cook for 5 minutes.",
    "Mix pasta with sauce, season and serve."
  ]
},
{
  id: 162,
  name: "Vegetable Stew",
  cuisine: "South Indian",
  category: "Main Course",
  preparationTime: "15 mins",
  cookingTime: "25 mins",
  ingredients: [
    { name: "Mixed vegetables", quantity: "2 cups chopped" },
    { name: "Coconut milk", quantity: "1 cup" },
    { name: "Green chili", quantity: "1 chopped" },
    { name: "Ginger", quantity: "1 tsp grated" },
    { name: "Curry leaves", quantity: "10" },
    { name: "Oil", quantity: "2 tbsp" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Heat oil, sauté ginger, chili and curry leaves.",
    "Add vegetables and cook till tender.",
    "Add coconut milk and simmer for 10 minutes.",
    "Serve hot."
  ]
},
{
  id: 163,
  name: "Vegetable Cutlets",
  cuisine: "Indian",
  category: "Snack",
  preparationTime: "20 mins",
  cookingTime: "15 mins",
  ingredients: [
    { name: "Mixed vegetables", quantity: "2 cups boiled and mashed" },
    { name: "Bread crumbs", quantity: "1 cup" },
    { name: "Green chili", quantity: "1 chopped" },
    { name: "Ginger", quantity: "1 tsp grated" },
    { name: "Salt", quantity: "to taste" },
    { name: "Oil", quantity: "for shallow frying" }
  ],
  steps: [
    "Mix vegetables with spices and bread crumbs.",
    "Shape into patties.",
    "Shallow fry until golden brown.",
    "Serve hot with chutney."
  ]
},
{
  id: 164,
  name: "Veg Pulao",
  cuisine: "Indian",
  category: "Main Course",
  preparationTime: "15 mins",
  cookingTime: "30 mins",
  ingredients: [
    { name: "Basmati rice", quantity: "1 cup" },
    { name: "Mixed vegetables", quantity: "1 cup chopped" },
    { name: "Onion", quantity: "1 medium sliced" },
    { name: "Whole spices", quantity: "2 bay leaves, 4 cloves, 4 cardamom" },
    { name: "Ginger garlic paste", quantity: "1 tsp" },
    { name: "Oil", quantity: "2 tbsp" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Heat oil, sauté whole spices and onions.",
    "Add ginger garlic paste and vegetables.",
    "Add washed rice and water.",
    "Cook until rice is fluffy and done.",
    "Serve hot."
  ]
},
{
  id: 165,
  name: "Vegetable Curry",
  cuisine: "Indian",
  category: "Main Course",
  preparationTime: "20 mins",
  cookingTime: "30 mins",
  ingredients: [
    { name: "Mixed vegetables", quantity: "3 cups chopped" },
    { name: "Onion", quantity: "1 medium chopped" },
    { name: "Tomato puree", quantity: "1 cup" },
    { name: "Ginger garlic paste", quantity: "1 tbsp" },
    { name: "Cumin seeds", quantity: "1 tsp" },
    { name: "Turmeric powder", quantity: "1/2 tsp" },
    { name: "Red chili powder", quantity: "1 tsp" },
    { name: "Oil", quantity: "3 tbsp" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Heat oil, add cumin seeds, sauté onions and ginger garlic paste.",
    "Add tomato puree and spices, cook till oil separates.",
    "Add vegetables, salt, and cook covered until tender.",
    "Serve hot."
  ]
},
{
  id: 166,
  name: "Vegetable Korma",
  cuisine: "Indian",
  category: "Main Course",
  preparationTime: "20 mins",
  cookingTime: "30 mins",
  ingredients: [
    { name: "Mixed vegetables", quantity: "3 cups chopped" },
    { name: "Onion", quantity: "1 medium chopped" },
    { name: "Cashew paste", quantity: "1/4 cup" },
    { name: "Yogurt", quantity: "1/2 cup" },
    { name: "Ginger garlic paste", quantity: "1 tbsp" },
    { name: "Garam masala", quantity: "1 tsp" },
    { name: "Oil", quantity: "3 tbsp" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Heat oil, sauté onions and ginger garlic paste.",
    "Add vegetables and cook for 10 minutes.",
    "Add yogurt, cashew paste, and spices, cook until gravy thickens.",
    "Serve hot."
  ]
},
{
  id: 167,
  name: "Aloo Paratha",
  cuisine: "North Indian",
  category: "Breakfast",
  preparationTime: "15 mins",
  cookingTime: "20 mins",
  ingredients: [
    { name: "Wheat flour", quantity: "2 cups" },
    { name: "Potatoes", quantity: "3 boiled and mashed" },
    { name: "Green chili", quantity: "1 chopped" },
    { name: "Coriander leaves", quantity: "2 tbsp chopped" },
    { name: "Salt", quantity: "to taste" },
    { name: "Ghee or oil", quantity: "for cooking" }
  ],
  steps: [
    "Prepare dough with flour and water.",
    "Mix potatoes with chili, coriander, and salt.",
    "Roll dough, stuff with potato mixture, roll again.",
    "Cook on griddle with ghee/oil until golden brown.",
    "Serve hot with yogurt or pickle."
  ]
},
{
  id: 168,
  name: "Veggie Salad",
  cuisine: "Continental",
  category: "Salad",
  preparationTime: "10 mins",
  cookingTime: "0 mins",
  ingredients: [
    { name: "Lettuce", quantity: "1 cup chopped" },
    { name: "Tomato", quantity: "1 chopped" },
    { name: "Cucumber", quantity: "1 chopped" },
    { name: "Carrot", quantity: "1 grated" },
    { name: "Olive oil", quantity: "1 tbsp" },
    { name: "Lemon juice", quantity: "1 tbsp" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Mix all vegetables in a bowl.",
    "Add olive oil, lemon juice, and salt.",
    "Toss well and serve fresh."
  ]
},
{
  id: 169,
  name: "Vegetable Soup",
  cuisine: "Continental",
  category: "Soup",
  preparationTime: "15 mins",
  cookingTime: "25 mins",
  ingredients: [
    { name: "Mixed vegetables", quantity: "2 cups chopped" },
    { name: "Vegetable broth", quantity: "4 cups" },
    { name: "Onion", quantity: "1 small chopped" },
    { name: "Garlic", quantity: "2 cloves minced" },
    { name: "Olive oil", quantity: "1 tbsp" },
    { name: "Salt", quantity: "to taste" },
    { name: "Pepper", quantity: "to taste" }
  ],
  steps: [
    "Heat oil, sauté onion and garlic.",
    "Add vegetables and broth.",
    "Simmer until vegetables are tender.",
    "Season with salt and pepper.",
    "Serve hot."
  ]
},
{
  id: 170,
  name: "Veg Spring Rolls",
  cuisine: "Chinese",
  category: "Snack",
  preparationTime: "20 mins",
  cookingTime: "15 mins",
  ingredients: [
    { name: "Spring roll wrappers", quantity: "10" },
    { name: "Cabbage", quantity: "1 cup shredded" },
    { name: "Carrot", quantity: "1/2 cup shredded" },
    { name: "Bean sprouts", quantity: "1/2 cup" },
    { name: "Soy sauce", quantity: "1 tbsp" },
    { name: "Oil", quantity: "for frying" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Mix vegetables with soy sauce and salt.",
    "Fill wrappers with vegetable mixture and roll tightly.",
    "Deep fry until golden and crisp.",
    "Serve hot with sauce."
  ]
},
{
  id: 171,
  name: "Tomato Soup",
  cuisine: "Continental",
  category: "Soup",
  preparationTime: "10 mins",
  cookingTime: "20 mins",
  ingredients: [
    { name: "Tomatoes", quantity: "4 medium chopped" },
    { name: "Onion", quantity: "1 small chopped" },
    { name: "Garlic", quantity: "2 cloves minced" },
    { name: "Olive oil", quantity: "1 tbsp" },
    { name: "Salt", quantity: "to taste" },
    { name: "Pepper", quantity: "to taste" },
    { name: "Basil leaves", quantity: "few for garnish" }
  ],
  steps: [
    "Heat oil, sauté onion and garlic.",
    "Add tomatoes and cook until soft.",
    "Blend and simmer.",
    "Season and garnish with basil.",
    "Serve hot."
  ]
},
{
  id: 172,
  name: "Paneer Tikka",
  cuisine: "North Indian",
  category: "Snack",
  preparationTime: "15 mins",
  cookingTime: "25 mins",
  ingredients: [
    { name: "Paneer", quantity: "250 g cubes" },
    { name: "Yogurt", quantity: "1/2 cup" },
    { name: "Red chili powder", quantity: "1 tsp" },
    { name: "Garam masala", quantity: "1 tsp" },
    { name: "Lemon juice", quantity: "1 tbsp" },
    { name: "Salt", quantity: "to taste" },
    { name: "Oil", quantity: "2 tbsp" }
  ],
  steps: [
    "Mix yogurt and spices to make marinade.",
    "Coat paneer cubes and marinate for 30 mins.",
    "Grill or bake until golden.",
    "Serve hot with chutney."
  ]
},
{
  id: 173,
  name: "Veg Hakka Noodles",
  cuisine: "Chinese",
  category: "Main Course",
  preparationTime: "15 mins",
  cookingTime: "15 mins",
  ingredients: [
    { name: "Hakka noodles", quantity: "200 g" },
    { name: "Mixed vegetables", quantity: "1.5 cups chopped" },
    { name: "Soy sauce", quantity: "2 tbsp" },
    { name: "Garlic", quantity: "2 cloves minced" },
    { name: "Oil", quantity: "2 tbsp" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Cook noodles as per instructions.",
    "Sauté garlic and vegetables in oil.",
    "Add noodles and soy sauce.",
    "Toss and serve hot."
  ]
},
{
  id: 174,
  name: "Vegetable Biryani",
  cuisine: "Indian",
  category: "Main Course",
  preparationTime: "20 mins",
  cookingTime: "45 mins",
  ingredients: [
    { name: "Basmati rice", quantity: "1 cup" },
    { name: "Mixed vegetables", quantity: "2 cups chopped" },
    { name: "Yogurt", quantity: "1/2 cup" },
    { name: "Biryani masala", quantity: "2 tbsp" },
    { name: "Onion", quantity: "1 large sliced" },
    { name: "Oil", quantity: "3 tbsp" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Cook rice partially.",
    "Heat oil, sauté onions and vegetables.",
    "Add yogurt and biryani masala.",
    "Layer rice and vegetable mixture, cook on low flame.",
    "Serve hot with raita."
  ]
},
{
  id: 175,
  name: "Vegetable Stir Fry",
  cuisine: "Chinese",
  category: "Main Course",
  preparationTime: "10 mins",
  cookingTime: "10 mins",
  ingredients: [
    { name: "Mixed vegetables", quantity: "2 cups chopped" },
    { name: "Soy sauce", quantity: "2 tbsp" },
    { name: "Garlic", quantity: "2 cloves minced" },
    { name: "Oil", quantity: "2 tbsp" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Heat oil, sauté garlic.",
    "Add vegetables and cook on high flame.",
    "Add soy sauce and salt.",
    "Toss and serve hot."
  ]
},
{
  id: 176,
  name: "Vegetable Kathi Roll",
  cuisine: "Indian",
  category: "Snack",
  preparationTime: "20 mins",
  cookingTime: "15 mins",
  ingredients: [
    { name: "Whole wheat roti", quantity: "2" },
    { name: "Mixed vegetables", quantity: "1 cup sliced" },
    { name: "Onion", quantity: "1 small sliced" },
    { name: "Capsicum", quantity: "1/2 cup sliced" },
    { name: "Chaat masala", quantity: "1 tsp" },
    { name: "Oil", quantity: "2 tbsp" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Heat oil, sauté onions, capsicum and mixed vegetables with salt and chaat masala.",
    "Place vegetable filling on roti and roll tightly.",
    "Serve hot."
  ]
},
{
  id: 177,
  name: "Vegetable Omelette (Besan)",
  cuisine: "Indian",
  category: "Breakfast",
  preparationTime: "10 mins",
  cookingTime: "10 mins",
  ingredients: [
    { name: "Gram flour (besan)", quantity: "1 cup" },
    { name: "Tomato", quantity: "1 small chopped" },
    { name: "Onion", quantity: "1 small chopped" },
    { name: "Green chili", quantity: "1 chopped" },
    { name: "Turmeric powder", quantity: "1/4 tsp" },
    { name: "Salt", quantity: "to taste" },
    { name: "Oil", quantity: "2 tbsp" }
  ],
  steps: [
    "Mix all ingredients with water to form batter.",
    "Heat oil, pour batter like an omelette.",
    "Cook on both sides until done.",
    "Serve hot."
  ]
},
{
  id: 178,
  name: "Pasta Primavera",
  cuisine: "Italian",
  category: "Main Course",
  preparationTime: "15 mins",
  cookingTime: "20 mins",
  ingredients: [
    { name: "Pasta", quantity: "200 g" },
    { name: "Mixed vegetables", quantity: "1.5 cups chopped" },
    { name: "Olive oil", quantity: "2 tbsp" },
    { name: "Garlic", quantity: "2 cloves minced" },
    { name: "Parmesan cheese", quantity: "1/4 cup grated" },
    { name: "Salt", quantity: "to taste" },
    { name: "Pepper", quantity: "to taste" }
  ],
  steps: [
    "Cook pasta until al dente.",
    "Sauté garlic and vegetables in olive oil.",
    "Mix pasta with vegetables.",
    "Sprinkle parmesan, salt, and pepper.",
    "Serve warm."
  ]
},
{
  id: 179,
  name: "Veggie Burrito",
  cuisine: "Mexican",
  category: "Main Course",
  preparationTime: "15 mins",
  cookingTime: "10 mins",
  ingredients: [
    { name: "Tortilla wraps", quantity: "2 large" },
    { name: "Black beans", quantity: "1 cup cooked" },
    { name: "Rice", quantity: "1 cup cooked" },
    { name: "Corn", quantity: "1/2 cup" },
    { name: "Cheese", quantity: "1/2 cup shredded" },
    { name: "Salsa", quantity: "1/4 cup" }
  ],
  steps: [
    "Warm tortillas.",
    "Fill with beans, rice, corn, cheese, and salsa.",
    "Roll tightly and serve."
  ]
},
{
  id: 180,
  name: "Chow Mein",
  cuisine: "Chinese",
  category: "Main Course",
  preparationTime: "15 mins",
  cookingTime: "20 mins",
  ingredients: [
    { name: "Noodles", quantity: "200 g" },
    { name: "Mixed vegetables", quantity: "1.5 cups chopped" },
    { name: "Soy sauce", quantity: "2 tbsp" },
    { name: "Garlic", quantity: "2 cloves minced" },
    { name: "Oil", quantity: "2 tbsp" },
    { name: "Salt", quantity: "to taste" },
    { name: "Pepper", quantity: "to taste" }
  ],
  steps: [
    "Cook noodles as per package instructions.",
    "Sauté garlic and vegetables in oil.",
    "Add noodles, soy sauce, salt, and pepper.",
    "Toss and serve hot."
  ]
},
{
  id: 181,
  name: "Rasam",
  cuisine: "South Indian",
  category: "Soup",
  preparationTime: "10 mins",
  cookingTime: "15 mins",
  ingredients: [
    { name: "Tamarind pulp", quantity: "2 tbsp" },
    { name: "Tomato", quantity: "1 medium chopped" },
    { name: "Mustard seeds", quantity: "1 tsp" },
    { name: "Cumin seeds", quantity: "1 tsp" },
    { name: "Garlic", quantity: "2 cloves minced" },
    { name: "Curry leaves", quantity: "10" },
    { name: "Dry red chili", quantity: "1" },
    { name: "Turmeric powder", quantity: "1/2 tsp" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Boil tamarind pulp, tomato, and spices in water.",
    "Prepare tempering with mustard, cumin, garlic, chili, and curry leaves.",
    "Add tempering to rasam.",
    "Serve hot."
  ]
},
{
  id: 182,
  name: "Vegetable Pakora",
  cuisine: "Indian",
  category: "Snack",
  preparationTime: "15 mins",
  cookingTime: "15 mins",
  ingredients: [
    { name: "Mixed vegetables", quantity: "2 cups grated or chopped" },
    { name: "Gram flour (besan)", quantity: "1 cup" },
    { name: "Rice flour", quantity: "2 tbsp" },
    { name: "Chili powder", quantity: "1 tsp" },
    { name: "Salt", quantity: "to taste" },
    { name: "Water", quantity: "as needed" },
    { name: "Oil", quantity: "for deep frying" }
  ],
  steps: [
    "Mix flours, spices, salt, and water to make a thick batter.",
    "Add vegetables to batter.",
    "Drop spoonfuls in hot oil and deep fry until golden.",
    "Drain and serve hot with chutney."
  ]
},
{
  id: 183,
  name: "Cabbage Thoran",
  cuisine: "South Indian",
  category: "Side Dish",
  preparationTime: "10 mins",
  cookingTime: "15 mins",
  ingredients: [
    { name: "Cabbage", quantity: "2 cups shredded" },
    { name: "Grated coconut", quantity: "1/2 cup" },
    { name: "Mustard seeds", quantity: "1 tsp" },
    { name: "Dry red chili", quantity: "1" },
    { name: "Curry leaves", quantity: "10" },
    { name: "Oil", quantity: "2 tbsp" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Heat oil, add mustard seeds, chili, and curry leaves.",
    "Add cabbage and salt, sauté till tender.",
    "Mix in grated coconut and cook for 2 more minutes.",
    "Serve hot."
  ]
},
{
  id: 184,
  name: "Vegetable Cutlets",
  cuisine: "Indian",
  category: "Snack",
  preparationTime: "20 mins",
  cookingTime: "15 mins",
  ingredients: [
    { name: "Mixed vegetables", quantity: "2 cups boiled and mashed" },
    { name: "Bread crumbs", quantity: "1 cup" },
    { name: "Green chili", quantity: "1 chopped" },
    { name: "Ginger", quantity: "1 tsp grated" },
    { name: "Salt", quantity: "to taste" },
    { name: "Oil", quantity: "for shallow frying" }
  ],
  steps: [
    "Mix vegetables with spices and bread crumbs.",
    "Shape into patties.",
    "Shallow fry until golden brown.",
    "Serve hot with chutney."
  ]
},
{
  id: 185,
  name: "Veggie Salad",
  cuisine: "Continental",
  category: "Salad",
  preparationTime: "10 mins",
  cookingTime: "0 mins",
  ingredients: [
    { name: "Lettuce", quantity: "1 cup chopped" },
    { name: "Tomato", quantity: "1 chopped" },
    { name: "Cucumber", quantity: "1 chopped" },
    { name: "Carrot", quantity: "1 grated" },
    { name: "Olive oil", quantity: "1 tbsp" },
    { name: "Lemon juice", quantity: "1 tbsp" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Mix all vegetables in a bowl.",
    "Add olive oil, lemon juice, and salt.",
    "Toss well and serve fresh."
  ]
},
{
  id: 186,
  name: "Vegetable Soup",
  cuisine: "Continental",
  category: "Soup",
  preparationTime: "15 mins",
  cookingTime: "25 mins",
  ingredients: [
    { name: "Mixed vegetables", quantity: "2 cups chopped" },
    { name: "Vegetable broth", quantity: "4 cups" },
    { name: "Onion", quantity: "1 small chopped" },
    { name: "Garlic", quantity: "2 cloves minced" },
    { name: "Olive oil", quantity: "1 tbsp" },
    { name: "Salt", quantity: "to taste" },
    { name: "Pepper", quantity: "to taste" }
  ],
  steps: [
    "Heat oil, sauté onion and garlic.",
    "Add vegetables and broth.",
    "Simmer until vegetables are tender.",
    "Season with salt and pepper.",
    "Serve hot."
  ]
},
{
  id: 187,
  name: "Veg Spring Rolls",
  cuisine: "Chinese",
  category: "Snack",
  preparationTime: "20 mins",
  cookingTime: "15 mins",
  ingredients: [
    { name: "Spring roll wrappers", quantity: "10" },
    { name: "Cabbage", quantity: "1 cup shredded" },
    { name: "Carrot", quantity: "1/2 cup shredded" },
    { name: "Bean sprouts", quantity: "1/2 cup" },
    { name: "Soy sauce", quantity: "1 tbsp" },
    { name: "Oil", quantity: "for frying" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Mix vegetables with soy sauce and salt.",
    "Fill wrappers with vegetable mixture and roll tightly.",
    "Deep fry until golden and crisp.",
    "Serve hot with sauce."
  ]
},
{
  id: 188,
  name: "Tomato Soup",
  cuisine: "Continental",
  category: "Soup",
  preparationTime: "10 mins",
  cookingTime: "20 mins",
  ingredients: [
    { name: "Tomatoes", quantity: "4 medium chopped" },
    { name: "Onion", quantity: "1 small chopped" },
    { name: "Garlic", quantity: "2 cloves minced" },
    { name: "Olive oil", quantity: "1 tbsp" },
    { name: "Salt", quantity: "to taste" },
    { name: "Pepper", quantity: "to taste" },
    { name: "Basil leaves", quantity: "few for garnish" }
  ],
  steps: [
    "Heat oil, sauté onion and garlic.",
    "Add tomatoes and cook until soft.",
    "Blend and simmer.",
    "Season and garnish with basil.",
    "Serve hot."
  ]
},
{
  id: 189,
  name: "Paneer Tikka",
  cuisine: "North Indian",
  category: "Snack",
  preparationTime: "15 mins",
  cookingTime: "25 mins",
  ingredients: [
    { name: "Paneer", quantity: "250 g cubes" },
    { name: "Yogurt", quantity: "1/2 cup" },
    { name: "Red chili powder", quantity: "1 tsp" },
    { name: "Garam masala", quantity: "1 tsp" },
    { name: "Lemon juice", quantity: "1 tbsp" },
    { name: "Salt", quantity: "to taste" },
    { name: "Oil", quantity: "2 tbsp" }
  ],
  steps: [
    "Mix yogurt and spices to make marinade.",
    "Coat paneer cubes and marinate for 30 mins.",
    "Grill or bake until golden.",
    "Serve hot with chutney."
  ]
},
{
  id: 190,
  name: "Veg Hakka Noodles",
  cuisine: "Chinese",
  category: "Main Course",
  preparationTime: "15 mins",
  cookingTime: "15 mins",
  ingredients: [
    { name: "Hakka noodles", quantity: "200 g" },
    { name: "Mixed vegetables", quantity: "1.5 cups chopped" },
    { name: "Soy sauce", quantity: "2 tbsp" },
    { name: "Garlic", quantity: "2 cloves minced" },
    { name: "Oil", quantity: "2 tbsp" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Cook noodles as per instructions.",
    "Sauté garlic and vegetables in oil.",
    "Add noodles and soy sauce.",
    "Toss and serve hot."
  ]
},
{
  id: 191,
  name: "Vegetable Biryani",
  cuisine: "Indian",
  category: "Main Course",
  preparationTime: "20 mins",
  cookingTime: "45 mins",
  ingredients: [
    { name: "Basmati rice", quantity: "1 cup" },
    { name: "Mixed vegetables", quantity: "2 cups chopped" },
    { name: "Yogurt", quantity: "1/2 cup" },
    { name: "Biryani masala", quantity: "2 tbsp" },
    { name: "Onion", quantity: "1 large sliced" },
    { name: "Oil", quantity: "3 tbsp" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Cook rice partially.",
    "Heat oil, sauté onions and vegetables.",
    "Add yogurt and biryani masala.",
    "Layer rice and vegetable mixture, cook on low flame.",
    "Serve hot with raita."
  ]
},
{
  id: 192,
  name: "Vegetable Stir Fry",
  cuisine: "Chinese",
  category: "Main Course",
  preparationTime: "10 mins",
  cookingTime: "10 mins",
  ingredients: [
    { name: "Mixed vegetables", quantity: "2 cups chopped" },
    { name: "Soy sauce", quantity: "2 tbsp" },
    { name: "Garlic", quantity: "2 cloves minced" },
    { name: "Oil", quantity: "2 tbsp" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Heat oil, sauté garlic.",
    "Add vegetables and cook on high flame.",
    "Add soy sauce and salt.",
    "Toss and serve hot."
  ]
},
{
  id: 193,
  name: "Mixed Vegetable Curry",
  cuisine: "Indian",
  category: "Main Course",
  preparationTime: "20 mins",
  cookingTime: "30 mins",
  ingredients: [
    { name: "Mixed vegetables", quantity: "3 cups chopped" },
    { name: "Onion", quantity: "1 medium chopped" },
    { name: "Tomato puree", quantity: "1 cup" },
    { name: "Ginger garlic paste", quantity: "1 tbsp" },
    { name: "Cumin seeds", quantity: "1 tsp" },
    { name: "Turmeric powder", quantity: "1/2 tsp" },
    { name: "Red chili powder", quantity: "1 tsp" },
    { name: "Oil", quantity: "3 tbsp" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Heat oil, add cumin seeds, sauté onions and ginger garlic paste.",
    "Add tomato puree and spices, cook till oil separates.",
    "Add vegetables, salt, and cook covered until tender.",
    "Serve hot."
  ]
},
{
  id: 194,
  name: "Vegetable Korma",
  cuisine: "Indian",
  category: "Main Course",
  preparationTime: "20 mins",
  cookingTime: "30 mins",
  ingredients: [
    { name: "Mixed vegetables", quantity: "3 cups chopped" },
    { name: "Onion", quantity: "1 medium chopped" },
    { name: "Cashew paste", quantity: "1/4 cup" },
    { name: "Yogurt", quantity: "1/2 cup" },
    { name: "Ginger garlic paste", quantity: "1 tbsp" },
    { name: "Garam masala", quantity: "1 tsp" },
    { name: "Oil", quantity: "3 tbsp" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Heat oil, sauté onions and ginger garlic paste.",
    "Add vegetables and cook for 10 minutes.",
    "Add yogurt, cashew paste, and spices, cook until gravy thickens.",
    "Serve hot."
  ]
},
{
  id: 195,
  name: "Aloo Paratha",
  cuisine: "North Indian",
  category: "Breakfast",
  preparationTime: "15 mins",
  cookingTime: "20 mins",
  ingredients: [
    { name: "Wheat flour", quantity: "2 cups" },
    { name: "Potatoes", quantity: "3 boiled and mashed" },
    { name: "Green chili", quantity: "1 chopped" },
    { name: "Coriander leaves", quantity: "2 tbsp chopped" },
    { name: "Salt", quantity: "to taste" },
    { name: "Ghee or oil", quantity: "for cooking" }
  ],
  steps: [
    "Prepare dough with flour and water.",
    "Mix mashed potatoes with chili, coriander, and salt.",
    "Stuff dough balls with potato mixture and roll into flatbreads.",
    "Cook on tawa with ghee/oil until golden.",
    "Serve hot with yogurt or pickle."
  ]
},
{
  id: 196,
  name: "Masala Dosa",
  cuisine: "South Indian",
  category: "Breakfast",
  preparationTime: "15 mins",
  cookingTime: "30 mins",
  ingredients: [
    { name: "Dosa batter", quantity: "2 cups" },
    { name: "Potatoes", quantity: "3 boiled and mashed" },
    { name: "Onion", quantity: "1 chopped" },
    { name: "Mustard seeds", quantity: "1 tsp" },
    { name: "Curry leaves", quantity: "10" },
    { name: "Turmeric powder", quantity: "1/2 tsp" },
    { name: "Oil", quantity: "2 tbsp" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Prepare potato masala with onions and spices.",
    "Heat dosa pan, spread batter thinly.",
    "Add potato masala inside dosa and fold.",
    "Serve hot with chutney and sambar."
  ]
},
{
  id: 197,
  name: "Palak Paneer",
  cuisine: "North Indian",
  category: "Main Course",
  preparationTime: "15 mins",
  cookingTime: "30 mins",
  ingredients: [
    { name: "Spinach (palak)", quantity: "4 cups chopped" },
    { name: "Paneer", quantity: "200 g cubes" },
    { name: "Onion", quantity: "1 chopped" },
    { name: "Tomato", quantity: "1 chopped" },
    { name: "Garlic", quantity: "3 cloves minced" },
    { name: "Ginger", quantity: "1 inch grated" },
    { name: "Green chili", quantity: "1 chopped" },
    { name: "Oil", quantity: "2 tbsp" },
    { name: "Salt", quantity: "to taste" },
    { name: "Cream", quantity: "2 tbsp (optional)" }
  ],
  steps: [
    "Blanch spinach and blend to puree.",
    "Sauté onions, garlic, ginger, and chili in oil.",
    "Add tomatoes and cook until soft.",
    "Add spinach puree and salt, cook for 5 mins.",
    "Add paneer cubes and cook for another 5 mins.",
    "Add cream if using, serve hot."
  ]
},
{
  id: 198,
  name: "Tomato Bruschetta",
  cuisine: "Italian",
  category: "Appetizer",
  preparationTime: "10 mins",
  cookingTime: "5 mins",
  ingredients: [
    { name: "Baguette slices", quantity: "8" },
    { name: "Tomatoes", quantity: "3 chopped" },
    { name: "Basil leaves", quantity: "10 chopped" },
    { name: "Garlic", quantity: "2 cloves minced" },
    { name: "Olive oil", quantity: "2 tbsp" },
    { name: "Salt", quantity: "to taste" },
    { name: "Pepper", quantity: "to taste" }
  ],
  steps: [
    "Mix tomatoes, basil, garlic, olive oil, salt, and pepper.",
    "Toast baguette slices.",
    "Top toasted bread with tomato mixture.",
    "Serve immediately."
  ]
},
{
  id: 199,
  name: "Mexican Bean Salad",
  cuisine: "Mexican",
  category: "Salad",
  preparationTime: "15 mins",
  cookingTime: "0 mins",
  ingredients: [
    { name: "Black beans", quantity: "1 cup cooked" },
    { name: "Corn", quantity: "1 cup" },
    { name: "Tomato", quantity: "1 chopped" },
    { name: "Onion", quantity: "1 chopped" },
    { name: "Cilantro", quantity: "2 tbsp chopped" },
    { name: "Lime juice", quantity: "2 tbsp" },
    { name: "Salt", quantity: "to taste" },
    { name: "Chili powder", quantity: "1/2 tsp" }
  ],
  steps: [
    "Mix all ingredients in a bowl.",
    "Chill before serving.",
    "Serve fresh."
  ]
},
{
  id: 200,
  name: "South Indian Sambar",
  cuisine: "South Indian",
  category: "Main Course",
  preparationTime: "15 mins",
  cookingTime: "40 mins",
  ingredients: [
    { name: "Toor dal", quantity: "1 cup" },
    { name: "Mixed vegetables", quantity: "2 cups chopped" },
    { name: "Tamarind paste", quantity: "2 tbsp" },
    { name: "Sambar powder", quantity: "2 tbsp" },
    { name: "Mustard seeds", quantity: "1 tsp" },
    { name: "Dry red chili", quantity: "1" },
    { name: "Curry leaves", quantity: "10" },
    { name: "Oil", quantity: "2 tbsp" },
    { name: "Salt", quantity: "to taste" }
  ],
  steps: [
    "Cook toor dal until soft.",
    "Add vegetables, tamarind paste, and sambar powder.",
    "Simmer until vegetables are cooked.",
    "Prepare tempering with mustard, chili, curry leaves in oil.",
    "Add tempering to sambar and serve hot."
  ]
}

];

module.exports = recipes;

