import React from 'react'

const NutritionalInfoModalMenuAndReview = (props) =>{
  console.log('NUTRITIONAL', props)
  if (props.closeNutModal === false) {
    return null
  }

  return (
    <div>NutritionalInfoModalMenuAndReview
      <div>
        <div dangerouslySetInnerHTML={{__html: props.nutrition}} />
      </div>
      <button onClick={(()=>props.setCloseNutModal(false))}>Close</button>
    </div>
  )
}

export default NutritionalInfoModalMenuAndReview