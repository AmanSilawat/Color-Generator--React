import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, index, hex_color }) => {
  const [alert, set_alert] = useState(false);
  const bcg = rgb.join(',');
  
  const hex = rgbToHex(...rgb); // using function to get hex color
  // console.log(hex_color); // using library to get hex color

  const handler_clipboard = () => {
    set_alert(true);
    navigator.clipboard.writeText(hex);
  }

  useEffect(() => {
    let timeout = setTimeout(() => {
      set_alert(false);
    }, 3000)

    return () => clearTimeout(timeout);
  }, [alert])

  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={handler_clipboard}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hex}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  )
}

export default SingleColor
