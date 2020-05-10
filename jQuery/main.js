// jQuery:
// =======
// console.log($)
// console.log(jQuery)
// $("h4").css("color", "red")


// $('#my-input').val()

// $('button').on('click', function () {
//     alert('clicked!')
//   })

//   $('button').click(function () {
//     alert('clicked!')
//   })
    

// $("#b1").hover(function () {
//     console.log($(this))
// })

// const aDynamicDiv = "<div class='mine'>Oh yes</div>"
// const elem = $(aDynamicDiv)
// console.log(elem)

// $("body").append(elem)

// $('.fruits').append('<p class="red">Raspberry</p>')
// $('.fruits').append('<p class="brown">Kiwi</p>')

// const text = "Banana"
// const item = $("<div class=fruit>" + text + "</div>")

// console.log(item) //prints <div class=fruit>Banana</div> as a jQuery object - this is what we created!


// const names = ["Alex", "Byron", "Cassandra", "Deandre", "Ellena"]

// for(let name of names){
//   $("body").append(`<div>${name}</div>`)
// }


// $("p").remove()

// $("p").remove(".brown")

// const addDiv = function() {
//     $("body").append("<div class=box></div>")
//   };
  
//   $("button").on("click", function() {
//     addDiv()
//   });
  
//   $(".box").on("click", function() {
//     console.log("hi")
//   });
  

//   const addDiv = function() {
//     $("body").append("<div class=box></div>");
    
//     $(".box").on("click", function() {
//       alert("hi");
//     });
//   };
  
//   $("button").on("click", function() {
//     addDiv();
//   });
  

// const addDiv = function() {
//     $("body").append("<div class=box></div>");
//   };
  
//   $("button").on("click", function() {
//     addDiv();
//   });
  
//   $("body").on("click", ".box", function() {
//     alert("hi");
//   });
  


//Spot Check 2: 
//-------------
// $("h1").css("background-color", "blue")
// $(".red-div").css("background-color", "red")
// $("li:first-child").css("background-color", "green")
// $("li:last-child").css("background-color", "pink")
// $("#brown-div").css("background-color", "brown")


//Spot Check 3: 
//-------------
// $("#b1").addClass("box")
// $("#b2").addClass("box")


//Spot Check 4: 
//-------------
// $("my-input").val("Terabyte")


//Spot Check 5: 
//-------------
// const data = $("div").data()
// console.log("Item with barcode " + data.barcode + " will expire on " + data.expirationdate) //notice how we use expirationdate, even though in the HTML it's expirationDate



//Spot Check :6 
//-------------

// $("#b1").hover(function(){
//     $("b1").css("background-color", "blue")
// })

// $("#b1").hover(function () {
//     $("#b1").css("background-color", "blue")
// })



//Spot Check 7: 
//-------------

    // $("button").on("click", function () {
    //     alert($("#my-input").val())
    // })



//Spot Check 8: 
//-------------

// $(".box").hover(function(){
//     $(this).css("background-color", "blue")
// })

//Spot Check 9: 
//-------------
// $(".feedme").on("click", function(){
//     let divCopy = `<div class=feedme> ${$(this).text()} </div>`
    
//     $("body").append(divCopy)
//   })
  
//Spot Check 10: 
//-------------
// const names = [
//     { first: "Alex", last: "Johnson" },
//     { first: "Byron", last: "Loveall" },
//     { first: "Cassandra", last: "Wuthers" },
//     { first: "Deandre", last: "Rahm" },
//     { first: "Ellena", last: "Freeman" }
//   ]

//   for (let name of names) {
//       $("body").append('<div class=human>${name.first} - ${name.last}</div>');
      
//   }
  
//   for (let name of names) {
//     $("body").append(`<div class=human>${name.first} - ${name.last}</div>`);
//   }



//Spot Check 11: 
//-------------
// $("#plague").hover(function(){
//     $("#plague").remove()
// })


//Spot Check 12: 
//-------------

// $("button").on("click", function(){
//     $("#blogs").append("<div class='blog'>Cool blog</div>")
//   })
  
//   $("#blogs").on("click", ".blog", function(){
//     $(".blog").text("blargh") 
//   })

//Spot Check 13: 
//-------------


// $("button").on("click", function(){
//     $("#blogs").append("<div class='blog'>Cool blog</div>")
//   })
  
//   $("#blogs").on("click", ".blog", function(){
//     $(this).text("uncool blog") 
//   })




// Exercise 1:
// ===========
// $("button").on("click", function () {
//     $("#human-list").append(`<li>${$("input").val()}</li>`)
//     $("input").val("")
// })





// Exercise 2:
// ===========
// $("#human-list").on("click", "li", function() {
//     $(this).remove()
// })


// Exercise 3:
// ===========
// $("body").append("<div class=\"box\" id=\"box-1\"></div>")
// 	$("body").append("<div class=\"box\" id=\"box-2\"></div>")
	
// 	let $boxes = $(".box")
	
// 	$(".box").hover(function () {
// 	    $boxes.css("background-color", "rgb(231, 76, 60)")
// 	    $(this).css("background-color", "rgb(142, 68, 173)")
// 	})


// Exercise 4:
// ===========

// $(".item").click(function () {
	
//     if ($(this).data().instock) {
//         $("#cart").append(`<div class="cart-item">${$(this).text()}</div>`)
//     }
// }) 



// Exercise 5:
// ===========
// const fruits = [
//     { name: "Orange", color: "orange" },
//     { name: "Banana", color: "yellow" },
//     { name: "Coconut", color: "brown" },
//     { name: "Kiwi", color: "brown" },
//     { name: "Lemon", color: "yellow" },
//     { name: "Cucumber", color: "green" },
//     { name: "Persimmon", color: "orange" },
//     { name: "Pumpkin", color: "orange" }
//   ]

//   for(let fruit of fruits) {
//       $("#basket").append(`<div class="${fruit.color}">${fruit.name}</div>`)
//   }



