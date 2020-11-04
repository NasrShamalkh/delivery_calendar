import React from 'react';

export default function CalenderHeader({ value = {}, setValue = () => {} }) {
  function currMonth() {
    return value.format('MMMM');
  }
  function currYear() {
    return value.format('YYYY');
  }
  function prevMonth() {
    return value.clone().subtract(1, 'month');
  }
  function nextMonth() {
    return value.clone().add(1, 'month');
  }
  function thisMonth() {
    return value.isSame(new Date(), 'month');
  }
  return (
    <div className='header'>
      <div
        onClick={() => !thisMonth() && setValue(prevMonth())}
        className='change-month-pointer'
      >
        {!thisMonth() ? <span>&#9668;</span> : null}
      </div>
      <div>
        {currMonth().slice(0, 3)} {currYear()}
      </div>
      <div
        onClick={() => setValue(nextMonth())}
        className='change-month-pointer'
      >
        &#9654;
      </div>
    </div>
  );
}
