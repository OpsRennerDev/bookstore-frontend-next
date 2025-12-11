import ContainerLogin from "@/src/components/ContainerLogin";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Autenticação",
}

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return(
    <ContainerLogin>
      {children}
    </ContainerLogin>
  )
}