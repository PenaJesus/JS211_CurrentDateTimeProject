// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.
function convertNumToString() {
  var num = 15;
  var n = num.toString();
  document.getElementById("NumToString").value = n;
  console.log('number to string',n)
}

// Write a JavaScript program to convert a string to the number.
function convertStringNum () {
  var num = parseInt(document.getElementById("userNum").value)
  document.getElementById('Num').innerHTML = num + " Is now a Number"
}


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String

  const dataTypes = ["Peter", 0, true, null, NaN, undefined]
  dataTypes.forEach(item => {
    if(typeof item == "string"){
      console.log('thisIsAString:',item)
    } else if (typeof item == 'number'){
      console.log('thisIsANumber:',item)
    }else if (typeof item == 'undefined'){
      console.log('thisIsUndefined:',item)
    }else if (typeof item == 'NaN'){
      console.log('thisIsNaN:',item)
    }else if (typeof item == 'boolean'){
      console.log('thisIsboolean:',item)
    }else if ( item === null){
      console.log('thisIsNull:',item)
    }else{
      console.log('whats not working:',item)
    }
 })
 

  
// Write a JavaScript program that adds 2 numbers together.
let addTwoNumbers = () => {
  let num1 = parseInt(document.getElementById("num1").value)
  let num2 = parseInt(document.getElementById("num2").value)
  document.getElementById("addTwoNumbers").innerHTML = num1 + num2
  }
 


// Write a JavaScript program that runs only when 2 things are true.
function thisIsTrue() {
if (2===2 && 3===3) {
  document.getElementById("2true").innerHTML = '2 things are true'
} 
return console.log('two things are true.') 
}
  



// Write a JavaScript program that runs when 1 of 2 things are true.
//  function testNum(a) {
//   let result;
//   var a = -1
//   if (a > 0) {
//     result = 'positive';
//   } else {
//     result = 'NOT positive';
//   }
//   return document.getElementById('1true').innerHTML = result
// }
function oneIsNotTrue() {
  var a = 2;
  var b = 2;
  if (a === 2 || b === 1) {
  document.getElementById("1true").innerHTML = '1 of 2 things are true'
  }
  
}


// Write a JavaScript program that runs when both things are not true.  
function thisIsNotTrue() {
  var a = 3;
  var b = 2;
  if (a != 2 && b != 3) {
  document.getElementById("2false").innerHTML = '2 things are not true'
  } 
  
}
  
  
   
// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
