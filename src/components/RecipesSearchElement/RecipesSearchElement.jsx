import React from "react";
import styles from './styles.module.css'
import Edenia_Coquelet from '../../images/Edenia_Coquelet-LR.jpg'

const RecipesSearchElement = (props) =>{
    const {onClickLentElement, name, image, id, } = props
    
    return(
        <div className={styles.RecipesSearchElement} onClick={()=>{onClickLentElement(id)}}>
            <img src={props.image} alt="Edenia_Coquelet"/>
            <div className={styles.info}>
                <p>{props.name}</p>
            </div>
        </div>
    );
}

export default RecipesSearchElement;