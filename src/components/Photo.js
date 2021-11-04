import React from 'react';
import { useParams, useHistory  } from 'react-router-dom'; // импортируем хук

function Photo({card}) {
    let { id } = useParams(); // получаем доступ к параметру URL
    const mycard = card.find(f => f.id === id);
    const history = useHistory(); 
  return (
    <div className="Photo">
      <button className="header__text" onClick={() => history.goBack()}>Go Back</button>
         <img className="Photo-image" src={mycard.urls.regular} alt={mycard.description}  />
         <div className="Photo-title">{mycard.description}</div>
    </div>
  );
}

export default Photo; 