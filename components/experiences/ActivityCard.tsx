import React from 'react'
export default function ActivityCard({title, description}:{title:string, description:string}){
  return (
    <article style={{padding:12, border:'1px solid #eee', borderRadius:8}}>
      <h4>{title}</h4>
      <p>{description}</p>
    </article>
  )
}
