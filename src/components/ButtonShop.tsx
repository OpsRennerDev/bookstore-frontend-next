import Link from "next/link";

type ButtonVariant = keyof typeof styles

type ButtonProps = {
  title: string
  variant: ButtonVariant
}

export default function ButtonShop ({
  title,
  variant
}: Readonly<ButtonProps>){
  return(
    <Link 
      href="#"
      className={styles[variant]}
    >{title}</Link>
  )
}

const styles = {
  forHeader: "bg-linear-to-r from-blue-600 to-purple-600 text-white {} px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300",
  forHeroSection: "bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer",
  other: "border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 cursor-pointer"
}


