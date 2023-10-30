import React ,{useEffect, useState} from 'react'
import  validation from './validation'
import './Signup.css'
function Signup({submitForm}) {
    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    }
    const [values, setValues] = useState({
        Fullname: '',
        Email: '',
        password: '',



    });
    const [errors, setErrors] = useState({});
    const [dataIsCorrect, setDataIsCorrect] = useState(false);
    const handleFormSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(values));
        setDataIsCorrect(true);
    }

    useEffect(()=> {
        if(Object.keys(errors).length === 0 && dataIsCorrect){
            submitForm(true);
        }
    })
  return (
    <div className='App'>
        
        <div>
        <form className='login-form'>
        <h2>Create Account</h2> 
            <div className='form-group'>
            <label>Full Name</label>
            <input type='text' name='Fullname' value={values.Fullname} onChange={handleChange}>
            </input>
            {errors.email && <p className='errors'>{errors.email}</p>}
            </div>
            <div className="form-group">
            <label>Email</label>
            <input type='email' name='Email' value={values.email} onChange={handleChange}>
            </input>
            {errors.Email && <p className='errors'>{errors.Email}</p>}
            </div>
            <div className="form-group">
            <label>password</label>
            <input type='password'name='password' value={values.password} onChange={handleChange}>
            </input>{errors.password  && <p className='errors'>{errors.password}</p>}
            </div>
            <div className="form-group">
                <button type='submit' onClick={handleFormSubmit}>Signup</button>
            </div>
        </form></div>
    </div>
    
  )
}

export default Signup