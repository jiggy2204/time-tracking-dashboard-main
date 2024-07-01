import './App.css'
import profilePic from './assets/images/image-jeremy.png';

import { useState } from 'react';
import data from './data.json';

import HourCards from './components/hourcards';

function App() {

  const [ timeframe, setTimeframe ] = useState('daily');
  const [ active, setActive ] = useState('')

  const buttons = [
    {value: "daily", label: "Daily", id: 'dailyBtn'},
    {value: "weekly", label: "Weekly", id: 'weeklyBtn'},
    {value: "monthly", label: "Monthly", id: 'monthlyBtn'},
  ]

  const getHours =(e) => {
    e.preventDefault();

    let timeFrame = e.currentTarget.value;
    setActive(e.currentTarget.id);
    setTimeframe(timeFrame);
  }

  return (
    <>
      <main className="boxes container">
          <section id="userProfile" className="box user profile">
            <div id="userHolder" className='box'>
            <div id="userHeader" className="select-box">
              <section id="user-profile" className="box user-box">
                <img id="user-image" className="userImage" src={profilePic} />
                <div id="user-info">
                  <p>Report for</p>
                  <h4 className="user-name">Jeremy Robson</h4>
                </div>
              </section>
              </div>
            </div>
            <div id="userTimes" className="times">
            {
              buttons.map((e,i) => {
                return <button key={i} id={e.id} className={`viewButton ${active === e.id ? 'active': ''}`} value={e.value} onClick={e => getHours(e)}>{e.label}</button>
              })
            }
            </div>
          </section>

          <section className='box timeframes'>
            {
              data.map((e,i) => {
                
                return  <HourCards time={timeframe} key={i} data={e} />
            })}
          </section>

        </main>

        <footer className="footer">
          <div className="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
            Coded by <a href="https://jiggyart.org">Jennifer D. Ignacio</a>.
          </div>
        </footer>
    </>
  )
}

export default App
