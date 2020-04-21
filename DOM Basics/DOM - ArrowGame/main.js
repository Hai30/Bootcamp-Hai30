
//DOM:
//====

// Exercise 1 -Arrow Game:
//=======================

const moveLeft = document.getElementById("left")
moveLeft.onclick = function(){
    const block = document.getElementById("block")
    let right = parseInt(block.style.right) || 400
    if((right+15)<420){
        right += 15
        block.style.right = right + "px"
    }
  }


  const moveRight = document.getElementById("right")
  moveRight.onclick = function(){
    const block = document.getElementById("block")
    let right = parseInt(block.style.right) || 0
    if((right-15)>-10){
        right -= 15
        block.style.right = right + "px"
    }
  }


  const moveUp = document.getElementById("up")
  moveUp.onclick  = function(){
    const block = document.getElementById("block")
    let down = parseInt(block.style.bottom) || 400
    if ((down+15)<420){
        down += 15
        block.style.bottom = down +"px"
    }
 

  }

const moveDown = document.getElementById("down")
moveDown.onclick = function(){
    const block = document.getElementById("block")
    let down = parseInt(block.style.bottom) || 400
    if ((down-15)>60){
        down -= 15
        block.style.bottom = down +"px"
    }

  }











