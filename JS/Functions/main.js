//  FUNCTIONS:
//-----------
// const greet = function(){
//     console.log("Hello there")
//   }

//   greet()
  

// const greet = function(name){
//     console.log("Hello there, " + name)
//   }
//   greet("Dexter")
  

//   const growOld = function(user){
//     user.age++
//   }
  
//   const aDude = {name:"Ayd Ood", age: 23}
//   growOld(aDude)
  
//   console.log(aDude) // prints {name: "Ayd Ood", age: 24}


// const greet = function(name){
//     console.log("Hello, " + name)
//   }
  
//   const growOld = function(user){
//     user.age++
//   }
  
  
//   greet() // prints "Hello, undefined"
//   growOld() // throws an error

// const findSmallest = function(numbers){
//     let smallest = numbers[0]
  
//     for(let num of numbers){
//       if(num < smallest){
//         smallest = num
//       }
//     }
  
//     return smallest
//   }
  
//   const ages = [17, 21, 9, 34]
//   const youngest = findSmallest(ages)
//   console.log(youngest) // prints 9
  
  

// const add = function(x, y){
//   const sum = x + y
//   return sum
//   console.log("Returned " + sum)
// }

// add(1, 2)
  

// const person = {
//     name: "Julius",
//     speak: function(food) {
//       console.log("I love " + food)
//     }
//   }  

// console.log(person.name) //you know what this will do

// person.speak("Cheese toast") //and this? Try it out!


//  Exercise1:
//  =========


// const age = calcAge(2020, 1989)
// console.log(age)

// function calcAge(todayYear, birthYear){
//     return todayYear-birthYear

// }


//  Exercise2:
//  =========

// const age = calcAge(2020, 1989)
// const ageMonthLess = age - 1

// function calcAge(todayYear, birthYear){
//     return todayYear- birthYear
// }

// console.log("You are either " + age + " or "+ ageMonthLess)


//  Exercise3:
//  =========
//  let number = prompt('Please enter a number: ')
 
//  function isEven(someNum){
//      if (number % 2 == 0){
//          return true
//      } else{
//         return false
//      }
//  }
//  const trueOrFalse= isEven(number)
//  console.log(trueOrFalse)



//  Exercise4:
//  =========

// const arrOfNum = [2, 4, 5, 8, 9, 11, 0, 4]

// function isEvenInArr(arr){
//     for (const num of arrOfNum) {
//         if(num % 2 != 0)
//         console.log(num)
//     }
// }
// isEvenInArr(arrOfNum)

//  Exercise5:
//  =========

// const arrOfNum2 = [2, 4, 5, 8, 9, 11, 0, 4, 20, 12]
// const num = prompt("Please Enter a number: ")

// function checkExist(arrToCheck, numToCheck){
//     for (const num of arrToCheck){
//         if (num == numToCheck){
//             return true
//         }
//     }
//     return false
// }

// let answer = checkExist(arrOfNum2, num)
// console.log(answer)

//  Exercise6:
//  =========

// const calculator = {
//     add: function(num1, num2){
//         return num1 + num2
//     },
//     subtract: function(num3, num4){
//         return num3 - num4
//     }
// }

// const result1 = calculator.add(20, 1)
// const result2 = calculator.subtract(30, 9)

// console.log(calculator.add(result1, result2)) //should print 42

//  Exercise7:
//  =========


// const turnToKing = function(name, money){
//     name = name.toUpperCase()
//     money = increaseByNameLength(money, name)
//     name = makeRegal(name)

//     console.log(name + " has " + money + " gold coins")
// }

// turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"

// function increaseByNameLength(money, name){
//     const length = name.length-1
//     return length*100 + money
// }

// function makeRegal(name){
//     let makeRegalToReturn = "His Royal Highness, " + name
//     return makeRegalToReturn
// }

