export function useState(intialState){

    function setNum(n){
        intialState = n
    }

    function num(){
        return intialState;
    }

    return [ num, setNum]

}
