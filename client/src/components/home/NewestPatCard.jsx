import * as styles from "./Home.module.css"
import {Link} from "react-router-dom"

export default function NewestPetCard (pet){
    return (
        <div className={styles.petContainer}>
            <img src={pet.image} className={styles.petImage} alt="" />
            <p>{pet.name}</p>
            <Link to={`/Pet/${pet._id}`}>
                <button className={styles.LinkButton}> View </button>
            </Link>
        </div>
    )
}