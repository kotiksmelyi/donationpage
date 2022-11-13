import axios from 'axios';
import React, { useState } from 'react';
import './index.css';

function App() {
  const Data = {
    "donated_to": 1,
    "amount": 1,
    "author_name": '',
    "message": '',
    "attachment_url": '',
  }

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk5Nzg0ODkwLCJqdGkiOiIyMDcyMmQwZGUzZWU0ZGNiODRlZjlmZDE5ZWE4YmE1OCIsInVzZXJfaWQiOjF9.ScBgnLy6JfxUm8CNGx0z4CD1x-g_QUwMnyLrb9GQyfo"
  const [value1, setValue1] = useState(Number)
  const [value2, setValue2] = useState('')
  const [value3, setValue3] = useState('')
  const [value4, setValue4] = useState('')
  // const [send, setSend] = useState(false)

  function SendData() {
    Data.amount = value1;
    Data.message = value2;
    Data.author_name = value4
    Data.attachment_url = value3

    axios.post('http://78.140.241.21:8300/donation/donations', Data, { headers: { "Authorization": `Bearer ${token}` } })
    .then(function (response) {
      if (response.status === 201) {
        alert('Успешно!')
      }
    })
  }



return (
  <div className='h-screen w-screen flex justify-center items-center mt-5 mb-5'>

    <div className='bg-donutpage w-4/5 h-full flex flex-col rounded-xl backdrop-blur-xl relative'>

      <div className='flex flex-col items-center'>
        <img src="https://avatars.dzeninfra.ru/get-zen_doc/1779726/pub_5e56bd5063b6ee13b3592186_5e570a290fc21b00a5b16cae/scale_1200"
          className='w-20 h-20 rounded-full mt-6' />
        <div className='flex flex-col'>
          <div className='flex justify-center'>
            <div className='w-2 h-2 mt-2 mr-1 bg-green-500 rounded-full'></div>
            <p className='text-main'>онлайн</p>
          </div>
          <h1 className='text-2xl font-bold text-main mt-2 text-center'>Arthas</h1>
          <p className='text-center text-main text-sm'>Спасибо, что делаете мой стрим лучше!</p>
        </div>
      </div>

      <div className='w-full h-full rounded-lg bg-donutpagesec mt-3 flex flex-col items-center'>
        <div className='flex flex-col mt-8 items-center'>
          <p className='text-sm text-white pb-2'>сумма пожертвования</p>
          <input type='number' value={value1} className='w-4/5 h-12 ml-2 mr-2 rounded-2xl text-2xl text-center border-b-red-400' onChange={(e) => setValue1(parseInt(e.target.value))}></input>
          <div>
            <button className='bg-white rounded-lg mt-2 mr-2 p-2 active:bg-orange' onClick={(e) => setValue1(100)}>100</button>
            <button className='bg-white rounded-lg mt-2 mr-2 p-2 active:bg-orange' onClick={(e) => setValue1(200)}>200</button>
            <button className='bg-white rounded-lg mt-2 mr-2 p-2 active:bg-orange' onClick={(e) => setValue1(300)}>300</button>
            <button className='bg-white rounded-lg mt-2 mr-2 p-2 active:bg-orange' onClick={(e) => setValue1(500)}>500</button>
          </div>
        </div>

        <div className='mt-4 flex flex-col items-center w-4/5'>
          <p className='text-sm text-white pb-1'>Ваше имя</p>
          <input value={value4} className='w-full h-8 p-2 rounded-xl border-b-red-400' onChange={(e) => setValue4(e.target.value)}></input>
        </div>

        <div className='mt-4 flex flex-col items-center w-4/5'>
          <p className='text-sm text-white pb-1'>комментарий</p>
          <textarea maxLength={50} value={value2} className='w-full h-24 p-2 rounded-2xl border-b-red-400' onChange={(e) => setValue2(e.target.value)}></textarea>
        </div>



        <div className='mt-4 flex flex-col items-center w-4/5'>
          <p className='text-sm text-white pb-1'>Медиа</p>
          <input value={value3} className='w-full h-8 p-2 rounded-xl border-b-red-400' onChange={(e) => setValue3(e.target.value)}></input>
        </div>

        <button className='mt-9 w-full bg-orange h-24 rounded-lg text-3xl font-bold text-main' onClick={SendData}>Отправить!</button>

      </div>


    </div>
  </div>
);
}

export default App;
