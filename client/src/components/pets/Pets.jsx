import { useEffect, useState } from "react"
import PetCard from "./petCard/PetCard";
import * as PetService from "../../services/petsService"

export default function Pets() {
    const [pets, setPets] = useState(null);
    debugger;

    useEffect(() => {
       PetService.getAllPets()
       .then(results => setPets(results));
    }, []);

    return (
        <div>
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