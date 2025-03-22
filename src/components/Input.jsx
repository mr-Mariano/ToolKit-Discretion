import React, { useState } from 'react';

const Input = ({ onGenerate, placeholder }) => {
    const [expression, setExpression] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onGenerate(expression);
    };

    return (
        <form onSubmit={handleSubmit}
            className='flex items-center max-w-md mx-auto'
        >
            <input
                required
                type="text"
                value={expression}
                onChange={(e) => setExpression(e.target.value)}
                placeholder={placeholder}
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg 
               focus:ring-blue-500 focus:border-blue-500 block w-full 
               px-3 py-2 truncate text-xs md:text-sm lg:text-md 
               dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
               dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
        
            <button
                type="submit" 
                className="p-2.5 ms-2 text-sm font-medium text-white 
             bg-amber-500 rounded-lg border border-amber-500 
             hover:bg-amber-600 focus:ring-4 focus:outline-none 
             focus:ring-amber-300 dark:focus:ring-amber-700"
            >
                <svg 
                    xmlns="http://www.w3.org/2000/svg"  
                    width="24"  height="24"  viewBox="0 0 24 24"  
                    fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  
                    className="icon icon-tabler icons-tabler-outline icon-tabler-layout-grid size-2 md:size-4">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                        <path d="M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                        <path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                        <path d="M14 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                </svg>
                <span class="sr-only">Generate</span>
            </button>
        </form>
    );
};

export default Input;