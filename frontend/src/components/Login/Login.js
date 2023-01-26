import React from 'react'
import { useFormik } from 'formik'
// import * as yup from 'yup';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import './Login.css'
import { Navigate } from 'react-router-dom';


const Login = (props) => {
    const [status, setStatus] = React.useState(0)

    const formik = useFormik({
        initialValues: {
            email: " ",
            password: " ",
        },
        // validationSchema: yup.object().shape({
        //     name: yup.string()
        //         // .strict()
        //         // .trim()
        //         .required('this field is required'),
        //     email: yup.string()
        //         .email('Enter Valid Email Address')
        //         // .strict()
        //         // .trim()
        //         .required('this field req'),
        //     confirmpassword: yup.string()
        //         .oneOf([yup.ref('password'), null], 'must be same')
        //         .required('the field is required'),
        // }),
        onSubmit: (data) => {
            console.log(data);
            axios.post('http://localhost:4000/api/login', data)
                .then(res => {
                    let token = res.data
                    console.log(token, "test");
                    localStorage.setItem('sign', JSON.stringify(token));
                    console.log(res);
                    setStatus(1)

                })
                .catch(err => {
                    console.log(err);
                    console.log("error");
                })
        }
    });
    if (status === 1) {
        console.log("inside");
        return <Navigate to="/loged" />
    }
    return (
        <div>
            <Navbar />
            <div className="container mt-4">
                <div className="jumbotron">
                    <h4 className='H'>LOGIN</h4>
                    <form autoComplete="off" onSubmit={formik.handleSubmit}>
                        <div className="form-group">
                            <label className='form-data'>Email</label><br></br>
                            <input name="email" className='form-control' type="text" onChange={formik.handleChange}
                                value={formik.errors.email ? <div className='text-danger'> {formik.errors.email}
                                </div> : null}></input>
                        </div><br></br>
                        <div className='form-group'>
                            <label className='form-data'>Password</label><br></br>
                            <input name="password" className='form-control' type="text" onChange={formik.handleChange}
                                value={formik.errors.password ? <div className='text-danger'> {formik.errors.password}
                                </div> : null}></input>
                        </div>
                        <div className='d-flex justify-content-between'><br></br>
                            <button className='btn btn-primary' type='submit'>SUBMIT</button>

                        </div>
                    </form>
                </div>
            </div>
            <div className='Last'>

            </div>
        </div>
    );

}
export default Login;