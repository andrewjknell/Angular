class Bike {
    price: number
    max_speed: number
    miles?: number;
    constructor(priceB: number, max: number, mileB?: number) {
        this.price = priceB;
        this.max_speed = max;
        this.miles = mileB;
    }
    displayInfo = () => {
        console.log(
            "the price is $" + this.price +
            " the max speed is " + this.max_speed +
            "mph and the total miles is " + this.miles);
    }
    ride = () => {
        console.log('riding');
        if (this.miles != null) {
            this.miles = this.miles + 5;
        }
    }
    reverse = () => {
        console.log('reversing');
        if (this.miles != null) {
            this.miles = this.miles - 5;
        }
        else{
            console.log("cant reverse anymore");
        }
    }

}
let bike1 = new Bike(600, 85, 110);
let bike2 = new Bike(500, 65, 70);
let bike3 = new Bike(450, 105);

bike1.ride();
bike1.ride();
bike1.ride();
bike1.reverse();
bike1.displayInfo();
bike2.ride();
bike2.reverse();
bike2.reverse();
bike2.displayInfo();
bike3.reverse();
bike3.reverse();
bike3.reverse();
bike3.displayInfo();