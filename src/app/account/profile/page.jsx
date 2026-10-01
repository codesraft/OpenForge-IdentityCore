
import Button from '@/components/ui/Button'
import React from 'react'
import { CgProfile } from 'react-icons/cg'

const ProfilePage = () => {
    return (
        <main className="min-h-screen flex items-center justify-center px-4 py-8">
            <div className="w-full max-w-md">

                <p className="text-center text-xl font-bold">
                    Profile
                </p>

                <div className="flex justify-center mt-5 text-blue-900">
                    <CgProfile size={60} />
                </div>

                <div className="mt-8 border border-gray-200 rounded-lg p-5 space-y-4">

                    <div>
                        <p className="text-sm text-gray-500">Name</p>
                        <p className="mt-1">Mr. XYZ</p>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="mt-1">mr.xyz@example.com</p>
                    </div>

                    <div className="flex justify-end pt-2">


                        <Button type="submit">
                            Update Profile
                        </Button>
                    </div>

                </div>

                <div className="mt-10">
                    <p className="text-center text-xl font-bold">
                        Change Your Password
                    </p>

                    <form className="mt-6 space-y-4">

                        <div>
                            <label className="text-gray-600">
                                New Password
                            </label>
                            <input
                                type="password"
                                placeholder="Enter New Password"
                                className="w-full px-3 py-2 mt-1 rounded-lg border border-gray-300"
                            />
                        </div>

                        <div>
                            <label className="text-gray-600">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                className="w-full px-3 py-2 mt-1 rounded-lg border border-gray-300"
                            />
                        </div>

                        <div className="flex justify-center pt-2">


                            <Button type="submit">
                                Change Password
                            </Button>
                        </div>

                    </form>
                </div>

            </div>
        </main>
    )
}

export default ProfilePage

