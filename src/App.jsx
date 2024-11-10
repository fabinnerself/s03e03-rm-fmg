import './App.css' 
import React, { useEffect, useState } from 'react'
import useFetch from './hooks/useFetch'
import SumaryCard from './components/SumaryCard';
import ResidentsList from './components/ResidentsList';
import Search from './components/Search';

function App() {
  
   const [location, setLocation,loadingLoc,errorLoc] = useFetch();
   const [locationId, setLocationId] = useState(3);
   const [resetPage, setResetPage] = useState(false);

   useEffect(() =>{
      const URL = `https://rickandmortyapi.com/api/location/${locationId}`
      console.log(URL) 
      
      setLocation(URL)
      setResetPage(true)
   },[locationId])

   if(!location) return null; 
 
  return (
     <>
     {loadingLoc ? (<h1>🏁Loading...🏁</h1>): (null)}
      <div className='hero' />
      <div className='container'>
         <Search setLocationId = {setLocationId} />
         <SumaryCard localiz = {location} />
         <ResidentsList residents = {location?.residents } errorL={errorLoc} 
            resetPage={resetPage}
            setResetPage={setResetPage}/>
      </div>
     </>
  )
}

export default App
