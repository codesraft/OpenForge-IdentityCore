import React from 'react'

const VerifyEmailPage = () => {
    return (
        <main className="min-h-screen flex items-center justify-center px-4 ">
            <div className="w-full max-w-md rounded-xl text-center space-y-4">
                <p className="text-xl font-bold">
                    Verify Your Email
                </p>

                <p className="text-gray-600 mt-2">
                    We have sent a verification link to your email address.
                    Please check your inbox and verify your account.
                </p>

                <div className="flex justify-center mt-6">
                    <button
                        type="button"
                        className="px-6 py-2 rounded-lg bg-black text-white hover:bg-gray-700 cursor-pointer"
                    >
                        Resend Verification Email
                    </button>
                </div>

                <p className="text-gray-700 mt-4">
                    Already verified?{" "}
                    <a
                        className="text-blue-900 hover:underline"
                        href="/login"
                    >
                        Login
                    </a>
                </p>
            </div>
        </main>
    )
}

export default VerifyEmailPage

