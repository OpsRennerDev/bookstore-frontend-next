import { BookOpen } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">

          <div>
            <div id="logo" className="flex items-center space-x-3 mb-4">
              <div className="bg-linear-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
                <BookOpen className="text-white w-6 h-6"/>
              </div>
              <span className="text-xl font-bold">RennerStore</span>
            </div>
            <p className="text-gray-600">Conectando pessoas em suas próprias histórias, transformando vidas há mais de 20 anos!</p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">Catalogo online</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Lancamentos</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Ofertas</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>


          <div>
            <h4 className="font-semibold text-lg mb-4">Atendimento rápido</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Segunda a Sexta: 8h às 18h</li>
              <li>Sábado: 8h às 14h</li>
              <li>Domingo: Fechado</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Receba novidades e promoções</p>
            <div className="flex">
              <input 
                type="email"
                placeholder="Digite seu email"
                className="
                flex-1 px-4 py-2
                bg-gray-800 border
                border-gray-700 rounded-l-lg
                focus:outline-none focus:ring-2
                focus:ring-blue-500
                "  
                />
              <button
                className="
                bg-linear-to-r from-blue-600 to-purple-600
                px-4 py-2 rounded-r-lg
                hover:shadow-lg hover:scale-105 transition-all duration-300
                "
                >
                OK
              </button>
            </div>
          </div>



        </div>
      
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 RennerStore. Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  )
}