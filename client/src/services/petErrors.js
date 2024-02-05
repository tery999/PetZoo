
export const petErrors = (info) => {
    let error = {};
    if (info.name.trim() === "") {
        error.name = "Name cannon be blank"
    }
    if (info.image.trim() === "") {
        error.image = "Please provide image"
    }
    if (info.color.trim() === "") {
        error.color = "Please enter color"
    }
    if (info.species.trim() === "" || info.species.toLowerCase() !== "unknown" ) {
        error.species = "Please enter the species or put unknown"
    }
    if (info.age.trim() === "") {
        error.age = "Please enter age"
    }
    return error;
 
}