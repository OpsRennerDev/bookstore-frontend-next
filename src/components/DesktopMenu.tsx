import Link from "next/link";

export default function DesktopMenu(){
  return (
    <nav className="hidden md:flex items-center space-x-8">
      <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Início</Link>
      <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Sobre</Link>
      <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contato</Link>
      <Link 
        href="#"
        className="
          bg-linear-to-r
          from-blue-600
          to-purple-600
          text-white px-6 py-2 rounded-full
          hover:shadow-lg transform hover:scale-105 transition-all duration-300
        "
      >Catalogo online</Link>
    </nav>
  )
}