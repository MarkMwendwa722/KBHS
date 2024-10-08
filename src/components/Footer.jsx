
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