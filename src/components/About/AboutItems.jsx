import React from 'react'
import './about.css'
import{AiFillLinkedin} from 'react-icons/ai'
import{AiFillTwitterCircle} from 'react-icons/ai'

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
        <div className="icons_container">

        <a  href='https://linkedin.com'><AiFillLinkedin/></a>
        <a  href='https://twitter.com'><AiFillTwitterCircle/></a>
        </div>

        </ul>
        </article>
        </>
  )
}

export default AboutItems