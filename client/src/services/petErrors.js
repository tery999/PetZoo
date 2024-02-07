
export const petErrors = (info) => {
    debugger;
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
    if (info.species.trim() === "" ) {
        error.species = "Please enter the species or put unknown"
    }
    if (info.age.toString().trim() === "") {
        error.age = "Please enter age"
    }
    return error;
 
}