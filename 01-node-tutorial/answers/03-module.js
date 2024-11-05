const names = require("./04-names.js")
const catHat = require("./05-utils.js")
const alternative = require("./06-alternative-flavor.js")
const mind_grenade = require("./07-mind-grenade.js")

function printNames() {
    test = Object.keys(names)
    namesList = []
    console.log(names.length)
    for (let i = 0; i < Object.keys(names).length; i++) {
        console.log("Hello, " + names[test[i]] + ". How are you?")
    }
}

function printAnimals() {
    for (let i = 0; i < alternative.animals.length; i++) {
        console.log("This animal is called a " + alternative.animals[i])
    }
}

function printHorseParts() {
    console.log(alternative.aHorse)
}
printNames()
console.log("\n")
catHat("Adam")
console.log("\n")
printAnimals()
console.log("\n")
printHorseParts()
