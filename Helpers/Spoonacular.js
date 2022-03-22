const axios= require ("axios");
const config = require("../config.js")

const getMeals = async ({type}) => {
  try {
    const response = await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${config.apiKey}=${type}&number=20&maxReadyTime=30&type=main course`)
    //add and return list from db
      console.log('response.data response.data', response.data)
      return response.data
  } catch (err){
    console.log("ERROR FROM SPOONACULAR GETTING MEALS API", err)
    throw new Error("Unable to retrieve data from API")
  }
}

const getRecipeSteps = async ({id}) => {
  try {
    const response = await axios(`https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${config.apiKey}`)
    //add and return list from db
      console.log('response.data response.data', response.data)
      return response.data
  } catch (err){
    console.log("ERROR FROM SPOONACULAR GETTING RECIPE STEPS API", err)
    throw new Error("Unable to retrieve data from API")
  }
}

const getRecipeImages = async ({id}) => {
  try {
    const response = await axios(`https://api.spoonacular.com/recipes/${id}/ingredientWidget.png?apiKey=${config.apiKey}&measure=us`)
    //add and return list from db
      console.log('response.data response.data', response.data)
      return response.data
  } catch (err){
    console.log("ERROR FROM SPOONACULAR GETTING RECIPE IMAGES API", err)
    throw new Error("Unable to retrieve data from API")
  }
}

const getNutritional = async ({id}) => {
  try {
    const response = await axios(`https://api.spoonacular.com/recipes/${id}/nutritionLabel.png?apiKey=${config.apiKey}`)
    //add and return list from db
      console.log('response.data response.data', response.data)
      return response.data
  } catch (err){
    console.log("ERROR FROM SPOONACULAR GETTING NUTRITIONAL INFO API", err)
    throw new Error("Unable to retrieve data from API")
  }
}



  module.exports = {
    getMeals,
    getRecipeSteps,
    getRecipeImages,
    getNutritional
  };
