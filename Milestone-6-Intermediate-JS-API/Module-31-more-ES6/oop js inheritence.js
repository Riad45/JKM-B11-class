class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    showInfo(){
        console.log(`Name: ${this.name}\n Age:${this.age}`);
    }

    duty() {
        console.log(`Doing somethins....`);
    }
}

class Student extends Person {

    constructor(name, age, studentID) {
        super(name, age);
        this.studentID = studentID;
    }
    // override..

    showInfo(){
        console.log(`Name: ${this.name}\n Age:${this.age} ID: ${this.studentID}`);
    }

    duty() {
        super.duty();
        console.log("giving exam");
    }
}

class Teacher extends Person {
    constructor(name, age, teachingSub) {
        super(name, age);
        this.teachingSub=teachingSub;

    }

    showInfo(){
        super.showInfo();
    }

    // @override

    duty(){
        console.log(`Teacher ${this.name} is studying ${this.teachingSub}`);
    }

    }

    const student = new Student("Riad", 25,911);
    student.showInfo();
    student.duty();

    const techer = new Teacher("Akkash Mia", 33,"OOP");
    techer.showInfo();
    techer.duty();
