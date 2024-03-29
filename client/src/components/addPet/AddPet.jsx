import { useState } from "react"
import * as PetService from "../../services/petsService"
import styles from "./AddPet.module.css"
import { petErrors } from "../../services/petErrors";
import addPetBkg from "./addPetBkg.jpg"
import {useNavigate} from "react-router-dom"

export default function AddPet() {
    const navigate = useNavigate();
    const [error, setError] = useState({});
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
        debugger;
        e.preventDefault();

        const results = petErrors(pet)
        setError(results);
        if (Object.keys(results).length === 0) {
        PetService.AddPet(pet);
        navigate("/");
        }
    }
    return (
        <div className={styles.AddPetBox}>
            <p>Add your pet</p>
            <form className={styles.AddPetForm} onSubmit={submitHandler}>
            <img className={styles.bkgImage} src={addPetBkg} alt="" />
                <div className={styles.FirstRow}>
                    <div className={styles.ColumnBoxes}>
                        <input type="text"
                            name="name"
                            id="name"
                            value={pet.name}
                            onChange={changeHandler}
                            placeholder="Your pet's name" />
                            { error.name && 
                            <p className={styles.errorMessage}>{error.name}</p>
                            }

                        <input type="text"
                            name="image"
                            id="image"
                            value={pet.image}
                            onChange={changeHandler}
                            placeholder="Image URL" />
                             { error.image && 
                            <p className={styles.errorMessage}>{error.image}</p>
                            }

                        <input type="text"
                            name="color"
                            id="color"
                            value={pet.color}
                            onChange={changeHandler}
                            placeholder="Your pet's colour" />
                             { error.color && 
                            <p className={styles.errorMessage}>{error.color}</p>
                            }

                    </div>

                    <div className={styles.ColumnBoxes}>
                        <input type="text"
                            name="species"
                            id="species"
                            value={pet.species}
                            onChange={changeHandler}
                            placeholder="Your pet's species" />
                            { error.species && 
                            <p className={styles.errorMessage}>{error.species}</p>
                            }

                        <input type="number"
                            className={styles.age}
                            name="age"
                            id="age"
                            value={pet.age}
                            onChange={changeHandler}
                            placeholder="Your pet's age" />
                             { error.age && 
                            <p className={styles.errorMessage}>{error.age}</p>
                            }

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
                    <input type="submit" value="Add"/>
                </div>
            </form>
        </div>
    )
}