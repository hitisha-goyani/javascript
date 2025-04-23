import fetchapi from "./modules/fetch_api.js"
import { filt} from "./filt.js"

let url1 = 'https://dummyjson.com/products'
let url2 = 'https://randomuser.me/api?results=5'
let url3 = 'https://www.themealdb.com/api/json/v1/1/categories.php'

 export let proddata = await fetchapi(url1)
console.log(proddata)

let newProdData = filt(proddata.products, "category", "beauty")
console.log(newProdData)

export let userdata = await fetchapi(url2)
console.log(userdata)

 export let foodata = await fetchapi(url3)
console.log(foodata)

let newUserData = filt(userdata.results, "gender", "female")
console.log(newUserData)

