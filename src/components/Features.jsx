import Feature from "./Feature";

const featuresData = [
    {
        img: "/src/assets/iconUser.png",
        heading: "100+ zákazníků",
        text: "Aktuálně s námi investuje více než 100 zákazníků"
    },
    {
        img: "/src/assets/iconProfit.png",
        heading: "15% Návratnost",
        text: "Více než 80% klientům se vrátilo přes 15% za první rok"
    },
    {
        img: "/src/assets/iconMoney.png",
        heading: "350 mil Kč +",
        text: "Spravujeme více než 350 mil Kč pro naše klienty"
    },
]

function Features() {
    return (
        <div className="container mx-auto flex justify-between mt-32">
            <Feature img={featuresData[0].img} heading={featuresData[0].heading} text={featuresData[0].text}/>
            <Feature img={featuresData[1].img} heading={featuresData[1].heading} text={featuresData[1].text}/>
            <Feature img={featuresData[2].img} heading={featuresData[2].heading} text={featuresData[2].text}/>
        </div>
    )
}

export default Features;