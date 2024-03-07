import { motion } from "framer-motion";
import { useEffect } from 'react';
import logo from '../assets/Logos/whitelogo.svg';
import PhoneLogo from '../assets/Logos/telephone-call.png'
import ArrowLogo from '../assets/Logos/left-arrow.png'
import { useNavigate } from 'react-router-dom';
import PrivacyPolicy from '../components/PrivacyPolicy';
import TermsOfService from '../components/TermsOfService';
import ReservationImg from '../assets/Images/reservationPageImg.jpg'

const ReservationForm = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='bg-gradient-to-tl from-primary-500 via-dark-slate-gray to-dark-slate-gray to-85%'>
      <img src={ReservationImg} alt="RestaurantImage"  className='absolute w-full h-full opacity-50 object-cover'/>
      <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className=' px-64 max-xl:px-12'
      >
        <div className='flex flex-col relative z-10' >
          <div className='flex flex-col justify-center items-center w-full h-full mt-4 cursor-pointer'>
            <img onClick={() => navigate('/')} src={logo} alt="logo" width={120} height={120} className=' max-md:w-[100px] max-md:h-[100px]' />
            <h1 className='text-white-400 text-4xl font-quicksand my-6 font-bold leading-normal max-md:text-3xl text-center'>Reservation by Phone</h1>
            <button className=" bg-primary px-8 py-2 rounded-full border border-gray-600 hover:bg-primary-200 focus:outline-none font-inconsol">
              <a href='tel:09260391133' className=' flex justify-center text-dark-slate-gray items-center gap-2'>
                <img src={PhoneLogo} width={40} height={40} alt="" />
                <p className=' text-xl'>Call Now</p>
              </a>
            </button>
            <h1 className='text-white-400 text-4xl font-quicksand my-6 font-bold leading-normal max-md:text-3xl'>Reservation Form</h1>
          </div>
          <form
            action="https://getform.io/f/{your-form-endpoint}"
            method="POST"
            className="space-y-4 font-inconsol"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
            />
            <input
              type="number"
              name="phone"
              placeholder="Phone Number"
              required
              className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
            />
            <input
              type="date"
              name="date"
              required
              className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
            />
            <input
              type="time"
              name="time"
              required
              className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
            />
            <input
              type="number"
              name="guests"
              placeholder="Number of Guests"
              required
              className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
            />
            <button
              type="submit"
              className="w-50 px-4 py-3 text-dark-slake-gray bg-primary-300 border border-gray-900 rounded-xl hover:bg-primary-200  focus:bg-primary-500 focus:outline-none"
            >
              Make Reservation
            </button>
          </form>
          <div className=' mt-2'>
            <button onClick={() => navigate("/")} className="mt-2 px-4 py-2 rounded-full border border-gray-900 bg-primary hover:bg-primary-200 focus:outline-none font-inconsol">
              <div className=' flex justify-center items-center gap-2'>
                <img src={ArrowLogo} width={20} height={30} alt="" />
                <p>Back to Home </p>
              </div>
            </button>
          </div>
        </div>
      </motion.div>
      <div className='relative py-16'>
        <h1 className=' text-center font-quicksand text-4xl font-extrabold leading-normal text-white-400'>Privacy Policy and Terms:</h1>
        <section className=' flex justify-evenly items-center max-lg:flex-col max-md:px-6 max-lg:gap-8'>
          <PrivacyPolicy />
          <TermsOfService />
        </section>
      </div>
    </div>
  );
};

export default ReservationForm;