import React from "react";
import styles from './styles.module.css'
import Edenia_Coquelet from '../../images/Edenia_Coquelet-LR.jpg'
const RecipesLentElement = () => {
    return(
        <div className={styles.RecipeElement}>
            <img src={Edenia_Coquelet}/>
            <div className={styles.name}>
                <h1>Pui cu legume la cuptor</h1>
            </div>
            <div className={styles.info}>
                <div className={styles.ingridients}>
                    <li>4 pulpe de pui</li>
                    <li>4 cartofi</li>
                    <li>2 morcovi</li>
                    <li>1 ardei gras</li>
                    <li>1 ceapă</li>
                    <li>3 căței de usturoi</li>
                    <li>2 linguri ulei de măsline</li>
                    <li>1 linguriță boia dulce</li>
                    <li>1 linguriță oregano</li>
                    <li>1 linguriță rozmarin</li>
                    <li>Sare și piper după gust</li>
                </div>
                <div className={styles.recipe}>
                    <p>Preîncălzește cuptorul la 200°C.
Spală și curăță legumele. Taie cartofii și morcovii în bucăți mari. Ardeiul gras și ceapa se taie cubulețe, iar usturoiul se toacă mărunt.
Pregătește puiul: Spală pulpele de pui și șterge-le cu un șervet. Într-un bol mic, amestecă uleiul de măsline cu boiaua dulce, oregano, rozmarin, sare și piper. Freacă pulpele de pui cu acest amestec.
Așază legumele într-o tavă de cuptor. Pune puiul deasupra legumelor.
Coace la cuptor timp de aproximativ 40-50 de minute, până când puiul este bine pătruns și legumele sunt fragede. Dacă este necesar, întoarce pulpele și legumele în mijlocul timpului de coacere pentru a se rumeni uniform.</p>
                </div>
            </div>
        </div>
    );
}

export default RecipesLentElement;