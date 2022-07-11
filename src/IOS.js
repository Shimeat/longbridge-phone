import React, { useEffect } from 'react';
import './style.css';
import HomeScreen from './homescreen.js';

export default function IOS() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <HomeScreen />
    </div>
  );
}
