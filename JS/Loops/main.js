//  LOOPS:


//  Exercise1:
//  =========
// console.log("Exercise 1 loops:")
// console.log("-----------------")
// const names = ["Andy", "Dave", "Anna", "Roni", "Alice", "Bobi"]
// const Ages = [21, 26, 35, 42, 14, 24]

// for (let i = 0; i < names.length; i++){
//     console.log(names[i] + " is " +Ages[i]+ " years old." )
// }

//  Exercise2:
//  =========
console.log("                 ")
console.log("Exercise 2 loops:")
console.log("-----------------")
const numArr = [1 ,6 ,81, 104, 68, 45, 12, 1]
let sum = 0

for(let number in numArr){
    sum += numArr[number]
}
console.log("The sum is:" +sum)


//  Exercise3:
//  =========
console.log("                 ")
console.log("Exercise 3 loops:")
console.log("-----------------")

let avg = sum/numArr.length
console.log("The average is:" +avg)

//  Exercise4:
//  =========
console.log("                 ")
console.log("Exercise 4 loops:")
console.log("-----------------")

let nums = []
for(let i = 0; i < 100; i++){
    nums.push(i+1)
    console.log("The num is: " + nums[i])

}

//  Exercise5:
//  =========
console.log("                 ")
console.log("Exercise 5 loops:")
console.log("-----------------")

for(let i = 0; i < 100; i++){
    if (nums[i] % 2 != 0)
    console.log("Odd num in array is: " + nums[i])

}


//  Exercise6:
//  =========
console.log("                 ")
console.log("Exercise 6 loops:")
console.log("-----------------")
nums = [773, 414, 213, 374, 434, 700, 506, 495, 852, 585, 271, 198, 689, 248, 708, 197, 96, 260, 921, 834, 258, 662, 501, 632, 715, 503, 538, 289, 596, 381, 817, 280, 968, 877, 431, 146, 491, 724, 83, 841, 174, 21, 460, 25, 785, 539, 291, 404, 903, 278, 159, 229, 216, 683, 84, 87, 879, 406, 661, 537, 890, 394, 382, 477, 271, 373, 82, 104, 709, 723, 333, 958, 95, 983, 732, 917, 324, 785, 754, 23, 659, 551, 408, 442, 766, 242, 611, 846, 802, 866, 817, 848, 227, 349, 243, 837, 21, 954, 146, 11]

let i = 0 
while(nums[i] != 709){
    i++
}
console.log("The number 709 is index: "+i)

//  Exercise7:
//  =========
console.log("                 ")
console.log("Exercise 7 loops:")
console.log("-----------------")

const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []


for (let i = 0; i < names.length; i++){
    people.name = names[i] 
    people.age = ages[i]
}   
console.log(people)
