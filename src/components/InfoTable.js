import React from 'react'
import { Toaster, toast } from 'react-hot-toast'

import InfoTableRow from './InfoTableRow'

const InfoTable = ({ data }) => {
  let num = 1

  if (typeof data === 'string') {
    toast.error(`Server error, try again.\n "${data}"`, {
      position: 'top-right',
      className: 'toast-loading',
      duration: 8000,
      style: {
        background: '#ead0c0',
        fontSize: '1.3rem',
        fontWeight: '600'
      }
    })
    return <Toaster />
  } else {
    return (
      <div className="film-table">
        {data.length > 0 ? (
          data.map((el) => (
            <InfoTableRow key={el.id} el={el} num={num++}></InfoTableRow>
          ))
        ) : (
          <div className="no-data-div">
            <hr />
            <h1 className="no-data">No Matches</h1>
          </div>
        )}
      </div>
    )
  }
}

export default InfoTable
