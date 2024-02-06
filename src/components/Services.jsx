import {motion} from 'framer-motion'


function Services() {
    return (
        <div className="services">
        <div id='Reality' className="service flex container mx-auto mt-44">
            <div className='left w-6/12 my-auto'>
            <h2 className='te font-bold text-5xl'>Investice do <span className='text-main'>nemovitostí</span></h2>
            <p className='text-paragraph text-lg mt-5 w-11/12'>Získejte stabilitu a růst svých financí s našimi investicemi do nemovitostí! S námi můžete snadno a bez starostí investovat do atraktivních realitních projektů. Navýšte svůj majetek s jistým a dlouhodobým ziskem. Začněte investovat do nemovitostí ještě dnes a sledujte, jak se vaše peníze rozvíjejí s každým novým projektem. Investujte do budoucnosti s námi!</p>
            <motion.button whileHover={{y: -2}} type="button" className="text-white transition-colors mt-8 bg-main hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-20 py-3.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Zjistit více</motion.button>
            </div>
            <div className="right rounded-xl">
                <img className='sluzby-foto rounded-xl ml-auto drop-shadow-lg' src="src/assets/nemovitosti.png" alt="" />
            </div>
        </div>
        <div id='Akcie' className="service flex container mx-auto mt-8">
        <div className="left m-0 p-0 rounded-xl">
                <img className='sluzby-foto rounded-xl mr-auto drop-shadow-lg' src="src/assets/akcie.png" alt="" />
            </div>
            <div className='right w-6/12 my-auto'>
            <h2 className='te font-bold text-5xl'>Investice do <span className='text-main'>akcií</span></h2>
            <p className='text-paragraph text-lg mt-5 w-11/12'>Otevřete cestu k finančnímu růstu s naší investiční nabídkou do akcií! S námi můžete snadno investovat do dynamického světa akcií a těšit se na potenciální zhodnocení kapitálu. Začněte budovat svůj finanční úspěch ještě dnes a sledujte, jak roste vaše investované jmění. Investujte do akcií s námi a otevřete dveře k novým příležitostem na finančním trhu!</p>
            <motion.button whileHover={{y: -2}} type="button" className="text-white transition-colors mt-8 bg-main hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-20 py-3.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Zjistit více</motion.button>
            </div>
        </div>
        <div id='Komodity' className="service flex container mx-auto mt-8 mb-24">
            <div className='left w-6/12 my-auto'>
            <h2 className='te font-bold text-5xl'>Investice do <span className='text-main'>komodit</span></h2>
            <p className='text-paragraph text-lg mt-5 w-11/12'>Rozšiřte své investiční možnosti a dosáhněte stabilního růstu s naším programem investic do komodit. Díky našemu odbornému vedení můžete snadno diversifikovat své portfolio a sledovat, jak se vaše investice vyvíjejí v dynamickém světě komoditních trhů. Začněte investovat ještě dnes a objevte nové perspektivy pro váš finanční úspěch!</p>
            <motion.button whileHover={{y: -2}} type="button" className="text-white transition-colors mt-8 bg-main hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-20 py-3.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Zjistit více</motion.button>
            </div>
            <div className="right rounded-xl">
                <img className='sluzby-foto rounded-xl ml-auto drop-shadow-lg' src="src/assets/komodity.png" alt="" />
            </div>
        </div>


        </div>
    )
}

export default Services;