import Link from "next/link";

export default function MobileMenu(){
  return (
    <nav>
      <Link href="#">Início</Link>
      <Link href="#">Sobre</Link>
      <Link href="#">Contato</Link>
      <Link href="#">Catalogo online</Link>
    </nav>
  )
}