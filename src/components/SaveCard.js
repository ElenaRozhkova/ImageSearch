import React from 'react';
import imgCorb from '../images/close.svg';
import { Link, useHistory } from 'react-router-dom'; // импортируем хук

function SaveCard({cardToCorb, setCardToCorb}) {
    const history = useHistory(); 

    const handleRemoveProductFromCorb=(item)=>{
        const newCartProducts = cardToCorb.filter(card => {
            return card.id !== item.id;}
            );
        setCardToCorb(newCartProducts);

    }
  return (<>
   
  <div className="Photo">
  <button className="header__text" onClick={() => history.goBack()}>Go Back</button>
  </div>
  <div className="App-cards App App-content">
      { cardToCorb.map((item, i) =>         
     <div className="Card" key={i}>
              <Link to={`/${item.id}`} className="header__text">
        <img className="Card-image" src={item.urls.regular} alt={item.alt_description}  />
      </Link>
        <div className="corbContainer">
          <div>
             <div className="Card-title">{item.description}</div>
             <div className="Card-subtitle">{item.user.name}/{item.user.location}</div>
          </div> 
        <img className="btnCorb" src={imgCorb} alt ="corb" onClick={()=>handleRemoveProductFromCorb(item)} />
        </div> 
      </div> 
     
        )
      }
      </div> 

      </>
       
  );
}

export default SaveCard; 