class Vehicle {
  constructor(public color: string){
  }
  private honk(): void {
    console.log('honkydook');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);


/*
class Car extends Vehicle {
  private drive(): void {
    console.log('vrrroooooommmmmm....')
  }

  startDrivingProcess(): void {
    this.drive();
  }
}

const car = new Car();
car.startDrivingProcess();
*/