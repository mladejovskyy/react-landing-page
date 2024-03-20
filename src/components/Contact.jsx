function Contact() {
  return (
    <div
      className="bg-white dark:bg-gray-900 container mx-auto py-8 lg:py-16"
      id="kontakt">
      <div>
        <h2 className="mb-4 text-5xl tracking-tight text-center font-bold text-gray-900 dark:text-white">
          Kontaktujte nás
        </h2>
        <p className="mb-8 lg:mb-10 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Potřebujete se nás na něco zeptat? <br /> Využijte naší zákaznické
          linky.
        </p>
      </div>

    
      <div className="px-10 max-w-screen-md mx-auto">
        <form action="#" className="space-y-2">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Váš email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="jmeno@gmail.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Předmět
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Dejte nám vědět jak vám můžeme pomoci"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
              Vaše zpráva
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Vase zprava"></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-16 transition-colors text-sm font-medium text-center text-white rounded-lg bg-main sm:w-fit hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
            Odeslat
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
