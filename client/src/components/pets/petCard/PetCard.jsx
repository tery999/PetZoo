import styles from "./PetCard.module.css"
import { Link } from "react-router-dom"

export default function PetCard(pet) {
    // {`/Products/Details/${_id}`}
    return (

        <div className={styles.PetCard}>
            <div>
                <Link to={`/Pet/${pet.pet._id}`}>
                    <img src={pet.pet.image} alt="" />
                </Link>
                <h1> {pet.pet.name} </h1>
            </div>


        </div>

    )
}