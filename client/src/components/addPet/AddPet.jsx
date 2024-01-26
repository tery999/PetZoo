import { useState } from "react"
import * as PetService from "../../services/petsService"
import styles from "./AddPet.module.css"

export default function AddPet() {
    const [pet, setPet] = useState({
        name: "",
        image: "",
        color: "",
        species: "",
        age: "",
        gender: "Unknown/Other",
        description: ""
    });

    const changeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPet(state => ({ ...state, [name]: value }))
    }

    const submitHandler = async (e) => {
        // debugger;
        e.preventDefault();
        PetService.AddPet(pet);
    }
    return (
        <div className={styles.AddPetBox}>
            <p>This is the ADD PET page</p>
            <form className={styles.AddPetForm} onSubmit={submitHandler}>
                <div className={styles.FirstRow}>
                    <div className={styles.ColumnBoxes}>
                        <input type="text"
                            name="name"
                            id="name"
                            value={pet.name}
                            onChange={changeHandler}
                            placeholder="Your pet's name" />

                        <input type="text"
                            name="image"
                            id="image"
                            value={pet.image}
                            onChange={changeHandler}
                            placeholder="Image URL" />

                        <input type="text"
                            name="color"
                            id="color"
                            value={pet.color}
                            onChange={changeHandler}
                            placeholder="Your pet's colour" />

                    </div>

                    <div className={styles.ColumnBoxes}>
                        <input type="text"
                            name="species"
                            id="species"
                            value={pet.species}
                            onChange={changeHandler}
                            placeholder="Your pet's species" />

                        <input type="number"
                            className={styles.age}
                            name="age"
                            id="age"
                            value={pet.age}
                            onChange={changeHandler}
                            placeholder="Your pet's age" />

                        <select value={pet.gender}
                        name="gender"
                        id="gender"
                         onChange={changeHandler}>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Unknown/Other">Unknown/Other</option>
                        </select>
                    </div>
                </div>


                <textarea name="description"
                    id="description" value={pet.description}
                    onChange={changeHandler}
                    placeholder="Short description about your pet"></textarea>

                <div>
                    <input type="submit" />
                </div>
            </form>
        </div>
    )
}