import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
   
    let signInError
    if (error) {
        signInError = <p className='text-red-500'>{error?.message}</p>
    }

    const onSubmit =data =>   {
     createUserWithEmailAndPassword(data.email, data.password);
        
    }

    if (user) {
        navigate(from, { replace: true });

    }


    return (
        <div>
        <div className="hero min-h-screen">
                <div className="card w-96 bg-base-100 ">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>

                            </label>
                            <input {...register("email", {
                                required: {
                                    value: true,
                                    message: "Email is Required"
                                },
                                pattern: {
                                    value: /[^@]+@[^@]/,
                                    message: 'Provide a valid email'
                                }
                            })}
                                type="email" placeholder="Enter Your Email" className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                            </label>
                        </div>
                        {/* field for password */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>

                            </label>
                            <input  {...register("password", {
                                required: {
                                    value: true,
                                    message: "Password is Required"
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Provide a valid password'
                                }
                            })}
                                type="password" placeholder="Enter Your Password" className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                            </label>
                        </div>
                        
                        <input className='btn  w-full max-w-xs' type="submit" value={'Register'} />
                    </form>
                    <p><small>Already Have account? <Link to="/login" className='text-primary'>Please login</Link></small></p>
                </div>
            {signInError}
        </div>
    </div>
    );
};

export default Signup;