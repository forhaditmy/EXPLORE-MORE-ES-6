/**
 * var let const
 * default parameter
 * template string
 * arrow function
 * destructuring 
 * keys, value, entries
 * for of /for in object
 */
const a = 56;
const numbers =[54,25,25]
const person ={
    name:'shakib khan'
}
const message = `Hi, ${person.name} has a: ${a} access to ${numbers [2]}
`
if(true){

}
const square = x => x * x;
const sum = (a, b) => a + b;


const {age, x, ...others } = {x:2, y:5, z:3, name: 'object', age:55}
const [first, second, ...remaining] = ['ram','sam','jodu','modu']