
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