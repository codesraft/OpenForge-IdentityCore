import React from 'react'

const ResetPassword = () => {
    return (
        <main className="min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-md rounded-xl">
                <p className='text-center text-xl font-bold'>Reset Your Password</p>

                <form className="mt-6 space-y-4">


                    <div>
                        <label className="text-gray-600">New Password</label>
                        <input
                            type="password"
                            placeholder="Enter New Password"
                            className="w-full px-3 py-2 rounded-lg border border-gray-300"
                        />
                    </div>

                    <div>
                        <label className="text-gray-600">Confirm Password</label>
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="w-full px-3 py-2 rounded-lg border border-gray-300"
                        />
                    </div>




                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="px-6 py-2 rounded-lg bg-black text-white hover:bg-gray-700 cursor-pointer"
                        >
                            Reset Password                       </button>
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

export default ResetPassword