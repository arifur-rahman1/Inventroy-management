import React, { useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';

const Resetpassword = () => {

    const [email, setEmail] = useState('');
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
      );

     const resetPassword = async ()=> {
        if (email) {
            await sendPasswordResetEmail(email);
            alert('Email has been sent');
            setEmail(' ')
        }
        else {
            alert('Please Enter Your Email Address')
        }
    }

    return (
        <div className='flex justify-center items-center mt-32' >
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Enter Your email</h2>
                    <input className="input input-bordered w-full max-w-xs" placeholder='Enter Your Email'
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="card-actions justify-center">
                        <button className="btn btn-accent" onClick={resetPassword}>Submit</button>
                    </div>
                    <div className="card-actions justify-start">
                    <p> <Link to="/login" className='text-info'>Back</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resetpassword;