import { useState } from "react"

export default function AddPet() {
   const [pet, setPet] = useState({
        name: "",
        species: "",
        age: ""
    });
    
    const changeHandler = (e) => {
        const name =  e.target.name;
        const value =  e.target.value;
        setPet( state => ({...state, [name]:value}))
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(pet);
    }
    return (
        <div>
            <p>This is the ADD PET page</p>
            <form onSubmit={submitHandler}>
                <input type="text"
                    name="name"
                    id="name"
                    value={pet.name}
                    onChange={changeHandler}
                    placeholder="Your pet's name" />
                    

                <input type="text"
                    name="species"
                    id="species"
                    value={pet.species}
                    onChange={changeHandler}
                    placeholder="Your pet's species" />

                <input type="number"
                    name="age"
                    id="age"
                    value={pet.age}
                    onChange={changeHandler}
                    placeholder="Your pet's age" />

                <div>
                    <input type="submit" />
                </div>
            </form>
        </div>
    )
}