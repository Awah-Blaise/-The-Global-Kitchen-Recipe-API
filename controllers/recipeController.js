const recipeService = require("../services/recipeService");

const getRecipes = async (req, res, next) => {
  try {
    const recipes = await recipeService.getAllRecipes(req.query.category);

    res.status(200).json(recipes);
  } catch (error) {
    next(error);
  }
};

const addRecipe = async (req, res, next) => {
  try {
    const recipe = await recipeService.createRecipe(req.body);

    res.status(201).json(recipe);
    } catch (error) {
    next(error);
  }
};

const patchRecipe = async (req, res, next) => {
  try {
    const recipe = await recipeService.updateRecipe(
      req.params.id,
      req.body
    );

    if (!recipe) {
      return res.status(404).json({
        message: "Recipe not found",
      });
    }

    res.status(200).json(recipe);
  } catch (error) {
    next(error);
  }
};

const removeRecipe = async (req, res, next) => {
  try {
    const recipe = await recipeService.deleteRecipe(req.params.id);

    if (!recipe) {
      return res.status(404).json({
        message: "Recipe not found",
      });
    }

    res.status(200).json({
      message: "Recipe deleted successfully",
    });
    } catch (error) {
    next(error);
  }
};

module.exports = {
  getRecipes,
  addRecipe,
  patchRecipe,
  removeRecipe,
};