// key:value,key:value

//action --> method: object function

let rahulStudent = {
    name:"Rahul",
    course:"Full Stack Web Development",
    batch:"Sigma 2.0",
    print:function(luckyNumber){
        console.log(this.name,luckyNumber)
    }
}


// call,apply,bind

// Let’s say you are worki=9 for a= eve=t ma=a9eme=t compa=y. As a web developer, you =eed to build a
// cou=tdow= timer for a= upcomi=9 eve=t. You =eed to build a fu=ctio= that calculates the =umber of days
// betwee= the curre=t date a=d the eve=t's start date.


// you can arrow some methods
// rahulStudent.print.call(googleStudent,9,9)
// rahulStudent.print.apply(googleStudent,[9])

// const print=rahulStudent.print.bind(googleStudent,1,2)


// console.log(rahulStudent.print.bind(googleStudent,1,2))

let googleStudent ={
    name:"Google: The Student",
}
Object.freeze(googleStudent)
googleStudent.name="Rajinsh";
console.log(googleStudent)