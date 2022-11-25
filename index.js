/* function myfunction (params) {
    document.getElementById('demo').innerHTML = 5+6 ;
}
 */
// document.write(10+10);

// console.log(5+5);
/* let x,y,z
x = 5
y = 5
z = x+y
document.getElementById('value').innerHTML = 'The value of z is' + z + "."; */
/* const A = {type:'value', model:'121', color:'white'};
A.color = 'red';
A.owner = 'john';
function changeowner(params) {
    document.getElementById("demo").innerHTML = "Car owner is " + A.owner; 
} */









/* 
function Practice() {
    document.getElementById('demo').innerHTML="Chalgeyaj"
} */
/* function myfunction(p1,p2){
   return p1 * p2
}
document.getElementById('demo').innerHTML = myfunction(4,3); */
/* const Fruits = ['apple','banana','dates'];
document.getElementById('demo').innerHTML = Fruits;

function loveyou() {
    Fruits.push('lemon');
    document.getElementById('demo').innerHTML =Fruits;
} */
/* const Fruits = ['Apple','Mango','Banana'];
document.getElementById('demo').innerHTML = Fruits;

function Newfunction() {
    delete Fruits[1];
    document.getElementById('demo').innerHTML = Fruits;
    
} */
const hour = new Date().getHours();
let greeting;
if ( hour > 24) {
    greeting = 'Good Morning';
} else {
    greeting = 'Good evening';

}
document.getElementById('demo').innerHTML = greeting;












