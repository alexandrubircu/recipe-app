import React from "react";
import styles from './styles.module.css'
import loupe from '../../images/loupe.png'
import RecipesSearchElement from '../RecipesSearchElement/RecipesSearchElement'

const SideBar = () => {
    return(
        <div className={styles.SideBar}>
            <div className={styles.search}>
                <div className={styles.searchBox}>
                    <input placeholder="Search"/>
                    <div className={styles.searchButton}>
                        <img src={loupe} alt="loupe"/>
                    </div>
                </div>
            </div>
            <div className={styles.lent}>
                <RecipesSearchElement/>
                <RecipesSearchElement/>
                <RecipesSearchElement/>
                <RecipesSearchElement/>
                <RecipesSearchElement/>
                <RecipesSearchElement/>
                <RecipesSearchElement/>
                <RecipesSearchElement/>
                <RecipesSearchElement/>
                <RecipesSearchElement/>
                <RecipesSearchElement/>
                <RecipesSearchElement/>
                <RecipesSearchElement/>
                <RecipesSearchElement/>
                <RecipesSearchElement/>
                <RecipesSearchElement/>
                <RecipesSearchElement/>
                <RecipesSearchElement/>
                <RecipesSearchElement/>
                <RecipesSearchElement/>
                <RecipesSearchElement/>
            </div>
        </div>
    );
}

export default SideBar;