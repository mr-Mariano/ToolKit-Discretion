import React, { useState } from 'react';
import SetResults from '../components/SetsResults'
import ErrorComponent from '../components/ErrorComponent'

const Input = ({ value ,onChange, placeholder }) => {
    const [expression, setExpression] = useState('');

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

const Sets = () => {
    const [setA, setSetA] = useState('');
    const [setB, setSetB] = useState('');
    const [setC, setSetC] = useState('');
    const [results, setResults] = useState(null);
    const [error, setError] = useState('')

    const processSet = (set) => {
        if (set.startsWith('{') && set.endsWith('}')) {
          // Es un conjunto único, validar sintaxis
          const innerContent = set.slice(1, -1);
          const elements = innerContent.split(',').map(item => item.trim());
      
          // Validar que no haya elementos con puntos u otros caracteres no permitidos
          for (const element of elements) {
            if (!/^[a-zA-Z0-9]+$/.test(element)) {
                return new Error("Sintaxis inválida en los elementos: " + set);
            }
          }
          // validar que solo haya un par de llaves
          if(set.match(/\{/g).length > 1 || set.match(/\}/g).length > 1){
            return new Error("Sintaxis inválida en los elementos: " + set);
          }
          console.log([set]);
          return [set]; // Devuelve la cadena original si la sintaxis es válida
        } else {
          // Son elementos separados, crear un array y validar sintaxis
          const elements = set.split(',').map(item => item.trim());
          for (const element of elements) {
            if (!/^[a-zA-Z0-9]+$/.test(element)) {
              return new Error("Sintaxis inválida en los elementos: " + set);
            }
          }
          console.log(elements);
          return elements;
        }
      };

    const handleSetOperations = () => {

        const findIntersection = (setX, setY) => {
            const xAndy = setX.filter(item => setY.includes(item));
            const yAndx = setY.filter(item => setX.includes(item));
            return [...new Set([...xAndy, ...yAndx])]
        }
    
        const findUnions = (setX, setY) => {
            const union = [...new Set([...setX, ...setY])];
            return union
        }
       
        const difference = (setX, setY) => {
            const difference = setX.filter(item => !setY.includes(item));
            return difference
        }

        const findsSymDiff = (setX, setY) => {
            const onlyInX = setX.filter(item => !setY.includes(item));
            const onlyIny = setY.filter(item => !setX.includes(item));
            return [...onlyInX, ...onlyIny]
        }

       
        const setAArray = processSet(setA);
        const setBArray = processSet(setB);
        const setCArray = processSet(setC);
    
        if (setAArray instanceof Error || setBArray instanceof Error || setCArray instanceof Error) {
            setError("Error en la sintaxis de los conjuntos");
            setResults(null);
            return;
        }


        const union = [...new Set([...setAArray, ...setBArray, ...setCArray])];
        // Interseccion entre A y B o B y A
        const intersectionAandB = findIntersection(setAArray, setBArray);
        // Interseccion entre A y C o C y A
        const intersectionAandC = findIntersection(setAArray, setCArray);
        // Interseccion entre C y B o B
        const intersectionCandB = findIntersection(setCArray, setBArray);

        // Union entre A y B o B y A
        const unionAB = findUnions(setAArray, setBArray);
        // Union entre A y C o C y A
        const unionAC = findUnions(setAArray, setCArray);
        // Union entre C y B o C y A
        const unionCB = findUnions(setCArray, setBArray);

        // Diferencia de A - B y A - C
        const differenceAminusB = difference(setAArray, setBArray);
        const differenceAminusC = difference(setAArray, setCArray);
        // Diferencia de B - A y B - C
        const differenceBminusA = difference(setBArray, setAArray);
        const differenceBminusC = difference(setBArray, setCArray);
        // Diferencia de C - A y C - B
        const differenceCminusA = difference(setCArray, setAArray);
        const differenceCminusB = difference(setCArray, setBArray);


        // Diferencia simetrica de A y B o B y A
        const symDifferenceAandB = findsSymDiff(setAArray, setBArray);
        // Diferencia simetrica de A y C o C y A
        const symDifferenceAandC = findsSymDiff(setAArray, setCArray);
        // Diferencia simetrica de C y B o B y C
        const symDifferenceBandC = findsSymDiff(setBArray, setCArray);
        
        console.log("HELLLO")

        setResults({
            cardinalityA: [...new Set(setAArray)].length,
            cardinalityB: [...new Set(setBArray)].length,
            cardinalityC: [...new Set(setCArray)].length,
            interAandB :  intersectionAandB,
            interAandC : intersectionAandC,
            interCandB : intersectionCandB,
            unionAandB : unionAB,
            unionAandC : unionAC,
            unionCandB : unionCB,
            differenceAB : differenceAminusB,
            differenceAC : differenceAminusC,
            differenceBA : differenceBminusA,
            differenceBC : differenceBminusC,
            differenceCA : differenceCminusA,
            differenceCB : differenceCminusB,
            symDiffAB : symDifferenceAandB,
            symDiffAC : symDifferenceAandC,
            symDiffBC : symDifferenceBandC
        });

        setError(null);
    };

    return (
            <div className="mt-22 md:mt-44 w-full mx-auto  p-6">
              <div className="flex flex-col items-center justify-center gap-8">
                <div className='group flex flex-col items-center text-center justify-center gap-4'>
                  <h1 className='
                  text-gray-900 dark:text-[#FFE14D] text-3xl md:text-4xl lg:text-5xl font-bold
                  transition-transform duration-300 ease-in-out group-hover:scale-105'>
                    Operaciones con Conjuntos
                  </h1>
                  <p>Esta página te permite realizar operaciones con conjuntos y visualizar los resultados.</p>
                </div>

                <div className="flex flex-col items-center justify-center gap-4">

                  <div className='flex flex-col items-center justify-center gap-2'>
                    <label className='
                      text-gray-900 dark:text-[#FFE14D] text-lg font-bold'>
                      Conjunto A:
                    </label>
                      <Input
                        value={setA}
                        onChange={(e) => setSetA(e.target.value)}
                        placeholder="Introduce los elementos del conjunto A separados por comas"
                      />
                  </div>

                  <div className='flex flex-col items-center justify-center gap-2'>
                    <label className='
                       text-lg font-bold
                    '>
                      Conjunto B:
                    </label>
                      <Input
                        value={setB}
                        onChange={(e) => setSetB(e.target.value)}
                        placeholder="Introduce los elementos del conjunto B separados por comas"
                      />
                  </div>

                  <div className='flex flex-col items-center justify-center gap-2'>
                    <label className='
                    text-gray-900 dark:text-[#FFE14D] text-lg font-bold'>
                      Conjunto C:
                    </label>
                      <Input
                        value={setC}
                        onChange={(e) => setSetC(e.target.value)}
                        placeholder="Introduce los elementos del conjunto C separados por comas"
                      />
                  </div>

                  <button 
                  onClick={handleSetOperations}
                  className=
                    "relative inline-flex items-center justify-center p-0.5 mb-2 me-2  mt-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
                  >
                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                    Create sets
                    </span>
                  </button>
                </div>

                    { 
                        results &&
                        <SetResults results={results} />
                    }
                    {
                        error &&
                        <ErrorComponent msg={error}/>
                    }
                </div>
            </div>
    );
};

export default Sets;