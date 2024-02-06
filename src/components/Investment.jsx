function Investment({img, text}) {
    return (
        <div className="investment flex items-center mr-8">
            <img src={img} className="investmentIcon w-10" alt="" />
            <a href={`#`+text} className="ml-2 text-lg hover:text-main transition-all">{text}</a>
        </div>
    )
}

export default Investment;