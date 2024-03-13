

interface SuperHero {
    name: String;
    age: number;
    address: Address;
    showAddress: () => String;
}


interface Address {
    Street: String;
    pais: String;
    ciudad: String;
}

const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        Street: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.ciudad + ', ' + this.address.pais;
    }
}


const address = superHeroe.showAddress();
console.log(address);




export { };