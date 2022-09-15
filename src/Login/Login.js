import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';

const Login = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      
      const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

      let signInError
      if (error) {
          signInError = <p className='text-red-500'>{error?.message}</p>
      }

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
        
        
    };

   

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
                            
                            <input className='btn  w-full max-w-xs' type="submit" value={'Login'} />
                        </form>
                        <p>I Forgot my password <Link to="/reset" className='text-info mb-6'>reset password</Link></p>
                        <p>New Here? <Link to="/signup" className='text-info'>Create New Account</Link></p>
                    </div>
                {signInError}
            </div>
        </div>
    );
};

export default Login;