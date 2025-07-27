import { Calendar, MapPin, X } from 'lucide-react'
import style from './eventModal.module.css'
import { useEffect, useRef } from 'react';

const placeHolder = {
  name: 'New York Yankees vs. Baltimore Orioles',
  startDate: 'Fri, Sep 26',
  startTime: '13:05',
  eventType: 'Sports',
  location: 'Yankee Stadium'
};

export const EventModal = () => {
  
  const modalRef = useRef();
  
  const onClose = () => {
    console.log('cerrando')
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={style.container}>
      <div className={style.modalContent} ref={modalRef}>
        <button onClick={onClose}><X size={20}/></button>
        <img src="https://placehold.co/600x250" alt="" />
        <div className={style.name}>
          <h2>{placeHolder.name}</h2>
          <p>$50 - $275</p>
        </div>
        <div className={style.sportType}>
          <p>{placeHolder.eventType}</p>
        </div>
        <div className={style.eventDate}>
          <p><Calendar size={20}/>{placeHolder.startDate}</p>
          <p><MapPin size={20}/>{placeHolder.location} {placeHolder.startTime}</p>
        </div>
        <h3>About this event</h3>
        <p>
          Join us for an unforgettable night of music featuring
          top artists from around the world. Experience the magic of live music under the stars
        </p>
        <h3>About this event</h3>
        <p>Live Nation Entertainment</p>
      </div>
    </div>
  )
}
