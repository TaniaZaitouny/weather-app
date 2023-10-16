import React, { useState,useEffect, useCallback } from 'react';
import './App.css';
import SearchBox from './SearchBox';
import Content from './Content';

function App() {
  const [location, setLocation] = useState('');
  const [temp, setTemp] = useState('0');
  const [stat , setStat] = useState('No Status');
  const [bg, setBg] = useState('bgCold');
 
  const query = useCallback(async()=>{
    if(location)
    {
      try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=7bede76642b739f496adb67a21918a0a`);
        const data = await response.json();
        setTemp(data.main.temp);
        setStat(data.weather[0].main);
      
       
      }
      catch(error){

        console.log("Country not found");
        
     
      }
    }
  },[location]);

  const setbg = useCallback(() => {
    if (stat.includes("sun") || stat.toLowerCase().includes("clear")){
      setBg('bgWarm');
    }
    else{
      setBg('bgCold');
    }
  },[stat]);
      
    
    
  
 

  useEffect(() => {
    query(); 
  }, [query,location]);
  useEffect(() => {
    setbg(); 
  }, [setbg,stat]);
 


      return (
        <div className={`App ${bg} cold`}>
        <SearchBox location={location} setLocation={setLocation} />
        <Content location={location} temp={temp} stat={stat}/>
   </div>
      );
   

}

export default App;
