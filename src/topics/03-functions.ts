

function addNumbers(a: number, b: number): number {
    return a + b;
}

const addNumbersArrow = (a: number, b: number): String => {
    return `The result is ${a + b}`;
}

function multiply(a: number): (b: number) =>
    number {
    return function (b: number) {
        return a * b;
    }
}

const result: number = addNumbers(5, 5);
const resultArrow: String = addNumbersArrow(5, 5);
const multiplyNumbers = multiply(5);
console.log(result);
console.log(resultArrow);
console.log(multiplyNumbers(5));



interface Character {
    name: String;
    hp: number;
    showHp: () => void;
}

const healCharacter = (character: Character, amount: number): void => {
    character.hp += amount;
    character.showHp();
}


const pepe: Character = {
    name: 'Pepe',
    hp: 100,
    showHp() {
        console.log(`The character has ${this.hp} of hp`);
    }
}

console.log(healCharacter(pepe, 10));

export { }