import './App.css' 
import React, { useEffect, useState } from 'react'
import useFetch from './hooks/useFetch'
import SumaryCard from './components/SumaryCard';
import ResidentsList from './components/ResidentsList';
import Search from './components/Search';

function App() {
  
   const [location, setLocation,loadingLoc,errorLoc ] = useFetch();
   const [locationId, setLocationId] = useState(3);
   const [resetPage, setResetPage] = useState(false);
   const [errorApi, setErrorApi] = useState(null);

   useEffect(() =>{
      const URL = `https://rickandmortyapi.com/api/location/${locationId}`
      console.log(URL) 
      
      setLocation(URL)
      setResetPage(true)
   },[locationId])

   console.log("eror app ",errorLoc)

   useEffect(() => {
      
      setErrorApi(errorLoc);   
      // setTimeout(()=> {
      //      setErrorApi('')
      //    },3000)       
  }, [errorLoc]);

  useEffect(() => {
   console.log("eror appi eff ", errorApi);
}, [errorApi]);
  
   

   if(!location) return null; 
 
  return (
     <>
    
    {errorApi && <div className="error">{errorApi}</div>}
     {loadingLoc ? (<h1>🏁Loading...🏁</h1>): (null)}
     
      <div className='hero' />
      <div className='container'>
         <Search setLocationId = {setLocationId} />
         <SumaryCard localiz = {location} />
         <ResidentsList residents = {location?.residents || [] }  
            resetPage={resetPage}
            setResetPage={setResetPage}/>
          
      </div>
     </>
  )
}

export default App
