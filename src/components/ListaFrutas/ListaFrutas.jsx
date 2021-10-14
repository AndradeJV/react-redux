import React from 'react';
import { useSelector } from 'react-redux';
import AdicionarFruta from '../AdicionarFrtua/AdicionarFruta';
import Fruta from '../Fruta/Fruta';


const ListaFrutas = () => {

  const frutas = useSelector(state => state.frutasReducers.frutas)

  return(
    <>
      <h1>Lista de frutas </h1>
      <AdicionarFruta/>
      {
        frutas.map(fruta => (
          <Fruta 
            key={fruta.id} 
            fruta={fruta} 
          />
        ))
      }
    </>
  );
}

export default ListaFrutas;