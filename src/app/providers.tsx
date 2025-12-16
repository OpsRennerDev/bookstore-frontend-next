import { UserProvider } from "../context/useUserContext";

export function Providers({
  children
}: Readonly<{children: React.ReactNode}>) {
  return (
    <UserProvider>
      {children}
    </UserProvider>
  )
}