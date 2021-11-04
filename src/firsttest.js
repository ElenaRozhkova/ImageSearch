import './App.css';
import { useState } from 'react';
import React from 'react';
import Cards from './Cards.js';
import Friend from './Friend';
import ReactTooltip from 'react-tooltip';
import AwesomeSlider from 'react-awesome-slider';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';
import DataGrid from 'react-data-grid';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

import img1 from './images/place-kolsky2.jpg';
import img2 from './images/place-kosa2.jpg';
import img3 from './images/place-winter-baikal2.jpg';
import { Route, Link } from 'react-router-dom';


function App() {
  const [value, setValue] = useState('');

  var inputStyles = {
    border: '1px solid #cbcbcb',
    color: '#525252',
};
var placeholderStyles = {
    ...inputStyles,
    color: 'red',
};
  const onCangetest = (e) => {
    setValue(e.target.value);
  }


  let hStyle = { color: 'red' };
  console.log(value.length);
  if (value.length > 5) { hStyle = { color: 'green' }; }
  const [x, setX] = useState(false);

  const Friends=[
    { id:1,
      name:'Ira',
      nachname: 'Gavrilicheva',},
    { id:2,
      name:'Natascha',
      nachname: 'Razmachova',},
    { id:3,
      name:'Yulia',
      nachname: 'Kulagina',}
    ]

  const test =()=>{
    <div>hallo</div>
    console.log("hallo");
  } 

/*
const AutoplaySlider = withAutoplay(AwesomeSlider);
const sliderauto = (
  <AutoplaySlider style={{width: '300px', height: '300px'}}
  play={true}
  cancelOnInteraction={false} // should stop playing on user interaction
  interval={2000}
>
    <div style={{width: '300px', height: '300px'}} data-src={img1} />
    <div style={{width: '300px', height: '300px'}} data-src={img2} />
    <div style={{width: '300px', height: '300px'}} data-src={img3} />
  </AutoplaySlider>
);

const slider = (
  <AwesomeSlider style={{width: '300px', height: '300px'}}
    animation="foldOutAnimation"
    cssModule={[CoreStyles, AnimationStyles] }
  >
    <div style={{width: '300px', height: '300px'}} data-src={img1} />
    <div style={{width: '300px', height: '300px'}} data-src={img2} />
    <div style={{width: '300px', height: '300px'}} data-src={img3} />
  </AwesomeSlider>
);
*/
const slider3 = (
  <AwesomeSlider style={{width: '300px', height: '300px'}}
    media={[
      {
        source: img1,
      },
      {
        source: img2,
      },
      {
        source: img3,
      },
    ]} 
  />
);
<div>

</div>
const columns = [
  { key: 'id', name: 'ID' },
  { key: 'title', name: 'Title' }
];

const rows = [
  { id: 0, title: 'Example' },
  { id: 1, title: 'Demo' }
];



const Images=[1,2,3,4,5,6,7];
const onButtonClick =()=>{
alert ("hallo");
}

  return (
    <>


    <Route path="/:id" >
      <Friend />
           
     </Route>
     <Route exact path="/" >
     {Friends.map((item,i)=>(
         <div key={item.id}>
          <Link to={`${item.id}`} >{item.name}{item.nachname}</Link> 
          <div data-tip='' data-for={item.name}>{item.name}{item.nachname}</div>
       
          <ReactTooltip id={item.name}>{item.name}</ReactTooltip>
         </div>
        
      ))
      }
     <input value={value} onChange={onCangetest} style={value.length > 6 ? inputStyles : placeholderStyles}></input>
      <label style={value.length > 6 ? { color: 'red' } : { color: 'green' }} >{value}</label>
      <button disabled={value.length > 6 ? false : true} onClick={onButtonClick}>nxngx</button>
      <div>
      <input type="checkbox" checked={x} onChange={() => setX(!x)} />
      </div>
      {x && <Cards />}



      {slider3}
      <DataGrid style= {{width:'500px', marginTop:'200px'}} columns={columns} rows={rows}  />

      {
      Images.map ((i)=>
      (
      <img src={`https://randomfox.ca/images/${i}.jpg`}  />)
          
      ) }
    
     </Route>
     
    </>

  );
}

export default App;
