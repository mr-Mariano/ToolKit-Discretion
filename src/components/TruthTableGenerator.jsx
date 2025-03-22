import React, { useState } from 'react';
import Input from './Input'
import Error from './ErrorComponent'
import { generateTable } from '../utils/generateTable';



const TruthTable = ({ table }) => {
    if (!table || table.length === 0) return null;
    /*
    Ejemplo de tabla de verdad:
        const table = [
            { P: true, Q: false, "P & Q": false },
            { P: true, Q: true, "P & Q": true },
            { P: false, Q: false, "P & Q": false },
            { P: false, Q: true, "P & Q": false }
];
    */

    const headers = Object.keys(table[0]);
    // En este caso, headers será ["P", "Q", "P & Q"].

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className={`px-6 py-3 ${index % 2 === 0 ? "bg-gray-50 dark:bg-gray-800" : ""}`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className='text-center'>
          {table.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b border-gray-200 dark:border-gray-700">
              {headers.map((header, colIndex) => (
                <td
                  key={colIndex}
                  className={`px-6 py-4 ${colIndex % 2 === 0 ? "bg-gray-50 dark:bg-gray-800" : ""}`}
                >
                  {row[header] ? "T" : "F"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
};


const TruthTableGenerator = () => {
    const [table, setTable] = useState([]);
    const [error, setError] = useState('')

    const handleGenerateTable = (expression) => {
        try{
            const truthTable = generateTable(expression);
            setTable(truthTable);
            setError('')
        }catch(err){
            setError('Error in the expression')
            setTable([])
        }
    };

    return (
        <div className='
            flex flex-col items-center justify-center
            w-full max-w-3xl mx-auto
        '>
            <Input 
                onGenerate={handleGenerateTable} 
                placeholder= "Enter your logical expression here"
            />
            {
                error &&
                <Error msg={error}/>
            }

            <TruthTable table={table} />
        </div>
    );
};

export default TruthTableGenerator;