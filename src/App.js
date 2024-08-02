import './App.css';
import chef from './images/chef.png'
import RecipesLentElement from './components/RecipesLentElement/RecipesLentElement'
import SideBar from './components/SideBar/SideBar'
import { useEffect, useState } from 'react';
import {api} from './api/api'

function App() {
  const [recipesDb,setRecipesDb] = useState([]);
  const [filterResult,setFilterResult] = useState([])

  const  fetchData = async () =>{
    try{
      const res = await api.get('/recipes');
      setRecipesDb(res.data)
      setFilterResult(res.data);
    }catch (erorr){
        console.log(erorr);
    }
  }

  useEffect(() => {
    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 300000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <div className='Logo'>
        <img src={chef} alt='chef'/>
        <h1>Magic Recipes</h1>
      </div>
      
      <div className='recipesWraper'>
        <div className='recipesLent'>
          <div className='lentInfo'>
            <p>Discover delicious recipes for every occasion!</p>
          </div>
          {
            filterResult?.map(i=>(
              <RecipesLentElement 
                key={i.id} 
                name={i.name} 
                ingredients={i.ingredients} 
                instructions={i.instructions} 
                image={i.image}
              />
            ))
          }

          
        </div>
        <div className='sidebar'>
          <SideBar setFilterResult={setFilterResult} recipesDb={recipesDb} />
        </div>
      </div>
    </div>
  );
}

export default App;
