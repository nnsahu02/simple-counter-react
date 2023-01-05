import { useState } from "react"
import './counter.css'

function Counter() {
    const [data, setData]= useState(1)
    return (
        <div className="counter">
      <h1 className="Counter">Counter</h1>
      <button className="counterbutton" onClick={() => setData(data + 1)}>Increase</button>
      <button className="counterbutton" onClick={() => setData(data - 1)}>Decrease</button>
      <p className="data">{data}</p>
    </div>
    )
}

export default Counter