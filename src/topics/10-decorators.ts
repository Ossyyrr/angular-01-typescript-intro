// Los decoradores añaden funcionalidades a las clases, métodos, propiedades o parámetros.
// Normalmente se usan los decoradores ya creados por angular, no se suelen crear
function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    newProperty = "new property";
    hello = "override";
  };
}

@classDecorator
class SuperClass {
  public myProperty: string = "Hello";

  print() {
    console.log("Hola mundo");
  }
}

console.log(SuperClass);
const myClass = new SuperClass();
console.log(myClass);
