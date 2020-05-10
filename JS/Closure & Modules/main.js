//  Callbacks & Arrow Functions:
//-----------------------------

// Spot Check 1:
//--------------

// const first = function () {
//     setTimeout(function () {
//         console.log("should be first")
//     }, 3000)
// }

// const second = function () {
//     console.log("should be second")
// }

// first()
// second()


// const first = function (callback) { //receive the function as a parameter
//     setTimeout(function () {
//         console.log("should be first")
//         callback() //this is the `second` function being invoked
//     }, 3000)
// }

// const second = function () {
//     console.log("should be second")
// }

// first(second) //pass the second function to the first, as an argument



// Spot Check 2:
//--------------

// let users = []

// const getData = function () {
//     setTimeout(function () {
//         users = [{ name: "Rick" }, { name: "Morty" }]
//         console.log("Got users")
//     }, 3000);
// }

// const displayData = function () {
//     console.log("Going to display: " + users)
//     for (user of users) {
//         console.log(user.name)
//     }
// }

// getData()
// displayData()


// let users = []

// const getData = function (display) {
//   setTimeout ( function () {
//     users = [{name: "Rick"}, {name: "Morty"}]
//     console.log("Got users")
//     display()
//   }, 3000)
// }

// const displayData = function () {
//   console.log("Going to display: " + users)
//   for (user of users) {
//     console.log(user.name)
//   }
// }

// getData(displayData)


// Spot Check 3:
//--------------

// const timer = function(){
//     console.log(new Date())
//   }
  
//   setInterval(timer, 1000)

  
//   setInterval(function(){
//     console.log(new Date())
//   }, 1000)


// Spot Check 4:
//--------------

// const square = num => console.log(num*num)

// square(5)
// square(2)
// square(6)



// Spot Check 5:
//--------------

// formalTitle = getFormalTitle("Madamme", "Lellouche")
// console.log(formalTitle) //returns "Maddame Lellouche"



// const formalTitle = (name1, name2) =>  name1 +" "+name2

// console.log(formalTitle("Madamme", "Lellouche"))


// const suspenseBuilder = {
//     name: "El Mysterio",
//     displayName: function () {

//         console.log("You are going to see the name in 3 seconds...")

//         setTimeout(function () { //normal function
//             console.log("The name is: " + this.name)
//         }, 3000)

//     }
// }

// suspenseBuilder.displayName()


// const suspenseBuilder = {
//     name: "El Mysterio",
//     displayName: function () {

//         console.log("You are going to see the name in 3 seconds...")

//         setTimeout(() => { //this is the change
//             console.log("The name is: " + this.name)
//         }, 3000)

//     }
// }

// suspenseBuilder.displayName()


// let x = {
//     count: 12,
//     go: () => {
//         setTimeout(function () {
//             console.log(this.count)
//         }, 1500)
//     }
// }
// x.go()

// setInterval(()=>{console.log("hi")}, 2000)

const run = (name) => {console.log("Run, " + name + ", run!")}
const yell = function(action){
    let env = "Forest"
    action(env)
}
run(yell)

