

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