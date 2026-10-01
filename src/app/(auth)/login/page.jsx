import Button from '@/components/ui/Button'
import React from 'react'

const LoginPage = () => {
    return (
        <main className="min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-md rounded-xl">
                <p className='text-center text-xl font-bold'>Login to your Account</p>

                <form className="mt-6 space-y-4">


                    <div>
                        <label className="text-gray-600">Email</label>
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            className="w-full px-3 py-2 rounded-lg border border-gray-300"
                        />
                    </div>

                    <div>
                        <label className="text-gray-600">Password</label>
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full px-3 py-2 rounded-lg border border-gray-300"
                        />
                    </div>
                    <div className='text-right'>
                        <a href='/forgot-password' className="text-blue-900 mt-4  hover:underline">
                            Forgot Password?

                        </a>
                    </div>



                    <div className="flex justify-center">
                        <Button type="submit">
                            Login
                        </Button>
                    </div>
                </form>

                <p className="text-gray-700 mt-4 text-center">
                    Don't have an account?{" "}
                    <a className='text-blue-900 hover:underline' href="/register">Sign Up</a>
                </p>
            </div>
        </main>
    )
}

export default LoginPage