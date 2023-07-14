import React, { useState } from 'react';

const accordionData = [
  {
    id: 1,
    title: 'Accordion Panel 1',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed elit sit amet mauris efficitur consequat.',
  },
  {
    id: 2,
    title: 'Accordion Panel 2',
    content:
      'Mauris posuere neque eget libero iaculis placerat. Integer interdum mauris sed nisi lacinia, a malesuada nisl cursus.',
  },
  // Add more accordion data as needed
];

const Accordian = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleAccordion = (id) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="border border-gray-300 rounded p-2">
      {accordionData.map((item) => (
        <div
          key={item.id}
          className="border-t border-gray-300 p-2 mt-2"
        >
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleAccordion(item.id)}
          >
            <h2 className="text-xl font-bold mb-4 mt-4">
              {item.title}
            </h2>
            <svg
              className={`w-6 h-6 transition-transform transform ${
                expandedId === item.id ? 'rotate-180' : ''
              }`}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.293 8.293L12 13l4.707-4.707a1 1 0 0 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 1.414-1.414z"
              />
            </svg>
          </div>
          {expandedId === item.id && (
            <p>{item.content}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordian;
