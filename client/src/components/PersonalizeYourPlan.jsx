import React from 'react'
import { AppContext } from "../context.js";

const PersonalizeYourPlan= () =>{
  // !Cheryl
  const {meals, setMeals} = useContext(AppContext);

  const handleMealPref = (type) => {
    axios.post('/mealchoice', {type})
    .then((data)=> {
      console.log("data", data)
      setMeals(data)
    })
    .catch((err)=> {
      console.log(err)
    })
  }
  // !Cheryl

  return (
    <div> PersonalizeYourPlan
    </div>
  )

}

export default PersonalizeYourPlan