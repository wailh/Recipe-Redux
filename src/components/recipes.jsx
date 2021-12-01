import React from 'react'
import Modal from './model';

const Recipes = ({title, calories, totalNutrients, ingredientLines, image, openModel}) => {
    
    return ( 
        <div id={title} className="card mb-3" onClick={() => openModel({image}, ingredientLines, title)} >
                   <img src={image} className="img-fluid" alt="none" />
                    <div className="card-body">
                        <h3 className="card-title">{title}</h3>
                        <div className='row container ms-sm-5 ms-md-0'>
                           <div className='col-sm-6'>
                               <div className='calories cons'>
                                   <span></span>Calories
                                   <p>{(calories).toFixed(2)}cal</p>
                               </div>
                               <div className='fats cons'>
                                   <span></span>Fats
                                   <p>{(totalNutrients.FAT.quantity).toFixed(2)}g</p>
                               </div>
                           </div>
                           <div className='col-sm-6 px-0'>
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