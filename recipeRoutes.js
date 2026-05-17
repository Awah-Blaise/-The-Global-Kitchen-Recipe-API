const express = require("express");

const {
  getRecipes,
  addRecipe,
  patchRecipe,
  removeRecipe,
} = require("../controllers/recipeController");

const router = express.Router();

router.get("/", getRecipes);

router.post("/", addRecipe);

router.patch("/:id", patchRecipe);

router.delete("/:id", removeRecipe);

module.exports = router;
