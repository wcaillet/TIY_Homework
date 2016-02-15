
// Part 1

// Write a function called getFullNames that takes an array 
// of objects with first and last names and returns an array 
// of strings, where each string is a customer's full name.

//1. Set up function name and input/output
//2. Set up container for output
//3. Move into the array

var customers = [
    { first: 'Joe', last: 'Blogs'},
    { first: 'John', last: 'Smith'},
    { first: 'Dave', last: 'Jones'},
    { first: 'Jack', last: 'White'}
]

var getFullNames = function(inputArray) {
   var newArray = []
   for (var i = 0; i < inputArray.length; i++) {
       var fullNameString = ""
       fullNameString = inputArray[i].first + " " + inputArray[i].last
       newArray.push(fullNameString)
       //could condense above 3 lines into:
       // newArray.push(arrayOfObjects[i].first + " " + arrayOfObjects[i].last)
   }
  return newArray 
}

console.assert(getFullNames(customers)[1] === "John Smith")


// Part 2

// Write a function called getCounts that takes a string of text as input and returns
// an object which stores the frequency of each word in the string.

// Note that your counts should NOT be case-sensitive. So, case INsensitive

//1. What does our function need as input - string(words like a paragaph)
//2. what does our function give us as OUTPUT? object properties = words, value = number

var text = "It’s obviously not the case, but T’Challa—the Black Panther and mythical ruler of Wakanda—has always struck as the product of the black nationalist dream, a walking revocation of white supremacist myth. T’Challa isn’t just a superhero in the physical sense, he is one of the smartest people in the world, ruling the most advanced civilization on the planet. Wakanda’s status as ever-independent seems to eerily parallel Ethiopia’s history as well as its place in the broader black imagination. Maybe it’s only me, but I can’t read Jason Aaron’s superb “See Wakanda And Die” and not think of Adowa.\
Comic book creators, like all story-tellers, get great mileage out of myth and history. But given the society we live in, some people’s myths are privileged over others. Some of that is changing, no doubt. In the more recent incarnations of T’Challa you can see Christopher Priest invoking the language of the Hausa or Reginald Hudlin employing the legacy of colonialism. These were shrewd artistic decisions, rooted in the fact that anyone writing Black Panther enjoys an immediate, if paradoxical, advantage: the black diaspora is terra incognita for much of the world. What does the broader world really know of Adowa? Of Nanny and Cudjoe? Of the Maji-Maji rebellion? Of Legba and Oshun?  Of Shine? Of High John The Conqueror? T’Challa’s writers have always enjoyed access to a rich and under-utilized pool of allusion and invocation."

var getCounts = function(stringOfWords) {
    var arrayOfWords = stringOfWords.toLowerCase().split(' ')
    var wordsObject = {}
    // wordsObject.name = 'rufus' notation is used for accessibility
    // wordsObject['age'] = 29 [] are used to input variables as string
    // var someProp = 'name'
    // wordsObject[someProp] = 'rufus'
    for(var i=0; i<arrayOfWords.length; i++){
     
      var word = arrayOfWords[i] 

      if(wordsObject.hasOwnProperty(word) === true ){
        wordsObject[word] += 1 // <-- This is the same as: wordsObject = wordsObject[word] + 1
      }
      else{
        wordsObject[word] = 1
      }
      
      // if property is NOT on the object
      // create the property on the object set its value to 1
      // else (if property IS on the object)
      // add 1 to the value on the current property
  }
    return wordsObject
}

var wordFrequencyObject = getCounts(text)

console.log(wordFrequencyObject)

console.assert(wordFrequencyObject.but === 3)
console.assert(wordFrequencyObject.black === 5)




// Part 3

// Write a function called generateDog that returns an object which represents a dog.
// The dog object should have attributes like legs, weight and color. It should have a 
// speak() method that receives a string as input and returns a new version of that 
// string where the first letter of every word is replaced with the letter 'r'.
// The dog constructor (which is what this is) should take a name input, and the
// dog should receive the assigned name.

var generateDog = function(inputName) {
  this.name = inputName
  this.legs = 4
  this.speak = function(inputString) {
    var newWords = inputString.split(' ')
    // var newSpeech = ''
    for (var i=0; i<newWords.length; i++) {
      newWords[i] = 'r' + newWords[i].substring(1)
    }
    return newWords.join(" ")
  }
}

var dog= new generateDog('rex')

console.assert(dog.legs === 4)
console.assert(dog.speak('i love you') === 'r rove rou')
console.assert(dog.name === 'rex')

var dog = new generateDog('carl')
console.assert(dog.name === 'carl')

// ///

// var generateDog = function(inputString) {
//   this.name = 'rex',
//   this.legs = 'short',
//   this.weight = '10lbs',
//   this.color = 'brown',
//   this.speak = function(inputString) {
//     var newArray = string.split(" ")
//     var newString = ''
//     for (var i=0; i< newArray.length; i++){
//         var w = newArray[i]
//         newString = newString + " " + newArray[i]
//     }
//   }
// }
// ///
//  var strArr = ["I", "love", "you"];
// var str = "";
// for(var i = 0; i < strArr.length; i++) {  
//     str = " " + strArr[i];
//     console.log(str);
// }

// console.log("END");
// console.log(str);




// Part 4 

// Write a function pluck() that, given a list of objects, extracts a list of
// the values associated with a given property name.

// e.g:
// pluck(stooges, 'name')
// ['moe','larry','curly']

// tests
// ---

var pluck = function(arrOfObjects, key) {
    var newArray = []
    for (var i = 0; i < arrOfObjects.length; i++) {
        var singleObject = arrOfObjects[i]
        newArray.push(singleObject[key])
    }
    
    return newArray
}

var stooges = [
    {name: 'moe', age: 40}, 
    {name: 'larry', age: 50}, 
    {name: 'curly', age: 60}
]


console.assert(pluck(stooges, 'name')[0] === 'moe')
console.assert(pluck(stooges, 'age')[2] === 60)


// Part 5

// Write a function reverseObjects that takes an array of objects as input
// and returns an array of those same objects, but with the properties and 
// values reversed.

var reverseObjects = function(arrayOfObjects) {
    var newArray = []
    var newObject = {}

    for (var i=0; i < arrayOfObjects.length; i++){
      var singleObject = arrayOfObjects[i]

      for(var prop in singleObject){
        if (singleObject.hasOwnProperty(prop)) {
          newObject[singleObject[prop]] = prop;
        }
      } newArray.push(newObject)
    } return newArray
}

var users = [
  {obama: 'president@gmail.com',hobby: 'basketball'},
  {trump: 'americamoneywin@yahoo.com', hobby:'dealmaking'},
  {bush: 'jeb!@hotmail.com',hobby:'portraiture'}
]
// should yield: [{'president@gmail.com': 'obama',basketball: 'hobby'}, ....]

var flippedUsers = reverseObjects(users)

console.assert(flippedUsers[0]['president@gmail.com'] === 'obama')
console.assert(flippedUsers[1]['americamoneywin@yahoo.com'] === 'trump')
console.assert(flippedUsers[1].dealmaking === 'hobby')

// Part 6

// The code below doesn't work. Can you fix it?

var makeItTom = function(object) {
	for (var prop in object) {
		if (prop === 'name') object[prop] = 'Tom'
	}
	return object
}

var sampleObject = {
	mass: '5.972 × 10^24 kg',
	age: '4.543 billion years',
	name: 'Earth'
}

var planetTom = makeItTom(sampleObject)

console.assert(planetTom.name === 'Tom')

// VVV caution: hints below VVV

console.assert(planetTom['name'] === 'Tom')
console.assert(planetTom.prop === undefined)
console.assert(planetTom['prop'] === undefined)

// What did you learn about the difference between
// bracket syntax and dot syntax for object attributes?


// Part 7 - Adventure Mode starts here!
// -----------
// Write a function where() that takes two inputs, a list of objects and 
// a properties object. It should return a new list containing only those
// objects that meet the key-value conditions.
// -----------

var where = function(array,key) {
    var newArray = [] //yikes!
}

var plays = [
    {title: "Cymbeline", author: "Shakespeare", year: 1623},
    {title: "The Tempest", author: "Shakespeare", year: 1623},
    {title: "Hamlet", author: "Shakespeare", year: 1603},
    {title: "A Midsummer Night's Dream", author: "Shakespeare", year: 1600},
    {title: "Macbeth", author: "Shakespeare", year: 1620},
    {title: "Death of a Salesman", author: "Arthur Miller", year: 1949},
    {title: "Two Blind Mice", author: "Samuel and Bella Spewack", year: 1949}
]

var sh8spr = where(plays, {author: "Shakespeare"})
console.assert(sh8spr instanceof Array)
console.assert(sh8spr.length === 5)
console.assert(sh8spr[0].title === "Cymbeline")

sh8spr = where(plays, {author: "Shakespeare", year: 1611})
console.assert(sh8spr.length === 0)

sh8spr = where(plays, {author: "Shakespeare", year: 1623})
console.assert(sh8spr.length === 2)

var midcentury = where(plays, {year: 1949})
console.assert(midcentury.length === 2)


// Part 8

// Create an object that has a name attribute and a method called personalize. 
// personalize should take a function as input. when personalize is called, 
// an introductory string should be inserted before the input function's
// return value. Use the example in the console.assert to understand
// exactly how you should write the method. Including the period! 

var politeObject = {
    name: "Frank"
}

var helloWorld = function() {
    return "hello world"
}

var personalizedResult = politeObject.personalize(helloWorld)
console.assert(personalizedResult === "Hi, my name is Frank, and the \
    result is hello world.")
