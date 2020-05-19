

// DOM Traversal with jQuery:
//===========================

// $(".remove").on("click", function(){
//     alert($(this).closest(".post").data().id)
//   })

  
// $('button').on('click', function() {
//     let relevantInputValue = $(this).closest("div").find("input").val()
//     alert(relevantInputValue)
//   })
  

//Spot Check 1:
//=============

// $("button").on("click", function(){
//     console.log($(this).closest("div").find("span").text())
//   })


//Spot Check 2:
//=============

// $("button").on("click", function(){
//     console.log($(".container").find("p").text())
//   })
  

let x = "flap"
let y = {a: "shlop", x: "dub"}
const all = [x, y]

x = all[1].x
$("#corq").siblings(".nalo").append("<div>" + x + " - Ryk</div>")