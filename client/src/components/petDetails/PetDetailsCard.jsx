import { useState } from "react";
import * as styles from "./PetDetails.module.css"

export default function PetDetailsCard(pet) {
    const [imageOverlay, setImageOverlay] = useState(false);

    const clickImageHandler = () => {
        if (imageOverlay === true) {
            setImageOverlay(false);
        } else {
            setImageOverlay(true);
        }
    }
    return (
        <div className={styles.PetContainer}>
            <h1>NAME: {pet.name}</h1>
            <div className={styles.PetContainerColumn}>
                {!imageOverlay && <div className={styles.ImageDivNotClicked}>
                    <img src={pet.image} alt="image" className={styles.imageNotClicked} onClick={clickImageHandler} />
                </div>} 

                {imageOverlay && <div className={styles.ImageDivClicked}>
                    <img src={pet.image} alt="image" className={styles.imageClicked} onClick={clickImageHandler} />
                </div>} 
                <div className={styles.Information}>
                    <p>
                        species: {pet.species}
                    </p>
                    <p>
                        color: {pet.color}
                    </p>
                    <p>
                        age: {pet.age}
                    </p>
                    <p>
                        gender: {pet.gender}
                    </p>
                    <p>
                        description: {pet.description}
                    </p>
                </div>
            </div>
            <button>
                DELETE
            </button>
            <button>
                EDIT
            </button>
        </div>
    )
}