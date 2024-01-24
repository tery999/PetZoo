import styles from "./PetCard.module.css"
import {Link} from "react-router-dom"

export default function PetCard(pet) {
    // {`/Products/Details/${_id}`}
    return (
        <div className={styles.PetCard}>
            <h1> {pet.pet.name} </h1>
            <div>
                <img src={pet.pet.image} alt="" />
                <p>{pet.pet.species}</p>
                <p>{pet.pet.color}</p>
                <p>{pet.pet.age}</p>
                <p>{pet.pet.description}</p>
            </div>
            <Link to={`/Pet/${pet.pet._id}` }> 
                <button>Details</button>
            </Link>
        </div>
    )
}