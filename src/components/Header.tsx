'use client'

import { useState } from "react";
import { BookOpen, Menu, X } from "lucide-react";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

export default function Header(){
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return(
    <header className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto p-4">

        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">{/* View começa aqui */}
            <div className="bg-linear-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
              <BookOpen className="text-white w-8 h-8" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                RennerStore
              </h1>
              <p className="text-sm text-gray-600">Seu universo literário</p>
            </div>
          </div>

          {/* Meu menu principal */}
          <DesktopMenu />

          <button className="md:hidden" onClick={ () => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <MobileMenu />
        )}

      </div>
    </header>
  )
}