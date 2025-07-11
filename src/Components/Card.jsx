import React, { useEffect, useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './Card.css';

const Card = ({ onButtonClick }) => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch("../../data.json")
      .then((res) => res.json())
      .then((data) => setDatas(data["courses"]));
  }, []);

  return (
    <div className="w-full max-w-[1300px] mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 md:px-6 lg:px-6 mb-16">
      {datas.map((eachData) => (
        <div
          key={eachData.id}
          className="bg-white rounded-lg shadow-md px-6 py-8 flex flex-col justify-between"
        >
          <img
            className="w-full max-w-[280px] mx-auto"
            src={eachData.img}
            alt={eachData.title}
          />

          <h3 className="mt-4 text-center text-xl font-semibold text-[#1C1B1B]">
            {eachData.title}
          </h3>

          <p className="min-h-[96px] mt-2 text-justify text-sm md:text-base font-normal text-[#1C1B1B99]">
            {eachData.description}
          </p>

          <div className="flex justify-between items-center mt-4 text-sm md:text-base">
            <div className="flex items-center">
              <span className="mr-1 text-lg font-medium text-black">$</span>
              <p className="font-medium text-[#3c3b3b]">
                Price : {eachData.price}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <i className="fa fa-bookmark icon"></i>
              <p className="font-medium text-[#3c3b3b]">
                Credit: {eachData.credit}hr
              </p>
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={() => onButtonClick(eachData)}
              className="w-full py-2 bg-[#2F80ED] text-white text-base font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
              type="button"
            >
              Select
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
