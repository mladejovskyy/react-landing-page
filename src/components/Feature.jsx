function Feature({img, heading, text}) {
    return (
        <div className="feature flex">
            <img className="bg-main w-16 p-2 rounded-xl" src={img} alt="" />
            <div className="ml-2">
            <p className="feature heading text-2xl text-main">{heading}</p>
            <p className="feature text text-md text-paragraph">{text}</p>
            </div>
        </div>
    )
}

export default Feature;