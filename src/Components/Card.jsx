
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';

// BsBookFill
import 'font-awesome/css/font-awesome.min.css'; // If using CSS
import "./Card.css"




const Card = ({ onButtonClick }) => {

   const [datas,setDatas] = useState([]);

   
   
  



    useEffect(()=>{

        fetch("../../data.json")
        .then((res)=> res.json())
        .then((data)=> setDatas(data["courses"]) );



    },[])



   




    return (
        
        
        <div className="card-container w-9/12 grid lg:grid-cols-3 lg:px-6 px-2 md:px-4 lg:gap-6 mb-16">
         
          
          {

            datas.map((eachData) => (


                // eslint-disable-next-line react/jsx-key
                <div key={eachData.id} className="mb-6 bg-white  px-8 py-10 h-full  rounded-lg">
                <img className="w-96 my-0 mx-auto" src= {eachData.img} ></img>
                    
                    <h3 className="mt-4 text-center text-xl font-semibold text-[#1C1B1B]">{eachData.title}</h3>

                <p className="h-24 text-justify mt-2 text-lg font-normal text-[#1C1B1B99]">{eachData.description}</p>
                <div className="flex justify-between mt-4">
                    <div className="flex ">
                        <h5 className="ml-1 mr-2 text-2xl font-medium text-[black]">$</h5>
                        <p className="price   text-lg font-medium text-[#3c3b3b]">Price : {eachData.price}</p>
                    </div>
                    <div className='flex justify-around'>
                        <i  className="   fa fa-bookmark icon"></i>
                        <p className=" text-lg font-medium text-[#3c3b3b]">Credit: {eachData.credit}hr</p>
                    </div>
                
                </div>
                
                <div className="text-center mt-8">
                    <button onClick={()=>onButtonClick(eachData)} className="my-0 mx-auto px-36 py-2 bg-[#2F80ED;] text-white text-lg font-semibold rounded-lg hover:bg-blue-700" type="submit">Select</button>
                </div>
            

            </div>

      






            ))


          }
       

           
          

            
        </div>
    );
};



export default Card;