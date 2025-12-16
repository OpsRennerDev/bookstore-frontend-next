'use client'
import Footer from "@/src/components/Footer";
import HeroSection from "@/src/components/HeroSection";
import { useUserContext } from "@/src/context/useUserContext";

export default function InitialHome () {

  const {user} = useUserContext()
  return (
    <div>
      <main>
        <p>Ja logado com {user?.email}</p>
        <HeroSection />
        {/* About */}
        {/* Contact */}
      </main>
      <Footer />
    </div>
  )
}