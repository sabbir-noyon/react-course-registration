// eslint-disable-next-line no-unused-vars
import React from 'react';

import './Aside.css';


const Aside = () => {
    return (
        <div className="pb-10 aside-container w-3/12 h-fit px-7 bg-white rounded-lg ">
            <h3 className=" mb-6 mt-8 text-center text-xl font-bold text-[#2F80ED]">Credit Hour Remaining 7 hr</h3>
            <hr className="w-80 mx-auto h-2 text-[black]"></hr>
            <h2 className="-ml-4 mt-1 text-center text-2xl font-bold text-[#1C1B1B]">Course Name</h2>
            <div className='p-8 -mt-6 ml-10'>
                <ol className='mt-4 list-decimal  text-xl font-medium text-[#3c3b3b]'>
                    <li className=" text-lg font-medium text-[#3c3b3b]">Introduction to c programming</li>
                    <li className="  text-lg font-medium text-[#3c3b3b]">Introduction to C++ for DSA</li>
                    <li className="  text-lg font-medium text-[#3c3b3b]">Software Engineering</li>
                </ol>
            </div>
            <hr className="w-80 mx-auto h-2 text-[black]"></hr>
            <h5 className="-ml-5 mb-4 mt-4 text-center text-lg font-semibold text-[#1C1B1BCC]">Total Credit Hour :13</h5>
            <hr className="w-80 mx-auto h-2 text-[black]"></hr>
            <h4 className="-ml-5 mt-2 text-center text-lg font-bold text-[#1C1B1BCC]">Total Price : 48000 USD</h4>
            
        </div>
    );
};

export default Aside;