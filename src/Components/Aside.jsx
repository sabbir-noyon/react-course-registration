// eslint-disable-next-line no-unused-vars
import React from 'react';

import './Aside.css';


const Aside = ({ selectedCourse, totalCredit }) => {
    let totalPrice = 0;
    
    
    return (


        <div className="pb-10  aside-container lg:w-3/12  h-fit lg:px-7 px-4 md:px-3 bg-white rounded-lg ">
            <h3 className=" mb-6 lg:mt-8 md:mt-5 md:pt-6 pt-6 lg:pt-0 text-center text-xl font-bold text-[#2F80ED]">Credit Hour Remaining {20-totalCredit} hr</h3>
            <hr className="lg:w-80 mx-auto h-2 text-[black]"></hr>
            <h2 className="-ml-4 mt-1 text-center text-2xl font-bold text-[#1C1B1B]">Course Name</h2>
            <div className='p-8 -mt-6 ml-10'>
                <ol className='mt-4 list-decimal  text-xl font-medium text-[#3c3b3b]'>
                 
                {

                    // eslint-disable-next-line react/prop-types
                    selectedCourse.map((eachCourse) => (
                        <li key={eachCourse.id} className=" text-lg font-medium text-[#3c3b3b]">{eachCourse.title}</li>
                    ))

                }

                    
                </ol>
            </div>
            <hr className="lg:w-80 mx-auto h-2 text-[black]"></hr>
            <h5 className="lg:-ml-5 mb-4 mt-4 text-center text-lg font-semibold text-[#1C1B1BCC]">Total Credit Hour :{totalCredit}</h5>
            <hr className="lg:w-80 mx-auto h-2 text-[black]"></hr>
            <h4 className="lg:-ml-5 mt-2 text-center text-lg font-bold text-[#1C1B1BCC]">Total Price : {totalPrice} USD</h4>
            
        </div>
    );
};

export default Aside;