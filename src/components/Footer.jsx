import {motion} from 'framer-motion'

function Footer() {
    return (
        

<footer className="bg-main text-white shadow">
 {/* 
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://mladejovsky.cz/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="src/assets/mladejovskyW.png" className="h-8" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Domů</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Individuální spolupráce</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Reference</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Kontakt</a>
                </li>
            </ul>
        </div>
        
    </div>
     */}

     <div className="bg-main py-12 flex justify-between">
     <div className="left ml-52">
        <a href="https://mladejovsky.cz">
            <img src="src/assets/mladejovskyW.png" alt="mladejovsky.cz" className="w-56" />
        </a>
    </div>

        <div className="right mr-52">
            <ul className="list-none flex footer-menu">
                <li className="mx-3"><a href="#">Domů</a></li>
                <li className="mx-3"><a href="#">Individuální spolupráce</a></li>
                <li className="mx-3"><a href="#">Reference</a></li>
                <li className="mx-3"><a href="#">Kontakt</a></li>
            </ul>
        </div>
     </div>
    
    <div className="bg-blue-700 py-2 flex justify-between">
        <div className="left ml-52">
            <span className="block text-sm text-white sm:text-center dark:text-gray-400">© 2024 <a href="https://mladejovsky.cz/" className="hover:underline">mladejovsky™</a>. All Rights Reserved.</span>
        </div>

        <div className="right mr-52">
            Web&Design <a href="https://mladejovsky.cz" className="font-bold hover:underline text-sm text-white">mladejovsky</a>
        </div>
    </div>
</footer>


    )
}

export default Footer;