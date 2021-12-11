import React from 'react'
import { v4 as uuidv4 } from 'uuid';

const Modal = ({selectedImg, title, ingredientLines, closeModel}) => {
    return (
        <div className='backdrop' onClick={() => closeModel()}>
           <div className='model'>
                <div className='header'>
                   <img src={selectedImg.image} alt="elarged pic" />
                   <h1>{title}</h1>
                </div>
                <ol className='text-start body' >
                    {ingredientLines.map(ingredient =>
                        <li key={uuidv4()}>{ingredient}</li>
                    )}
                </ol>
            </div>
        </div>
    )
}

export default Modal