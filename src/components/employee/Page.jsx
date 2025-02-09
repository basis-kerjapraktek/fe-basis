const Page = ({ currentPage, totalPages = 1, onPageChange }) => {
    const generatePageNumbers = () => {
      if (!totalPages || totalPages < 1) return [];
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    };
  
    return (
      <div className="flex justify-end gap-1 mt-4">
        {currentPage > 1 && (
          <button
            className="border border-purple-500 text-purple-500 px-2 py-1 text-sm rounded-md"
            onClick={() => onPageChange(currentPage - 1)}
          >
            Prev
          </button>
        )}
  
        {generatePageNumbers().map((page) => (
          <button
            key={page}
            className={`border border-purple-500 px-2 py-1 text-sm rounded-md ${
              currentPage === page ? "bg-purple-500 text-white" : "text-purple-500"
            }`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}
  
        {currentPage < totalPages && (
          <button
            className="border border-purple-500 text-purple-500 px-2 py-1 text-sm rounded-md"
            onClick={() => onPageChange(currentPage + 1)}
          >
            Next
          </button>
        )}
      </div>
    );
  };
  
  export default Page;
  