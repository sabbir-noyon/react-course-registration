import { useState } from 'react';
import './App.css';
import Card from './Components/Card';
import Aside from './Components/Aside';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Toaster, toast } from 'react-hot-toast';

function App() {
  const [selectedCourse, setSelectedCourse] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleButtonClick = (course) => {
    const alreadySelected = selectedCourse.find((item) => item.id == course.id);

    if (alreadySelected) {
      toast.error("Already Selected!");
      return;
    }

    let creditNow = course.credit;
    let prevCredit = 0;
    let price = course.price;

    selectedCourse.forEach((element) => {
      prevCredit += element.credit;
      price += element.price;
    });

    if (prevCredit + creditNow > 20) {
      toast.error("You can't exceed 20 Credit Hour!");
      return;
    }

    setTotalCredit(prevCredit + creditNow);
    setTotalPrice(price);
    setSelectedCourse([...selectedCourse, course]);
    toast.success(`${course.title} added successfully!`);
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Header />
      <h1 className="ml-4 lg:mb-14 mb-8 font-bold text-center lg:text-4xl text-3xl lg:mt-14 mt-8 text-[#1C1B1B]">
        Courses
      </h1>
      <div className="lg:flex lg:justify-between lg:px-20 md:px-40 md:pb-14 sm:pb-14">
        <Card onButtonClick={handleButtonClick} />
        <Aside
          selectedCourse={selectedCourse}
          totalCredit={totalCredit}
          totalPrice={totalPrice}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
