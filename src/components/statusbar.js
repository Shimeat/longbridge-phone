import React, { useEffect } from 'react';
import { IoCellular } from 'react-icons/io5';
import { Battery100 } from 'framework7-icons/react';

export default function HomeSwipe(props) {
  return (
    <div className="grid grid-cols-2 grid-rows-8 text-white mx-5 mt-1 mb-5">
      <div className="font-semibold text-xl">9:41</div>
      <div className="text-right flex justify-end">
        <IoCellular className="float-right w-6 h-6 mt-0.5" />
        <h6 className="text-lg mx-1">4G</h6>
        <Battery100 className="float-right w-6 h-6 mt-0.5" />
      </div>
    </div>
  );
}
