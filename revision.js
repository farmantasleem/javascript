
const studentTwo = {
    name:"Student Two",
    batch:"Sigma 2.0",
}
const studentThree = {
    name:"Student Three",
    batch:"Sigma 2.0",
}
const studentName = {
    name:"Rahul",
    batch:"Sigma 2.0",
    print:function(luckyNumber){
        console.log(this.name)
        console.log("AND MY LUCKY NUMBER IS ",luckyNumber)
    }
}

// this keyword refers to owner/parent object it may change when you are using this keyword


// call apply bind --> these are method using which you can change the value of this


const printmyName = studentName.print.apply(studentThree,[1,2,3])






//  HOF - A function which takes another fn as argu or return a function is called fn?



// Add
function x(){
    return Math.floor(Math.random()*100)
}
function y(){
    return Math.floor( Math.random()*10)
}


function add(x,y){
    return x()+y()
}

// a function which was passed as arguement to another fn is nothing but callback

const finalResult = add(x,y)
console.log("finalResult",finalResult)