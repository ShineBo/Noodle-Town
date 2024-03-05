import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './sections/Home';
import About from './sections/About';
import Menu from './sections/Menu';
import Location from './sections/Location';
import Contact from './sections/Contact';
import ReservationForm from './sections/Reservation';
import AllMenus from './sections/AllMenus';


const App = () => (
  <main className="relative">
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <Nav />
            <section id="home" className=" bg-dark-slate-gray">
              <Home />
            </section>
            <section id="about" className="max-xl:p-5 bg-white-400">
              <About />
            </section>
            <section id="menu" className="px-60 max-xl:p-5 pb-7 bg-gradient-to-tr from-gray-50 via-primary-500 to-dark-slate-gray">
              <Menu />
            </section>
            <section id="location" className="px-60 max-lg:p-5 bg-white-400">
              <Location />
            </section>
            <section id="contact" className="bg-gradient-to-tr from-dark-slate-gray via-dark-slate-gray to-primary-500">
              <Contact />
            </section>
          </div>
        }
      />
      <Route path="/reservation" element={<ReservationForm />} />
      <Route path="/allmenus" element={<AllMenus />} />
    </Routes>
  </main>
);

export default App;