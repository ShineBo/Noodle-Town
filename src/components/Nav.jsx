import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import whitelogo from '../assets/Logos/whitelogo.svg';
import navmenu from '../assets/Logos/navmenu.svg';
import reservationLogo from '../assets/Logos/reservation.png'


const Nav = () => {

  const navigate = useNavigate();

  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleSectionClick = (section) => {
    setActiveSection(section);
    // Scroll to the respective section
    const element = document.getElementById(section);
    if (element) {
      const offset = element.offsetTop - 100; // Adjust the offset based on your layout and styling
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Add event listener to update active section based on scroll
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Adjust the offsets based on your layout and styling
      // const homeOffset = document.getElementById('home').offsetTop - 100;
      const aboutOffset = document.getElementById('about').offsetTop - 100;
      const menuOffset = document.getElementById('menu').offsetTop - 100;
      const locationOffset = document.getElementById('location').offsetTop - 100;
      const contactOffset = document.getElementById('contact').offsetTop - 100;

      if (scrollPosition < aboutOffset) {
        setActiveSection('home');
      } else if (scrollPosition < menuOffset) {
        setActiveSection('about');
      } else if (scrollPosition < locationOffset) {
        setActiveSection('menu');
      } else if (scrollPosition < contactOffset) {
        setActiveSection('location');
      } else {
        setActiveSection('contact');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="w-full fixed bg-dark-slate-gray bg-opacity-40 z-10">
      <div className="px-4 sm:px-10 py-2 gap-16 max-xl:gap-9 flex justify-between max-md:justify-between max-lg:justify-center text-lg items-center text-white-400 font-quicksand">
        <a href="#home" className="flex justify-center items-center gap-4 flex-shrink-0">
          <img src={whitelogo} alt="" width={90} height={90} className=' max-md:w-[80px] max-md:h-[80px]' />
        </a>
        <div className='flex max-md:hidden flex-col sm:flex-row justify-between gap-16 max-lg:gap-7 '>
          <button onClick={() => handleSectionClick('home')}>
            <p className={activeSection === 'home' ? 'active' : ''}>Home</p>
          </button>
          <button onClick={() => handleSectionClick('about')}>
            <p className={activeSection === 'about' ? 'active' : ''}>About</p>
          </button>
          <button onClick={() => handleSectionClick('menu')}>
            <p className={activeSection === 'menu' ? 'active' : ''}>Menu</p>
          </button>
          <button onClick={() => handleSectionClick('location')}>
            <p className={activeSection === 'location' ? 'active' : ''}>Location</p>
          </button>
          <button onClick={() => handleSectionClick('contact')}>
            <p className={activeSection === 'contact' ? 'active' : ''}>Contact <span className=' max-lg:hidden'>Us</span></p>
          </button>
        </div>
        <button onClick={() => navigate('/reservation')} className="max-md:hidden px-6 py-2 rounded-full border bg-primary border-gray-600 hover:bg-primary-200 focus:outline-none font-inconsol">
              <div className=' flex justify-center items-center gap-3'>
                <img src={reservationLogo} width={25} height={25} alt="Reservation Logo" />
                <p className=' text-dark-slate-gray'>Reservation</p>
              </div>
        </button>
        <img
          src={navmenu}
          width={35}
          height={35}
          alt="Nav Button"
          className="hidden max-md:block cursor-pointer"
          onClick={toggleMenu}
        />
      </div>
      {isMenuOpen && (
        <div className="w-full max-md:block md:w-auto">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
            <li onClick={toggleMenu}>
              <button onClick={() => handleSectionClick('home')} className="block py-2 px-3 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                Home
              </button>
            </li>
            <li onClick={toggleMenu}>
              <button onClick={() => handleSectionClick('about')} className="block py-2 px-3 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                About
              </button>
            </li>
            <li onClick={toggleMenu}>
              <button onClick={() => handleSectionClick('menu')} className="block py-2 px-3 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                Menu
              </button>
            </li>
            <li onClick={toggleMenu}>
              <button onClick={() => handleSectionClick('location')} className="block py-2 px-3 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                Location
              </button>
            </li>
            <li onClick={toggleMenu}>
              <button onClick={() => handleSectionClick('contact')} className="block py-2 px-3 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                Contact
              </button>
            </li>
          </ul>
        </div>
      )}
    </section>
  );
};

export default Nav;
