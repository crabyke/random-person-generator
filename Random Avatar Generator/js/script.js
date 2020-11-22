// VARIABLES
const avatarImg = document.querySelector(".avatar-picture")
const name = document.querySelector("#name")
const phoneNumber = document.querySelector("#phone-number")
const rollBtn = document.querySelector(".btn")

const people = [
    {
        picture: "./img/person (1).jpg",
        name: "Umar Beach",
        number: "912-396-9439"
    },
    {
        picture: "./img/person (2).jpg",
        name: "Drake Burt",
        number: "201-594-0260"
    },
    {
        picture: "./img/person (3).jpg",
        name: "Kristin Squires",
        number: "423-315-1969"
    },
    {
        picture: "./img/person (4).jpg",
        name: "Enrique Penn",
        number: "660-781-2212"
    },
    {
        picture: "./img/person (5).jpg",
        name: "Humaira Weiss",
        number: "937-457-5633"
    },
    {
        picture: "./img/person (6).jpg",
        name: "Alan Pemberton",
        number: "978-748-6798"
    },
    {
        picture: "./img/person (7).jpg",
        name: "Ishan Dawe",
        number: "256-461-0733"
    }
]
// EVENT LISTENERS

rollBtn.addEventListener("click", () => {
    const randomNmr = Math.floor(Math.random() * 6) + 1;
    avatarImg.src = people[randomNmr].picture;
    name.textContent = people[randomNmr].name;
    phoneNumber.innerHTML = `<i class="fas fa-phone"></i> ${people[randomNmr].number}`;
    avatarImg.alt = people[randomNmr].name + "_" + people[randomNmr].number;
    console.log(randomNmr);
});

// FUNCTIONS
