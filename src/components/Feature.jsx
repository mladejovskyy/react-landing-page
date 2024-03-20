function Feature({img, heading, text}) {
    return (
        <div className="feature flex mx-1">
            <img className="bg-main w-16 p-2 rounded-xl lg:w-16 lg:h-16 md:w-12 md:h-12" src={img} alt="" />
            <div className="ml-2">  
            <p className="feature heading text-2xl lg:text-xl md:text-lg text-main">{heading}</p>
            <p className="feature text text-md lg:text-sm md:text-sm text-paragraph">{text}</p>
            </div>
        </div>
    )
}

export default Feature;