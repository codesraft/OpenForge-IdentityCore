import React from 'react'

const Button = ({ children, type = "button", onClick }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className="px-6 py-2 rounded-lg bg-black text-white hover:bg-gray-700 cursor-pointer"
        >
            {children}
        </button>
    )
}

export default Button