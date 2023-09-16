// eslint-disable-next-line no-unused-vars
import React from 'react';

import './Aside.css';


const Aside = () => {
    return (
        <div className="w-2/12">
            <h3 className="text-xl font-bold text-[#2F80ED]">Credit Hour Remaining 7 hr</h3>
            <hr className="w-72 h-2 text-[#1C1B1B33]"></hr>
            <h2 className="text-2xl font-bold text-[#1C1B1B]">Course Name</h2>
            <div>
                <ol className='list-decimal  text-xl font-medium text-[#3c3b3b]'>
                    <li className="text-lg font-medium text-[#3c3b3b]">Introduction to c programming</li>
                    <li className="text-lg font-medium text-[#3c3b3b]">Introduction to C++ for DSA</li>
                    <li className="text-lg font-medium text-[#3c3b3b]">Software Engineering</li>
                </ol>
            </div>
            <hr className="w-72 h-2 text-[#1C1B1B33]"></hr>
            <h5 className="text-lg font-semibold text-[#1C1B1BCC]">Total Credit Hour :13</h5>
            <hr className="w-72 h-2 text-[#1C1B1B33]"></hr>
            <h4 className="text-lg font-bold text-[#1C1B1BCC]">Total Price : 48000 USD</h4>
            
        </div>
    );
};

export default Aside;