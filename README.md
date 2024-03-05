# Petzoo

Petzoo is an application, in which users can share their pets and view other people's pets.

FUNCTIONALITY:
-----
HOME PAGE:
Home page shows the 3 most recent pets. Users and Guests can view the pet, which redirects them to the current pet's details page.

PETS PAGE:
Pet page shows all of the pets in the DB. Users and Guests can view each of the pets on their details page.

DETAILS PAGE:
Shows all the information about the page, which includes name, gender, age, color and their description if it exists. Everyone can see how many 
likes the pet has, but only the logged-in users can like and unlike the pet.
The creator of the pet can also edit and delete the pet.
For a closer look at the pet, people can click on the image, which will make an overlay appear, which shows the pet in a bigger size ( limited to 800 by 600px )

ADD/EDIT PET PAGE:
Logged-in users can create or edit their pets.
All field must be filled, with the exception of the description box. If any field is left blank, an error message will inform the user.

LOGIN PAGE:
An error message will appear if either the username or password field is blank.
You will get an additional message if there is an incorrect login.
If all is good, you will be redirected to the home page. User information will be saved as a state, while the token will be additionally saved in localstorage.
If you refresh, the page will not kick you out , as there is a custom hook, which will fill out the state if the information in localStorage is present.

REGISTER PAGE:
WIll receive and error if fields are blank, if the password isn't matching, or if the username already exists in the DB.

-----


Technologies used:
----
HTML&CSS
React
JS
Node/Express
MongoDB/Mongoose




