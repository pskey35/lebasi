//esto es un boton de whatsapp ICON usando svg
function WhatsappButton() {
    return (


        <div className="fixed right-4 top-[100%] -translate-y-[200%] flex flex-col gap-6">
            {/* Social Links */}
            {

                [
                    { name: "WhatsApp", color: "green" }
                ].map((social) => (
                    <a
                        key={social.name}
                        href="#"
                        className={`w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:-translate-y-1 transition-transform hover:shadow-xl`}
                    >
                        <span className={`text-${social.color}-600 font-medium`}>
                            <img src="/whatsapp.svg" alt="whatsapp" />
                        </span>
                    </a>
                ))
            }
        </div >
    );
}



//button "comprar online"
function ToBuyButton() {
    return (
        <button className="px-8 py-3 bg-blue-300 text-white rounded-xl hover:bg-blue-400 transform hover:-translate-y-1 transition-all shadow-lg hover:shadow-xl">
            Comprar Online
        </button>
    )
}



//button "saber mas"
function MoreAboutUsButton() {
    return (
        <button className="px-8 py-3 bg-white text-blue-400 border-2 
        border-blue-400 rounded-xl hover:bg-blue-50 transform hover:-translate-y-1 transition-all">
            Saber Más
        </button>
    )
}



export function BuyNowButton() {
    return (
        <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl hover:opacity-90 transform hover:-translate-y-1 transition-all shadow-lg hover:shadow-xl">
            Comprar Ahora
        </button>
    )
}


export function DistributorButton() {
    return (
        <button className="px-10 py-4 bg-white text-black border-2 border-blue-600 rounded-xl hover:bg-blue-50 transform hover:-translate-y-1 transition-all">
            Únete como Distribuidor
        </button>
    )
}


export { WhatsappButton, ToBuyButton, MoreAboutUsButton };



