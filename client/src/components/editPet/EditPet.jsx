import { useEffect, useState , useContext} from "react"
import * as PetService from "../../services/petsService"
import { useParams } from "react-router-dom";
import * as styles from "./EditPet.module.css";
import { petErrors } from "../../services/petErrors"
import {useNavigate} from  "react-router-dom"
import { UserContext } from "../../contexts/userContext";
import petBkg from "./cute-animal-anime-e5b9oin5itw8sczg.jpg";


export default function EditPet() {
    // debugger;
    const navigate = useNavigate();
    const {userId} = useContext(UserContext);
    const [error, setError] = useState({});
    const { id } = useParams();
    const [pet, setPet] = useState();
    useEffect(() => {
        PetService.getOnePet(id)
            .then(result => setPet(result));
    }, [id])

    useEffect( ()=> {
        // debugger;
        if ( pet && pet.ownerId !== userId ) {
            navigate("/");
        }
    },[pet])

    const changeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPet(state => ({ ...state, [name]: value }))
    }

    const editHandler = (e) => {
        e.preventDefault();
        const results = petErrors(pet);
        setError(results);
        if (Object.keys(results).length === 0) {
            PetService.editPet(pet);
        }
    }
    return (
        <div className={styles.editDivBox}>
            {!pet &&
                <p> Such a pet doesnt exist</p>
            }
            {pet &&
                <form className={styles.editForm} onSubmit={editHandler}>
                    <img className={styles.bkgImage} src={petBkg} alt="" />
                    <div className={styles.firstDiv}>
                        <div>
                            <label htmlFor="name"> Name:
                                <input type="text"
                                    name="name"
                                    id="name"
                                    value={pet.name}
                                    onChange={changeHandler}
                                    placeholder="Your pet's name" />
                            </label>
                            {error.name &&
                                <p className={styles.errorMessage}>{error.name}</p>
                            }
                        </div>

                        <div>
                            <label htmlFor="image"> Image:
                                <input type="text"
                                    name="image"
                                    id="image"
                                    value={pet.image}
                                    onChange={changeHandler}
                                    placeholder="Image URL" />
                            </label>
                            {error.image &&
                                <p className={styles.errorMessage}>{error.image}</p>
                            }
                        </div>
                        <div>
                            <label htmlFor="color"> Color:
                                <input type="text"
                                    name="color"
                                    id="color"
                                    value={pet.color}
                                    onChange={changeHandler}
                                    placeholder="Your pet's colour" />
                            </label>
                            {error.color &&
                                <p className={styles.errorMessage}>{error.color}</p>
                            }
                        </div>
                    </div>

                    <div className={styles.secondDiv}>
                        <div>
                            <label htmlFor="species"> Species:
                                <input type="text"
                                    name="species"
                                    id="species"
                                    value={pet.species}
                                    onChange={changeHandler}
                                    placeholder="Your pet's species" />
                            </label>
                            {error.species &&
                                <p className={styles.errorMessage}>{error.species}</p>
                            }
                        </div>

                        <div>
                            <label htmlFor="age"> Age:
                                <input type="number"
                                    name="age"
                                    id="age"
                                    value={pet.age}
                                    onChange={changeHandler}
                                    placeholder="Your pet's age" />
                            </label>
                            {error.number &&
                                <p className={styles.errorMessage}>{error.number}</p>
                            }
                        </div>
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
                        <input type="submit" value="Edit" />
                    </div>
                </form>

            }
        </div>
    )
}
