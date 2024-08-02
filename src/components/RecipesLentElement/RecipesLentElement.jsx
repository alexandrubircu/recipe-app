import React from "react";
import styles from './styles.module.css'
import Edenia_Coquelet from '../../images/Edenia_Coquelet-LR.jpg'
const RecipesLentElement = (props) => {

    const { name, ingredients, instructions } = props
    
    return(
        <div className={styles.RecipeElement}>
            <img src={props.image}/>
            <div className={styles.name}>
                <h1>{name}</h1>
            </div>
            <div className={styles.info}>
                <div className={styles.ingridients}>
                    <ul>
                        {ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.recipe}>
                    <p>{instructions}</p>
                </div>
            </div>
        </div>
    );
}

export default RecipesLentElement;