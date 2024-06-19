import { useEffect, useState } from "react"
import { getOnePet } from "../../services/petsService";
import { useParams } from 'react-router-dom';
import PetDetailsCard from "./PetDetailsCard";

export default function PetDetails() {
    debugger;
    const { id } = useParams()
    const [pet, setPet] = useState(null);
    const [loaded, setLoaded] = useState(false);
    console.log(pet);

    useEffect(() => {
        const getPetFunc = async() => {
            const returnedPet = await getOnePet(id);
            setPet(returnedPet);
            setLoaded(true);
        }
       getPetFunc();
    }, [])

    return (

        <>
            {loaded &&
                <>
                    {pet &&
                        <PetDetailsCard {...pet} />
                    }

                    {!pet &&
                        <h2>Pet doesnt exist </h2>
                    }
                </>
            }

        </>

    )
}
