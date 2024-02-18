import { motion } from "framer-motion"
import MenuCard from '../components/MenuCard'
import { ourPickMenu } from '../constants';
import MenuLogo from '../assets/Logos/menu.png'
import { useNavigate } from 'react-router-dom';

const Menu = () => {
  const navigate = useNavigate();

  return (<section className="h-full">
    <motion.div
    initial={{ opacity: 0, y: '20' }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 2 }}  
    viewport={{ once: true }}     
    className="text-center text-white-400 pt-11">
      <h1 className="font-inconsol text-4xl font-bold leading-normal">Our Top Picks</h1>
      <p className="font-quicksand mt-5 text-2xl">Dive into our menu, where every dish tells a story.</p>
    </motion.div>
    <div className='text-center'>
      <button onClick={() => navigate("/allmenus")} className="mt-5 px-8 py-2 rounded-full border cursor-pointer border-gray-300
        bg-primary-300 hover:bg-primary-200 focus:ring-4 focus:ring-primary-300 font-inconsol">
        <div className=' flex justify-center text-white-400  items-center gap-2 text-dark-slate-gray'>
          <img src={MenuLogo} width={40} height={40} alt="" />
          <p className="text-dark-slate-gray">Explore Menus</p>
        </div>
      </button>
    </div>
    <div 
    className="flex flex-wrap justify-around">
      {ourPickMenu.map((topPick) => (
        <MenuCard key={topPick.id} {...topPick}/>
      ))}
    </div>
  </section>)
};

export default Menu;
