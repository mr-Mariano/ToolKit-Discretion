import React from 'react'
import { useState } from 'react'
import Card from '../components/Card'
import ErrorComponent from '../components/ErrorComponent'

const Input = ({ value ,onChange, placeholder }) => {
    return (
      <input
          required
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
        focus:ring-blue-500 focus:border-blue-500 block w-1/2
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
  const [error, setError] = useState('');
  const [results, setResults] = useState([]);
  const [sum, setSum] = useState(0);
  const [multiplication, setMultiplication] = useState(1);



  const generateSuccession = () => {
    const m = parseInt(initialValue, 10);
    const n = parseInt(finalValue, 10);

    if( isNaN(m) || isNaN(n) || m > n || succession === '') {
      setError('Por favor, introduce valores válidos para m y n, y una sucesión válida.');
      return;
    }

    try {
      const generatedResults = [];
      for (let k = n; k >= m; k--) { // Recorremos de n a m
        const expression = succession.replace(/k/g, `(${k})`).replace(/\^/g, '**'); // Reemplazo seguro
        const func = new Function(`return ${expression};`); 
        const value = func(); 
        setSum((prevSum) =>  prevSum + value);
        setMultiplication((prevMultiplication) => prevMultiplication * value);

        generatedResults.push({ symbolic: expression, value });


      }
  
      setResults(generatedResults);
      setError('');

      console.log('Resultados generados:', generatedResults);
    } catch (error) {
      setError('Error en la evaluación de la sucesión. Verifica la sintaxis.');
    }
  }

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
          

          <Card className='md:mt-15 mt-2 bg'>
          <div className='flex flex-col md:flex-row items-center justify-center gap-4'>
            <div className='flex flex-col md:flex-row items-center justify-center gap-2'>
              <label className='text-gray-900 dark:text-[#FFE14D] text-md font-bold'>
                m ( Limite Inferior )
              </label>
              <Input
                value={initialValue}
                onChange={(e) => setInitialValue(e.target.value)}
                placeholder="Índice Inicial"
                className='px-2 py-1 rounded-md border border-gray-300 dark:border-gray-700'
              />
            </div>

            <div className='flex flex-col md:flex-row items-center justify-center gap-2'>
              <label className='text-gray-900 dark:text-[#FFE14D] text-md font-bold'>
                n ( Limite Superior )
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
          <button 
              onClick={() => generateSuccession()}
              className=  
                "relative text-xs md:text-sm lg:text-md inline-flex items-center justify-center p-0.5 mb-2 me-2  mt-2 overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                Crear Sucesiones
              </span>
            </button>
            {error && <ErrorComponent msg={error} />}
            { sum != 0 && multiplication != 1 && (
                <div className='flex flex-col items-center justify-center gap-2
                text-gray-900 dark:text-[#5d62e2] text-md font-bold'>
                  
                  <p><span className='text-black dark:text-white'>
                    Suma Total:</span> {sum.toFixed(2)}</p>
                  <p><span className='text-black dark:text-white'>Multiplicación Total:</span> {multiplication}</p>
                </div>
            )}
            {results.length > 0 && (
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Representación Simbolica
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Valor
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        { results.map((result, index) => (
                          <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                            <td className="px-6 py-4">{result.symbolic}</td>
                            <td className="px-6 py-4">{result.value.toFixed(6)}</td>
                          </tr>
                  ))}
                    </tbody>
                </table>
            </div>
             )}

        </div>
    </div>
  )
}

export default Successions
