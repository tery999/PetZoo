

const addPetURL = "http://localhost:3030/Pets/Add"
let tokenFunc = () => {
 return JSON.parse(localStorage.getItem("UserInfo") );
}


export async function AddPet (pet) {
    let token = tokenFunc();
    // debugger;
    // console.log("TOKEN OBJ IN ADD PET" , token);
    await fetch( addPetURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization" : token.token,
          },
        body: JSON.stringify({...pet, ownerId: token.userId})
    })
};

export async function getAllPets () {
    const URL = "http://localhost:3030/Pets";
    const fetchedPets = await fetch(URL);
    const data = await fetchedPets.json();
    console.log(data);
    return data;
};

export async function getNewestPets() {
    const URL = "http://localhost:3030/Pets/ByDate";
    const fetchedPets = await fetch(URL);
    const data = await fetchedPets.json();
    console.log(data);
    return data;
};

export async function deletePet (id) {
    let token = tokenFunc();
    debugger;
    const URL = `http://localhost:3030/Pets/${id}`;
    const deletedPet = await fetch(URL, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization" : token.token,
          },
    });
    const data = await deletedPet.json();
    console.log(data);
    return data;
};

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
};

export async function editPet (pet) {
    let token = tokenFunc();
    const editPetURL = `http://localhost:3030/Pets/${pet._id}`;
   const updatedPet = await fetch( editPetURL, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization" : token.token,
          },
        body: JSON.stringify(pet)
    })
};

export async function changeLikes (pet) {
    let token = tokenFunc();
    debugger;
    const changeLikePetUrl = `http://localhost:3030/Pets/${pet._id}/Likes`;
    const likedPet = await fetch( changeLikePetUrl, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization" : token.token,
          },
        body: JSON.stringify({...pet, userId: token.userId})
    })

    return likedPet.json();

};

export async function getComments(petId) {
    try {
        const URL = `http://localhost:3030/Pets/${petId}`;
        const fetchedPet = await fetch(URL);
        if (!fetchedPet.ok) {
            return null;
        }
        const data = await fetchedPet.json();
        const comments = data.comments;
        if (comments.length === 0) {
            return [];
        } else {
            return comments;
        }
        } catch (err) {
            console.log("ERROR IN PET SERVICE GET ONE PET", err);
            return null;
        }
}

export async function postComment(commentInfo, petId, userId, username) {
    let token = tokenFunc();
    try {
        const URL = `http://localhost:3030/Pets/Comments/${petId}/Add`;
        const comment = { 
            ownerId:userId ,
            info:commentInfo,
            username:username
        }
        const addedComment = await fetch(URL,  {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization" : token.token,
              },
            body: JSON.stringify(comment)
        });
    }   catch (err) {
        console.log("ERROR IN PET SERVICE GET ONE PET", err);
        return null;
    }
}

