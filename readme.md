# The Global Kitchen API

## Description
A backend RESTful API for managing recipe data in a digital cookbook.

This project uses Node.js, Express, MongoDB, and Mongoose to provide CRUD operations for recipes, including filtering by category.

## Features
- Get all recipes
- Filter recipes by category
- Create a new recipe
- Update an existing recipe
- Delete a recipe
- Error handling for missing routes and server errors

## Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Awah-Blaise/-The-Global-Kitchen-Recipe-API.git
   cd KitchenRecipeApp
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Configuration
Create a `.env` file in the project root:
```env
MONGODB_URI=<your-mongodb-connection-string>
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

## API Endpoints
### Health check
- `GET /`
- Response: `The Global Kitchen API Running...`

### Recipes
- `GET /recipes`
  - Returns all recipes
  - Optional query parameter: `category`
  - Example: `/recipes?category=Dinner`

- `POST /recipes`
  - Create a new recipe
  - Required JSON body:
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
  - Update an existing recipe by its MongoDB ID
  - Send only the fields to update in the request body

- `DELETE /recipes/:id`
  - Delete a recipe by its MongoDB ID

## Recipe Schema
- `title` (String, required)
- `ingredients` (Array of strings, required)
- `instructions` (String, required)
- `cookingTime` (Number, required, minimum 1)
- `difficulty` (String, required, one of `Easy`, `Medium`, `Hard`)
- `category` (String, required)
- `createdAt` / `updatedAt` (timestamps)

## Error Handling
- `404` for unknown routes
- `500` for server or database errors

## Notes
- Make sure `.env` is not committed to GitHub
- The app uses `process.env.MONGODB_URI` to connect to MongoDB

## License
ISC
