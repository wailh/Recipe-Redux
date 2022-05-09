import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRecipes, loadRecipes } from './store/recipes'
import store from './store/store'
import Recipes from './components/recipes';
import SearchBox from './components/searchbox';
import Modal from './components/model';
import Fascade from './components/fascade';
import Footer from './components/footer';
import './App.css';

const App = () => {
    const dispatch = useDispatch()
   //  const recipes = useSelector(getRecipes)
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('chicken')
  const [selectedImg, setSelectedImg] = useState('')
  const [modelOpen, setModelOpen] = useState(false)
  const [ingredientLines, setIngredientLines] = useState([])
  const [title, setTitle] = useState()

    const recipes = store.getState().recipes;

    useEffect(() => {
       dispatch(loadRecipes(query))
    }, [query])

    const handleChange = (currentValue) => {
      setSearch(currentValue)
    }

    const getSearch = e => {
      e.preventDefault()
      setQuery(search)
      setSearch('')
    }

    const openModel = (image, ingredientLines, title) => {
      setSelectedImg(image)
      setIngredientLines(ingredientLines)
      setTitle(title)
      setModelOpen(true)
   }

   const closeModel = () => {
         setModelOpen(false)
   }

    return ( 
       <div>
         <Fascade />
         <SearchBox 
         handleSubmit={getSearch} 
         onChange={handleChange} 
         search={search}
         recipes={recipes.list}
         />
         <div className='recipe-items'>
            {  
               (recipes.loading) 
                  ?
                  <div className='spinner-width mb-5'>
                     <div className="spinner-grow text-success" role="status">
                        <span className="sr-only">Loading...</span>
                     </div>
                     <div className="spinner-grow text-danger" role="status"></div>
                     <div className="spinner-grow text-warning" role="status"></div>
                     <div className="spinner-grow text-info" role="status"></div>
                  </div> 
                  :
            <div className='row'>
            {recipes.list.map(recipe => (
                  <div className='col-md-6 col-lg-4 col-xl-3' key={recipe.recipe.calories}>
                  <Recipes key={recipe.recipe.label}
                           title={recipe.recipe.label} 
                           image={recipe.recipe.image} 
                           ingredientLines={recipe.recipe.ingredientLines} 
                           calories={recipe.recipe.calories}
                           totalNutrients={recipe.recipe.totalNutrients}
                           openModel={openModel}
                           /> 
                  </div>
            ))} 
                  </div>}
         </div>
         <Footer />
        {(modelOpen) && <Modal closeModel={closeModel} 
                             ingredientLines={ingredientLines} 
                             title={title} 
                             selectedImg={selectedImg} /> }
       </div>
     );
}
 
export default App;