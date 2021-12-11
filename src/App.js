// tel:0555861144 - tel:0541662048
import React, {useEffect, useState} from 'react';
import Recipes from './components/recipes';
import SearchBox from './components/searchbox';
import Modal from './components/model';
import Fascade from './components/fascade';
import Footer from './components/footer';
import './App.css';

function App() {
  const APP_KEY = 'b7ad80be33d79c0a23739587c860c0f7',
        APP_ID = 'bb78bb73'

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('chicken')
  const [selectedImg, setSelectedImg] = useState('')
  const [modelOpen, setModelOpen] = useState(false)
  const [ingredientLines, setIngredientLines] = useState([])
  const [title, setTitle] = useState()
  const [loading, setLoading] = useState(true)

  const getRecipes = async () => {
    try{
      let recipes = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
      const data = await recipes.json()
      setRecipes(data.hits)
      setLoading(false) 
    }
    catch(ex) {
      alert('the food you entered does not exist, please try with another one')
      setQuery('chicken')
    }
  }

  useEffect(() => {
    getRecipes()
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
    <div className="App">
      <Fascade />
      <SearchBox 
        handleSubmit={getSearch} 
        onChange={handleChange} 
        search={search}
        recipes={recipes}
        />
      {/* <p className="p-3 mb-2 bg-primary text-white">
         type your dish type and get dilishes recipes <br/>
         <span className="fw-bold">
               "Alcohol-cocktail", "Biscuits and cookies", "Bread", "Cereals",	"Condiments and sauces",	"Drinks",
                "Desserts",	"Egg", "Omelet", "Pancake", "Preps", "Preserve", "Salad", "Sandwiches",	"Soup",	"Starter", ... etc.
         </span>
      </p> */}
      <div className='recipe-items'>
      {(loading) 
            ?
            <div className='spinner-width mb-5'>
                <div className="spinner-grow text-success" role="status"></div>
                <div className="spinner-grow text-danger" role="status"></div>
                <div className="spinner-grow text-warning" role="status"></div>
                <div className="spinner-grow text-info" role="status"></div>
            </div> 
            :
       <div className='row'>
        {recipes.map(recipe => (
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

