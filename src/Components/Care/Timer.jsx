import React, { useState , Fragment, useEffect } from 'react'

const Timer = () => {

    const [timerDays , setTimerDays] = useState(10);
    const [timerHours , setTimerHours] = useState(10);
    const [timerMinutes , setTimerMinutes] = useState(10);
    const [timerSeconds , setTimerSeconds] = useState(10);


    let interval;

    const startTimer = () => {
        const countDowndate = new Date("May 8, 2022").getTime();

        console.log(countDowndate)

        interval = setInterval(() => {
            const now = new Date().getTime();

            console.log(now)

            const distance = countDowndate - now;

            const days = Math.floor(distance/(24*60*60*1000))

            const hours = Math.floor((distance % (24*60*60*1000)) / (1000*60*60))

            const minutes = Math.floor((distance % (60*60*1000)) / (1000*60))

            const seconds = Math.floor((distance % (60 * 1000)) / 1000)

            if(distance < 0){
                //stop timer
                clearInterval(interval.current);
            }
            else{
                //update timer
                setTimerDays(days)
                setTimerHours(hours)
                setTimerMinutes(minutes)
                setTimerSeconds(seconds)
            }
        })
    }


    useEffect(() => {
        startTimer()
    })


  return (
    <Fragment className='main-timer-container'>
        <section className='timer-container'>
            <section className='timer'>
                <div className='clock'>
                    <section>
                        <p>{timerDays}</p>
                        <small>Days</small>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{timerHours}</p>
                        <small>Hours</small>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{timerMinutes}</p>
                        <small>Minutes</small>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{timerSeconds}</p>
                        <small>Seconds</small>
                    </section>
                </div>
            </section>
        </section>
    </Fragment>
  )
}


export default Timer