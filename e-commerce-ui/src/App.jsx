import './App.css'
import Navigation from './Customer/components/NavigationBar/Navigation'
import MainCarousel from './Customer/components/HomeCarousel/MainCarousel'
import Homepage from './Customer/Pages/Homepage/Homepage'
function App() { 

  return (
    <>
    <Navigation/>
    <div>
      <Homepage/>
    </div>
    </>
  )
}

export default App
