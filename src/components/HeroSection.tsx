import ButtonShop from "./ButtonShop";
import Chip from "./Chip";

export default function HeroSection(){
   return (
    <section className="relative overflow-hidden py-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div className="space-y-8 transform transition-all duration-1000">
            <div className="space-y-4">
              <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                Descubra sua
                <span className="block bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  proxima aventura
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Milhares de livros esperando para transformar sua jornada.
                Desde clássicos até lançamentos exclusivos.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <ButtonShop title="Explorar catálogo" variant="forHeroSection" />
              <ButtonShop title="Visite a loja" variant="other" />
            </div>

            <div className="flex items-center gap-8 pt-4">
              <Chip title="50K" description="Livros" />
              <Chip title="15K+" description="Leitores" />
              <Chip title="4.9" description="Avaliação" />
            </div>
          </div>

          <div className="space-y-8 transform transition-all duration-1000">
            <div className="space-y-4">
              <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                Descubra sua
                <span className="block bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  proxima aventura
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Milhares de livros esperando para transformar sua jornada.
                Desde clássicos até lançamentos exclusivos.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <ButtonShop title="Explorar catálogo" variant="forHeroSection" />
              <ButtonShop title="Visite a loja" variant="other" />
            </div>

            <div className="flex items-center gap-8 pt-4">
              <Chip title="50K" description="Livros" />
              <Chip title="15K+" description="Leitores" />
              <Chip title="4.9" description="Avaliação" />
            </div>
          </div>


        </div>
      </div>
    </section>
   )
}