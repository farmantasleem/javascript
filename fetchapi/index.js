const obj = {
     yourName:"something"
}

obj.yourName = obj.yourName.toUpperCase()


let bookList = [ { 
    title:"anything",
    author:"something"
},{
    title:"anything 2",
    author:"someone"
}] 


const newBooklist = bookList.forEach((el,i) => { 
   bookList[i].author =  bookList[i].author.toUpperCase()
})



console.log(bookList)
