import './App.css'
import { useState } from "react";

function App() {
  const [sentimentText, setSentimentText] = useState('')

  const sentiment = ['positive', 'negative', 'neutral']
  const randomSentiment = () =>{
    const randomIndex = Math.floor(Math.random() * sentiment.length)
    const randomWord = sentiment[randomIndex]

    setSentimentText('The sentiment of given text is ' + randomWord + '.')
  }
  return (
    <>
      <h1>Sentiment analyser</h1>
      <div>
        <input placeholder='Enter text'></input>
        <button onClick={randomSentiment}>Evaluate</button>
        <p>{sentimentText}</p>
      </div>
    </>
  )
}

export default App