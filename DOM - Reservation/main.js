

// Exercise 2:
//============

// const reservations = {
//     Bob: { claimed: false },
//     Ted: { claimed: true }
//   }
  
//const name = prompt('Please enter the name for your reservation');


// const resInput = document.createElement("input")
// resInput.setAttribute("type", "text")
// resInput.setAttribute("id", "input")
// resInput.setAttribute("placeholder", "who are you?")
// document.body.prepend(input)

// const submit = document.createElement("button")
// submit.setAttribute("type", "button")
// submit.setAttribute("id", "button")
// submit.innerHTML = "Check Reservation"
// const reservation = document.getElementById("reservation")
// console.log(reservation.value)
// submit.onclick = function (){
//     const name = resInput.value
//     if (reservations[name]==undefined){
//         list.innerHTML = "You do not seem to have an reservation, " + name 
//     } else {
//         list.innerHTML = "Welcome, " + name
//     }
// }

// document.body.appendChild(submit)
// const list = document.createElement("div")
// list.setAttribute("id", "text")
// document.body.appendChild(list)


const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
  }


const input = document.createElement('input')
input.setAttribute('type','text')
input.setAttribute('id','input')
input.setAttribute('placeholder','Who are you?')
document.body.prepend(input)

const but = document.createElement('button')
but.setAttribute('type','button')
but.setAttribute('id','button')
but.innerHTML = 'Check Reservation'
but.onclick = function () {
        const name = input.value
        if(reservations[name]==undefined) {
            list.innerHTML = 'Hello ' + name + " ,you don't have a reservation"
        } else  {
            list.innerHTML = 'Welcome to the resturant ' + name +"!"
        }
}
document.body.appendChild(but)

const list = document.createElement('div')
list.setAttribute('id','text')
document.body.appendChild(list)