import React from 'react'
import { Toaster, toast } from 'react-hot-toast'
import { useState } from 'react'

import { helpHttp } from '../helpers/helpHttp'
import imdbLogo from '../assets/imdb-logo.png'

const InfoTableRow = ({ el, num }) => {
  const [errorTrailer, setErrorTrailer] = useState(false)
  const [errorInfo, setErrorInfo] = useState(false)

  let {
    imDbRating,
    image,
    title,
    genres,
    description,
    plot,
    imDbRatingVotes,
    stars,
    id
  } = el

  if (errorTrailer) {
    toast.error('Trailer no disponible 😞', {
      position: 'top-right',
      className: 'toast-error',
      duration: 5000,
      style: {
        background: '#ead0c0',
        fontSize: '1.3rem',
        fontWeight: '600'
      }
    })

    setErrorTrailer(false)
  }

  if (errorInfo) {
    toast.error('Información no disponible 😞', {
      position: 'top-right',
      className: 'toast-error',
      duration: 5000,
      style: {
        background: '#ead0c0',
        fontSize: '1.3rem',
        fontWeight: '600'
      }
    })

    setErrorInfo(false)
  }

  const handleTrailer = async (e) => {
    e.preventDefault()

    let url = `${process.env.REACT_APP_API_HREF}${id}`

    const [data] = await Promise.all([helpHttp().get(url)])

    if (data.videoUrl === null || data.videoUrl === '') {
      setErrorTrailer(true)
    } else {
      window.open(data.videoUrl, '_blank')

      return true
    }
  }

  const handleTitle = async (e) => {
    e.preventDefault()

    let url = `${process.env.REACT_APP_API_TITLE}${id}`

    const [dataTitle] = await Promise.all([helpHttp().get(url)])

    if (dataTitle.url === null || dataTitle.url === '') {
      setErrorInfo(true)
    } else {
      window.open(dataTitle.url, '_blank')
    }
  }

  return (
    <div className="film-container">
      <div className="film-section-1">
        <div className="film-index">
          <p>#{num}</p>
        </div>
        <div className="film-image">
          <img src={image} alt="film-img" className="film-img" />
        </div>
      </div>
      <div className="film-section-2">
        <div className="film-info">
          <div className="film-title-info">
            <p className="film-title">
              {title} <i>{description}</i>
            </p>
            <div className="btn-title-div">
              <form className="btn-title-form" onSubmit={handleTitle}>
                <input
                  type="submit"
                  className="btn-title"
                  value="Más info..."
                ></input>
              </form>
            </div>
          </div>
          <div className="film-calification">
            <img src={imdbLogo} alt="imdb-logo" className="imdb-logo" />
            <p className="calification">
              ⭐{imDbRating} - <i>{imDbRatingVotes} Reseñas</i>
            </p>
          </div>
          <p className="film-genre">{genres}</p>
          <i className="film-synopsis">{plot}</i>
          <hr className="hr-results" />
          <p className="film-cast">
            <u>Elenco principal:</u> {stars}
          </p>
          <div className="film-trailer">
            <form className="trailer-form" onSubmit={handleTrailer}>
              <input
                type="submit"
                className="trailer"
                value="VER TRAILER>>>"
              ></input>
            </form>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  )
}

export default InfoTableRow
