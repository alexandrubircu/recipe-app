import './App.css';
import chef from './images/chef.png'
import RecipesLentElement from './components/RecipesLentElement/RecipesLentElement'
import SideBar from './components/SideBar/SideBar'

function App() {
  return (
    <div className="App">
      <div className='Logo'>
        <img src={chef} alt='chef'/>
        <h1>Magic Recipes</h1>
      </div>
      
      <div className='recipesWraper'>
        <div className='recipesLent'>
          <RecipesLentElement/>
          <RecipesLentElement/>
          <RecipesLentElement/>
          {/* <RecipesLentElement/> */}
          <div className='lentInfo'>
            <p>Descoperă rețete delicioase pentru orice ocazie!</p>
          </div>
        </div>
        <div className='sidebar'>
          <SideBar/>
        </div>
      </div>
    </div>
  );
}

export default App;
