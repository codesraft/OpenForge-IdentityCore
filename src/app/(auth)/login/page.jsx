import React from 'react'

const LoginPage = () => {
    return (
        <main className="min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-md rounded-xl">
                <p className='text-center text-xl text-bold'>Login to your Account</p>

                <form className="mt-6 space-y-4">


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
                        <p className="text-blue-900 mt-4 text-right hover:underline">
                            Forgot Password?

                        </p>
                    </div>



                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="px-6 py-2 rounded-lg bg-black text-white hover:bg-gray-700 cursor-pointer"
                        >
                            Login
                        </button>
                    </div>
                </form>

                <p className="text-gray-700 mt-4 text-center">
                    Don't have an account?{" "}
                    <a className='text-blue-900' href="/register">Sign Up</a>
                </p>
            </div>
        </main>
    )
}

export default LoginPage