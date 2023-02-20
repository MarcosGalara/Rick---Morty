const regexEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

const validation = (username, password) =>{

    const errors  = {};
    
    if(!username){
        errors.username = "Este campo no puede estar vacío"
    }else if(!regexEmail.test(username)){
        errors.username = "Tiene que ser un email."
    }else if(!username.length > 35){
        errors.username = "Debe tener menos de 35 caracteres"
    }
    if(!password){
        errors.password = "Este campo no puede estar vacío"
    }else if(!/\d/.test(password)){
        errors.password = "Tiene que tener al menos un número."
    }else if(password.length < 6 || password.length > 10){
        errors.password = "La contraseña debe tener una longitud entre 6 y 10 caracteres"
    }
    
    return errors;
}

export default validation;




