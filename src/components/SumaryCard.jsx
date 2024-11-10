import React from 'react';
import './Cardinfo.css';

function SumaryCard({ localiz }) {
  return (
    <div className="cardInfo">
      <div className="cardInfo__name">        
        <h2>{localiz.name}</h2>
      </div>
      <div className="cardInfo__container">
        <div className="cardInfo__col-size2"  >
          <h3 className="cardInfo__title">Type:</h3>
          <p className='cardInfo__item-data'>{localiz.type}</p>
        </div>
        <div className="cardInfo__col-size2" >
          <h3 className="cardInfo__title">Dimension:</h3>
          <p className='cardInfo__item-data'>{localiz.dimension}</p>
        </div>
        <div className="cardInfo__col-size1"  >
          <h3 className="cardInfo__title">Population:</h3>
          <p className='cardInfo__item-data'>{localiz.residents.length}</p>
        </div>
      </div>
    </div>
  );
}

export default SumaryCard;
