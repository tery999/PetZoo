import { useEffect, useState } from "react"
import { getOnePet } from "../../services/petsService";
import { useParams } from 'react-router-dom';
import PetDetailsCard from "./PetDetailsCard";

export default function PetDetails() {
    debugger;
    const { id } = useParams()
    const [pet, setPet] = useState(null);
    console.log(pet);

    useEffect(() => {
        getOnePet(id)
            .then(data => setPet(data));
    }, [id])
    return (
        <>
            {pet &&
                <PetDetailsCard {...pet} />
            }

            {!pet &&
                <h2>Pet doesnt exist </h2>
            }
        </>

    )
}
