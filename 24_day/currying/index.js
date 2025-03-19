function first(a){
    return function(b){
        return function(c)
        {
            return a + b + c
        }
    };
}


let second = first(20)

let third = second(10)

console.log(third(5))










// first(10)
// second = undefined
// third = undefined


// // second = return function(10){
//         return function(c)
//         {
//             return 20 + 10 + c
//         }


// third = return function(5)
//         {
//             return 20 + 10 + 5
//         }


third = 35

second ==35
first = 35