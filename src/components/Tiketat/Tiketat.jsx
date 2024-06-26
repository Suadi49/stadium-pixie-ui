import React, {useState, useEffect} from 'react'
import './Tiketat.css'
import Navbar from '../Navbar/Navbar'
import StadiumSeat from './StadiumSeat'
import ConcertSeat from './ConcertSeat'
import Footer from '../Footer/Footer'
import Sponsors from '../Eventet/Sponsors/Sponsors'
import Aos from 'aos'
import 'aos/dist/aos.css'

const eventTypes = [
  { label: 'Futboll', value: 'Futboll' },
  { label: 'Koncert', value: 'Koncert' }
];

const Tiketat = () => {

  useEffect(() => {
    Aos.init({duration: 2000, easing: 'ease-out-back'})
  },[])

  const [selectedType, setSelectedType] = useState('');

  function handleTypeChange(event) {
    setSelectedType(event.target.value);
  }

  function renderView() {
    if (selectedType === 'Futboll') {
      return (
        <>
        <StadiumSeat />
        </>
      );
    } else if (selectedType === 'Koncert') {
      return (
        <>
        <ConcertSeat />
        </>
      );
    }
  }

  return (
    <>
      <div className="events">
        <h2 data-aos='fade-right'>TIKETAT</h2>
      </div>

    <div className="dropdownContainer">
    <div className='titleE'>
      <h2 data-aos='slide-left'>Shiko pamje realistike të stadiumit</h2>
      <p data-aos='slide-right'>Përjeto eksperiencën më të bukur të fushës së gjelbër !</p>
    </div>

    <div className="dropdown" data-aos='fade-up'>
      <select className='selectT' value={selectedType} onChange={handleTypeChange}>
        <option value="">Zgjedhni llojin e eventit:</option>
        {eventTypes.map((type) => (
          <option key={type.value} value={type.value}>
            {type.label}
          </option>
        ))}
      </select>
    </div>
    </div>
    {renderView()}
    <Sponsors />
    <Footer />
    </>
  )
}

export default Tiketat
