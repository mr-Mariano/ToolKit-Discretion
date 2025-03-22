import React from "react";

const Card = ({ children , className = "" }) => {
  return (
    <div className={`relative group rounded-xl border border-zinc-800 shadow px-6 py-4  h-full backdrop-blur-sm transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-zinc-800/50 overflow-hidden ${className}`}>

        {/* Fondo con transición */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 dark:bg-gradient-to-br dark:from-zinc-800 dark:to-transparent"></div>
        
        {/* Contenido dinámico */}
        <div className="relative z-10 flex flex-col text-start gap-2 md:gap-4 lg:gap-6">
          {children}
        </div>
    </div>

  );
};

export default Card;