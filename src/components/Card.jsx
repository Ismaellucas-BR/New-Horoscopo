import React from 'react'
import Data from '../../data/signos.json'
function Card() {
  return (
    Data.map((signo)=>{
        <div key={signo.id}>
            <h1>{signo.name}</h1>
        </div>
    })
  )
}

export default Card