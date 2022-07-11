import React, { useEffect } from 'react';

export default function HomeSwipe(props) {
  return (
    <div id={props.id}>
      <div>
        <div
          style={{
            background: `url(${props.icon})`,
            backgroundSize: '100%',
          }}
          className={`w-16 h-16 rounded-2xl mx-auto ${!props.name && 'mt-3'}`}
        ></div>
        <h6 className="text-xs mx-1 mt-1 text-gray-100">{props.name}</h6>
      </div>
    </div>
  );
}
