import Link from "next/link";
import ButtonShop from "./ButtonShop";

export default function DesktopMenu(){
  return (
    <nav className="hidden md:flex items-center space-x-8">
      <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Início</Link>
      <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Sobre</Link>
      <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contato</Link>
      <ButtonShop title="Catalogo online" variant="forHeader"/>
    </nav>
  )
}