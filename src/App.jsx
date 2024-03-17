

import './App.css'

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import PropertyDetails from './Pages/PropertyDetails/PropertyDetails'
import Header from './Components/Header/Header'
import Properties from './Pages/Properties/Properties'
import ContactUs from './Pages/ContactUs/ContactUs'


function App() {
  

  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route  path='/VillaAgency' element={<Home/>} />
        <Route  path='/properties' element={<Properties/>} />
        <Route path='/propertyDetails' element={<PropertyDetails/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
