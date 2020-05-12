// MVC:
// ====

// const posts = [
//     {
//         name: "Uncle Jerome",
//         text: "Happy birthday kido!"
//     },
//     {
//         name: "BFF Charlene",
//         text: "HEARTS LOVE YOU FOREVER BFF4LYFE HBD"
//     },
//     {
//         name: "Old High School Teacher",
//         text: "Hey ace, have a good one."
//     }
// ]

// const render = function () {
//     for (let post of posts) {
//         let postBox = $("<div class='post-box'><p class=name>" + post.name + "</p><p class=text>" + post.text + "</p></div>")
//         $("#timeline").append(postBox)
//     }
// }
// render()

// $("post").on("click", function () {
//     posts.push({
//         name: $("input-name").val(),
//         text: $("input-text").val()
//     })
// })


// Exersice 1:
//============

const posts = [
    {
        name: "Uncle Jerome",
        text: "Happy birthday kido!"
    },
    {
        name: "BFF Charlene",
        text: "HEARTS LOVE YOU FOREVER BFF4LYFE HBD"
    },
    {
        name: "Old High School Teacher",
        text: "Hey ace, have a good one."
    }
]


const render = function() {
    for(let post of posts) {
        $("#posts").append($(`<div class="post">${post.name}: ${post.text}</div>`))
    }
}


render()


$("button").on("click", function () {
    


    const $name = $("#name")
    const $text = $("#text")


    const post = {name: $name.val(), text: $text.val()}


    posts.push(post)


    $("#posts").empty()
    render()


    $name.val("")
    $text.val("")
})

