//  OBJECTS:

//  Spot Check 1:
//  =============
console.log("Spot Check 1:")
console.log("------------")

const  car = {
    color: "red",
    numWheels: 4,
    isFancy: true
}
console.log("The car property: " + "color: " +car.color + " ,wheels number is: " + car.numWheels + " ,If the car is fancy: "+ car.isFancy)

//  Spot Check 2:
//  =============
console.log("Spot Check 2:")
console.log("------------")
const newObject = {
    item: "Hello",
    toBeginning: false ,
    items:  ["a", "b", "c"]
}

console.log(newObject.item, newObject.toBeginning, newObject.items)


//  Spot Check 3:
//  =============
console.log("Spot Check 3:")
console.log("------------")
const human = {
    age: 0
}
const babyNameKey = "name"
const babyNameValue = "Goojibear"

human.name = "Goojibear"
console.log(human.name)


//  Exersice1:
//  ==========
console.log("Exersice1:")
console.log("------------")

const p1 = {
    name: "Avi",
    age: 35, 
    city: "Tel Aviv"
}


const p2 = {
    name: "Yossi",
    age: 35, 
    city: "Jerusalem"
}


if (p1.age == p2.age){
    if (p1.city == p2.city){
console.log("Jill wanted to date Robert")
    } else {
        console.log("Jill wanted to date Robert, but couldn't")
    }
}


//  Exersice2:
//  ==========
console.log("Exersice2:")
console.log("------------")

let myList = [{name:"Lebron", lastName: "James", position:"Forward"}, {name:"Antony", lastName: "Davis", position:"Center"}]
console.log(myList[0].name +" "+ myList[0].lastName +" ,"+ myList[0].position +" and "+ myList[1].name +" "+ myList[1].lastName+ " ,"+ myList[1].position )
myList[0].position = "Guard"
console.log(myList[0].name +" "+ myList[0].lastName +" ,"+ myList[0].position +" and "+ myList[1].name +" "+ myList[1].lastName+ " ,"+ myList[1].position )
myList.splice(1,1)
console.log(myList)


//  Exersice3:
//  ==========
console.log("Exersice3:")
console.log("------------")
let myNewList = [{name:"Steph", lastName: "Curry", position:"Guard"}, {name:"James", lastName: "Harden", position:"Guard"}]
console.log(myNewList[0].name +" "+ myNewList[0].lastName +" ,"+ myNewList[0].position +" and "+ myNewList[1].name +" "+ myNewList[1].lastName+ " ,"+ myNewList[1].position )
myNewList.push(...myList)
console.log(myNewList)



//  Exersice4:
//  ==========
console.log("Exersice4:")
console.log("------------")

const book1 = {
    title: "My First book", 
    author:  "Dean Cock"
}

const book2 = {
    title: "Africa 20202", 
    author:  "Dikembe Motombu"
}

let library = {
    books: [book1, book2]
}
console.log(library.books)


//  Exersice5:
//  ==========
console.log("Exersice5:")
console.log("-----------")
const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
  }
  
  const name = prompt('Please enter the name for your reservation');
 if (name x)  
  
