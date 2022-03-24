const axios= require ("axios");
const config = require("../config.js")


const getMeals = async ({type}) => {
  console.log("config.apiKey=====>", config.apiKey)
  try {
    const response = await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${config.apiKey}&diet=${type}&number=8&maxReadyTime=50&type=main course`)

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
    const response = await axios(`https://api.spoonacular.com/recipes/${id}/card?apiKey=${config.apiKey}`)

    // const response = await axios(`https://api.spoonacular.com/recipes/${id}/ingredientWidget?apiKey=${config.apiKey}&measure=us`)
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
    const response = await axios(`https://api.spoonacular.com/recipes/${id}/nutritionLabel?apiKey=${config.apiKey}`)
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
