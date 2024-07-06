import './App.css'
import { Routes, Route, useParams } from 'react-router-dom'
import Home from '../Home/Home'

const Numero = () => {
  const { numero } = useParams();
  return (
    <h2>El numero ingresado es: {numero}</h2>
  )
}

const Palabra = () => {
  const { palabra, background, color } = useParams();
  return (
    <h2 style={{
      background: `${background}`,
      color: `${color}`,
      fontWeight: `500`,
      padding: `10px 20px`
    }}>
      La palabra es: {palabra} </h2>
  )
}

const App = () => {
  return (
    <>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path='/:numero' element={<Numero />} />
        <Route path='/:palabra/:color/:background' element={<Palabra />} />
      </Routes>
    </>
  )
}

export default App
