import Button from '@/components/ui/Button'
import React from 'react'

const ForgotPassword = () => {
    return (
        <main className="min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-md rounded-xl">
                <p className='text-center text-xl font-bold'>Forgot Your Password?</p>
                <p className="text-center text-gray-600 mt-2"> Enter your email to reset your password </p>

                <form className="mt-6 space-y-4">


                    <div>
                        <label className="text-gray-600">Email</label>
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            className="w-full px-3 py-2 rounded-lg border border-gray-300"
                        />
                    </div>




                    <div className="flex justify-center">


                        <Button type="submit">
                            Reset Password
                        </Button>
                    </div>
                </form>

                <p className="text-gray-700 mt-4 text-center">
                    Remember Your Password?{" "}
                    <a className='text-blue-900 hover:underline' href="/login">Login</a>
                </p>
            </div>
        </main>
    )
}

export default ForgotPassword