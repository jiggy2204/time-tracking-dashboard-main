import PropTypes from 'prop-types';

import ellipses from '../assets/images/icon-ellipsis.svg';

import work from '../assets/images/icon-work.svg';
import play from '../assets/images/icon-play.svg';
import study from '../assets/images/icon-study.svg';
import exercise from '../assets/images/icon-exercise.svg';
import social from '../assets/images/icon-social.svg';
import selfcare from '../assets/images/icon-self-care.svg';

const HourCards = ({time, data}) => {

    let prevTime = Object.keys(data.timeframes).filter(el => el == time);

    let bgColors = {
        Work:'hsl(15, 100%, 70%)',
        Play:'hsl(195, 74%, 62%)',
        Study:'hsl(348, 100%, 68%)',
        Exercise:'hsl(145, 58%, 55%)',
        Social: 'hsl(264, 64%, 52%)',
        'Self Care':'hsl(43, 84%, 65%)',
    }

    let bgIcon = {
        Work: work,
        Play: play,
        Study: study,
        Exercise: exercise,
        Social: social,
        'Self Care': selfcare
    }

    return (
    <div id="hourcard" className={`timeframe ${data.cardId}`}>
        <div className="box time-box" style={{ border: 'none', backgroundColor: bgColors[data.title]}}>
        <img className='bgIcon' src={bgIcon[data.title]} />
        <div className="box info-box">
            <div className="box-header">
                <p className="box-title">{data.title}</p>
                <img className="ellipses" src={ellipses} style={{ border: 'none', borderRadius: 0 }}/>           
            </div>
            <div className="box-main">
                <p className="box-main-hours">{data.timeframes[time].current}<span className="text-hours"></span>hrs</p>
                <p className="box-main-timeframe">
                    {
                        prevTime == 'monthly' ? 'Last Month' :
                        prevTime == 'weekly' ? 'Last Week' :
                        prevTime == 'daily' ? 'Yesterday' : ''
                    }
                    &nbsp;- {data.timeframes[time].previous}<span className="timeframe-hours"></span>hrs
                </p>
            </div>
        </div>
        </div>
    </div>
    )
}

HourCards.propTypes = {
    time: PropTypes.string,
    data: PropTypes.object
}

export default HourCards;