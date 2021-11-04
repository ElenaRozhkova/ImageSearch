
import React from 'react';
import { useParams } from 'react-router-dom'; // импортируем хук


function Friend(props) {
  let { id } = useParams(); // получаем доступ к параметру URL

 console.log(id);
  
  return (
      <div >{id}
        </div>
 
  );
}

export default Friend; 
