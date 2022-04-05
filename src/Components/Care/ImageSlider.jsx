import React from 'react';
import { SliderData } from "./SliderData";
import {FaArrowAltCircleRight ,FaArrowAltCircleLeft } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

const ImageSlider = ({slides}) => {
    const [current , setCurrent] = React.useState(0)

  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length -1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current -1)
  }

//   const currentDiv = (n) => {
//     setCurrent(current = n);
//   }

  console.log(current)

  if(!Array.isArray(slides) || slides.length <= 0){
    return null
  }

  return (
    <section className="slider">
    <FaArrowAltCircleLeft className="slider__left-arrow" onClick={prevSlide} />
    <FaArrowAltCircleRight className="slider__right-arrow" onClick={nextSlide} />
    <FontAwesomeIcon icon={faCircle} onClick={() => setCurrent(0)} className="slider__circle1" />
    <FontAwesomeIcon icon={faCircle} onClick={() => setCurrent(1)} className="slider__circle2" />
    <FontAwesomeIcon icon={faCircle} onClick={() => setCurrent(2)} className="slider__circle3" />

  {
    SliderData.map((slide , index) => {
      return (
        <div className={index === current ? 'slide active' : 'slide'} key={index}>

            {
                index === current && (
                    <img src={slide.image} alt=" slider image " className="slider__image" />
                )
            }
        </div>
      )
    })
  }
  </section>
  )

}

export default ImageSlider