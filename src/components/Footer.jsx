import {motion} from 'framer-motion'

function Footer() {
    return (
        

<footer className="bg-main text-white shadow">
     <div className="bg-main py-10 flex justify-between">
     <div className="left ml-28">
        <a href="https://mladejovsky.cz">
            <img src="src/assets/mladejovskyW.png" alt="mladejovsky.cz" className="w-56" />
        </a>
    </div>

        <div className="right mr-28">
            <ul className="list-none flex footer-menu">
                <li className="mx-3"><a href="#">Domů</a></li>
                <li className="mx-3"><a href="#">Individuální spolupráce</a></li>
                <li className="mx-3"><a href="#">Reference</a></li>
                <li className="mx-3"><a href="#">Kontakt</a></li>
            </ul>
        </div>
     </div>
    
    <div className="bg-blue-700 py-2 flex justify-between">
        <div className="left ml-28">
            <span className="block text-sm text-white sm:text-center dark:text-gray-400">© 2024 <a href="https://mladejovsky.cz/" className="hover:underline">mladejovsky™</a>. All Rights Reserved.</span>
        </div>

        <div className="right mr-28">
            Web&Design <a href="https://mladejovsky.cz" className="font-bold hover:underline text-sm text-white">mladejovsky</a>
        </div>
    </div>
</footer>


    )
}

export default Footer;