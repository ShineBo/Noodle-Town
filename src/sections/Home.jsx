import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import reservationLogo from '../assets/Logos/reservation.png'
import MenuLogo2 from '../assets/Logos/menu2.png'
import homeBg from '../assets/Images/homebgnobg.webp'

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className='flex items-center justify-center  h-screen w-full relative z-0'>
        <motion.div 
          initial={{ opacity: 0, x: '-100vw' }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          className=" m-5 p-5 z-10"
        >
            <div className="flex flex-col justify-center items-center gap-14 text-white-400">
                <h1 className="text-3xl md:text-6xl font-bold text-center font-inconsol">
                    Explore
                    <span className=' text-primary-500'> the art of noodles </span>
                    at Our Town.
                </h1>
                <p className="font-quicksand text-lg md:text-3xl">
                    &#34;Noodle Town, Where tradition meets innovation!&#34;
                </p>
                <div className=' flex gap-4 max-md:flex-col'>
                    <button onClick={() => navigate('/reservation')} className="mt-5 px-4 py-2 rounded-full border bg-primary border-gray-600 hover:bg-primary-200 focus:outline-none font-inconsol">
                        <div className='flex justify-center items-center gap-3'>
                            <img src={reservationLogo} width={40} height={40} alt="" />
                            <p className=' text-dark-slate-gray'>Booking</p>
                        </div>
                    </button>
                    <button onClick={() => navigate("/allmenus")} className="mt-5 px-4 py-2 rounded-full border border-primary hover:bg-primary-200 focus:outline-none font-inconsol">
                        <div className=' flex justify-center hover:text-dark-slate-gray items-center gap-2 text-primary'>
                        <img src={MenuLogo2} width={30} height={30} alt="" />
                        <p>Explore Menus</p>
                        </div>
                    </button>
                </div>
            </div>
        </motion.div>
        <img src={homeBg} alt="" width={1000} className=' absolute opacity-30'/>
    </section>
  );
}

export default Home;