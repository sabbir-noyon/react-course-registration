import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'
import Aside from './Components/Aside'




function App() {


  const [selectedCourse, setSelectedCourse] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);
  // const [totalPrice, setTotalPrice] = useState(0);
  

  // Function to handle the button click
    const handleButtonClick = (course) => {
      const alreadySelected = selectedCourse.find(
        (item) => item.id == course.id
      ); 
      if(alreadySelected)
      {
        return alert("Already Selected");
      }
      else
      {
        let creditNow = course.credit;
        let prevCredit = 0;
        selectedCourse.forEach((element) => {
          prevCredit += element.credit;
        });
        if(prevCredit+creditNow > 20)
        {
          return alert("You Can't Exceed 20 Credit");
        }
        
        setTotalCredit(prevCredit+creditNow);
        setSelectedCourse([...selectedCourse, course]);
      }


      
      // const price = course.price;
    };

  return (
    <>
      <h1 className=" ml-4 lg:mb-14 mb-8 font-bold text-center lg:text-4xl text-3xl  lg:mt-14 mt-8 text-[#1C1B1B]">Course Registration</h1>
      <div className="lg:flex lg:justify-between lg:px-20 md:px-40 md:pb-14 sm:pb-14 ">
        <Card  onButtonClick={handleButtonClick} ></Card>

        <Aside selectedCourse={selectedCourse} totalCredit={totalCredit}></Aside>
      </div>

      
     
    </>
  )
}

export default App
