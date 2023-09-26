// constructor function


// you can generate a object || you can construct a object

// saancha

// class

// oops were intro to solve real world problem


// 
function Bank (name) { 
       this.user = name ;
       this.balance = 0;
       this.getBalance=()=>{
            console.log(this.balance)
       }
       this.addMoney =(money)=> {
            this.balance+=money
       }

       this.withraw =(value)=>{
            if ( this.balance >= value) {
                this.balance-=value;
                console.log("Now, Current Balance is",this.balance) 
            }else{
                console.log("You dont have enough balance",this.balance)
            }
       }
}


const Rakesh =new Bank("Rakesh")
const Rohan =new Bank("Rohan")



Rohan.addMoney(500)

Rohan.withraw(99)

Rohan.addMoney(9);
Rohan.getBalance()
