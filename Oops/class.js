

// // before talking about oops we will talk about class



// // student class -- blueprint/template/saancha??

// class Student {
   
//     constructor(name,id,email,password){
//         this.name = name;
//         this.id = id
//         this.course="";
//         this.email =email;
//         this.password = password
        
//     }

//     assigncourse(email,password,course){
//         if(email && password && email == "admin@gmail.com" && password =="admin"){
//               this.course = course
//               return "Course Assigned Successfully"
//         }else{
//          return "You can't assign course"
//         }
//      }

//      getCourse(email,password){
//         if(email&& password&& email == this.email && password == this.password && this.course){
//             return "You can access the course"
//         }else{
//             return "You are not allowed to access the course"
//         }
//      }
    
// }




// const rohanStudent = new Student("Rohan","IN0315","rohan@gmail.com","rohan");
// const ayushStudent = new Student("Ayush","PW2015","ayush@google.com","ayush");

// const result = ayushStudent.assigncourse("admin@gmail.com","admin","Sigma 2.0")

// console.log(ayushStudent.getCourse("ayush@google.com","ayush"))
// console.log(rohanStudent.getCourse("rohan@gmail.com","rohan"))





// function newarray(arr,callback)
// {
//     const map = arr.map((num)=> {return callback(num)});
//     return map;

// }


// const result = newarray(arr,callback)
// console.log(result)

