
import { useState } from "./react.js";

const [num, setNum] = useState(0);
const [arr, setArr] = useState([])


console.log(arr)

function count(){
    setNum(num+1)
    arr.push("alishan")
    setArr(arr)
}