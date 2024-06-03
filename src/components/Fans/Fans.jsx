import React, {useEffect} from 'react'

import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Link } from "react-router-dom";


//import the images 
import KosovoStandard from '../../assets/KosovoStandard.jpg'
import KosovoPremium from '../../assets/KosovoPremium.jpg'
import KosovoJunior from '../../assets/KosovoJunior.jpg'


import Aos from 'aos'
import 'aos/dist/aos.css'

//array named Data
const Data = [
    
  {
    id:1,
    imgSrc:KosovoPremium,
    destTitle:'Kosovo Premium Fan',
    location: 'Actual Premium Kosovar membership card.',
    grade: 'Only for',
    fees: '35€',
    description: '15% discount at our Offical Online Shop, Advance Ticket Purchase, All of the benefits of the other plans.'
  },

  {
    id:2,
    imgSrc:KosovoStandard,
    destTitle:'Kosovo Standard Fan',
    location: 'Actual Kosovar digital card.',
    grade: 'Free',
    fees: '0€',
    description: '5% discount on your first purchase on the Official Online Store, Contests and giveaways.'
  },

  {
    id:3,
    imgSrc:KosovoJunior,
    destTitle:'Kosova Junior Fan',
    location: 'Actual Junior Kosovar membership card.',
    grade: 'Only for',
    fees: '20€',
    description: 'Advance Ticket Purchase, Yearly surprise gift.'
  },

]



const Fans = () => {
  
  //create a react hook to add scroll animation
  useEffect(() => {
    Aos.init({duration: 2000})
  },[])



  return (
<>
<div class="events">
          <h2 data-aos='fade-right'>FANS</h2>
        </div>
    <section className='main container section'>

      <div className="secTitle">
        <h3 data-aos="fade-right"  className="title">
          BASHKOHU ME KOMBETAREN
        </h3>
      </div>

      <div className="secContent grid">
        
        {
          Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{
            return( 
              <div key={id} className="singleDestination" data-aos="fade-up">
                
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                     <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}</span>
                    </div>
                    <div className="price">
                      <span>{fees}</span>
                    </div>
 
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className='btn flex'>
                  <Link to="/login">
                    BASHKOHU TANI <HiOutlineClipboardCheck className='icon' />
                  </Link>
                    {/*<HiOutlineClipboardCheck className='icon' /> */}
                  </button>
                </div>
              </div>
            )
            
          })
        }

      </div>
    </section>
    <Footer/>
    </>
  )
}

export default Fans