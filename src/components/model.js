import React from 'react'

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
                        <li >{ingredient}</li>
                    )}
                </ol>
            </div>
        </div>
    )
}

export default Modal