export function whytsMyType<T>( argument: T): T {
    return argument;
}


let iAmString = 'Carlos Vásquez';
let iAmNumber = 23;
let iAmArray = [1,2,3,4,5]

console.log(iAmString.split(' '));
console.log(iAmNumber.toFixed());
console.log(iAmArray.join('.l.'));
