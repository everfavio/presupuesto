import React from 'react';

const Gasto = ({gasto}) => {
  return (
    <div>
      <li className="gastos">
        <p>{gasto.nombre}
          <span className="gasto">${gasto.cantidad}</span>
        </p>
      </li>
    </div>
  );
};

export default Gasto;