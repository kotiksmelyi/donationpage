import React from 'react';
import './index.css';

function App() {
  return (
    <div className='h-screen w-screen flex justify-center items-center mt-5 mb-5'>

      <div className='bg-donutpage w-4/5 h-full flex flex-col rounded-xl backdrop-blur-xl relative'>

        <div className='flex flex-col items-center'>
          <img src="https://avatars.dzeninfra.ru/get-zen_doc/1717677/pub_5d01ff4c5e041200afdaf5a0_5d020035d415c800b04cd1cd/scale_1200" 
          className='w-20 h-20 rounded-full mt-6' />
          <div className='flex flex-col'>
            <div className='flex justify-center'>
            <div className='w-2 h-2 mt-2 mr-1 bg-green-500 rounded-full'></div>
            <p className= 'text-main'>онлайн</p>
            </div>
            <h1 className='text-2xl font-bold text-main mt-2 text-center'>Arthas</h1>
            <p className='text-center text-main text-sm'>Спасибо, что делаете мой стрим лучше!</p>
          </div>
        </div>

        <div className='w-full h-full rounded-lg bg-donutpagesec mt-3 flex flex-col items-center'>
          <div className='flex flex-col mt-8 items-center'>
            <p className='text-sm text-white pb-2'>сумма пожертвования</p>
            <input type='number' className='w-4/5 h-12 ml-2 mr-2 rounded-2xl text-2xl text-center border-b-red-400'></input>
            <div>
              <button className='bg-white rounded-lg mt-1 mr-1 p-1 active:bg-orange'>100</button>
              <button className='bg-white rounded-lg mt-1 mr-1 p-1 active:bg-orange'>200</button>
              <button className='bg-white rounded-lg mt-1 mr-1 p-1 active:bg-orange'>300</button>
              <button className='bg-white rounded-lg mt-1 mr-1 p-1 active:bg-orange'>500</button>
            </div>
          </div>

          <div className='mt-4 flex flex-col items-center w-4/5'>
            <p className='text-sm text-white pb-1'>комментарий</p>
            <textarea maxLength={50} className='w-full h-24 p-2 rounded-2xl border-b-red-400'></textarea>
          </div>

          <div className='mt-4 flex flex-col items-center w-4/5'>
            <p className='text-sm text-white pb-1'>Медиа</p>
            <input className='w-full h-8 p-2 rounded-xl border-b-red-400'></input>
          </div>

          <button className='mt-9 w-full bg-orange h-24 rounded-lg text-3xl font-bold text-main'>Отправить!</button>

        </div>


      </div>
    </div>
  );
}

export default App;
