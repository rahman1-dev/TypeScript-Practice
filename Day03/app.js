"use strict";
// console.log("Hello every one in Day 3");
// Funtions
// function login(): void {
//   console.log("Login user");
// }
// function abcd(name: string, callback: (value: string) => void) {}
// abcd("Sheesha", (value: string) => {
//   console.log(value);
// });
// function abcdef(name: string, age: number, cb: (value: number) => number) {
//   const result = cb(10);
//   console.log(result);
// }
// abcdef("Kalyan", 47, (value: number) => {
//   return value * 2;
// });
// function abcd(name: string, age: number, gender?: string = "Not mentioned") {
//   console.log(name, age, gender);
// }
// console.log(abcd("RaviKishan", 45, "male"));
// console.log(abcd("Laqbataq", 20));
// function abcd(...values: number[]) {
//   console.log(values);
// }
// abcd(1, 3, 5, 5, 7);
// let arr = [1, 2, 3, 4, 5, 6];
// let arr1 = [...arr];
// arr1.push(69);
// console.log(arr);
// console.log(arr1);
//Function overloading concept
// function abcd(a: string): void;
// function abcd(a: string, b: number): number;
// function abcd(a: any, b?: any) {
//   if (typeof a === "string" && b === undefined) {
//     console.log("Hey");
//   }
//   if (typeof a === "string" && typeof b === "number") {
//     return 5;
//   } else throw new Error("Something is wrong");
// }
// Generics
// function abcd<T>(a: T) {
//   console.log(a);
// }
// abcd<string>("Hellow");
// abcd<number>(45);
// function log<H>(a: H) {
//   console.log(a);
// }
// log("ldlddljdlj");
// log(48);
// log(true);
// log([48]);
// interface User<T> {
//   name: string;
//   age: number;
//   password: T;
// }
// function getUser(value: User<string>) {
// }
// getUser({ name: "fofofo", age: 45, password: "jdijid" });
// class BottleMaker<T> {
//   constructor(public key: T) {}
// }
// const b1 = new BottleMaker<string>("Metal");
// const b2 = new BottleMaker(45852);
// console.log(b1, b2);
// function abcd<T>(a: T, b: T): T {
//   return "Hey" as T;
// }
// abcd("hey", "hello");
