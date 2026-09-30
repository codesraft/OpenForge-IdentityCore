import React from 'react'

const RegisterPage = () => {
    return (
        <main className="min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-md rounded-xl">
                <p className='text-center text-xl font-bold'>Sign up to get started</p>

                <form className="mt-6 space-y-4">
                    <div>
                        <label className="text-gray-600">Name</label>
                        <input
                            type="text"
                            placeholder="Enter Your Name"
                            className="w-full p-2 rounded-lg border border-gray-300"
                        />
                    </div>

                    <div>
                        <label className="text-gray-600">Email</label>
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            className="w-full p-2 rounded-lg border border-gray-300"
                        />
                    </div>

                    <div>
                        <label className="text-gray-600">Password</label>
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full p-2 rounded-lg border border-gray-300"
                        />
                    </div>

                    <div>
                        <label className="text-gray-600">Confirm Password</label>
                        <input
                            type="password"
                            placeholder="Confirm Your Password"
                            className="w-full p-2 rounded-lg border border-gray-300"
                        />
                    </div>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="px-6 py-2 rounded-lg bg-black text-white hover:bg-gray-700 cursor-pointer"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>

                <p className="text-gray-700 mt-4 text-center">
                    Already Have an Account?{" "}
                    <a className='text-blue-900' href="/login">Login</a>
                </p>
            </div>
        </main>
    )
}

export default RegisterPage