import React from 'react';
import Instructions from '../components/Instructions';
import TruthTableGenerator from '../components/TruthTableGenerator';
import Card from '../components/Card';

const Logic = () => {
  return (
    <div className="mt-22 md:mt-44  w-3/4 mx-auto ">
  {/* Container */}
  <div className="flex flex-wrap md:grid grid-cols-1 md:grid-cols-2 gap-6 opacity-100 transform scale-100 rounded-xl text-card-foreground p-8 h-full relative">
    
    {/* Instruction - Abarca las primeras 2 filas y la primera columna */}
    <Card className="col-span-1 rounded-lg border border-zinc-800 shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-zinc-800/50 group">
      <Instructions />
    </Card>

    {/* Truth Table Generator - Texto - Abarca la primera fila y segunda columna */}
    <Card className="col-span-1 rounded-lg border border-zinc-800 shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-zinc-800/50 group">
      <h1 className="text-1xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-[#FFE14D] mb-4 mt-2 transition-transform duration-300 ease-in-out group-hover:scale-105">
        Truth Table Generator
      </h1>
      <p className="text-xs md:text-sm lg:text-md text-gray-700 dark:text-gray-300 mb-4">
        The first tool, a truth table generator, allows you to create and visualize truth tables for various logical expressions. It simplifies learning and helps you understand fundamental concepts in logic and discrete structures.
      </p>
      <TruthTableGenerator />
    </Card>

    {/* Imagen - Abarca la segunda fila y ambas columnas */}
    <Card className="col-span-2 rounded-lg border border-zinc-800 shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-zinc-800/50">
      <img
        src="./truthTable.png"
        alt="Truth Table Generator"
        className="rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
      />
    </Card>

  </div>
</div>




  );
};

export default Logic;
