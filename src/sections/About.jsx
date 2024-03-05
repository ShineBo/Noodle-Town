import { motion } from "framer-motion"
import aboutpageimg from '../assets/Images/aboutpageimg.jpg'
import about3 from '../assets/Images/about3.jpeg'
import about4 from '../assets/Images/about4.webp'

const About = () => {

    return (
    <section>
        <div className='flex max-xl:flex-col justify-center items-center gap-16 max-md:gap-7 h-full xl:h-screen'>

            <motion.div
            initial = {{ opacity: 0, y: 100 }}
            whileInView ={ { opacity: 1, y: 0}}
            transition={{
                type: "spring",
                duration: 1.5,
            }}
            viewport = {{ once: true}}
            className='w-full xl:w-1/3 flex-shrink-0'>
                <img src={aboutpageimg} alt="" width={610} height={500} className=' max-sm:w-[300px] max-xl:w-[300px] max-xl:mx-auto rounded-r-full max-xl:rounded-full'  />
            </motion.div>

            <motion.div 
            initial = {{ opacity: 0, y: 100 }}
            whileInView ={ { opacity: 1, y: 0}}
            transition={{
                type: "spring",
                duration: 2.5,
            }}
            viewport = {{ once: true}}
            className='text-center w-full lg:w-2/3'>
                <h1 className='text-4xl max-md:text-3xl font-inconsol font-bold leading-normal whitespace-normal'>Our Story</h1>
                <p className=' mt-16 max-md:mt-8 text-lg font-quicksand text-slate-600'>
                Established with a passion for preserving the essence of noodle culture, Noodle Haven is more than just a restaurant; 
                it is a celebration of the artistry that goes into creating the perfect noodle dish. 
                From the bustling streets of Asia to your plate, we have curated a menu that reflects the motion.diversity and soul-satisfying joy of noodles.
                </p>
            </motion.div>

            <motion.div
            initial = {{ opacity: 0, y: 100 }}
            whileInView ={ { opacity: 1, y: 0}}
            transition={{
                type: "spring",
                duration: 3.5,
            }}
            viewport = {{ once: true}}        
            className='flex flex-col xl:h-screen object-cover'>
                <img src={about3} alt="" className=' object-cover xl:h-full max-sm:w-[300px] max-xl:w-[300px]' />
                <img src={about4} alt="" className=' object-cover xl:h-full max-sm:w-[300px] max-xl:w-[300px]' />
            </motion.div>
        </div>
    </section>
    )
}

export default About
