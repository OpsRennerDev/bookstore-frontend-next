import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div>
        <h4>Links Rápidos</h4>
        <ul>
          <li><Link href="#">Catalogo online</Link></li>
          <li><Link href="#">Lancamentos</Link></li>
          <li><Link href="#">Ofertas</Link></li>
          <li><Link href="#">Blog</Link></li>
        </ul>
      </div>


      <div>
        <h4>Atendimento rápido</h4>
        <ul>
          <li>Segunda a Sexta: 8h às 18h</li>
          <li>Sábado: 8h às 14h</li>
          <li>Domingo: Fechado</li>
        </ul>
      </div>

      <div>
        <h4>Newsletter</h4>
        <p>Receba novidades e promoções</p>
        <div>
          <input type="text" />
          <button>OK</button>
        </div>
      </div>



      <div>
        <p>&copy; 2025 RennerStore. Todos os direitos reservados</p>
      </div>
    </footer>
  )
}