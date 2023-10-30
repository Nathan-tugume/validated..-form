
function validation(values) {
    let errors={};
    if(!values.Fullname){
        errors.Fullname='Name is required'
    }
    if(!values.Email){
        errors.Email='email is required'
    } else if(!/\S+@\S+.\S+/.test(values.Email)){
        errors.Email= 'email is invalid'
    }
    if(!values.password){
        errors.password='password is required'
    } else if(values.password.length <5 ){
        errors.password='password is too short'
    }

  return errors
};

export default validation