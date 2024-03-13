export interface Passenger {
  name: string;
  children?: String[];
}

const passenger1: Passenger = {
  name: "Patri",
};

const passenger2: Passenger = {
  name: "John",
  children: ["Sara", "Alex"],
};

function printChildren(passenger: Passenger): void {
  const children = passenger.children || [];

  const howManyChildren = children?.length ?? 0;
  console.log(howManyChildren);
  console.log(children);
}

printChildren(passenger1);
printChildren(passenger2);
