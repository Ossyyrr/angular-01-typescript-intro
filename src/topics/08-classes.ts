//! Forma larga de definir una clase
// export class Person {
//     public name: String;
//     public age: number;

//     constructor(name: string, age: number) {
//       this.name = name;
//       this.age = age;
//     }
//   }

//! Forma corta de definir una clase
export class Person {
  constructor(public name: string, public age: number) {}
}

const patri = new Person("Patri", 30);
console.log(patri);

//--------

//! HERENCIA
export class Hero extends Person {
  constructor(age: number, public alterEgo: string, public realName: string) {
    super(realName, age);
  }
}

//! COMPOSICION (para no depender de la herencia) - inyeccion de dependencias

const person = new Person("Patri", 30);

export class Hero2 {
  //   public person: Person;
  constructor(
    public age: number,
    public alterEgo: string,
    public realName: string,
    public person: Person
  ) {
    // this.person = new Person(realName, age);
  }
}

const hero2 = new Hero2(30, "Superman", "Clark Kent", person);
console.log(hero2);
