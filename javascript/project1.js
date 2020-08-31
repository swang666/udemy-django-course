var firstName = prompt("What's your first name?")
var lastName = prompt("What's your last name?")
var age = prompt("What's your age?")
var height = prompt("How tall are you in cm?")
var pet = prompt("What's your pet's name?")

if (firstName[0] == lastName[0] && age > 20 && age < 30 && height >= 170 && pet[pet.length - 1] == "y"){
    console.log("you are the spy")
}