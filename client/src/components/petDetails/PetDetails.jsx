import { useEffect, useState } from "react"
import { getOnePet } from "../../services/petsService";
import { useParams } from 'react-router-dom';

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
        <div>
            {pet ?
                <div>
                    <h1>This is details page</h1>
                    <h1> {pet.name}</h1>
                </div> : 
                <h1> Such a pet doesnt exist</h1>}
        </div>
    )
}
