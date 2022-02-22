import logo from './logo.svg';
// import './App.css';
// import styled from 'styled-components'

import MovieComponent from './component/MovieComponent';
import MovieHeader from './component/MovieHeader';
import { useState } from 'react';
import Footer from './component/Footer';




function App() {
  const[searchitem,setsearchitem]=useState({name:"",
stype:""})

const handleheader=(v1,v2)=>{
  console.log(v1,v2)
  setsearchitem({name :v1 ,
    stype:v2 })
    
  }

  console.log(searchitem.name,searchitem.stype)

  return (
    <div className="App">
      <MovieHeader handleheader={handleheader}/>      
      <MovieComponent name={searchitem.name} stype={searchitem.stype}/>
      

      <Footer/>
    </div>
  );
}

export default App;
