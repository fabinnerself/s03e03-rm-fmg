import React from 'react'
import ResidentCard from './ResidentCard'
import usePagination from '../hooks/usePagination'
import './residentList.css'
import { useEffect } from 'react'

function ResidentsList({ residents, errorL, resetPage, setResetPage}) {
    
    const totalItems = residents ? residents.length : 0
    const itemsPerPage = 8
  
    const [page, maxPage,onPrev, onNext,currentPageItems, itemBtn, onClickPage] = usePagination(itemsPerPage, totalItems, residents)
  

    useEffect(() => {
      if (resetPage) {
        onClickPage(1)
        setResetPage(false)
      }
    }, [resetPage, onClickPage, setResetPage])

    console.log("page ",page)
    
  return (<>
    <div className='cards'>{currentPageItems?.map( resident => {

        const residenteSplit = resident.split('/')
        const id = residenteSplit[residenteSplit.length - 1 ]
        return ( 
          <ResidentCard key = {id} url={resident}/> )

    })}</div>
      <br />
      <div className='cards__pagination' >
      <button   onClick={() => onClickPage(1)} disabled={page === 1}   className='cards__btn'>{'|<'}</button>
        <button onClick={onPrev} disabled={page === 1} className='cards__btn'>  {'<'} </button>
        {itemBtn.map((item, index) => (
          <button key={index} onClick={() => onClickPage(item)} disabled={page === item} className='cards__btn'>
            {item}
          </button>
        ))}
        <button onClick={onNext} disabled={page === maxPage} className='cards__btn'> {'>'} </button>
        <button  onClick={() => onClickPage(maxPage)}  disabled={page === maxPage}   className='cards__btn'>{'>|'}</button>
        <p className='cards__page'>{page} / {maxPage}</p>
      </div> 
      {errorL ? (<p>{errorL}</p>) : (null)}    
    </>
  )
}

export default ResidentsList