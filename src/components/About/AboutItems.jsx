import React from 'react'
import './about.css'

const AboutItems = () => {
  return (
      <>
    <article className='aboutItems_container'>
        <div className='image_container'><img src='https://cdn.pixabay.com/photo/2015/06/19/14/48/red-rose-815001_960_720.jpg' alt='flower'/></div>
        <h1>My Name </h1>
        <h2>What you do ?</h2>
        <ul className='ul'>
            <li>Abitur mit Leistungskurs Chemie und Informatik</li>
            <li>Bullet points</li>
            <li>Bullet points</li>
            <li>Bullet points</li>
            <li>Bullet points</li>
            <li>Bullet points</li>
            <li>Bullet points</li>
            <li>Bullet points</li>



        </ul>
        </article>
        </>
  )
}

export default AboutItems