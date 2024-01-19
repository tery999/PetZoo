export default function AddPet() {
    return (
        <div>
            <p>This is the ADD PET page</p>
            <form>
                <input type="text"
                    name="name"
                    id="name"
                    placeholder="Your pet's name" />

                <input type="text"
                    name="species"
                    id="species"
                    placeholder="Your pet's species" />

                <input type="number"
                    name="age"
                    id="age"
                    placeholder="Your pet's age" />

                <div>
                    <input type="submit" />
                </div>
            </form>
        </div>
    )
}