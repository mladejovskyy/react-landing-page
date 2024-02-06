import './App.css'
import './output.css'
import {motion} from 'framer-motion'
import Navbar from './components/Navbar'
import Investment from './components/Investment'
import Features from './components/Features'
import Services from './components/Services'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar/>
      {/* HERO SECTION START */}
      <main className='mt-52 container flex mx-auto'>
        <div className="left mt-24">
            <h1 className='text-6xl font-medium'>Nechte vaše peníze <br />pracovat <span className='font-bold text-7xl text-main'>za Vás.</span></h1>
            <p className='text-paragraph text-xl mt-6 w-10/12'>Spravujeme investiční portfolia pro více než 100 klientů s hodnotou přesahující 350 mil Kč</p>
          <div className="investments flex my-12">
            <Investment img={"src/assets/iconStock.png"} text={"Akcie"}/>
            <Investment img={"src/assets/iconReality.png"} text={"Reality"}/>
            <Investment img={"src/assets/iconCommodity.png"} text={"Komodity"}/>
          </div>
          <div className="btn mt-12">
          <motion.button whileHover={{y: -2}} type="button" className="text-white transition-colors bg-main hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-20 py-3.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Nezávazná konzultace</motion.button>
          </div>
        </div>
        <div className="right">
          <img src="src/assets/heroImg.png" className='heroImg' />
        </div>
      </main>
      {/* HERO SECTION END */}

      {/* Features section */}
      <Features/>

      {/* Service section */}
      <Services/>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default App
