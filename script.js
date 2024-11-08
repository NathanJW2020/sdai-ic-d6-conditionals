// all code for this lab to be completed in this file
let currentTemperature = 31 

//two possibilities: it's freezing or it's not
if (currentTemperature <= 32) {
    console.log("It's Freezing")
} else {
    console.log("I can go for a hike")
}

//Challenge #2
let age1 = 48.5
let age2 = 48

//3 possibilities older, younger, or the same age
// if...else if statement

if (age1 > age2) { //older
    console.log("Respect")    
} else if (age1 < age2) { //younger 
    console.log("whippersnapper")
} else if (age1 === age2) { //same age
    console.log("Ditto!")
} else { //capture errors 
    console.log("Error! Try again")
}