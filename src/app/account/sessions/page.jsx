import React from 'react'
import { FiMonitor, FiSmartphone } from 'react-icons/fi'

const SessionsPage = () => {
    return (
        <main className="min-h-screen flex items-center justify-center px-4 py-8">
            <div className="w-full max-w-md">

                <p className="text-center text-xl font-bold">
                    Sessions & Devices
                </p>

                <div className="mt-8 space-y-4">

                    <div className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center gap-3">
                            <FiMonitor size={24} className="text-blue-900" />

                            <div>
                                <p className="font-medium">
                                    Chrome • Windows
                                </p>
                                <p className="text-sm text-gray-500">
                                    Active now
                                </p>
                            </div>
                        </div>

                        <p className="text-sm text-green-700 mt-3">
                            Current session
                        </p>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center gap-3">
                            <FiSmartphone size={24} className="text-blue-900" />

                            <div>
                                <p className="font-medium">
                                    Chrome • Android
                                </p>
                                <p className="text-sm text-gray-500">
                                    Last active: Yesterday
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-end mt-3">
                            <button
                                type="button"
                                className="px-4 py-2 text-sm rounded-lg border border-gray-300 hover:bg-gray-100 cursor-pointer"
                            >
                                Remove
                            </button>
                        </div>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center gap-3">
                            <FiMonitor size={24} className="text-blue-900" />

                            <div>
                                <p className="font-medium">
                                    Firefox • Windows
                                </p>
                                <p className="text-sm text-gray-500">
                                    Last active: 2 days ago
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-end mt-3">
                            <button
                                type="button"
                                className="px-4 py-2 text-sm rounded-lg border border-gray-300 hover:bg-gray-100 cursor-pointer"
                            >
                                Remove
                            </button>
                        </div>
                    </div>

                </div>

            </div>
        </main>
    )
}

export default SessionsPage

