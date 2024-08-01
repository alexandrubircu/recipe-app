import React from "react";
import styles from './styles.module.css'
import Edenia_Coquelet from '../../images/Edenia_Coquelet-LR.jpg'

const RecipesSearchElement = () =>{
    return(
        <div className={styles.RecipesSearchElement}>
            <img src={Edenia_Coquelet} alt="Edenia_Coquelet"/>
            <div className={styles.info}>
                <p>Pui cu legume la cuptor</p>
            </div>
        </div>
    );
}

export default RecipesSearchElement;