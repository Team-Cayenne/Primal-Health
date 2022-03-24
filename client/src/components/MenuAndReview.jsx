import React, {useContext, useState} from 'react';
import { AppContext } from "../context.js";
import Masthead from '../shared/Masthead.jsx';
import RecipeModalMenuAndReview from './RecipeModalMenuAndReview.jsx';
import axios from 'axios'

const MenuAndReview= () =>{
  // !Cheryl
  const {selectMeals} = useContext(AppContext);
  // !Cheryl
  const [id, setId] = useState(0);
  const [recipe, setRecipe] = useState([]);
  const [recipeTitle, setRecipeTitle] = useState("")
  const [image, setImage] = useState("")
  const [close, setOnClose] = useState(false)

  const testMeals = [
    {
      id: 716381,
      title: 'Nigerian Snail Stew',
      image: 'https://spoonacular.com/recipeImages/716381-312x231.jpg',
      imageType: 'jpg'
    },
    {
      id: 769774,
      title: 'Shredded Roast Beef Stuffed Sweet Potatoes (Whole 30 & PALEO)',
      image: 'https://spoonacular.com/recipeImages/769774-312x231.jpg',
      imageType: 'jpg'
    },
    {
      id: 639851,
      title: 'Cod with Tomato-Olive-Chorizo Sauce and Mashed Potatoes',
      image: 'https://spoonacular.com/recipeImages/639851-312x231.jpg',
      imageType: 'jpg'
    },
    {
      id: 633344,
      title: 'Bacon Wrapped Pork Tenderloin',
      image: 'https://spoonacular.com/recipeImages/633344-312x231.jpg',
      imageType: 'jpg'
    },
    {
      id: 716330,
      title: 'Chicken and Mango Skewer',
      image: 'https://spoonacular.com/recipeImages/716330-312x231.jpg',
      imageType: 'jpg'
    },
    {
      id: 659135,
      title: 'Salmon with roasted vegetables',
      image: 'https://spoonacular.com/recipeImages/659135-312x231.jpg',
      imageType: 'jpg'
    },
    {
      id: 638626,
      title: 'Chimichurri Skirt Steak with Grilled Asparagus',
      image: 'https://spoonacular.com/recipeImages/638626-312x231.jpg',
      imageType: 'jpg'
    },
    {
      id: 1046982,
      title: 'How to Make the Perfect Sweet Potato Sloppy Joes',
      image: 'https://spoonacular.com/recipeImages/1046982-312x231.jpg',
      imageType: 'jpg'
    },
    {
      id: 661578,
      title: 'Steamed Plaice & Spinach Rolls',
      image: 'https://spoonacular.com/recipeImages/661578-312x231.jpg',
      imageType: 'jpg'
    },
    {
      id: 648257,
      title: 'Italian Steamed Artichokes',
      image: 'https://spoonacular.com/recipeImages/648257-312x231.jpg',
      imageType: 'jpg'
    },
    {
      id: 648627,
      title: 'Juicy & Tender ~ Pork Loin Roast',
      image: 'https://spoonacular.com/recipeImages/648627-312x231.jpg',
      imageType: 'jpg'
    },
    {
      id: 648247,
      title: 'Italian Seafood Stew',
      image: 'https://spoonacular.com/recipeImages/648247-312x231.jpg',
      imageType: 'jpg'
    },
    {
      id: 665831,
      title: 'fennel, Peppers, Lettuce Salad',
      image: 'https://spoonacular.com/recipeImages/665831-312x231.jpg',
      imageType: 'jpg'
    },
    {
      id: 645856,
      title: 'Grilled Salmon With Cherry, Pineapple, Mango Salsa',
      image: 'https://spoonacular.com/recipeImages/645856-312x231.jpg',
      imageType: 'jpg'
    },
    {
      id: 654435,
      title: 'Pan Seared Salmon',
      image: 'https://spoonacular.com/recipeImages/654435-312x231.jpg',
      imageType: 'jpg'
    },
    {
      id: 659674,
      title: 'Seared Pork Chops with Mango Salsa',
      image: 'https://spoonacular.com/recipeImages/659674-312x231.jpg',
      imageType: 'jpg'
    },
    {
      id: 665261,
      title: 'Whole Chicken Dinner',
      image: 'https://spoonacular.com/recipeImages/665261-312x231.jpg',
      imageType: 'jpg'
    },
    {
      id: 716427,
      title: 'Roasted Butterflied Chicken w. Onions & Carrots',
      image: 'https://spoonacular.com/recipeImages/716427-312x231.jpg',
      imageType: 'jpg'
    },
    {
      id: 648721,
      title: 'Kale and Roasted Sweet Potato Soup with Chicken Sausage',
      image: 'https://spoonacular.com/recipeImages/648721-312x231.jpg',
      imageType: 'jpg'
    },
    {
      id: 633088,
      title: 'Authentic Jamaican Curry Chicken',
      image: 'https://spoonacular.com/recipeImages/633088-312x231.jpg',
      imageType: 'jpg'
    }
  ]

  const handleRecipeSelect = async(id, title, image) => {
    setId(id)
    setRecipeTitle(title)
    setOnClose(true)
    setImage(image)
    console.log('TYPE', id)
    try {
      const results = await axios.post('/recipecard', {id: id})
      setRecipe(results.data)
      console.log("results", results)
    } catch (err) {
      console.log("UNABLE TO SET RECIPES", err)
    }
  }
  // console.log('ID', id)
  console.log("RECIPE", recipe)
  return (
    <div>
      <Masthead />
      <h2>Menu</h2>
      {/* replace testMeals with selectMeals if API IS WORKING */}
      {selectMeals.map((meal, i)=> {
        return <div key={i}>
          <img src={meal.image} width='170' height='150' onClick={()=>handleRecipeSelect(meal.id, meal.title, meal.image)}></img>
          <p>{meal.title}</p>
        </div>
      })}

      <RecipeModalMenuAndReview id={id} recipe={recipe} image={image} recipeTitle={recipeTitle} close={close} setOnClose={setOnClose}/>
    </div>
  )

}

export default MenuAndReview