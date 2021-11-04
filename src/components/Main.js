import React from 'react';
import { Route, Switch } from 'react-router-dom'; // импортируем хук
import Input from './Input';
import api from './Api';
import Card from './Card';
import Photo from './Photo';
import Header from './Header';
import SaveCard from './SaveCard';

function Main() {
    const [card, setCard] = React.useState([]);
    const [cardToCorb, setCardToCorb] = React.useState([]);

    const onUpdateSearch=(name)=>{
        api.search(name)
            .then((res)=>{          
            setCard(res.results);
            })
    }

    const handleCardToCorb=(item)=>{
      setCardToCorb([item, ...cardToCorb]);
    }

  return (<>
    <Header cardToCorb={cardToCorb} setCardToCorb={setCardToCorb} />

    <Switch >
    <Route path="/ImageSearch/corb" exact >
       <SaveCard cardToCorb={cardToCorb} setCardToCorb={setCardToCorb}/>            
    </Route>

    <Route path="/ImageSearch/:id">
        <Photo  card={card} />
    </Route>

    <Route path="/ImageSearch/" exact >
      <Input classname ="Main-search" onUpdateSearch={onUpdateSearch}  / >
      <Card cards={card} sendCard={handleCardToCorb}/>                       
    </Route>
    </Switch>

      </>
  );
}

export default Main; 