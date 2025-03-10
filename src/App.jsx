import './App.css'
import Title from './components/Title/title'
import FirstItem from './components/FirstItem/firstItem'
import SecondItem from './components/SecondItem/secondItem'
import Footer from './components/Footer/footer'

function App() {
  return (
    <>
      <section className='container'>
        <Title />

        <main className='main-wrapper'>
          <FirstItem />
          <SecondItem />

        </main>
      </section>
      <Footer/>
    </>
  )
}

export default App
