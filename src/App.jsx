import './App.css'
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import Products from './pages/Products/Products'

const App = () => {
  return (
    <>
    <div className="container-1">
     <Navbar />
     <Home />
     <Products />
    </div>
    </>
  )
}

export default App