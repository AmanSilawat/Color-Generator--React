import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, set_color] = useState('');
  const [error, set_error] = useState(false);
  const [list, set_list] = useState(new Values('#954545').all(10));

  const handle_submit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      set_list(colors)
      set_error(false);

    } catch (error) {
      set_error(true);
      console.log(error, 'error')

    }
  }


  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handle_submit}>
          <input type="text" className={`${error ? 'error' : ''}`} value={color} onChange={(e) => set_color(e.target.value)} placeholder="#115025" />
          <button className="btn" type="submit">submit</button>
        </form>
      </section>

      <section className="colors">
        {list.map((color, index) => {
          return <SingleColor key={index} {...color} index={index} hex_color={color.hex} />
        })}
      </section>
    </>
  )
}

export default App
