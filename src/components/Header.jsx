import Logo from "./Logo"
import DesktopMenu from "./DesktopMenu"
import MobileMenu from "./MobileMenu"


function Header() {
  return (
    <header>
        <nav>
            <Logo />
            <DesktopMenu />
            <MobileMenu />

        </nav>
    </header>
  )
}

export default Header