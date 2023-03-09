const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i;
const regexPass = /^(?=\w*\d)\S{6,10}$/;

const validation = (username, password) =>{

    const errors  = {};
    
    if(!username) errors.username = "Este campo no puede estar vacío"
    else if(username.length > 35) errors.username = "No debe tener más de 35 caracteres"
    
    if(!regexEmail.test(username)){
        errors.username = "Tiene que ser un email."
    }
    if(!password){
        errors.password = "Este campo no puede estar vacío"
    }
    if(!regexPass.test(password)){
        errors.password = 'La contraseña debe contener al menos 1 número y tener entre 6 a 10 caracteres'
    } 
    return errors;
}

export default validation;




