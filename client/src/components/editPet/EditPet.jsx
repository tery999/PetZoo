import { useEffect, useState } from "react"
import * as PetService from "../../services/petsService"
import { useParams } from "react-router-dom";
import * as styles from "./EditPet.module.css";

export default function EditPet() {
    debugger;
    const { id } = useParams();
    const [pet, setPet] = useState();
    useEffect(() => {
        PetService.getOnePet(id)
            .then(result => setPet(result));
    }, [id])

    const changeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPet(state => ({ ...state, [name]: value }))
    }

    const editHandler = () => {
        PetService.editPet(pet);
    }
    return (
        <div className={styles.editDivBox}>
            {!pet &&
                <p> Such a pet doesnt exist</p>
            }
            {pet &&
                <form className={styles.editForm} onSubmit={editHandler}>
                    <div className={styles.firstDiv}>

                        <label htmlFor="name"> Name:
                            <input type="text"
                                name="name"
                                id="name"
                                value={pet.name}
                                onChange={changeHandler}
                                placeholder="Your pet's name" />
                        </label>

                        <label htmlFor="image"> Image:
                            <input type="text"
                                name="image"
                                id="image"
                                value={pet.image}
                                onChange={changeHandler}
                                placeholder="Image URL" />
                        </label>
                        <label htmlFor="color"> Color:
                            <input type="text"
                                name="color"
                                id="color"
                                value={pet.color}
                                onChange={changeHandler}
                                placeholder="Your pet's colour" />
                        </label>
                    </div>

                    <div className={styles.secondDiv}>

                        <label htmlFor="species"> Species:
                            <input type="text"
                                name="species"
                                id="species"
                                value={pet.species}
                                onChange={changeHandler}
                                placeholder="Your pet's species" />
                        </label>

                        <label htmlFor="age"> Age:
                            <input type="number"
                                name="age"
                                id="age"
                                value={pet.age}
                                onChange={changeHandler}
                                placeholder="Your pet's age" />
                        </label>
                        <label htmlFor="gender"> Gender:
                            <select value={pet.gender}
                                name="gender"
                                id="gender"
                                onChange={changeHandler}>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Unknown/Other">Unknown/Other</option>
                            </select>
                        </label>
                    </div>
                    <div className={styles.textAreaDiv}>
                        <label htmlFor="description"> Description </label>
                        <textarea className={styles.textArea} name="description"
                            id="description" value={pet.description}
                            onChange={changeHandler}
                            placeholder="Short description about your pet"></textarea>

                    </div>

                    <div>
                        <input type="submit" />
                    </div>
                </form>

            }
        </div>
    )
}
