

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

export async function deletePet (id) {
    const URL = `http://localhost:3030/Pets/${id}`;
    const deletedPet = await fetch(URL, {
        method: "DELETE"
    });
    const data = await deletedPet.json();
    console.log(data);
    return data;
}

export async function getOnePet (id) {
    debugger;
    try {
    const URL = `http://localhost:3030/Pets/${id}`;
    const fetchedPets = await fetch(URL);
    if (!fetchedPets.ok) {
        return null;
    }
    const data = await fetchedPets.json();
    console.log("THIS IS SINGLE PET CLT", data);
    return data;
    } catch (err) {
        console.log("ERROR IN PET SERVICE GET ONE PET", err);
        return null;
    }
}

export async function editPet (pet) {
    const editPetURL = `http://localhost:3030/Pets/${pet._id}`;
   const updatedPet = await fetch( editPetURL, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify(pet)
    })
}