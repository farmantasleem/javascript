// // hof & callbacks

// //  hof -- a function which takes or return another function is called hof (higher order function)


// // print -- Higher order function

// // function print(cb){
// //     console.log(cb())
// // }


// // function myName(){
// //     return "Ashwin"
// // }
// // // callback
// // print(myName)





// // inbuilt - hof 

// const productData = [
//     {
//     title:"Iphone",
//     price:500
//     },
//     {
//         title:"Nokia",
//         price:600
//     },
//     {
//         title:"MI",
//         price:400
//     },
//     {
//         title:"Samsung",
//         price:400
//     },




// ];

// // function cb(element,index,array){
// //     console.log(element)

// // }

// // studentName.forEach(cb



// // price == 400


// // const result = productData.forEach((el,index,array)=>{

// //     return { ...el,price:el.price+100 }
// // })

// // console.log(result)



// const studentA =  {name:"Anything",address:"something",name:"Great"};

// const newStudent = {...studentA,name:"Awesome"}

// console.log(studentA)



// a function bundled together with its outer env forms a closure


function nameA () {
    let money = 0;

    function getMoney(){
        return money
    }

    function addbalance(amount){
        money+=amount

    }

    return [getMoney,addbalance]
  
}



const [getMoney,addBalance] =nameA()

console.log(getMoney())

console.log(money)


// temporal dead zone -- situation 

// let const 


console.log(myname);
const myname = "something"







