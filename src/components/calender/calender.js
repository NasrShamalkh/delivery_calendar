import React, { useEffect, useState } from 'react';
import moment from 'moment';
//importing functionality
import { buildCalendar, dayStyle, isSelected } from '../utils';
import DeliverInfo from './deliverInfo';
import CalenderHeader from './calenderHeader';
import './styles.css';

// main componenet

export default function Calendar() {
  const [calendar, setCalendar] = useState([]);
  const [value, setValue] = useState(moment());
  const [selectDay, setSelectDay] = useState({
    date: '',
    month: '',
    day: '',
    price: 0,
    style: ''
  });

  useEffect(() => {
    setCalendar(buildCalendar(value));
  }, [value]);

  return (
    <>
      <div className='calendar-container'>
        <div className='calendar'>
          {/* calendar Header */}
          <CalenderHeader value={value} setValue={setValue} />
          <div className='body'>
            {/* calendar day name*/}
            <div className='day-names'>
              {['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'].map(d => (
                <div key={d} className='week'>
                  {d}
                </div>
              ))}
            </div>
            {/* Calendar days body */}
            {calendar.map((week, index) => (
              <div key={index} className='day-container'>
                {week.map((day, index) => (
                  <div
                    key={index}
                    className='day'
                    onClick={() =>
                      dayStyle(day, index).style !== 'before' &&
                      setSelectDay({
                        date: day,
                        month: day.format('MMMM'),
                        day: day.format('D'),
                        price: dayStyle(day, index).price,
                        style: dayStyle(day, index).style
                      })
                    }
                  >
                    <div
                      className={`${dayStyle(day, index).style} ${isSelected(
                        selectDay.date,
                        day
                      )}`}
                    >
                      {day.format('D').toString()}
                      {dayStyle(day, index).price && (
                        <div>{'$' + dayStyle(day, index).price}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <DeliverInfo />
      </div>
      {/* User select info */}
      {selectDay.price > 0 && (
        <div className='user-choice'>
          <span className={`shep-type-span ${selectDay.style}`}></span>You have
          selected {selectDay.style} Shipping - ${selectDay.price}. Your package
          will arrive on{' '}
          <span className='user-choice-date'>
            {selectDay.month} {selectDay.day}
          </span>
        </div>
      )}
    </>
  );
}
