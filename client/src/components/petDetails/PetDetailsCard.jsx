import { useContext, useState } from "react";
import * as styles from "./PetDetails.module.css"
import * as PetService from "../../services/petsService"
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import bkgImage from "./bkgImage.jpg";



export default function PetDetailsCard(pet) {
    const [imageOverlay, setImageOverlay] = useState(false);
    const { userId } = useContext(UserContext)
    console.log("USER ID IS ", userId);
    console.log("OWNER ID IS ", pet.ownerId);

    const clickImageHandler = () => {
        if (imageOverlay === true) {
            setImageOverlay(false);
        } else {
            setImageOverlay(true);
        }
    }

    const deletePetHandler = () => {
        if (userId === pet.ownerId) {
            PetService.deletePet(pet._id);
        }
    }
    return (
        <div className={styles.petPage}>
            <div className={styles.PetContainer}>
                <h1>{pet.name}</h1>
                <div className={styles.PetContainerColumn}>
                    <img className={styles.bkgImage} src={bkgImage} alt="" />
                    {!imageOverlay && <div className={styles.ImageDivNotClicked}>
                        <img src={pet.image} alt="image" className={styles.imageNotClicked} onClick={clickImageHandler} />
                    </div>}

                    {imageOverlay && <div className={styles.ImageDivClicked} onClick={clickImageHandler}>
                        <img src={pet.image} alt="image" className={styles.imageClicked} onClick={clickImageHandler} />
                    </div>}
                    <div className={styles.Information}>
                        <p>
                            species: {pet.species}
                        </p>
                        <p>
                            color: {pet.color}
                        </p>
                        <p>
                            age: {pet.age}
                        </p>
                        <p>
                            gender: {pet.gender}
                        </p>
                    </div>
                </div>
                {pet.description &&
                    <div className={styles.descriptionBox} >
                        <h3>
                            About {pet.name}
                        </h3>
                        <section className={styles.descriptionSection}>
                            <p>
                                {pet.description}
                            </p>
                        </section>
                    </div>
                }
            </div>
            {userId === pet.ownerId &&
                <div className={styles.ownerButtons}>
                    <button onClick={deletePetHandler} className={styles.deleteBtn}>
                        DELETE
                    </button>
                    <Link to={`/Pet/${pet._id}/Edit`} >
                        <button className={styles.editBtn}>Edit</button>
                    </Link>
                </div>}
        </div>
    )
}