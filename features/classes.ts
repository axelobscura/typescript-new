class Vehicle {

  constructor(public color: string){
  }

  protected honk(): void {
    console.log('honkydook');
  }

}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class Car extends Vehicle {

  constructor(public wheels: number, color: string){
    super(color);
  }

  private drive(): void {
    console.log('vrrroooooommmmmm....')
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, 'brown');
car.startDrivingProcess();