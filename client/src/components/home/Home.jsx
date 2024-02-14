import { useEffect, useState } from "react"
import * as styles from "./Home.module.css"
import { getNewestPets } from "../../services/petsService";
import NewestPetCard from "./NewestPatCard";

export default function Home (){
    const[pets, setPets] = useState();

    useEffect( ()=> {
        const fetchedPets = async() => {
            let newPets = await getNewestPets();
            newPets = newPets.slice(0,3);
            console.log("NEW PETS HERE ");
            console.log(newPets)
            setPets(newPets);
        }
        fetchedPets();
    },[])

    return (
        <div className={styles.homePageDiv}>
            <h2>Our Newest Pets</h2>
             {pets &&
                        <>
                            {pets.map((pet) => {
                                return <NewestPetCard key={pet._id} {...pet} />
                            })}
                        </>
                    }
        </div>
    )
}