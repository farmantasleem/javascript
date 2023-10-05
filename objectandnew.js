// Working of JavaScript   
 
function calculateRemainingDays(eventDate) {
    const currentDate = new Date();
    const eventDateTime = new Date(eventDate);
	
    const timeDifference = eventDateTime - currentDate;
    const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    return daysRemaining;
}

const eventDate = '2023-10-31'
console.log(calculateRemainingDays(eventDate));


let key = prompt('enter key');

let value = prompt('enter value');

localStorage.setItem(key,value);



console.log(`the value is at ${key} is ${localStorage.getItem(value)}`);

console.log(`the value is at ${key} is ${localStorage.getItem(key)}`)

