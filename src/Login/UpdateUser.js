import React, { useState } from 'react';
import { useAuthState, useUpdatePassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const UpdateUser = () => {
    const [displayName, setDisplayName] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    const [user] = useAuthState(auth)
    const [updateProfile,] = useUpdateProfile(auth);

    // updating password
    const [password, setPassword] = useState('');
    const [updatePassword, updating, error] = useUpdatePassword(auth);



    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }

    return (
        <div className='flex justify-center'>

            <div className='flex flex-col'>
            <div className='flex flex-col'>
                <div>
                    <h1 className='text-2xl font-bold my-7'>Update User Profile</h1>
                </div>
                <input

                    type="displayName"
                    value={displayName}
                    className="input input-bordered w-full max-w-xs mb-3"
                    placeholder='update Name'
                    onChange={(e) => setDisplayName(e.target.value)}
                />
                <input
                    type="photoURL"
                    value={photoURL}
                    className="input input-bordered w-full max-w-xs mb-3"
                    placeholder='Upadate image'
                    onChange={(e) => setPhotoURL(e.target.value)}
                />
                <button
                    className="btn w-36"
                    onClick={async () => {
                        await updateProfile({ displayName, photoURL });
                        alert('Profile has been updated');
                    }}
                >
                    Update profile
                </button>
            </div>
            {/* for updating password */}
            <div className='flex flex-col lg:flex-row lg:items-center lg:gap-x-4 mt-8'>
          <input className='input input-bordered rounded-none pr-32 focus:outline-none' type="password" placeholder='New Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <div className='flex flex-col lg:flex-row lg:items-center mt-8'>
          <label className='w-[250px] text-xl'> </label>

          <button onClick={async () => {
            await updatePassword(password);
            alert('Yor password has been updated');
          }} className='btn '>Confirm</button>
        </div>
            </div>

        </div>
    );
};

export default UpdateUser;