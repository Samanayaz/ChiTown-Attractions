let val; 
val= document;
val= document.all;
val= document.all[3];
val= document.all.length;
val= document.forms[0];
val= document.forms[0].action;
val= document.links;
val= document.links[0];
val= document.links[0].classList[0];
val= document.scripts[0].getAttribute('src');

console.log(val);


console.log(document.getElementById('plan-list').className);
console.log(document.querySelector('#plan-list'));
console.log(document.querySelector('.chi-header'));
console.log(document.querySelector('h4'));

// document.querySelector('ul li').style.color = "purple";
// document.querySelector('li:nth-child(3)').style.color = "purple";

const trip = document.getElementsByClassName('explore-item');
console.log(trip);

// trip[0].style.color= "green";

const tripchi = document.querySelector('.trip-list').getElementsByClassName('explore-item');

// tripchi[5].style.color="green";

const chiOdd = document.querySelectorAll('li:nth-child(odd)');
const chiEven = document.querySelectorAll('li:nth-child(even)');

// chiOdd.forEach(function (li) {
//     li.style.background ="lightgray";     
// });
// chiEven.forEach(function (li) {
//     li.style.background ="white";     
// });


console.log(chiEven);

// 
const vacy= document.querySelector('ul.places');
const vacation = document.querySelector('li.explore-item:first-child');

val = vacy;
val = vacation;

val = vacy.childnodes;

val = vacy.children;

vacy.children[1].textcontent = "hello";
vacy.style.color = "brown";


val = vacy.firstChild;
val = vacy.firstElementChild;

val = vacy.lastChild;
val = vacy.lastElementChild;

val = vacation.parentNode;

val = vacation.parentElement.parentElement;

val = vacation.nextSibling;

val = vacation.nextElementSibling;
val = vacation.nextElementSibling.nextElementSibling;

val = vacation.previousElementSibling;

val = vacation.nextElementSibling.nextElementSibling.firstElementChild.className = "Enjoy";

var extra = document.createElement('li');
extra.style.textcontent = "giordanos";


console.log(val);




