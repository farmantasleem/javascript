// array



// const [StudentA,Gaurav,,studentC] = studentName

// console.log(studentC)


function nameA(){
    function print(value){
        console.log(value)
    }

    return [0,print]
}

// Hi Sir.. Good evening Sir mujhe For 
// loop and more loop samjha dijiye



// function printMethod(value){
//     console.log(value)
// }

// const [value,print] = [0,printMethod] // [0,print]


// print("my name")











// objects 


// const {data:somethingisawesome,msg} = {
//         msg:"Successfully data fetched",
//         statusCode:200,
//         data: {
//             studentName: "Subhraji",
//             batch : ["Sigma 1.0","Sigma 2.0"],
//             studentDetails : {
//                 education:"BA",
//                 age: 40,
//                 address : {
//                     houseNo:403,
//                     city:"Bengaluru"
//                 }
//             }
//         }
    
// }

// // const dataResp = resp.data;
// console.log(somethingisawesome)




// function greetStudent({name:studentName,age:studentAge, batch}) {
   
//     console.log("Pranam",studentName,"and his age is",studentAge,"and his batch is ",batch)
// }

// const studentData = {
//     name:"Batman",
//     batch:"Sigma 2.0",
//     age:29,
//     email:"iambatman@gmail.com",
//     contact:"88825511"
// }

// greetStudent(studentData)



const oldStudents = ["Ashu","Gaurav","Sujit","Brij","Suraj","Aakarsh","Chandresh"]

const newStudents = ["Someone"]
// rest operator & spread operator

const allStudents = [...oldStudents,"Middle value",...newStudents]
console.log("All Students",allStudents)


// function printName(...nameofStudent){

// }


// printName("ashu","Gaurav","Sujit","Sura","anything")

