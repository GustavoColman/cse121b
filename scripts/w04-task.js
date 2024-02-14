/* Profile Object */
let myProfile = {
    name: "Gustavo Colman",
    photo: "images/colmanPicture.png",
    favFood: ["pizza", "Hamburger", "coffee with milk"],
    hobbies: ["3d sculpt","ilustration","programming","videogames"],
    placeslived: []
};

/* Populate Profile Object with placesLive objects */
myProfile.placeslived.push({
    place: 'são luiz gonzaga , RS',
    length: '24 years'
});

/* DOM Manipulation - Output */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
let imageElement = document.querySelector("img");
imageElement.setAttribute('src', myProfile.photo);

/* Favorite Foods List */
let favoriteFoodsList = document.querySelector("#favorite-foods");
myProfile.favFood.forEach(food => {
    let listItem = document.createElement("li");
    listItem.textContent = food;
    favoriteFoodsList.appendChild(listItem);
});


/* Hobbies List */
let hobbieslist = document.querySelector("#hobbies");
myProfile.hobbies.forEach(hobbies =>{
    let listItem2 = document.createElement("li");
    listItem2.textContent = hobbies;
    hobbieslist.appendChild(listItem2);

})

/* Places Lived DataList */
/* Places Lived DataList */
let placesLivedList = document.querySelector("#places-lived");
myProfile.placeslived.forEach(place => {
    let listItem = document.createElement("dt");
    listItem.textContent = place.place;
    placesLivedList.appendChild(listItem);

    let listItemDescription = document.createElement("dd");
    listItemDescription.textContent = "Length: " + place.length;
    placesLivedList.appendChild(listItemDescription);
});

