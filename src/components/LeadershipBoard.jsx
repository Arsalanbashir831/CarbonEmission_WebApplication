import React, { useState } from 'react';

const LeadershipBoard = () => {
  const pageSize = 5; // Number of items per page
  const initialData = [
    { id: 1, name: 'John Doe', nationality: 'Manager', emission: 85, ranking: 85, timeframe: 85, comparison: 85, additionalInfo: 85 },
    { id: 2, name: 'Ali', nationality: 'Manager', emission: 85, ranking: 85, timeframe: 85, comparison: 85, additionalInfo: 85 },
    // Add more data as needed
  ];

  const [data, setData] = useState(initialData);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const totalPages = Math.ceil(data.length / pageSize);

  const paginatedData = data.slice(currentPage * pageSize, (currentPage + 1) * pageSize);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    filterData(query);
  };

  const filterData = (query) => {
    const filteredData = initialData.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setData(filteredData);
    setCurrentPage(0);
  };

  return (
    <div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchChange}
          className="border border-gray-300 rounded px-3 py-2 w-full md:w-64"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="border border-collapse w-full bg-white">
          <thead>
            <tr>
              <th className="border px-3 py-2"></th>
              <th className="border px-3 py-2">Name</th>
              <th className="border px-3 py-2">Nationality</th>
              <th className="border px-3 py-2">Emission</th>
              <th className="border px-3 py-2">Ranking</th>
              <th className="border px-3 py-2">TimeFrame</th>
              <th className="border px-3 py-2">Comparison</th>
              <th className="border px-3 py-2">Additional Information</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item) => (
              <tr key={item.id}>
                <td className="border px-3 py-2">
                  <input type="checkbox" />
                </td>
                <td className="border px-3 py-2">{item.name}</td>
                <td className="border px-3 py-2">{item.nationality}</td>
                <td className="border px-3 py-2">{item.emission}</td>
                <td className="border px-3 py-2">{item.ranking}</td>
                <td className="border px-3 py-2">{item.timeframe}</td>
                <td className="border px-3 py-2">{item.comparison}</td>
                <td className="border px-3 py-2">{item.additionalInfo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col mt-4 sm:flex-row sm:justify-between sm:items-center">
        <nav>
          <ul className="pagination flex justify-center sm:justify-start items-center">
            <li
              className={`pagination-item ${currentPage === 0 ? 'disabled' : 'hover:bg-gray-200'} px-2 py-1 rounded ${
                currentPage === 0 ? 'text-gray-500' : 'bg-gray-500 text-white bg-main cursor-pointer'
              }`}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Previous
            </li>
            {[...Array(totalPages)].map((_, index) => (
              <li
                key={index}
                className={`pagination-item ${currentPage === index ? 'active' : 'hover:bg-gray-200'} px-2 py-1 rounded ${
                  currentPage === index ? 'bg-gray-500 text-white bg-main' : 'text-gray-700 cursor-pointer'
                }`}
                onClick={() => handlePageChange(index)}
              >
                {index + 1}
              </li>
            ))}
            <li
              className={`pagination-item ${currentPage === totalPages - 1 ? 'disabled' : 'hover:bg-gray-200'} px-2 py-1 rounded ${
                currentPage === totalPages - 1 ? 'text-gray-500' : 'bg-gray-500 text-white bg-main cursor-pointer'
              }`}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </li>
          </ul>
        </nav>
        <span className="text-sm text-gray-600 mt-2 sm:mt-0">
          Page {currentPage + 1} of {totalPages}
        </span>
      </div>
    </div>
  );
};

export default LeadershipBoard;
