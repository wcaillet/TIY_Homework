document.querySelector("#thanks button").addEventListener('click',function(){
  // TASK #1 - done
  window.alert("Yowch don't click me so hard!")
})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2 - done

	var doubleNum = document.querySelector("#compoundInvestment")
	doubleNum.innerHTML = doubleNum.innerHTML *2
})

document.querySelector("#color-circle button").addEventListener('click',function(){
  // TASK #3 - done
  var circle = document.querySelector("#circle-bw")
  if (circle.style.background === "black") {
  	circle.style.background = "white"
  }
  else {
  	circle.style.background = "black"
  }
})

document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4 - done
  var circleRed = document.querySelector(".circle-red")
  var circleRedStyles = window.getComputedStyle(circleRed)
  
  var oldCircleWidth = parseInt(circleRedStyles.width, 10)
  var oldCircleHeight = parseInt(circleRedStyles.height, 10)
  
  if(oldCircleWidth < 320){
  	circleRed.style.width = (oldCircleWidth *2) + "px"
  	circleRed.style.height = (oldCircleHeight *2) + "px"
  }
  else{
  	circleRed.style.width = 40 + "px"
  	circleRed.style.height = 40 + "px"
  }
})

document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5
  Array.prototype.contains = function(el) {
  return this.indexOf(el) !== -1
}

var isDone = function(choreElement) {
  console.log(choreElement.classList)
  // is "done" in the classList?   
  for (var i = 0; i < choreElement.classList.length; i ++) {
    if (choreElement.classList[i] === 'done') {
      return true
    }
  }
  return false
}

var choresContainer = document.querySelector("#box5 ul")

var completedChoresUl = document.querySelector('#box5s ul')

var chores = choresContainer.querySelectorAll('li')

for (var i = 0; i < chores.length; i ++) {
  var choreNode = chores[i]
  if (isDone(choreNode)) {
    choresContainer.removeChild(choreNode)
    completedChoresUl.appendChild(choreNode)
  }
}

})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6 - done // 
  var answerBoxNode = document.querySelector("#reverse-squares .answer-box")
  var squares = answerBoxNode.querySelectorAll(".square")
  for(var i=squares.length -1; i>=0; i--){ //Iterating over same array - no need to create one
    console.log(squares[i])
    answerBoxNode.removeChild(squares[i])
    answerBoxNode.appendChild(squares[i])
  }
})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7 - done
  var taskBox = document.querySelectorAll("#tasks li")
  // document.getElementById("#tasks").innerHTML 

  var reverseString = function(input) {
    var newString = ''
    for (var i= input.length -1; i>=0; i--){
      var char = input.charAt(i)
      newString += char
    } return newString
  }

  var newArray = []
  for(var i=0; i<taskBox.length; i++){
    var newStringArray = reverseString(taskBox[i].innerHTML)
    taskBox[i].innerHTML = newStringArray
    newArray.push(newStringArray)
  }

})
////
// var reversal = function reverse(taskBox) {
//   return taskBox.split('').reverse().join('');
// }


document.querySelector("#cycle-image button").addEventListener('click',function(){
  // TASK #8 - done
    var imageEl = document.querySelector("#city-img")
    var imageURLArray = imageEl.src.split('/')
    var arrayLength = imageURLArray.length
    var currentImageNumber = imageURLArray[arrayLength-1]
    var numberCharLength = currentImageNumber.length
    var trueImageNumber = parseInt(currentImageNumber)

    if(trueImageNumber < 10){
      trueImageNumber = trueImageNumber + 1
    }
    else{
      trueImageNumber = 1
    }

   // trueImageNumber - (trueImageNumber % 3) +1

    var theEnd= imageEl.src.slice(0, imageEl.src.length -numberCharLength) + trueImageNumber
    imageEl.src = theEnd
})



