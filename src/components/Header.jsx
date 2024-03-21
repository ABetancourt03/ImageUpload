import Logo from '../icons/Logo'
import Moon from '../icons/Moon'
import '../styles/Header.css'

function Header () {
  return (
    <header>
      <div className='header-content'>
        <Logo />

        <button className='theme-button'>
          <Moon />
        </button>
      </div>
    </header>
  )
}

export default Header
