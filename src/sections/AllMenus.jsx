import logo from '../assets/Logos/logo.svg'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuCard from '../components/MenuCard'
import { LocalMenu, JapaneseMenu, ThaiMenu, VietnameseMenu, DrinksMenu } from '../constants';

const AllMenus = () => {

    const navigate = useNavigate();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <section className="inset-0 h-full w-full bg-gradient-to-br from-primary-500 via-yellow-700 to-black">
      <div className='bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px]'>
        <div className=' flex flex-col items-center justify-center pt-7 max-lg:px-6'>
          <img onClick={() => navigate('/')} src={logo} alt="logo" width={100} height={100} className=' cursor-pointer' />
          <div >
            <p className=' text-center mt-6 font-inconsol font-bold leading-normal text-xl'>
              Whether you&#39;re a fan of classic ramen, crave the bold flavors of pad Thai, <br />
              or yearn for the comfort of a steaming bowl of pho, Noodle Haven has something for everyone. <br />
              <span className=' max-md:hidden'>Our menu features a fusion of traditional recipes and modern twists, ensuring a symphony of flavors with every bite.</span>
            </p>
          </div>
        </div>
        <div className=' px-40 '>
          <h3 className=' max-md:text-center text-4xl mt-7 max-sm:text-2xl font-inconsol'>Local Food</h3>
          <div className="flex flex-wrap justify-between max-md:justify-center">
            {LocalMenu.map((localFood) => (
              <MenuCard key={localFood.title} {...localFood}/>
            ))}
          </div>
        </div>
        <div className=' px-40 '>
          <h3 className='max-md:text-center text-4xl mt-7 max-sm:text-2xl font-inconsol'>Thailand Food</h3>
          <div className="flex flex-wrap justify-between max-md:justify-center ">
            {ThaiMenu.map((thaiFood) => (
              <MenuCard key={thaiFood.title} {...thaiFood}/>
            ))}
          </div>
        </div>
        <div className=' px-40 '>
          <h3 className='max-md:text-center text-4xl mt-7 max-sm:text-2xl font-inconsol'>Vietnamese Food</h3>
          <div className="flex flex-wrap justify-between max-md:justify-center ">
            {VietnameseMenu.map((vietnameFood) => (
              <MenuCard key={vietnameFood.title} {...vietnameFood}/>
            ))}
          </div>
        </div>
        <div className=' px-40 '>
          <h3 className='max-md:text-center text-4xl mt-7 max-sm:text-2xl font-inconsol'>Japanese Food</h3>
          <div className="flex flex-wrap justify-between max-md:justify-center ">
            {JapaneseMenu.map((japanFood) => (
              <MenuCard key={japanFood.title} {...japanFood}/>
            ))}
          </div>
        </div>
        <div className=' px-40 '>
          <h3 className='max-md:text-center text-4xl mt-7 max-sm:text-2xl font-inconsol'>Drinks</h3>
          <div className="flex flex-wrap justify-between max-md:justify-center ">
            {DrinksMenu.map((drink) => (
              <MenuCard key={drink.title} {...drink}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AllMenus