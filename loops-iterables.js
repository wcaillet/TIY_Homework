/**
 * PART 0
 *
 * Write a function that calculates the sum of all the numbers in an array
 */

// var sumOfArray = function(arr) {
// 	var total = 0
// 	var index = 0
// 	while(index < arr.length) {
// 		var element = arr[index]
// 		total = total + element
// 		index = index + 1
// 	}
// 	return total
// }

// var sampleArray = []
// var result = sumOfArray(sampleArray)
// console.log(result)

var sumOfArray = function (arr){
    var total = 0
    for (var i=0; i < arr.length; i++){
    	total= total + arr[i]   
    }
    return total   
}

console.assert(sumOfArray([1, 2]) === 3);
console.assert(sumOfArray([]) === 0);
console.assert(sumOfArray([1, 2, 3]) === 6);
console.assert(sumOfArray([10, 9, 8]) === 27);

// PART 1

// Write a function maxOfArray() that takes an array of
// numbers as an argument and finds the highest number.

var maxOfArray = function(arr) {
	var max = arr[0] //1. define the max
	for (var i = 0; i < arr.length; i++) {
		if (typeof arr[i] != "number"){return NaN}
        if (max < arr[i]) {
			max = arr[i]
		} //2. For each item in arr, update max if item [i] is greater than max
	} return max //3. return max
}

console.assert(maxOfArray([2,4,3]) === 4)
console.assert(maxOfArray([10,9,8,100,7,6]) === 100)
console.assert(isNaN(maxOfArray([1,2,'bucklemyshoe'])))

/**
 * PART 2
 *
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */

function isVowel(symbol){
	var vowelsArray = ['A','a','E','e','I','i','O','o','U','u']
    for (var i=0; i< vowelsArray.length; i++) {
     	if(symbol === vowelsArray[i]){
            return true
 		}  
    }	
    return false
}

console.assert(isVowel(0) === false);
console.assert(isVowel("B") === false);
console.assert(isVowel("b") === false);
console.assert(isVowel("a") === true);
console.assert(isVowel("E") === true);

/**
 * Part 3
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */

var reverse = function(oldString) {
	var newString = ''
    for (var i=oldString.length-1; i>=0; i--) {
        var letter = oldString[i]
        newString = newString + letter
    }
    return newString
}

console.assert(reverse("books") === "skoob")
console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")


/**
 * Part 4
 *
 * write a function the returns a FizzBuzz string for some number N (counting up from 1).
 * - for every number that isn't a multiple of 3 or 5, return a period "."
 * - for every number that is a multiple of 3 (but not 5), return "fizz"
 * - for every number that is a multiple of 5 (but not 3), return "buzz"
 * - for every number that is a multiple of 3 and 5, return "fizzbuzz"
 */

var fizzbuzz = function(input) {
	var result = ""
    for (var i=1 ; i <=input; i++){
    	if(i%3 !==0 && i%5 !== 0){
        	result = result + "."
        } 
        if(i%3 ===0 && i%5 !==0){
            result = result + "fizz"
        }
        if(i%3 !==0 && i%5 ===0){
            result = result + "buzz"
        }
        if(i%3===0 && i%5 ===0){
            result = result + "fizzbuzz"
        }
    } //log(result)
    return result 
}

console.assert(fizzbuzz(1) === ".")
console.assert(fizzbuzz(2) === "..")
console.assert(fizzbuzz(3) === "..fizz")
console.assert(fizzbuzz(5) === "..fizz.buzz")
console.assert(fizzbuzz(10) === "..fizz.buzzfizz..fizzbuzz")

/**
 * Part 5
 *
 * Write a function findLongestWord() that takes a string of 
 words and returns the longest word.
 * i.e. findLongestWord("a book full of dogs") should return "book"
 */

var alphabet = "qwertyuiopasdfghjklzxcvbnm1234567890 "

var contains = function(sequence, element) {
   if (sequence.indexOf(element) === -1) {
       return false
   }
   return true
}

var stripPunct = function(inputString) {
    var newString = ""    
   for (var i = 0; i < inputString.length; i++) {
       var char = inputString[i]
           var caseInsensitiveChar = char.toLowerCase()
       if (contains(alphabet,caseInsensitiveChar)) { 
           newString = newString + char
       }
}
   return newString
}

function findLongestWord(sentence){
   var arr = sentence.split(" ")
   var longestWord = ""
   for (var i = 0; i < arr.length; i++) {
       var word = arr[i]
       var cleanWord = stripPunct(word)
       if (longestWord.length < cleanWord.length) {
           longestWord = cleanWord
       }
   }
   return longestWord
}
}

console.assert(findLongestWord("a book full of dogs") === "book")
console.assert(findLongestWord("don't mess with Texas") === "Texas")



/**
 * PART 6
 *
 * write a function that returns the Greatest Common Denominator of two numbers
 * - if no GCD exists, return 1
 */
var max = 1

var GCD = function(num1, num2) {
    for (var i = 1; i <= num1 || i <= num2; i++) {
       if(num1%i === 0 && num2%i === 0)
       max = i
    }
       return max
}

//log(GCD(5,1))
console.assert(GCD(5,1) === 1);
console.assert(GCD(15,3) === 3);
console.assert(GCD(15,5) === 5);
console.assert(GCD(50,20) === 10);
