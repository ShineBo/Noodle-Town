import FbLogo from '../assets/Logos/facebook.png';
import IgLogo from '../assets/Logos/instagram.png';
import YtLogo from '../assets/Logos/youtube.png';
import PhoneLogo from '../assets/Logos/whitephone.png';
import TelephoneLogo from '../assets/Logos/whiteTele.png';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ rotate: 360, scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      viewport={{ once: true }}
    >
      <section className="pb-6">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-8 lg:px-6 font-quicksand">
          <div className="mx-auto max-w-screen-md sm:text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="mb-4 text-3xl tracking-tight font-extrabold text-white-400 sm:text-4xl"
            >
              Sign up for our newsletter
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              viewport={{ once: true }}
              className="mx-auto mb-8 max-w-2xl font-light text-white-400 md:mb-12 sm:text-xl"
            >
              Stay up to date new menus and exclusive discounts feel free to sign up with your email.
            </motion.p>
            <form action="#">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
                viewport={{ once: true }}
                className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0"
              >
                <div className="relative w-full">
                  <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-white-400 ">Email address</label>
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <input className="block p-3 pl-10 w-full text-sm text-dark-slate-gray bg-gray-100 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Enter your email" type="email" id="email" required="" />
                </div>
                <div>
                  <button type="submit" className="py-3 px-5 w-full text-sm font-medium text-center text-white-400 rounded-lg border cursor-pointer border-gray-300 hover:text-dark-slate-gray hover:bg-primary-200 focus:ring-4 focus:ring-primary-300">
                    Subscribe
                  </button>
                </div>
              </motion.div>
              <div className="mx-auto max-w-screen-sm text-sm text-left text-white-400 newsletter-form-footer">
                We care about the protection of your data. <a href="#" className="font-medium text-primary-600 hover:underline">Read our Privacy Policy</a>.
              </div>
            </form>
          </div>
        </div>

        <div className="py-8 lg:py-8 px-4 mx-auto max-w-screen-md font-quicksand">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white-400 "
          >
            Contact Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            viewport={{ once: true }}
            className="mb-8 lg:mb-16 font-light text-center text-white-400 sm:text-xl"
          >
            Got a technical issue? Want to send feedback? Need details about our Business plan? Let us know.
          </motion.p>
          <form action="#" className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              viewport={{ once: true }}
            >
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-white-400 ">Your email</label>
              <input type="email" id="email" className="shadow-sm bg-gray-100 border border-gray-300 text-dark-slate-gray text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="name@mail.com" required />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 }}
              viewport={{ once: true }}
            >
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-white-400 ">Subject</label>
              <input type="text" id="subject" className="block p-3 w-full text-sm text-dark-slate-gray bg-gray-100 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Let us know how we can help you" required />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5 }}
              viewport={{ once: true }}
              className="sm:col-span-2"
            >
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-white-400 ">Your message</label>
              <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-dark-slate-gray bg-gray-100 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
            </motion.div>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 3 }}
              viewport={{ once: true }}
              type="submit" className="py-3 px-5 text-sm font-medium text-center text-white-400 rounded-lg bg-primary-700 sm:w-fit hover:text-dark-slate-gray hover:bg-primary-200 focus:ring-4 focus:outline-none focus:ring-primary-300 border border-gray-300"
            >
              Send message
            </motion.button>
          </form>
        </div>
        <div>
          <div className='flex max-sm:flex-col justify-center items-center gap-6 font-inconsol'>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.5 }}
              viewport={{ once: true }}
              className="text-2xl tracking-tight text-white-400 "
            >
              Contact Number -
            </motion.h2>
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 4 }}
              viewport={{ once: true }}
              href="tel:"
              className="text-center flex max-sm:flex-col gap-2 justify-center items-center text-white-400 "
            >
              <img src={TelephoneLogo} width={40} height={40} alt="" />
              <span>01-645032 , </span>
            </motion.a>
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 4.5 }}
              viewport={{ once: true }}
              href="tel:"
              className="text-center flex max-sm:flex-col gap-2 justify-center items-center text-white-400 "
            >
              <img src={PhoneLogo} width={40} height={40} alt="" />
              <span>09-260384398</span>
            </motion.a>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 5 }}
            viewport={{ once: true }}
            className='flex justify-center gap-5 my-7'
          >
            <img src={FbLogo} alt="" width={30} height={30} className='cursor-pointer' />
            <img src={IgLogo} alt="" width={30} height={30} className='cursor-pointer' />
            <img src={YtLogo} alt="" width={30} height={30} className='cursor-pointer' />
          </motion.div>
          <motion.h5
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 5 }}
            viewport={{ once: true }}
            className='font-quicksand text-center text-xl font-bold text-gray-400 leading-normal'
          >
            &copy; 2024 Copyright: Noodle Town <br /> All Rights Served
          </motion.h5>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;