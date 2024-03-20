import { motion } from "framer-motion";

function Cta() {
  return (
    <div className="lg:px-8" id="spoluprace">
    <div className="cta container mx-auto bg-main py-12 px-20 rounded-3xl lg:py-8 flex items-center text-white">
      <h2 className="font-medium text-3xl lg:text-xl md:text-xl">
        Rádi vám poradíme s výběrem. Pojďme si zavolat.
      </h2>
      <motion.a
        href="tel:+420723709079"
        type="button"
        className="text-white flex ml-16 lg:ml-10 transition-colors bg-main border-white border-2 hover:bg-white hover:text-main focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg lg:text-md px-10 lg:px-6 py-3">
        +420 777 777 777
      </motion.a>
    </div>
    </div>
  );
}

export default Cta;
