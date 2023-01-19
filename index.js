// Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
];
/**
* Check if {name} is an actual contact's {firstName} and the given property (prop) is a property of that contact.
* 
* If both are true, then return the "value" of that property.
* If name does not correspond to any contacts then return the string No such contact.
* If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.
* 
* @param {string} name 
* @param {string} prop 
*/
function lookUpProfile(name, prop) {
  // Only change code below this line

  // Only change code above this line
}

lookUpProfile("Akira", "likes");
lookUpProfile("Kristian", "lastName") // return the string "Vos"
lookUpProfile("Sherlock", "likes") // return ["Intriguing Cases", "Violin"]
lookUpProfile("Harry", "likes") // return an array
lookUpProfile("Bob", "number") // return string "No such contact"
lookUpProfile("Bob", "potato") // return "No such contact"
lookUpProfile("Akira", "address") // return "No such property"