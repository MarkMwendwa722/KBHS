import React from 'react';
import { Link } from 'react-router-dom'; 

const Admissions = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      
      <header className="bg-custom-green w-full text-center py-4 text-xl  text-white">
        <div className="container mx-auto flex justify-between items-center px-2">
          <div className='w-full'>
          <h1 className='text-lg font-semibold   ml-[-9%] text-left'>KBHS</h1>
          </div>
          
          <nav>
            <ul className="flex space-x-4">
              <li><Link className="text-white hover:underline" to="/">Home</Link></li>
              <li><Link className="text-white hover:underline" to="/about">AboutUs</Link></li>
              <li><Link className="text-white hover:underline" to="/admission">Admission</Link></li>
              <li><Link className="text-white hover:underline" to="/contact">Contact</Link></li>
              <li><Link className="text-white hover:underline" to="/facilities">Facilities</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      
      <main className="flex flex-col items-center flex-1 w-full">
        <div className='w-full'>
        <h1 className="text-lg font-semibold  mt-10 mb-4 ml-[36.5%] text-left ">Admission Form</h1>
        </div>
        
        <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                First Name
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstName" type="text" placeholder="First Name" />
            </div>

            
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                Last Name
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lastName" type="text" placeholder="Last Name" />
            </div>
          </div>

          {/* inputFields */}
          {[...Array(9)].map((_, index) => (
            <div className="mb-4" key={index}>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`field-${index}`}>
                Field Name
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id={`field-${index}`} type="text" placeholder="Field Name" />
            </div>
          ))}

          
          <div className="flex items-center justify-center">
            <button className="bg-custom-green hover:bg-custom-green text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Submit
            </button>
          </div>
        </form>
      </main>

      {/* Footer */}
      <footer className="bg-custom-green w-full text-center py-4 text-sm text-white">
        <div className="container mx-auto">
          <nav>
          <p className="mt-2">KBHS HIGH SCHOOL</p>
            <ul className="flex justify-center space-x-4">
              <li><Link className="text-white hover:underline" to="/">Home</Link></li>
              <li><Link className="text-white hover:underline" to="/about">AboutUs</Link></li>
              <li><Link className="text-white hover:underline" to="/admission">Admission</Link></li>
              <li><Link className="text-white hover:underline" to="/contact">Contact</Link></li>
              <li><Link className="text-white hover:underline" to="/facilities">Facilities</Link></li>
            </ul>
          </nav>
          
        </div>
      </footer>
    </div>
  );
};

export default Admissions;
