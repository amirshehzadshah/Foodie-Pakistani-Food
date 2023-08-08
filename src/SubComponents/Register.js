import { Box, TextField } from '@mui/material'
import React from 'react'
// import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
// import { setUser } from '../Component/store/slices/UserSlice';
import { useFormik } from 'formik';
import { registerSchema } from '../Schemas';

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

const Register = () => {

  // const dispatch = useDispatch();

  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [emailAddress, setEmailAddress] = useState('');
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  // const handleRegister = () => {
  //   console.log('Register')
  // console.log(firstName)
  // console.log(lastName)
  // console.log(emailAddress)
  // console.log(password)
  // dispatch(submitRegister({ firstName, lastName, emailAddress, password }))

  // const user = { username, password };
  // dispatch(setUser(user));
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Handle Submit')
  // console.log(firstName)
  // console.log(lastName)
  // console.log(emailAddress)
  // console.log(password)
  // dispatch(submitRegister({ firstName, lastName, emailAddress, password }))
  // }

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: registerSchema,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    }
  })

  return (
    <div className="register-container">
      <div className="register-section-card">
        <div className="register-section-card-link">
          <div className="register-section-card-details">
            <h1 className="register-section-card-title">Welcome!</h1>
            <form onSubmit={handleSubmit}>
              <Box component="form" className="register-section-card-input">
                <TextField
                  id="name"
                  label={errors.name && touched.name ? (<p className="form-error">{errors.name}</p>) : "Name"}
                  variant="outlined"
                  type="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur} />
              </Box>
              <Box component="form" className="register-section-card-input">
                <TextField
                  id="email"
                  label={errors.email && touched.email ? (<p className="form-error">{errors.email}</p>) : "Email Address"}
                  variant="outlined"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur} />
              </Box>
              <Box component="form" className="register-section-card-input">
                <TextField
                  id="password"
                  label={errors.password && touched.password ? (<p className="form-error">{errors.password}</p>) : "Password"}
                  variant="outlined"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur} />
              </Box>
              <Box component="form" className="register-section-card-input">
                <TextField
                  id="confirm_password"
                  label={errors.confirm_password && touched.confirm_password ? (<p className="form-error">{errors.confirm_password}</p>) : "Confirm Password"}
                  variant="outlined"
                  type="password"
                  value={values.confirm_password}
                  onChange={handleChange}
                  onBlur={handleBlur} />
              </Box>
              <div className="register-section-secondary-button">
                <button className="register-secondary-button" type='submit'>Register</button>
              </div>
              <div className="register-section-secondary-button">
                Already have an account?
                <Link className="register-section-loginhere-button">Login here</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register