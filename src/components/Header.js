import React from 'react';
import imgCorb from '../images/1.png';
import { Link} from 'react-router-dom'; // импортируем хук

function Header({cardToCorb, ...props}) {

  return (<>
      <Link to='/ImageSearch/corb' >
          <div className="App-width">
             <img className="imgCorb" src={imgCorb} alt ="corb" />
             <div>Cound Films: {cardToCorb.length}</div>
          </div>
      </Link>

     </>
      
  );
}

export default Header; 