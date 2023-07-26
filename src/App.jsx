import { useState } from 'react'
import './App.css'
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import { evaluate } from 'mathjs';
import Swal from 'sweetalert2';
import './hojas-de-estilo/sweetalert2.css'

function App() {
  const [input, setInput] = useState('');

  const agregarInput = valor => {
    setInput(input + valor);
  };

  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      Swal.fire({
        title: 'Atencion!',
        text: 'Por favor ingrese valores para realizar algúna operación',
        icon: 'warning',
        confirmButtonText: 'Aceptar'
      })
      //alert('Por favor ingrese valores para realizar los cambios')
    }
  }

  return (
    <>
      <div className='App'>
        <div className='freecodecamp-logo-contenedor'>
          <img src={freeCodeCampLogo} className='freecodecamp-logo' alt="logo de freecodecamp" />
        </div>
        <div className='contenedor-calculadora'>
          <Pantalla input={input} />
          <div className='fila'>
            <Boton manejarClic={agregarInput}>1</Boton>
            <Boton manejarClic={agregarInput}>2</Boton>
            <Boton manejarClic={agregarInput}>3</Boton>
            <Boton manejarClic={agregarInput}>+</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClic={agregarInput}>4</Boton>
            <Boton manejarClic={agregarInput}>5</Boton>
            <Boton manejarClic={agregarInput}>6</Boton>
            <Boton manejarClic={agregarInput}>-</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClic={agregarInput}>7</Boton>
            <Boton manejarClic={agregarInput}>8</Boton>
            <Boton manejarClic={agregarInput}>9</Boton>
            <Boton manejarClic={agregarInput}>*</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClic={calcularResultado}>=</Boton>
            <Boton manejarClic={agregarInput}>0</Boton>
            <Boton manejarClic={agregarInput}>.</Boton>
            <Boton manejarClic={agregarInput}>/</Boton>
          </div>
          <div className='fila'>
            <BotonClear manejarClear={() => setInput('')}>
              Clear
            </BotonClear>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;