import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import './residentcard.css'

function ResidentCard({url}) {
     console.log("url ",url)

     const [resident, setResident] = useFetch();

     useEffect(() =>{
        setResident(url)
     },[url])

      const statusDat = resident?.status.toLowerCase();
     const statusIcon = statusDat ==='alive' ? '🟢' : statusDat ==='dead' ? '🔴' :'⚫'
  return (
    <div className='card'>
        <div className='card__image'>
            <img className='card__image-img' src={resident?.image} alt={resident?.name}></img>
            <span className='card__status'> {statusIcon} {resident?.status}</span>
        </div>
        <h3 className='card__name'>{resident?.name}</h3>
        <div className='card__info'>
            <span className='card__info-item'>
                <span className='card__info-label' >Specie:</span>
                {resident?.species}
             </span>
            <span className='card__info-item'>
                <span className='card__info-label'>Origin:</span>
                {resident?.origin?.name}
            </span>
            
            <span className='card__info-item'>
                <span className='card__info-label'>Episodes where appeared:
                </span>
                {resident?.episode?.length}
            </span>
            
        </div>
    </div>
  )
}

export default ResidentCard