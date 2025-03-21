
 let palabra = "[({Hola})]"


 const funcion = palabra =>{
    if (palabra.includes("(") && palabra.includes(")")) {
        return true
    }else if (palabra.includes("{") && palabra.includes("}")) {
        return true
    }else if (palabra.includes("[") && palabra.includes("]")) {
        return true
    }else{
        return false
    }
    
}


console.log(funcion(palabra));
