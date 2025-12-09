import React from 'react'

export default function RoomCard({name, price}:{name:string, price:string}){
  return (
    <div style={{padding:12, border:'1px solid #eee'}}>
      <h4>{name}</h4>
      <p>{price}</p>
    </div>
  )
}
