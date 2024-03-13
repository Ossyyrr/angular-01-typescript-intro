export function whatsMyType<T>(argument: T): T {
  return argument;
}

let amIString = whatsMyType("Hello");
let amINumber = whatsMyType(1);
let amIBoolean = whatsMyType(true);
let amIArr = whatsMyType([1, 2, 3]);

console.log(amIString);
console.log(amINumber);
console.log(amIBoolean);
console.log(amIArr);
