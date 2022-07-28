import { useState, useEffect } from "react";

function Parent () {
    const [count, setCount] = useState(0)
    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/todos/")
        .then(res=>res.json())
        .then(data=>setCount(data.length))
    })
    return (
        <div>
             <Child count={count}/>
        </div>
    )
}

function Child(props) {
    return (
        <div>
              <p>Hello Team, we are {props.count} members</p>
        </div>
    )
}

export default Parent;
