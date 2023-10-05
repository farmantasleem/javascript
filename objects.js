// let studentA={
//     name:"Rahul",
//     batch:"Sigma 2.0",
//     course:"Full Stack Web Development"
// }

// // Object.keys --> return an array of keys

// const keys=Object.keys(studentA)
// // console.log(keys)

// //Object.values --> returns an array of values

// const values = Object.values(studentA)
// // console.log(values)

// // Object.entries --> return an array of array [[key,"value"]];

// const entries = Object.entries(studentA)
// // console.log(entries)

// // Object.fromEntries -- generate object through entries [[key,value]]

// const newObj= [["name","Farman Tasleem"]]

// const generatedObj=Object.fromEntries(newObj); 

// // console.log(generatedObj) --> { name: 'Farman Tasleem' }

// // Object.assign --> copy any object props & methods

// const prevObject={name:"Rahul",class:"12th"};
// const newData={dob:"20/06/0000"};

// const finalObj = Object.assign(prevObject,newData);
// // console.log(finalObj)

// // Object.freeze -- it freezes the manipulation of the object

// Object.freeze(prevObject);

// // Object.isFrozen - to check if object is freezed or not ? return a boolean

// // Object.seal - You can't add new value but update existing entries

// // Object.isSealed - to check if object is seal or not ? return a boolean

// // Object.create -- way to create an object, it can inherit prop and method of given obj as argu

// const myObj= Object.create()








let studentName = "anything";
let studentBatch = "Sigma 2.0";

// console.log(studentName)


const Smartphone = {
    camera:"45px",
    ram:"8gb",
    apps: ["A","B","C"]
}

let access = "camera"

// // 1 . to access prop of obj
// console.log(Smartphone.access)

// // Method 2

// console.log(Smartphone[access])

for (let key in Smartphone){
    console.log(key,Smartphone[key])
}



// key:value

// mobile?

// display?
// ram?
// camera?
// storage?
// company?


