import LocationImg from '../assets/Images/locationimg.png'
import { motion } from 'framer-motion';

const Location = () => {
  return (
    <motion.section
    className="h-full w-full mb-16 max-md:mb-10"
    initial={{ opacity: 0, x: '-100%' }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}  
    viewport={{ once: true }}
    >
        <div className="text-center max-md:mt-3 mt-12">
            <h1 className="text-4xl font-bold font-inconsol leading-normal">Location</h1>
        </div>
        <div className=' flex max-xl:flex-col max-xl:items-center justify-center max-md:gap-3 gap-16 mt-6'>
            <div className='flex flex-col justify-center items-center flex-shrink-0 max-lg:w-[300px] max-xl:mb-4'>
                <div className='mt-5 text-xl leading-normal font-inconsol whitespace-normal mb-5'>
                    <h3 className=' font-bold text-3xl '>Operation Hours</h3>
                    <p>WeekDays 10:00 AM - 8:00 PM </p>
                    <p>WeekEnds 10:00 AM - 9:00 PM </p>
                </div>
                <img src={LocationImg} width={600} height={600} alt="RestaurantImage" />
            </div>
            <div className='text-center'>
                <h3 className=' font-bold text-3xl mb-7 mt-4'>Google Map</h3>
                <div className='text-xl leading-normal font-inconsol whitespace-normal mb-3'>
                    <p>39 Delancey St</p>
                    <p> New York, NY 10002, </p>
                    <p> United States</p>
                </div>
                <iframe className=' max-lg:w-[300px] max-xl:w-[400px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1700.4817429595857!2d-73.99121449097844!3d40.71889718772883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25986547275d5%3A0x28bbc624344e9a56!2sBlacktree%20Ltd!5e0!3m2!1sen!2smm!4v1705387213332!5m2!1sen!2smm" 
                width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    </motion.section>
  )
}

export default Location