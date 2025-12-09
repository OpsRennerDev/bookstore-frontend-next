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
    <div className="min-h-screen">
      {children}
    </div>
  )
}