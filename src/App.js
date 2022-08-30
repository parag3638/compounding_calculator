import React,{useState} from 'react'
import "./App.css"

function App() {
  const [initial, setInitial] = useState("");
  const [monthly, setMonthly] = useState("");
  const [years, setYears] = useState("");
  const [interest, setInterest] = useState("");


  let p = Number(initial)
  let r = Number(interest)
  let mon = Number(monthly)
  let t = Number(years)

  const basic = p + mon*12*t

  const answer = p*((1+(r/1200))**(12*t)) + mon*((((1 + (r/1200))**(12*t)) - 1)/(r/1200))


 

  const ans =() => {
    if(isNaN(answer)){
      return ("0")
    } else {
      return (answer.toFixed(2))
    }
  }

 

 


  return (
    
    <div className="main" >
    <canvas id="my-canvas"></canvas>
      <div className="header">
        <h1>Investment calculator</h1>
        {/* <p><i><strong>"Returns matter a lot. It's our capital."</strong></i> <br/>— Abigail Johnson</p> */}
      </div>
      <div className="answer">
        <h1 className="shine">${ans()}</h1>
      </div>
      <div className="form">
        <div className="divider">
            <label className="label">Initial investment</label><br/>
            <input className="input" placeholder="$4400" type="number" value={initial} onChange={e => setInitial(e.target.value)}/>
        </div>
        <div className="divider">
          <label className="label">Monthly Contribution</label><br/>
          <input className="input" placeholder="$100" type="number" value={monthly} onChange={e => setMonthly(e.target.value)}/>
        </div>
        <div className="divider">
          <label className="label">No. of years</label><br/>
          <input className="input" placeholder="40 years" type="number" value={years} onChange={e => setYears(e.target.value)}/>
        </div>
        <div className="divider">
          <label className="label">Estimated interest rate</label><br/>
          <input className="input" placeholder="8.7%" type="number" value={interest} onChange={e => setInterest(e.target.value)}/>
        </div>
      
    </div>
    <div className="info">
      <p className="i">In a period of {t} years, you invested <span className="shine">${basic.toFixed(2)}</span> and got a return of <span className="shine">${ans()}</span></p>
      <h4>Profit: <span className="shine">${(ans()-basic).toFixed(2)}</span></h4>
      <p>That's the power of <strong>compounding</strong></p>
    </div>
    <div className="footer">
            <p>Parag Singh</p>
    </div>
    </div>
  )
}

export default App


