import React from 'react'
import ActivityCard from './ActivityCard'

export default function ActivityGrid(){
  const activities = [
    {title:'Rice Planting', description:'Plant rice with local farmers.'},
    {title:'Village Cooking', description:'Cook traditional meals.'},
    {title:'Jackfruit Tour', description:'Explore jackfruit orchards.'}
  ]
  return (
    <section style={{display:'grid',gap:16}}>
      {activities.map(a => <ActivityCard key={a.title} title={a.title} description={a.description} />)}
    </section>
  )
}
