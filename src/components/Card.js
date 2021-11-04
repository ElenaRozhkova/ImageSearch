import React from 'react';
import { Link } from 'react-router-dom'; // импортируем хук
import imgCorb from '../images/1.png';

function Card({cards, sendCard}) {

  const handleAddProductToCart=(item)=>{
    sendCard(item);
  }  
  return (<>
  <div className="App-cards App App-content">
      { cards.map((item, i) =>         
     <div className="Card" key={i}>
      <Link to={`/${item.id}`} className="header__text">
        <img className="Card-image" src={item.urls.regular} alt={item.alt_description}  />
      </Link>
        <div className="corbContainer">
          <div>
             <div className="Card-title">{item.description}</div>
             <div className="Card-subtitle">{item.user.name}/{item.user.location}</div>
          </div> 
        <img className="btnCorb" src={imgCorb} alt ="corb" onClick={()=>handleAddProductToCart(item)} />
        </div> 
      </div> 
      
        )
      }
 </div>
      </>
       
  );
}

export default Card; 