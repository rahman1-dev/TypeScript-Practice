// ------------Topics to learn------------------
//Classes and Objects
//Class definition
//Constructors
//Access modifiers (public , private, protected)
//Readonly prop
//Optional prop
//Parameter prop
//Getters and setters
//Static members
//Abstract classess and methods

// class Device {
//   name = "LG";
//   price = 12000;
//   category = "digital";
// }

// let d1 = new Device();
// let d2 = new Device();

//Constructor - aisi machine jo shape deti hai (for understanding)
// class BottleMaker {
//   constructor(
//     public name: string,
//     public price: number,
//   ) {}
// }

// let b1 = new BottleMaker("Milton", 3434);
// let b2 = new BottleMaker("cello", 4411);
// // console.log(b2);

// class Music {
//   constructor(
//     public name: string,
//     public singer: string,
//     public category: string,
//     public success: boolean,
//   ) {}
// }
// let m1 = new Music("marjawa", "arjit sing", "romantic", true);
// console.log(m1);

//this keyword
// class Abcd {
//   name = "harsh";
//   age = 12;

//   changeDetails() {
//     this.name;
//     this.changeAge();
//   }
//   changeAge() {
//     this.age = 21;
//   }
// }

// class BottleMaker {
//   public name;
//   constructor(name: string) {
//     this.name = name;
//   }
// }

// let b1 = new BottleMaker("Milton");
// console.log(b1);

//Access modifiers
// class BottleMaker {
//   constructor(public name: string) {}
// }

// class MetalBottleMaker extends BottleMaker {
//   constructor(public name: string) {
//     super(name);
//   }

//   getName() {
//     console.log(this.name);
//   }
// }

// const m1 = new MetalBottleMaker("Melton");
// console.log(m1);

// class User {
//   public name: string = "Ibrahim Dawood";
// }

// class Post extends User {
//   public age: number = 12;
// }

// let p1 = new Post();
// console.log(p1);

//Optional Properties
// class User {
//   constructor(public readonly name: string) {}

//   changeName() {
//     this.name = "hellyow";
//   }
// }
// let u1 = new User("Harsh");
// u1.changeName();
// console.log(u1);

// Parameter Properties
