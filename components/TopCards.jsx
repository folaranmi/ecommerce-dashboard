import React from 'react'

function TopCards() {
    return (
        <div className='grid lg:grid-cols-5 gap-4 p-4'>
            <div className="lg:col-span-2 col-span-1 bg-white flex justify-between border p-4 w-full rounded-lg">
                <div className="flex flex-col w-full p-4">
                    <p className='text-2xl font-bold'>$7,290</p>
                    <p className='text-gray-600'>Daily Revenue</p>
                </div>

                <p className="flex bg-green-200 justify-center items-center p-2 rounded-lg">
                    <span className='text-green-700 text-lg'>+18%</span>
                </p>
            </div>

            <div className="lg:col-span-2 col-span-1 bg-white flex justify-between border p-4 w-full rounded-lg">
                <div className="flex flex-col w-full p-4">
                    <p className='text-2xl font-bold'>$1,290,598</p>
                    <p className='text-gray-600'>YTD Revenue</p>
                </div>

                <p className="flex bg-green-200 justify-center items-center p-2 rounded-lg">
                    <span className='text-green-700 text-lg'>+11%</span>
                </p>
            </div>

            <div className="bg-white flex justify-between border p-4 w-full rounded-lg">
                <div className="flex flex-col w-full p-4">
                    <p className='text-2xl font-bold'>11,473</p>
                    <p className='text-gray-600'>Customers</p>
                </div>

                <p className="flex bg-green-200 justify-center items-center p-2 rounded-lg">
                    <span className='text-green-700 text-lg'>+17%</span>
                </p>
            </div>
        </div>
    )
}

export default TopCards
