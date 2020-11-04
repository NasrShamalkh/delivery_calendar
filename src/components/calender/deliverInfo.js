import React from 'react';

export default function DeliverInfo() {
  return (
    <div className='deliver-info-container'>
      <h3>DELIVERY DATE</h3>
      <p>
        Select the day you wish to receive your order. Our products ship frozen-
        please make sure you plan ahead and save time for thawing
      </p>
      <div className='shep-type'>
        <div>
          <span className='shep-type-span standard'></span>Standard - $9.99
        </div>
        <div>
          <span className='shep-type-span express'></span>Express - $24.99
        </div>
        <div>
          <span className='shep-type-span overnight'></span>Overnight - $79.99
        </div>
        <div>
          <span className='shep-type-span saturday'></span>Saturday - $0.00
          Upgrade Free*
        </div>
      </div>
    </div>
  );
}
