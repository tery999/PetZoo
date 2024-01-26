import * as styles from "./PetDetails.module.css"

export default function PetDetailsCard(pet) {
    console.log(pet);
    return (
        <div className={styles.PetContainer}>
            <h1>NAME: {pet.name}</h1>
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
                <img src={pet.image} alt="" />
            </div>
        </div>
    )
}