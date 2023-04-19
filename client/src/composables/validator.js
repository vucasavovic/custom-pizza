export function useValidator (){
    
    const expressions  = {
        name:/^([A-Za-z])+$/,
        phone:/^[\+0-9]*$/,
        number:/^[0-9]*$/,
        text:/[a-zA-Z0-9,#.!?-@]+/,
        email:/^[0-9]*$/,
        address:/^[#.0-9a-zA-Z\s,'-]+$/
    }

    const validate = (val,type)=>{
        if(Object.keys(expressions).includes(type)){
          let regx = expressions[type];
          return regx.test(val);
        }else{
            console.log(new Error(`Validator cant validate of type ${type}!`))
        }
    }

    return{validate}

}