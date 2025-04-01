import React from 'react'
import { useState } from 'react'
import Card from '../components/Card'

const Input = ({ value ,onChange, placeholder }) => {
    return (
      <input
          required
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
        focus:ring-blue-500 focus:border-blue-500 block w-full 
        px-3 py-2 truncate 
        dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
        dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
    )
}   


const Successions = () => {

  const [succession, setSuccession] = useState('')
  const [initialValue, setInitialValue] = useState('');
  const [finalValue, setFinalValue] = useState('');

  return (
    <div className="mt-34 md:mt-44 w-full mx-auto p-6">
       <div className=' flex flex-col items-center text-center justify-center gap-4'>
          <h1 className=' text-gray-900 dark:text-[#FFE14D] text-3xl md:text-4xl lg:text-5xl font-bold'>
              Sucesiones
          </h1>
          <p>
            Introduce tu sucesión en la caja de texto y presiona el botón para generar la tabla de valores.
          </p>

          <div className='flex flex-row items-center justify-center gap-2 mt-5'>
            <label className='text-gray-900 dark:text-[#FFE14D] text-lg font-bold'>
              A<sub>k</sub>
            </label>
            <Input
              value={succession}
              onChange={(e) => setSuccession(e.target.value)}
              placeholder="Introduce tu sucesión"
            />
          </div>
          

          <Card className='md:mt-15 mt-10 bg'>
          <div className='flex flex-col md:flex-row items-center justify-center gap-4'>
            <div className='flex flex-col md:flex-row items-center justify-center gap-2'>
              <label className='text-gray-900 dark:text-[#FFE14D] text-lg font-bold'>
                m:
              </label>
              <Input
                value={initialValue}
                onChange={(e) => setInitialValue(e.target.value)}
                placeholder="Índice Inicial"
                className='px-2 py-1 rounded-md border border-gray-300 dark:border-gray-700'
              />
            </div>

            <div className='flex flex-col md:flex-row items-center justify-center gap-2'>
              <label className='text-gray-900 dark:text-[#FFE14D] text-lg font-bold'>
                n:
              </label>
              <Input
                value={finalValue}
                onChange={(e) => setFinalValue(e.target.value)}
                placeholder="Índice Final"
                className='px-2 py-1 rounded-md border border-gray-300 dark:border-gray-700'
              />
            </div>
          </div>
          </Card>

        </div>
    </div>
  )
}

export default Successions
