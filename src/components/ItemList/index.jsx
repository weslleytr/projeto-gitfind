import React from 'react'
import './styles.css';

function ItemList({title, description, redirecting}) {
  return (
        <div className='item-list'>
            <strong>{title}</strong>
            <p>{description}</p>
            <button onClick={() => window.open(redirecting, "_blank")}>
                Acessar Repositório
            </button>
            <hr />
        </div>
  );
}

export default ItemList;