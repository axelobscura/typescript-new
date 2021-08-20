class Vehicle {
  drive(): void {
    console.log('chugga chugga');
  }
  honk(): void {
    console.log('honkydook');
  }
}

class Car extends Vehicle {
  drive(): void {
    console.log('vrrroooooommmmmm....')
  }
}

const car = new Car();
car.drive();
car.honk();