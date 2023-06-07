//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make)


//After you write the derived Car class, you should test it out.

//Note: You can code your derived Car class here or make a file named index.js and do it there.
class Car extends Vehicle {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maxPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }
    loadPassenger(num) {
        if (this.passenger < this.maxPassengers) {
            if ((num + this.passenger) <= this.maPassengers) {
                this.passenger = num;
                return this.passenger;
            } else {
                console.log(this.model + " " + this.make + " is full")
            }
        }

    }
    Start() {
        if (this.fuel > 0) {
            console.log("engine has started");
            return this.scheduleService;
        }

    }
    scheduleService() {
        if (this.mileage > 30000) {
            this.scheduleService = true;
            return this.scheduleService;
        }

    }
}
let myAudi = new Car("Audi", "A4", "2018", "white", "46209");
let myToyota = new Car ("Toyota", "86", "2020", "black", "3817");

//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...
//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.

//Create at least two new instances of the Car class and test them here:
