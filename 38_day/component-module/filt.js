

export const filt = (data , key , value) =>{
    let newdata = data.filter((ele)=>ele[key] == value )

    return {newdata};
}