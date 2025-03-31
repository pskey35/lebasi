import { WhatsappButton, ToBuyButton, MoreAboutUsButton, BuyNowButton, DistributorButton } from "./components/Buttons";
import { Icon_1, Icon_2, Icon_3 } from "./assets/iconsLebasiAbout.jsx"

function NavBar() {
  return (
    <nav className="sticky top-0 backdrop-blur-md bg-white/80 px-6 py-4 border-b border-blue-100 z-10" >
      {/* Navigation */}
      <div className="container mx-auto flex items-center justify-between">
        <a
          href="#"
          className="
            text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent
            
            "
        >
          Lebasi
        </a>
        <div className="hidden md:flex items-center gap-8">
          {[
            "Comprar Lebasi",
            "Contáctanos",
          ].map((item) => (
            <a
              key={item}
              href="#"
              className="text-gray-600 hover:text-blue-400 transition-colors relative group"
            >
              {item}
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
          ))}
        </div>
        <button className="md:hidden">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav >
  )
}



export default function EnhancedLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b">
      <NavBar></NavBar>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-12 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            style={{
              borderRadius: "34px",
            }}
            className="relative rounded rounded-xl overflow-hidden border-b-2 border-gray-200 ">

            <video name="media" controls
              width="100%"
              height="100%"
              controlsList="nodownload"
              poster="https://firebasestorage.googleapis.com/v0/b/node-4030d.appspot.com/o/lebasiScreenshot.png?alt=media&token=b9d91ae4-a563-4175-883f-a8f97db6de19"
            >
              <source
                src="https://firebasestorage.googleapis.com/v0/b/node-4030d.appspot.com/o/lebasiVideo.mp4?alt=media&token=758864a0-b7a8-4252-9d56-848f98c3ac1d"
                type="video/mp4"
              />
              Tu navegador no soporta videos. Descárgalo
              <a href="https://firebasestorage.googleapis.com/v0/b/node-4030d.appspot.com/o/lebasiVideo.mp4?alt=media&token=758864a0-b7a8-4252-9d56-848f98c3ac1d">
                aquí
              </a>
              .
            </video>

          </div>
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                  Nuevo
                </span>

              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                Descubre Lebasi:
                <span className="block text-blue-400">Lactoserum Suizo</span>
              </h1>
              <p className="text-gray-600 text-lg">
                Lebasi es un alimento natural elaborado a base de lactosuero, rico en proteínas, vitaminas, minerales y aminoácidos esenciales. Este alimento es ideal para mejorar la salud de manera integral, ya que limpia, nutre y regenera el organismo desde dentro.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">

              <ToBuyButton></ToBuyButton>
              <MoreAboutUsButton></MoreAboutUsButton>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-24 bg-white">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Por qué elegir Lebasi?
          </h2>
          <p className="text-gray-600">
            Beneficios únicos para tu salud y economía.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-200 rounded-xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform">

              <Icon_1></Icon_1>
            </div>


            <h3 className="text-xl font-semibold mb-3">100% Natural</h3>
            <p className="text-gray-600">
              Sin productos farmacéuticos ni aditivos artificiales. Pura nutrición natural.
            </p>
          </div>

          <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-200 rounded-xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform">
              <Icon_2></Icon_2>
            </div>
            <h3 className="text-xl font-semibold mb-3">
              41 Nutrientes Esenciales
            </h3>
            <p className="text-gray-600">
              Una combinación única de vitaminas, minerales y aminoácidos esenciales.
            </p>
          </div>

          <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-200 rounded-xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform">
              <Icon_3></Icon_3>
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Oportunidad de Negocio
            </h3>
            <p>
              Convierte tu pasión por la salud en una fuente de ingresos. Únete a nuestra comunidad y crece con nosotros.

            </p>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Empieza tu camino hacia una vida más saludable
          </h2>
          <p className="text-gray-600 mb-12 text-lg">
            Haz clic en el botón que corresponde ahora y sé parte de los nuevos éxitos.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <BuyNowButton></BuyNowButton>
            <DistributorButton></DistributorButton>

          </div>
        </div>
      </section>


      <WhatsappButton></WhatsappButton>
    </div>
  );
}



