import DesktopMenu from "./DesktopMenu";

export default function Header(){
  return(
    <>
      <header>
          <div>Logo</div>
          <h1>RennerStore</h1>
          <p>Seu universi literário</p>
        </header>

        <DesktopMenu />
    </>
  )
}