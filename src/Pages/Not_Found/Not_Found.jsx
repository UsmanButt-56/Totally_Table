import React from 'react'

function Not_Found() {
    return (
        <div className="text-center text-white bg-[#102F47] h-screen flex flex-col justify-center items-center">
            {/* <div> */}
                <h1 className="text-4xl font-bold text-white">404</h1>
                <p className="text-xl">Page Not Found</p>
                <p className="text-gray-400">The page you're looking for doesn't exist.</p>
            {/* </div> */}
        </div>
    )
}

export default Not_Found;