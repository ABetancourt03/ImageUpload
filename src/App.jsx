import Header from './components/Header'
import Dropzone from './components/Dropzone'

function App () {
  return (
    <>
      <Header />
      <main className='flex justify-center items-center w-full h-screen'>
        <Dropzone />
      </main>
    </>
  )
}

export default App
