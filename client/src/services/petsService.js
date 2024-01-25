

const addPetURL = "http://localhost:3030/Pets/Add"

export async function AddPet (pet) {
    debugger;
    await fetch( addPetURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify(pet)
    })
}

export async function getAllPets () {
    const URL = "http://localhost:3030/Pets";
    const fetchedPets = await fetch(URL);
    const data = await fetchedPets.json();
    console.log(data);
    return data;
}

export async function getOnePet (id) {
    debugger;
    try {
    const URL = `http://localhost:3030/Pets/${id}`;
    const fetchedPets = await fetch(URL);
    const data = await fetchedPets.json();
    console.log("THIS IS SINGLE PET CLT", data);
    return data;
    } catch (err) {
        console.log("ERROR IN PET SERVICE GET ONE PET", err);
        return null;
    }
}