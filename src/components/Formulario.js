import React, {useState} from 'react';
import shortid from 'shortid';
import Error from './Error';


const Formulario = ({guardarGasto, guardarCrearGasto}) => {

  const [nombre, guardarNombre] = useState('');
  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false);

  const agregarGasto = e => {
    e.preventDefault();

    //validar
    if (cantidad < 1 || isNaN(cantidad) || nombre.trim(cantidad) === ''){
      guardarError(true);
      return;
    }
    guardarError(false);
    // construir el gasto
    const gasto = {
      nombre,
      cantidad,
      id: shortid.generate(),
    }
    // pasar el gasto al componente principal
    guardarGasto(gasto);
    guardarCrearGasto(true);
    // resetear el form
    guardarCantidad(0);
    guardarNombre('');
  }

  return (
    <form onSubmit={agregarGasto}>
      <h2>Agrega tus gastos aqui</h2>
      { error ? <Error  mensaje="Ambos campos son obligatorios o presupuesto incorrecto"/> : null}
      <div className="campo">
        <label>Nombre gastos</label>
        <input type="text"
          className="u-full-width"
          placeholder="Ej transporte"
          value={nombre}
          onChange={(e => guardarNombre(e.target.value))}
        />
      </div>
      <div className ="campo">
        <label>Cantidad Gasto</label>
        <input type="number"
          className="u-full-width"
          placeholder="Ej 300"
          value={cantidad}
          onChange={(e => guardarCantidad(parseInt(e.target.value, 10)))}
        />
      </div>
      <div>
        <input type="submit"
          className="button-primary u-full-width"
          value="Agregar gasto"
        />
      </div>
    </form>
  );
};

export default Formulario;