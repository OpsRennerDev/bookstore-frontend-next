import Header from "@/src/components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "RennerStore",
}

export default function GeneralLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="min-h-screen">
      <Header />
      {children}
    </div>
  )
}