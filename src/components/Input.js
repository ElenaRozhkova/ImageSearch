import React from 'react';

function Input({onUpdateSearch}) {
    const [search, setSearch] = React.useState('');

    const changeSearch=(e)=>{
        setSearch(e.target.value);
    }
   
    const handleSubmit=(e)=>{
        e.preventDefault();
        onUpdateSearch(search);
    }

  return (
    <form  className="Main-content Main-search" onSubmit={handleSubmit}>
         <input className="Input" type="text" value={search} onChange={changeSearch} required id="Search" name="Search" placeholder="Search image" />
         <button type="submit" className="Button">Search</button>
    </form>
 
  );
}

export default Input; 