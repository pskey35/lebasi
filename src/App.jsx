export default function EnhancedLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Navigation */}
      <nav className="sticky top-0 backdrop-blur-md bg-white/80 px-6 py-4 border-b border-purple-100 z-10">
        <div className="container mx-auto flex items-center justify-between">
          <a
            href="#"
            className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
          >
            Lebasi
          </a>
          <div className="hidden md:flex items-center gap-8">
            {[
              "¿Qué es Lebasi?",
              "Comprar Lebasi",
              "Ser Distribuidor",
              "Contáctanos",
              "Visitar Tienda",
            ].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-600 hover:text-purple-600 transition-colors relative group"
              >
                {item}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
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
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-12 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
          style={{
            borderRadius: "34px",
          }}
           className="relative rounded rounded-xl overflow-hidden border-b-2 border-gray-200 ">
          
              <video name="media" controls width="100%" height="100%">
                <source
                  src="https://firebasestorage.googleapis.com/v0/b/prueba-62d11.appspot.com/o/lebasi-raganarok%2Flebasi.mp4?alt=media&amp;token=a395f511-8b17-45c8-8eff-59774198db9c"
                  type="video/mp4"
                />
                Tu navegador no soporta videos. Descárgalo
                <a href="https://firebasestorage.googleapis.com/v0/b/prueba-62d11.appspot.com/o/lebasi-raganarok%2Flebasi.mp4?alt=media&amp;token=a395f511-8b17-45c8-8eff-59774198db9c">
                  aquí
                </a>
                .
              </video>
         
          </div>
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="px-4 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
                  Nuevo
                </span>
                <a href="#" className="text-sm text-purple-600 hover:underline">
                  Política de Privacidad
                </a>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                Descubre Lebasi:
                <span className="block text-purple-600">Lactoserum Suizo</span>
              </h1>
              <p className="text-gray-600 text-lg">
                Lebasi es un alimento natural elaborado a base de lactosuero, rico en proteínas, vitaminas, minerales y aminoácidos esenciales. Este alimento es ideal para mejorar la salud de manera integral, ya que limpia, nutre y regenera el organismo desde dentro.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transform hover:-translate-y-1 transition-all shadow-lg hover:shadow-xl">
                Comprar Online
              </button>
              <button className="px-8 py-3 bg-white text-purple-600 border-2 border-purple-600 rounded-xl hover:bg-purple-50 transform hover:-translate-y-1 transition-all">
                Saber Más
              </button>
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
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">100% Natural</h3>
            <p className="text-gray-600">
              Sin productos farmacéuticos ni aditivos artificiales. Pura nutrición natural.
            </p>
          </div>

          <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">
              41 Nutrientes Esenciales
            </h3>
            <p className="text-gray-600">
              Una combinación única de vitaminas, minerales y aminoácidos esenciales.
            </p>
          </div>

          <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Oportunidad de Negocio
            </h3>
            <p className="text-gray-600">
              Únete como distribuidor y construye tu propio negocio exitoso.
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
            <button className="px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:opacity-90 transform hover:-translate-y-1 transition-all shadow-lg hover:shadow-xl">
              Comprar Ahora
            </button>
            <button className="px-10 py-4 bg-white text-purple-600 border-2 border-purple-600 rounded-xl hover:bg-purple-50 transform hover:-translate-y-1 transition-all">
              Únete como Distribuidor
            </button>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-6">
        {[
          { name: "Facebook", color: "blue" },
          { name: "Instagram", color: "pink" },
          { name: "WhatsApp", color: "green" },
        ].map((social) => (
          <a
            key={social.name}
            href="#"
            className={`w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:-translate-y-1 transition-transform hover:shadow-xl`}
          >
            <span className={`text-${social.color}-600 font-medium`}>
              {social.name.slice(0, 2).toLowerCase()}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
