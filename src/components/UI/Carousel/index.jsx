'use client'

import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import './styles.css'

export function Carousel({ children, options, autoplay = false, autoplayInterval = 4000 }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  useEffect(() => {
    if (!autoplay || !emblaApi) return

    const autoplayFn = () => {
      if (!emblaApi) return
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext()
      } else {
        emblaApi.scrollTo(0)
      }
    }

    const interval = setInterval(autoplayFn, autoplayInterval)
    return () => clearInterval(interval)
  }, [autoplay, autoplayInterval, emblaApi])

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {React.Children.map(children, (child, idx) => (
          <div className="embla__slide" key={idx}>
            {child}
          </div>
        ))}
      </div>
    </div>
  )
}

