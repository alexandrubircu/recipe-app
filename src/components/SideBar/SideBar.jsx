import React, { useEffect, useState } from "react";
import styles from './styles.module.css'
import loupe from '../../images/loupe.png'
import RecipesSearchElement from '../RecipesSearchElement/RecipesSearchElement'

const SideBar = (props) => {
    const { recipesDb ,setFilterResult } = props
    const [input,setInput] = useState('');
    const [filtredDb,setFiltredDb] = useState([]);

    useEffect(()=>{
        setFiltredDb(recipesDb);
    },[recipesDb])
    
    const filterDb = (searchTerm) => {
        console.log('Filtering with term:', searchTerm);
        const terms = searchTerm
            .toLowerCase()
            .replace(/,/g, ' ') 
            .split(' ')
            .filter(term => term.trim() !== '');
    
        const filter = recipesDb.filter(recipe => {
            const nameMatch = recipe.name.toLowerCase().includes(terms.join(' '));
            const ingredientsMatch = terms.every(term =>
                recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(term))
            );
            return nameMatch || ingredientsMatch;
        });
    
        console.log('Filtered recipes:', filter);
        setFiltredDb(filter);
    };
   
    const onPress = (event) =>{
        if(event.key === 'Enter'){
            setFilterResult(filtredDb)
        }
    }

    const onClickLentElement = (id) => {
        const filteredRecipeByElement = recipesDb.find(recipe => recipe.id === id);
        setFilterResult(filteredRecipeByElement ? [filteredRecipeByElement] : []);
      }
      
    
    return(
        <div className={styles.SideBar}>
            <div className={styles.search}>
                <div className={styles.searchBox}>
                    <input 
                        placeholder="Search" 
                        onChange={(e)=>{
                            if(e.target.value !== ' '){
                                setInput(e.target.value)
                                filterDb(e.target.value)
                            }

                        }} 
                        onKeyDown={onPress}
                        value={input}
                    />
                    <div className={styles.searchButton} onClick={()=>{setFilterResult(filtredDb)}}>
                        <img src={loupe} alt="loupe"/>
                    </div>
                </div>
            </div>
            <div className={styles.lent}>
                {
                    filtredDb?.map(i=>(
                        <RecipesSearchElement key={i.id} id={i.id} name={i.name} image={i.image} onClickLentElement={onClickLentElement}/>
                    ))
                }
            </div>
        </div>
    );
}

export default SideBar;