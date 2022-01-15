import Sidebar from '../components/Sidebar';
import { useFetchServers } from '../components/utils';
import Top from '../components/Top';
import { useEffect, useRef, useState } from 'react';

function getPixelRatio() {
  const ctx = document.createElement('canvas').getContext('2d'),
    dpr = window.devicePixelRatio || 1,
    bsr =
      ctx.webkitBackingStorePixelRatio ||
      ctx.mozBackingStorePixelRatio ||
      ctx.msBackingStorePixelRatio ||
      ctx.oBackingStorePixelRatio ||
      ctx.backingStorePixelRatio ||
      1;

  return dpr / bsr;
}

function createHiDPICanvas(can, w, h, ratio) {
  if (!ratio) {
    ratio = getPixelRatio();
  }
  // var can = document.createElement('canvas');
  can.width = w * ratio;
  can.height = h * ratio;
  can.style.width = w + 'px';
  can.style.height = h + 'px';
  can.getContext('2d').setTransform(ratio, 0, 0, ratio, 0, 0);
}

//Create canvas with the device resolution.
// var myCanvas = createHiDPICanvas(500, 250);

export default function Info() {
  const c = useRef(null);
  const { total } = useFetchServers();
  const [value, setValue] = useState('CS-BOOST.LT');
  const [width, setWidth] = useState('251');
  const [height, setHeight] = useState('34');
  const [fontSize, setFontSize] = useState('27');
  useEffect(() => {
    createHiDPICanvas(c.current, width, height);
    var ctx = c.current.getContext('2d');
    ctx.clearRect(0, 0, width, height);
    // ctx.font = '30px Arial';
    ctx.font = fontSize + 'px Bauerg';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(value, 3, 28);
  }, [value, width, height, fontSize]);

  function download(e) {
    var image = c.current.toDataURL('image/png').replace('image/png', 'image/octet-stream');
    e.currentTarget.setAttribute('href', image);
  }
  return (
    <>
      <Top
        servers={total.servers}
        players={total.players}
        maxPlayers={total.maxPlayers}
        percentage={total.percentage}
      />

      <div className='flex flex-col lg:flex-row lg:space-x-4 pb-24'>
        <div className='basis-2/3'>
          <h2 className='text-gray-300 py-2 text-sm font-medium uppercase'>Logo maker 3k</h2>

          <label>
            Text:
            <input
              className='mb-5'
              type='text'
              value={value}
              onChange={(event) => {
                setValue(event.target.value);
              }}
            />
          </label>
          <br />
          <label>
            Font size:
            <input
              className='mb-5'
              type='number'
              value={fontSize}
              onChange={(event) => {
                setFontSize(event.target.value);
              }}
            />
          </label>
          <br />
          <label>
            input Width:
            <input
              className='mb-5'
              type='number'
              value={width}
              onChange={(event) => {
                setWidth(event.target.value);
              }}
            />
          </label>
          <br />
          <label>
            input Height:
            <input
              className='mb-5'
              type='number'
              value={height}
              onChange={(event) => {
                setHeight(event.target.value);
              }}
            />
          </label>

          <canvas ref={c} width='230' height='33' style={{ border: '1px solid #d3d3d3' }}>
            Your browser does not support the HTML5 canvas tag.
          </canvas>

          <a download='logo.png' style={{ color: 'red' }} onClick={download}>
            download
          </a>
        </div>

        <div className='basis-1/3 pt-10 lg:pt-0'>
          <Sidebar />
        </div>
      </div>
    </>
  );
}
