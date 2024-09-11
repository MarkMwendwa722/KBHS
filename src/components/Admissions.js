import React from 'react';

const Admissions = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      
    

      
      <main className="flex flex-col items-center flex-1 w-full">
        <h1 className="text-lg font-semibold mt-12 mb-4 ">Admission Form</h1>
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

    </div>
  );
};

export default Admissions;
