//Task 1
const message = "Task 1";
alert(message);

const car = {
  model: "Tesla",
  year: 2022,
  color: "pink",
  signal() {
    alert("fa!, fa!");
  },
};

car.color = "red";
car.type = "electric";

console.log(car);
car.signal();


//Task 2
const salaries = {
  fronted: 12000,
  backend: 10000,
  designer: 8000,
};

function total(object = {}) {
  let totalSalaries = 0;
  const values = Object.values(salaries);

  for (const value of values) {
    totalSalaries += value;
  }
  return totalSalaries;
}
console.log(total());

salaries.manager = 5000;
delete salaries.designer;

console.table(salaries);
console.log(total());

// task 3

function Computer(brand, system, cost) {
  this.brand = brand;
  this.system = system;
  this.cost = cost;
}

let dell = new Computer("Dell", "windows", "800");
let apple = new Computer("Apple", "MAC OS", "1700");

console.log(dell.system);
console.log(apple.cost);
console.log(apple);

// task 4
function Computer(brand, system, cost) {
  this.brand = brand;
  this.system = system;
  this.cost = cost;
  this[Symbol.toPrimitive] = function (hint) {
    switch (hint) {
      case "string":
        return this.brand;
      case "number":
        return this.cost;
      case "default":
        return this.brand + " " + this.system + " " + this.cost;
    }
  };
}
let dell2 = new Computer("Dell", "windows", 800);
let apple2 = new Computer("Apple", "MAC OS", 1700);
let groupComputer = dell + " " + "//" + " " + apple;

console.log(groupComputer);
console.log(String(dell2));
console.log(+apple2);
