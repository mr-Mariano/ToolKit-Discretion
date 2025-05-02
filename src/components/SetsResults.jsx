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
      title: 'Cardinality',
      data: [
        { label: 'Cardinality of A', value: results.cardinalityA },
        { label: 'Cardinality of B', value: results.cardinalityB },
        { label: 'Cardinality of C', value: results.cardinalityC },
      ],
    },
    {
      title: 'Intersections',
      data: [
        { label: 'Intersection of A and B', value: `[ ${results.interAandB.join(', ')} ]` },
        { label: 'Intersection of A and C', value: `[ ${results.interAandC.join(', ')} ]` },
        { label: 'Intersection of C and B', value: `[ ${results.interCandB.join(', ')} ]` },
      ],
    },
    {
      title: 'Unions',
      data: [
        { label: 'Union of A and B', value: `[ ${results.unionAandB.join(', ')} ]` },
        { label: 'Union of A and C', value: `[ ${results.unionAandC.join(', ')} ]` },
        { label: 'Union of C and B', value: `[ ${results.unionCandB.join(', ')} ]` },
      ],
    },
    {
      title: 'Differences',
      data: [
        { label: 'Difference of A - B', value: `[ ${results.differenceAB.join(', ')} ]` },
        { label: 'Difference of B - A', value: `[ ${results.differenceBA.join(', ')} ]` },
        { label: 'Difference of A - C', value: `[ ${results.differenceAC.join(', ')} ]` },
        { label: 'Difference of C - A', value: `[ ${results.differenceCA.join(', ')} ]` },
        { label: 'Difference of B - C', value: `[ ${results.differenceBC.join(', ')} ]` },
        { label: 'Difference of C - B', value: `[ ${results.differenceCB.join(', ')} ]` },
      ],
    },
    {
      title: 'Symmetric Differences',
      data: [
        { label: 'Symmetric Difference of A and B', value: `[ ${results.symDiffAB.join(', ')} ]` },
        { label: 'Symmetric Difference of A and C', value: `[ ${results.symDiffAC.join(', ')} ]` },
        { label: 'Symmetric Difference of C and B', value: `[ ${results.symDiffBC.join(', ')} ]` },
      ],
      className: 'col-span-2', // Additional class to span 2 columns
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