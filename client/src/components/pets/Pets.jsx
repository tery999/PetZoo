import { useEffect, useState } from "react"
import PetCard from "./petCard/PetCard";
import * as PetService from "../../services/petsService"
import styles from "./Pets.module.css"

export default function Pets() {
    const [pets, setPets] = useState(null);
    const [petsLoaded, setpetsLoaded] = useState(false);
    debugger;

    useEffect(() => {
       PetService.getAllPets()
       .then(results => setPets(results));

       setpetsLoaded(true);
    }, []);

    return (
        <div className={styles.PetsContainer}>
            {pets &&
                <>
                    {pets.map((pet) => {
                       return <PetCard key={pet._id} pet={pet} />
                    })}
                </>
            }

            {!pets &&
            <p>There are no pets</p>
            }
        </div>
    )
}