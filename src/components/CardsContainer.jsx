import React from 'react'
import { Link } from 'react-router';

import Logic from '../assets/icons/Logic'
import Equivalences from '../assets/icons/Equivalences'
import Sets from '../assets/icons/Sets'
import Successions from '../assets/icons/Successions'
import Counts from '../assets/icons/Counts'

const TOPICS = [
  { 
    link: 'logic',
    topic: 'Truth Tables',
    description: 'Truth table generator.',
    icon: Logic
  },
  {
      link: 'equivalences',
      topic: 'Logical Equivalences',
      description: 'Compare your expressions.',
      icon: Equivalences
  },
  {
      link: 'sets',
      topic: 'Sets',
      description: 'Discover details about your sets.',
      icon: Sets
  },
  {
      link: 'successions',
      topic: 'Successions',
      description: 'Successions calculator.',
      icon: Successions
  },
  {
    link: 'count',
    topic: 'Count Methods',
    description: 'Lorem ipsum dolor sit amet.',
    icon: Counts
},
];

const Card = ({ link, topic, description, icon: Icon }) => {
    return (
      <Link
        to={`/${link}`}
        className="
          flex flex-col items-start justify-center
          p-4 md:p-6 mx-auto 
          w-full max-w-xs bg-transparent border border-gray-200 rounded-lg shadow-sm
          dark:border-gray-700
          hover:shadow-md transition-shadow duration-200
        "
      >
        <div className="flex items-center gap-2">
          <Icon className="w-4 h-4 md:w-6 md:h-6" />
          <h5 className="text-sm md:text-md lg:text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
            {topic}
          </h5>
        </div>
        <p className="mt-2 text-xs md:text-sm text-gray-500 dark:text-gray-400">
          {description}
        </p>
      </Link>
    );
  };
  
  const CardsContainer = () => {
    return (
      <div className="
        flex flex-col  gap-6 
        w-full md:w-1/2 mx-auto p-4 md:p-8
      ">
        { TOPICS.map((topic, index) => (
          <Card
            key={index}
            link={topic.link}
            topic={topic.topic}
            description={topic.description}
            icon={topic.icon}
          />
        ))}
      </div>
    );
  };
export default CardsContainer
