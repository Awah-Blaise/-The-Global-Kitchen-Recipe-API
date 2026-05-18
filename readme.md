# The Global Kitchen API

## Description
A simple Express.js API for managing kitchen recipes using MongoDB and Mongoose.

## Features
- List all recipes
- Create a new recipe
- Update recipe details
- Delete a recipe
- Filter recipes by category

## Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv

## Installation
1. Clone the repository
   ```bash
   git clone <repo-url>
   cd KitchenRecipeApp
   ```
2. Install dependencies
   ```bash
   npm install
   ```

## Environment
Create a `.env` file at the project root with:
```env
MONGO_URI=<your-mongodb-connection-string>
PORT=5000
```

## Run the server
- Development mode:
  ```bash
  npm run dev
  ```
- Production mode:
  ```bash
  npm start
  ```

## Available Endpoints
### Health check
- `GET /`
- Response: `The Global Kitchen API Running...`

### Recipes
- `GET /recipes`
  - Returns all recipes
- `POST /recipes`
  - Create a new recipe
  - Body example:
    ```json
    {
      "title": "Spaghetti Bolognese",
      "ingredients": ["pasta", "tomato sauce", "ground beef"],
      "instructions": "Cook pasta, prepare sauce, combine.",
      "cookingTime": 30,
      "difficulty": "Medium",
      "category": "Dinner"
    }
    ```
- `PATCH /recipes/:id`
  - Update an existing recipe by ID
- `DELETE /recipes/:id`
  - Delete a recipe by ID

## Recipe Model
- `title` (String, required)
- `ingredients` (Array of strings, required)
- `instructions` (String, required)
- `cookingTime` (Number, required, minimum 1)
- `difficulty` (String, required, one of `Easy`, `Medium`, `Hard`)
- `category` (String, required)

## Notes
- The app expects MongoDB credentials in `.env`
- Make sure your MongoDB server is running or your connection string is valid

## License
ISC