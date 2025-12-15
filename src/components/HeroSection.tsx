import ButtonShop from "./ButtonShop";
import Chip from "./Chip";
import { Heart } from "lucide-react";

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

          <div className="relative transform transition-all duration-1000 delay-300">
            <section className="relative">
              <figure className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop"
                  alt="Alguma imagem aqui"
                  className="w-full h-96 object-cover rounded-2xl"
                />
                <figcaption className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-lg">
                  <div className="flex items-center gap-2">
                    <Heart className="text-red-500 w-5 h-5" />
                    <span className="font-semibold">Mais de 1M de leitores</span>
                  </div>
                </figcaption>
              </figure>
            </section>
          </div>


        </div>
      </div>
    </section>
   )
}