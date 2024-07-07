// TS Compiler P
// Type Annotations
// Type Inference
// Type Aliases
// Union Types
// Interfaces
// Type Aliases vs Interface
// Generics
// Enums
// Tuples
// Type Guards



//-----Type Annotations-----//



// let username:string="Arslan Ali";
// console.log(username)


// let age:number=18;
// console.log(age)


// let isLoggedIn:boolean=true;
// console.log(isLoggedIn)











//-----Type Inference-----//


// let username="Arslan Ali";
// console.log(username);



// let age=18;
// console.log(age);


// let MixdArray=["mango",1];
// MixdArray=[2,"banana"];
// console.log(MixdArray);





//-----Type Aliases-----//


// type Abd=string

// let username:Abd="Aarslan";
// console.log(username);

// type Ary = (string | number)[]
// let array:Ary = [`Mango` ,6];

// console.log(array)



// type Data={
//     username:string,
//     email:string,
//     age:number,
//     fathername?:string
// }

// let User:Data={
//     username:"Arslan Ali",
//     email:"abc@gmail.com",
//     age:18

// }
// User.fathername="muhammad Iqbal"
// console.log(User.username);







//-----Union Type-----//


// type User=(string|number)

// let tex:User="Hello world";

// console.log(tex)





//-----Interfaces-----//

// interface UserData{
//     username:string;
//     email:string;
//     }
// interface UserData{
//     age:number
// }
// let user:UserData={
//     username:"Arslan",
//     email:"abc@gmail.com",
//     age:18
// }
// console.log(user)






//-----Enums-----//



// enum CardinalDirections {
//   North,
//   East,
//   South,
//   West,
// }
// let currentDirection = CardinalDirections.West;
// console.log(currentDirection);






// enum User {
//   admin = "admin",
//   user = "user",
// }

// console.log(User.admin);

// enum StatusCodes {
//   NotFound = 404,
//   Success = 200,
//   Accepted = 202,
//   BadRequest = 400,
// }

// console.log(StatusCodes.NotFound)






//-----Generics-----//




// function identity<T>(arg: T): T {
//   return arg;
// }

// console.log(identity('abd'));

// function identity(arg: any): any {
//   return [arg];
// }

// console.log(identity(6));







//-----Tuples-----//





// let ourTuple: [boolean, string, number];

// ourTuple = [false, 'Coding God was mistaken', 10];












//-----Type Guards-----//







// interface CarInterface {
//     carName: string;
//     carModel: number;
//     calculateAverage: (fuel: number, milage: number) => void;
// }

// class Car implements CarInterface {
//     carName;
//     carModel;
//     constructor(name: string, model: number) {
//         this.carName = name;
//         this.carModel = model;
//     }
//     // static isAutomatic = true;
//     calculateAverage(fuel: number, milage: number) {
//         let msg = `${this.carName} has fuel average of ${milage / fuel}km`;
//         console.log(msg)
//     }
// }
// let car1 = new Car("Mehran", 2005);
// car1.calculateAverage(20, 1000);

// Car.calculateAverage(20, 200);
// console.log(Car);
