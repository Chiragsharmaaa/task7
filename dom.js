// traversing the DOM
var itemList = document.querySelector('#items');

//parentNode property
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode)

// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement)

//childNodes
// console.log(itemList.childNodes) //returns li nodelist or array. text node represents white spaces or line breaks

// console.log(itemList.children) //doesnt looks into line breaks by default and its an HTML collection
// console.log(itemList.children[1]) //lists out item 2
// itemList.children[1].style.backgroundColor = 'yellow'

//firstChild
// console.log(itemList.firstChild) //returns whitespaces if any present first

//lastChild
// console.log(itemList.lastChild) //returns whitespaces if any present first
// itemList.lastChild.textContent = 'yo'
//firstElementChild
// console.log(itemList.firstElementChild)
// itemList.firstElementChild.textContent = 'Hello 1'

//lastElementChild
// console.log(itemList.lastElementChild)
// itemList.lastElementChild.textContent = 'Hello 2'

//nextsibling
// console.log(itemList.nextSibling) //returns textnode if present

// //nextElementSibling
// console.log(itemList.nextElementSibling) //returns span line 31 index.html

// //previousSibling
// console.log(itemList.previousSibling)

// //previousElementSibling
// console.log(itemList.previousElementSibling)
// itemList.previousElementSibling.style.color = 'green'

// ans 1
// createElement
// create a div
var newDiv = document.createElement('div')

//add class
newDiv.className = 'hello'

//add id
newDiv.id = 'hello1'

//add attribute
newDiv.setAttribute('title', 'HelloDiv')

// create text node to add content
var newDivText = document.createTextNode('Hello world')

//add text to div
newDiv.appendChild(newDivText)

console.log(newDiv)

//to add this created div to the page
var container = document.querySelector('header .container')
var h1 = document.querySelector('header h1')
newDiv.style.fontSize = '30px'
container.insertBefore(newDiv, h1)

//ans 2
var myDiv = document.createElement('div')
myDiv.className = 'hello'
myDiv.id = 'hello1'
myDiv.setAttribute('title', 'HelloDiv')
var myDivText = document.createTextNode('Hello World')
myDiv.appendChild(myDivText)
var myContainer = document.querySelector('div .title')
var myh1 = document.querySelector('ul list-group')
myDiv.style.fontSize = '20px'
myContainer.insertBefore(myDiv, myh1)