import React from 'react';

const Instructions = () => {
  return (
    <div className="
      flex flex-col text-start
      gap-2 md:gap-4 lg:gap-6
    ">
      <h2 className='
        text-1xl md:text-2xl lg:text-3xl font-extrabold leading-8
        transition-transform duration-300 ease-in-out group-hover:scale-105
        mt-2
      '>
        Instructions
      </h2>
      <p className='
        text-xs md:text-sm lg:text-md font-bold 
        transition-transform duration-300 ease-in-out group-hover:scale-103
        text-gray-900 dark:text-[#FFE14D]
      '>
        Follow these rules to write a logical expression:
      </p>
      <ul className='
        gap-2
        text-xs md:text-sm lg:text-md font-medium
      '>
        <li>Variables: A, B, C, etc.</li>
        <li>AND (conjunction): <code>&</code> or <code>∧</code></li>
        <li>OR (disjunction): <code>∨</code></li>
        <li>NOT (negation): <code>!</code>, <code>¬</code>, or <code>~</code></li>
        <li>Implication: <code>-&gt;</code></li>
        <li>Biconditional (equivalence): <code>&lt;-&gt;</code> or <code>&lt;=&gt;</code></li>
        <li>Parentheses for grouping: <code>( )</code></li>
      </ul>
      <div className="p-4 text-sm text-gray-800 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300" role="alert">
        <span className="font-medium">Example:</span> <code>!(A & B) ∨ C</code>
      </div>
    </div>
  );
};

export default Instructions;