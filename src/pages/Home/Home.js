import { useState } from 'react'
import styles from './Home.module.css'

export default function Home() {

  const [word , setWord] = useState("")
  const [qrCode, setQrCode] = useState("")


  const handleClick = (e)=> {
    e.preventDefault()
    setQrCode(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${word}`)
  }
 

  return (
    <div>
       <h1>Welcome to QRCode Generator</h1>
       <form onSubmit={handleClick}>
       <div className={styles['input-box']}>
          <label>
              <span>Enter Data</span>
              <input 
            type="text"
            onChange={(e)=> setWord(e.target.value)}
            value={word}
            required
              />
          </label>
          <button>Generate</button>
       </div>
       <div className={styles['output-box']}>
          <img src={qrCode} alt={word} />
       </div>
       </form>
    </div>
  )
}
