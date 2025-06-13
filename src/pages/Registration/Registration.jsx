import React, {  useContext, useState } from 'react';
import { Link } from 'react-router';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import { ToastContainer, toast } from 'react-toastify';

const Registration = () => {
    const { createUser } = useContext(AuthContext);
    const [showPass, setShowPass] = useState(false);
    const handleRegistration = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUser(email, password)
            .then((result) => {
                console.log(result);
                toast.success('User Created and Profile Updated Successfully');
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });

    }
    return (
        <div className='flex items-center justify-center py-20'>
            <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-50 dark:text-gray-800">
                <h2 className="mb-3 text-3xl font-semibold text-center">Registration</h2>
                <p className="text-sm text-center dark:text-gray-600">
                    Have an account?
                    <Link to="/login" rel="noopener noreferrer" className="focus:underline hover:underline"> Login Here</Link>
                </p>

                {/* Email and Password Form */}
                <form onSubmit={handleRegistration} className="space-y-8">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm">Email address</label>
                            <input type="email" name="email" id="email" placeholder="example@email.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" required />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="password" className="block text-sm">Password</label>
                            <div className='relative'>
                                <input type={showPass ? 'text' : 'password'} name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" required />
                                <div onClick={() => { setShowPass(!showPass) }} className='absolute inset-y-0 right-3 flex items-center text-gray-500'>{showPass ? <FaEye /> : <FaEyeSlash />
                                }</div>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-[#4BAF47] text-white cursor-pointer">Registration</button>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Registration;