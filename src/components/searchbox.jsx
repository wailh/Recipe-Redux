import React from 'react'
import {Link} from 'react-scroll'

const SearchBox = ({recipes, handleSubmit, onChange, search}) => {
    return (
    <form onSubmit={handleSubmit} className='search-form' id='recipes'>
       <input 
          type="search"
          placeholder='type recipes you want(chicken) ..... '
          className='form-control me-2 rounded-pill'
          onChange={e => onChange(e.currentTarget.value)}
          value={search}
       />
       <div className="dropdown"  >
         <button className="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
         </button>
         <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            {recipes.map(recipe => (                      
               <Link to={recipe.recipe.label} key={recipe.recipe.calories}><li className="dropdown-item" style={{cursor: 'pointer'}}>{recipe.recipe.label} </li></Link>
            ))}
         </ul>
      </div>
       <button type="submit" className="btn btn-warning rounded-circle"><i className="fa fa-search"></i></button>
      </form>
)}

export default SearchBox