"use  client"

import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, setCurrentPage }) => {
  return (
    <div className="flex justify-center mt-6">
      <button
        className="px-4 py-2 mx-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 disabled:opacity-50"
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      {/* Page Numbers */}
      <span className="px-4 py-2 mx-2 bg-white text-gray-800 rounded-lg border">
        Page {currentPage} of {totalPages}
      </span>

      <button
        className="px-4 py-2 mx-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
