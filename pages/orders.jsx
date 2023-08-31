import React from 'react';
import { data } from '../data/data.js';
import { BsPersonFill, BsThreeDotsVertical, } from 'react-icons/bs'

function orders() {
    return (
        <div className='bg-gray-100 min-h-screen'>
            <div className="flex justify-between p-4">
                <h4>Orders</h4>
                <h4>Welcome back, Folaranmi</h4>
            </div>

            <div className="p-4">
                <div className="w-full border rounded-lg p-4 mx-auto overflow-y-auto bg-white">
                    <div className="my-3 p-2 grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3 items-center justify-between cursor-pointer">
                        <span className=''>Order</span>
                        <span className='sm:text-left text-right'>Status</span>
                        <span className='hidden md:grid'>Last order</span>
                        <span className='hidden md:grid'>Method</span>
                    </div>

                    <ul>
                        {data.map((order, id) => (
                            <li key={id} className='bg-gray-50 hover:bg-gray-100 items-center rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 justify-between cursor-pointer'>
                                <div className="flex items-center">
                                    <div className="bg-purple-100 p-3 rounded-lg">
                                        <BsPersonFill className='text-purple-800' />
                                    </div>
                                    <div className="pl-4">
                                        <p className='text-gray-800 font-bold'>${order.total.toLocaleString()}</p>
                                        <p className='textgray600 text-sm'>{order.name.first}</p>
                                    </div>
                                </div>
                                <p className='text-gray-600 sm:text-left text-right'>
                                    <span className={`
                                         ${order.status === "Processing" && "bg-green-200 p-2 rounded-lg"}
                                         ${order.status === "Completed" && "bg-blue-200 p-2 rounded-lg"}
                                         ${order.status === "On Hold" && "bg-yellow-200 p-2 rounded-lg"}
                                        `}>
                                        {order.status}
                                    </span>
                                </p>
                                <p className='hidden md:flex'>{order.date}</p>
                                <div className="sm:flex hidden justify-between items-center">
                                    <p className=''>{order.method}</p>
                                    <BsThreeDotsVertical />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default orders
