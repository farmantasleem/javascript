const useState = (input =0) => {
    let value = [10];
    function setState(provided){
        value[0]=provided
        return value
    }

    return [valuep,setState]
}

const [state,setState] = useState(10)
console.log(state)
setState(100)
console.log(state)

