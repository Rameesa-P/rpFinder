// allAPI.js
import commonAPI from "./Common.API";
import BASEURL from "./Servee_url";

// =================== RECIPE CRUD ===================

// Add a new recipe
export const addRecipeAPI = async (recipe) => {
  return await commonAPI("POST", `${BASEURL}/recipes`, recipe);
};

// Get all recipes
export const getAllRecipesAPI = async () => {
  return await commonAPI("GET", `${BASEURL}/recipes`);
};

// Get single recipe by ID
export const getRecipeByIdAPI = async (id) => {
  return await commonAPI("GET", `${BASEURL}/recipes/${id}`);
};

// Edit/update recipe by ID
export const editRecipeAPI = async (id, recipe) => {
  return await commonAPI("PUT", `${BASEURL}/recipes/${id}`, recipe);
};

// Delete recipe by ID
export const deleteRecipeAPI = async (id) => {
  return await commonAPI("DELETE", `${BASEURL}/recipes/${id}`);
};
