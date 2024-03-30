import { useState, useEffect } from 'react'
import Logo from '../icons/Logo'
import Moon from '../icons/Moon'
import Sun from '../icons/Sun'
import '../styles/Header.css'

function Header () {
  const [theme, setTheme] = useState('light')
  const $body = document.body

  const handleThemeChange = () => {
    if (theme === 'light') {
      setTheme('dark')
      localStorage.setItem('theme', 'dark')
      $body.classList.add('dark')
      $body.classList.remove('light')
    } else if (theme === 'dark') {
      setTheme('light')
      localStorage.setItem('theme', 'light')
      $body.classList.add('light')
      $body.classList.remove('dark')
    }
  }

  useEffect(() => {
    const localTheme = localStorage.getItem('theme')
    if (!localTheme) {
      localStorage.setItem('theme', 'light')
    }

    $body.classList.add(localTheme)
    setTheme(localTheme)
  }, [theme, $body])

  return (
    <header className={theme}>
      <Logo />

      <button onClick={handleThemeChange} className={`theme-button ${theme}`}>
        {
          theme === 'light' ? <Moon /> : <Sun />
        }
      </button>
    </header>
  )
}

export default Header
