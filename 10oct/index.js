// ashwani -  promises & callbacks (2)

// suraj - map

// rahul -- oops

// ameya - hof 

// oops --  factory function

// sir arrow function or normal function mein difference kya hai


// ramakrishna -- edit button in todo

// mukesh - i will allow you to speak

// call apply and blind method - 2 

// let me repeat it : batch almost end people would be asking about closure, var vs let temporal dead zone hoisting, promises



// hof in javascript

// a function which return or takes another fn as arguament is called higher order fn


function sum(a,b){
    return a+b
}


// print -- its nothing but your hof

// cb -- > callback

// event?? fn

function print(cb){
    console.log("Result",cb(5,5))
}



// sum is nothing but your callback
// print(sum)

// factory function 

// function Person (name,age,id) {
//     return { id,
//             name,
//             age,
            
//     }
// }

// const data = Person("Goel",20,"IN3999");

// console.log("Data is here",data)


// map  -- inbuilt, hof, you can modify and generate a new array using map

let bookPrice = [10,20,10,50,30,10,20,30,50];
//  2022 - 2023
function cb(element,index,array){
    if(element == 50){
        return 40
    }else{
        return element
    }
}
let newBookPrice = bookPrice.map(cb)

// console.log("NEW PRICE ",newBookPrice)






Array.prototype.customforEach =function (cb){
    const parentArray = this

    // const newarr =[]
    for(let i =0;i<parentArray.length;i++)
    {   
        cb(parentArray[i],i,parentArray)
     
    }
    // return newarr
}

const studentName =["Suraj","Ashwani","aakarsh","Rahul","Sujit","Rahul"];

// const Result = studentName.customforEach(function (el,ind,arr){
//             console.log("Heres the element",el)
// })

// console.log("Result",Result)




// arrow fn vs normal fn


// ->  function name(){}

// -> const arrowfn = () => {}



// function a(){

//         console.log(this)

// }


// const b =()=>{
//     console.log(this)
// }


// a();
// b()

const newObj = {
    name:"guest",
    welcome:function(num){
        console.log("Welcome ",this.name,"You Fav No.",num)
    }
}
const studentTwo = {
    name:"Rohan",
    
}
const welcomeTwo = newObj.welcome.bind(studentTwo,7)

welcomeTwo()




