import React from 'react';
import AdicionarFruta from '../AdicionarFrtua/AdicionarFruta';
import Fruta from '../Fruta/Fruta';


const ListaFrutas = () => {

  const frutas = [
    {id: 1, nome: 'Maçã', quantidade: 5},
    {id: 2, nome: 'Uva', quantidade: 15},
  ];

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