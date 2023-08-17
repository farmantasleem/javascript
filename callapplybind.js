
// call 

const person = {
    myname:"Farman Tasleem",
    printName:function(){
        console.log(this.myname)
    }
  }
  person.printName()








person.printName.call({myname:"Rahul"}) // return rahul

