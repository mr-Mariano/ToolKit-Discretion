import React from 'react';
import Card from './Card';

const ResultCard = ({ title, data, className = '' }) => {
  return (
    <Card className={`p-2 w-full w-max-[300px] ${className}`}>
      <div className="flex flex-col text-left justify-center text-xs md:text-sm lg:text-base">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        {data.map((item, index) => (
          <p key={index} className="text-xs md:text-sm lg:text-md font-base">
            {item.label}:{' '}
            <span className="dark:text-sky-500 text-sky-600 font-semibold">
              {item.value}
            </span>
          </p>
        ))}
      </div>
    </Card>
  );
};

const ResultsContainer = ({ results }) => {
  
  const sections = [
    {
      title: 'Cardinalidad',
      data: [
        { label: 'Cardinalidad de A', value: results.cardinalityA },
        { label: 'Cardinalidad de B', value: results.cardinalityB },
        { label: 'Cardinalidad de C', value: results.cardinalityC },
      ],
    },
    {
      title: 'Intersecciones',
      data: [
        { label: 'Intersección de A y B', value: `[ ${results.interAandB.join(', ')} ]` },
        { label: 'Intersección de A y C', value: `[ ${results.interAandC.join(', ')} ]` },
        { label: 'Intersección de C y B', value: `[ ${results.interCandB.join(', ')} ]` },
      ],
    },
    {
      title: 'Uniones',
      data: [
        { label: 'Unión de A y B', value: `[ ${results.unionAandB.join(', ')} ]` },
        { label: 'Unión de A y C', value: `[ ${results.unionAandC.join(', ')} ]` },
        { label: 'Unión de C y B', value: `[ ${results.unionCandB.join(', ')} ]` },
      ],
    },
    {
      title: 'Diferencias',
      data: [
        { label: 'Diferencia de A - B', value: `[ ${results.differenceAB.join(', ')} ]` },
        { label: 'Diferencia de B - A', value: `[ ${results.differenceBA.join(', ')} ]` },
        { label: 'Diferencia de A - C', value: `[ ${results.differenceAC.join(', ')} ]` },
        { label: 'Diferencia de C - A', value: `[ ${results.differenceCA.join(', ')} ]` },
        { label: 'Diferencia de B - C', value: `[ ${results.differenceBC.join(', ')} ]` },
        { label: 'Diferencia de C - B', value: `[ ${results.differenceCB.join(', ')} ]` },
      ],
    },
    {
      title: 'Diferencias Simétricas',
      data: [
        { label: 'Diferencia Simétrica de A y B', value: `[ ${results.symDiffAB.join(', ')} ]` },
        { label: 'Diferencia Simétrica de A y C', value: `[ ${results.symDiffAC.join(', ')} ]` },
        { label: 'Diferencia Simétrica de C y B', value: `[ ${results.symDiffBC.join(', ')} ]` },
      ],
      className: 'col-span-2', // Clase adicional para abarcar 2 columnas
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center mt-8 w-full max-w-6xl">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-8">
        Resultados
      </h2>
      <div className="justify-center  flex flex-wrap md:grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
        {sections.map((section, index) => (
          <ResultCard
            key={index}
            title={section.title}
            data={section.data}
            className={section.className || ''}
          />
        ))}
      </div>
    </div>
  );
};

export default ResultsContainer;