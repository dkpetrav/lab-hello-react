import ironhackLogo from '../images/ironhack-logo-xs.png'
import menuTop from '../images/menu-top-xs.png'

function Navbar() {
  return (
   
      <nav>      
        <img id="nav-img" src={ironhackLogo} alt="logo" />
        <img id="nav-img" src={menuTop} alt="logo" />
      </nav>
   
  )
}

export default Navbar
