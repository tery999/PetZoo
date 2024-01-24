import { useEffect, useState } from "react"
import PetCard from "./petCard/PetCard";
import * as PetService from "../../services/petsService"
import styles from "./Pets.module.css"

export default function Pets() {
    const [pets, setPets] = useState(null);
    debugger;

    useEffect(() => {
       PetService.getAllPets()
       .then(results => setPets(results));
    }, []);

    return (
        <div className={styles.PetsContainer}>
            <p>This is PETS page</p>
            {pets &&
                <div>
                    {pets.map((pet) => {
                       return <PetCard pet={pet} />
                    })}
                </div>
            }

            {!pets &&
            <p>There are no pets</p>
            }
        </div>
    )
}