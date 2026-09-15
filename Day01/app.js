"use strict";
// console.log("Day 1 of TypeScript");
//Topic one : Interfaces and Type Aliases
// interface (Object ka shape batana )
//Types (ka kaam hai apne khud ke user defined types banana)
// interface example
// interface User {
//   username: string;
//   email: string;
//   password: string;
//   gender?: string; //The gender become optional
// }
// function getUserData(obj: User): void {
//   console.log(obj.username);
// }
// getUserData({ username: "Ravi", email: "pagalToBandonga", password: "123" });
//Extending Interfaces
// interface User {
//   name: string;
//   email: string;
//   password: string;
// }
// interface Admin extends User {
//   admin: boolean;
// }
// function abcd(obj: Admin) {
//   obj.admin;
// }
//Type Aliases
// type adad = number;  //Adad is basically number in urdu
// let num1: adad;
// num1 = "string";
// type value = string | number | null;
// let b: value;
// Union (|) and Intersection types (&)
