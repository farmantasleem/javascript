// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

const store = {
    cartItem: []
}
// a  action
function actionAdtocard (){
     const action = {type:"addtocart",payload:{title:"product 1"}}
     reducer(action)
}

// to update the state 
function reducer({type,payload}){

// logic to update the state
switch(type) {
  case "addtocart":
      store.cartItem.push(payload)
      return store
    // code block
    break;
  case "y":
    // code block
    break;
      default:
    // code block
    }
}
console.log(store)
actionAdtocard()
console.log(store)



