import React, { useEffect } from 'react';
import {
  Page,
  Navbar,
  Block,
  BlockTitle,
  Row,
  Col,
  BlockHeader,
  Icon,
} from 'framework7-react';
import HomeSwipe from './components/homeswipe.js';
import StatusBar from './components/statusbar.js';
import HomeApp from './components/homeapp.js';
import './style.css';
import './tailwind.config.js';

export default function HomeScreen() {
  return (
    <Page
      className="homepage-background"
      style={{
        background:
          'url(https://media.idownloadblog.com/wp-content/uploads/2021/09/Light_Beams_Blue_Light-iPhone-13-Pro-official-apple-wallpaper.jpg)',
            // image cover all page, but not adaptive
        backgroundSize: '100%',
        height: '100%'


      }}
    >
      <div>
        <StatusBar />
        <div className="grid grid-cols-4 grid-rows-7 gap-y-5 text-white mx-5 text-center">
          <HomeApp
            id="com.longbrdge.settings"
            icon="http://svgur.com/i/iza.svg"
            name="Настройки"
          />
          <HomeApp
            id="com.longbridge.fatime"
            icon="http://svgur.com/i/izf.svg"
            name="FaTime"
          />
          <HomeApp
            id="com.longbridge.clock"
            icon="http://svgur.com/i/ixj.svg"
            name="Часы"
          />
          <HomeApp
            id="com.longbridge.weather"
            icon="http://svgur.com/i/izb.svg"
            name="Погода"
          />
          <div
            id="com.longbridge.weather.widget"
            className="row-span-2 col-span-2 mx-4"
          >
            <div>
              <div
                style={{
                  background: '#fff',
                }}
                className="rounded-xl mx-auto text-black w-[100%] h-[10.6rem]"
              >
                Тестовый виджет
              </div>
              <h6 className="text-xs mx-1 mt-1 text-gray-100">Заряд</h6>
            </div>
          </div>
          <HomeApp
            id="com.longbridge.weather"
            icon="http://svgur.com/i/izb.svg"
            name="Погода"
          />
          <HomeApp
            id="com.longbridge.weather"
            icon="http://svgur.com/i/izb.svg"
            name="Погода"
          />
          <HomeApp
            id="com.longbridge.weather"
            icon="http://svgur.com/i/izb.svg"
            name="Погода"
          />
          <HomeApp
            id="com.longbridge.weather"
            icon="http://svgur.com/i/izb.svg"
            name="Погода"
          />
          <div className="col-span-4 row-span-7 row-start-7 absolute bottom-0 left-0 right-0 mb-8 px-5 w-full">
            <div>
              <div className="bg-[rgba(255,255,255,0.3)] h-24 rounded-2xl mx-auto mt-5 ">
                <div className="grid grid-cols-4 grid-rows-1 gap-y-2">
                  <HomeApp
                    id="com.longbridge.weather"
                    icon="http://svgur.com/i/izb.svg"
                  />
                  <HomeApp
                    id="com.longbridge.weather"
                    icon="http://svgur.com/i/izb.svg"
                  />
                  <HomeApp
                    id="com.longbridge.weather"
                    icon="http://svgur.com/i/izb.svg"
                  />
                  <HomeApp
                    id="com.longbridge.weather"
                    icon="http://svgur.com/i/izb.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <HomeSwipe

         />
      </div>
    </Page>
  );
}
