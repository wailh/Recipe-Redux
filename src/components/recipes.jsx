import React from 'react'

const Recipes = ({title, calories, totalNutrients, ingredientLines, image, openModel}) => {
    
    return ( 
        <div id={title} className="card mb-3" onClick={() => openModel({image}, ingredientLines, title)} >
                   <img src={image} className="img-fluid" alt="no image" />
                    <div className="card-body">
                        <h3 className="card-title">{title}</h3>
                        <div className='row container ms-5 ms-md-0 ps-lg-0 pe-xl-1 pe-0'>
                           <div className='col-5 px-lg-0 px-xl-1'>
                               <div className='calories cons'>
                                   <span></span>Calories
                                   <p>{(calories).toFixed(2)}cal</p>
                               </div>
                               <div className='fats cons'>
                                   <span></span>Fats
                                   <p>{(totalNutrients.FAT.quantity).toFixed(2)}g</p>
                               </div>
                           </div>
                           <div className='col-7 px-0'>
                               <div className='carbohyd cons'>
                                    <span></span>Carbohydrates
                                    <p>{(totalNutrients.CHOCDF.quantity).toFixed(2)}g</p>
                               </div>
                               <div className='protein cons'>
                                   <span></span>Protein
                                   <p>{(totalNutrients.PROCNT.quantity).toFixed(2)}g</p>
                               </div>
                           </div>
                        </div>
 
                    </div>
        </div>
     );
}
 
export default Recipes;