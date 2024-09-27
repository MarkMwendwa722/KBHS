
const Footer = () => {
  return (
    <footer className="bg-[#295E4F] text-white p-1 text-center"> 
      <div className="flex flex-col items-center justify-center">
        <div className="mb-1"> 
          <ul className="flex gap-9 list-none justify-center mb-1"> 
            <li><a href="/" className="text-white no-underline text-sm">Home</a></li> 
            <li><a href="/about" className="text-white no-underline text-sm">About</a></li>
            <li><a href="/events" className="text-white no-underline text-sm">Events</a></li>
            <li><a href="/contact" className="text-white no-underline text-sm">Contact</a></li>
          </ul>
        </div>

        <div className="bg-custom-gray text-black max-w-xl mx-auto p-2 rounded-md shadow-lg"> 
          <h3 className="text-lg font-semibold mb-2">Frequently Asked Questions</h3> 
          <div className="space-y-6"> 
            <details className="bg-white p-2 rounded-lg shadow">
              <summary className="font-semibold cursor-pointer text-sm">What is the admission process at KBHS High School?</summary>
              <p className="pt-1 text-gray-600 text-xs">The admission process involves a school visit, application submission, entrance exam, interview, and acceptance notification.</p>
            </details>
            <details className="bg-white p-2 rounded-lg shadow">
              <summary className="font-semibold cursor-pointer text-sm">Do you have any more questions?</summary>
              <p className="pt-1 text-gray-600 text-xs">Feel free to ask any additional questions—our team is here to provide all the answers you need!</p>
            </details>
          </div>
          <button className="mt-2 bg-custom-green text-white py-1 px-4 rounded-full hover:bg-green-700 text-sm">Ask Now</button> 
        </div>
        <p className="mt-1 text-xs">&copy; 2024 KBHS High School. All rights reserved.</p> 
      </div>
    </footer>
  );
};







const styles = {
  footer: {
    backgroundColor: '#295E4F', 
    color: '#fff',
    padding: '20px',
    width: 'auto',
    textAlign: 'center', 
  },
  footerContent: {
    display: 'flex',
    flexDirection: 'column', 
    alignItems: 'center', 
    justifyContent: 'center', 
  },
  navLinks: {
    textAlign: 'center',
    marginBottom: '10px', 
  },
  footerTitle: {
    fontSize: '18px',
    marginBottom: '10px',
  },
  footerNavList: {
    listStyleType: 'none',
    display: 'flex',
    gap: '20px'
  },
  footerNavItem: {
    marginBottom: '8px',
  },
  footerNavLink: {
    textDecoration: 'none',
    color: '#fff',
  },
  footerInfo: {
    marginTop: '10px',
  },
  
};

export default Footer;