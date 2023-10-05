
// // JavaScript 

// // class - object?? -- brenden 


// class Person {
//     constructor(name,age,dob,contact){
//         this.name = name;
//         this.age = age;
//         this.dob = dob;
//         this.contact = contact
//     }

//      welcome(){
//         console.log("Welcome ",this.name)
//     }
// }


// //  he joined a company

// class Employee extends Person{
//     #degree
//     constructor(name,age,dob,contact,bank,degree,joiningdate){
//         // this.name = name;
//         // this.age = age;
//         // this.dob = dob;
//         // this.contact = contact
//         super(name,age,dob,contact)
//         this.bank = bank;
//         this.#degree = degree;
//         this.joiningdate = joiningdate
//     }

//    get viewDegree(){
//         return this.#degree  
//     }

//     set setDegree(value){
//             this.#degree = value
//     }

//     welcome(){
//         console.log("We believe you'll be valuable asset to the company",this.name)
//     }
// }

// const rahulDetails = new Person("Rahul",20,"30/20/202","989189182333");

// // rahul employee details

// const rahulEmployee = new Employee("Rahul",20,"202020","8732728","hdfc","bca","5-10-2023")
// // rahulEmployee.updateAge(40)
// // const age =  rahulEmployee.getAge

// // rahulEmployee.setDegree = "ANYTHIGN"
// // console.log(rahulEmployee.viewDegree)

// rahulEmployee.welcome()
// rahulDetails.welcome()
