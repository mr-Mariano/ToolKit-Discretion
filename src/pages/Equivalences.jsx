import React, { useState } from 'react';
import Instructions from '../components/Instructions';
import Card from '../components/Card';
import Error from '../components/ErrorComponent';

// Utils
import { generateTable } from '../utils/generateTable';
import { compareTables } from '../utils/compareTable';

const InputField = ({ id, label, value, onChange, placeholder }) => {
  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor={id} className='text-md md:text-lg font-bold'>{label}</label>
      <input
        required
        id={id}
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
    </div>
  );
};



const Equivalences = () => {
    const [expression1, setExpression1] = useState('');
    const [expression2, setExpression2] = useState('');
    const [isEquivalent, setIsEquivalent] = useState(null);
    const [error, setError] = useState('');

    const handleCheckEquivalence = () => {
      try {
        const table1 = generateTable(expression1);
        const table2 = generateTable(expression2);
    
        console.log("Table 1: ", table1);
        console.log("Table 2: ", table2);
    
        const equivalent = compareTables(table1, expression1, table2, expression2);
        console.log("Equivalent: ", equivalent);
        setIsEquivalent(equivalent);
        setError(''); // Limpiar cualquier error previo si no hay errores
    
      } catch (e) {
        // Si ocurre un error, manejarlo aquí
        setError('A problem with the entered expression.');  // Asignar el mensaje de error a la variable de estado
      }
    };


    return (
      <div className="min-h-screen flex items-center justify-center px-8 md:mx-4 mt-15 md:mt-0">
        <div className="w-full max-w-6xl px-20 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Instrucciones */}
            <Card 
              className="rounded-lg border border-zinc-800 shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-zinc-800/50 group"
            >
              <Instructions />
            </Card>
    
            {/* Formulario de equivalencias */}
            <Card 
              className="
                px-10
                rounded-lg border border-zinc-800 shadow-lg 
                transition-all duration-300 ease-in-out hover:shadow-xl
                 hover:shadow-zinc-800/50 group"
              >
              <div className="flex flex-col items-center space-y-6">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold leading-8
                  transition-transform duration-300 ease-in-out group-hover:scale-105
                  mt-2">
                    Equivalencias Lógicas
                </h2>
                <p className="text-sm md:text-md lg:text-lg font-bold 
                transition-transform duration-300 ease-in-out group-hover:scale-103
                text-gray-900 dark:text-[#FFE14D]"
                >
                  Ingresa dos expresiones lógicas para verificar si son equivalentes.
                </p>
                
                <div className="w-full max-w-md space-y-4">
                  <InputField 
                    id="expression1" 
                    label="Expresión lógica 1" 
                    value={expression1} 
                    onChange={(e) => setExpression1(e.target.value)} 
                    placeholder="p -> q" 
                  />
                  
                  <InputField 
                    id="expression2" 
                    label="Expresión lógica 2" 
                    value={expression2} 
                    onChange={(e) => setExpression2(e.target.value)} 
                    placeholder="¬p ∨ q" 
                  />
                </div>
                
                <button 
                  onClick={handleCheckEquivalence}
                  className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
                >
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                    Verificar equivalencia
                  </span>
                </button>

                {error && <Error msg={error} />}
                {isEquivalent !== null && !error && (
                  <div className="text-lg font-semibold text-zinc-800 mt-4">
                    {isEquivalent ? (
                      <div
                        className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
                        role="alert"
                      >
                        <span className="font-medium">Success alert!</span> {'✅ Las expresiones son equivalentes'}
                      </div>
                    ) : (
                      <div
                        className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                        role="alert"
                      >
                        <span className="font-medium">Error alert!</span> {'❌ Las expresiones no son equivalentes'}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </Card>
        </div>
      </div>
    );
};

export default Equivalences;