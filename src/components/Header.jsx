import Logo from '../icons/Logo'
import Moon from '../icons/Moon'
import '../styles/Header.css'

function Header () {
  return (
    <header>
      <Logo />

      <button className='theme-button'>
        <Moon />
      </button>
    </header>
  )
}

export default Header
