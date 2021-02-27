import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState, useCallback } from 'react';

function App() {
  const colors = ['info', 'danger', 'success', 'primary', 'secondary', 'warning', 'dark']
  const [quote, setQuote] = useState('This is a random Quote')
  const [color, setColor] = useState('danger')

  const newQuote = useCallback(async() => {
    const response = await fetch('https://api.quotable.io/random')
    const data = await response.json()
    setQuote(data.content)
    setColor(randomColor)
  },[])

  const randomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  return (
    <div className={`App App-header bg-${color}`}>
      <div className="d-flex justify-content-center align-items-center w-100 flex-column">
        <h3>Quote Generator</h3>
        <section className="border p-4 bg-white">
          <p className={`text-${color}`}>{quote}</p>
          <button className={`btn btn-${color}`} onClick={newQuote}>New Quote</button>
        </section>
      </div>
    </div>
  );
}

export default App;
