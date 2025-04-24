
const fetchapi = async (url) =>{
let loading = true;
let error = false;
let data =[]
    try{
           let resp = await fetch(url)

         data = await resp.json()
    }
    catch{
        error = false
      
    }
    finally{
        loading = false
    }
    

    return {loading, error, data}
}

   


export default fetchapi