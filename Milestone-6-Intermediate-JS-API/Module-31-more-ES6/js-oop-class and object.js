class Phone {
    brand = "iphone";
    constructor(model, color) {
        this.model = model;
        this.phoneColor = color;
    }

    showDetails() {
        console.log(`Brand Name: ${this.brand}
            Model: ${this.model}
            Color: ${this.phoneColor}`);
    }
}

const iphone14 = new Phone("14", "Black");
const iphone16 = new Phone("16", "Silver");
iphone16.price = 1200;

iphone14.showDetails();
iphone16.showDetails();