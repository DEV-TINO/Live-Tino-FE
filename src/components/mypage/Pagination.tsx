import useVideoStore from "../../stores/videoStore";

const Pagination = () => {
  const { videos, currentPage, itemsPerPage, setCurrentPage } = useVideoStore();
  const totalPages = Math.ceil(videos.length / itemsPerPage);

  if (totalPages <= 1) return null;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const getFirstPageClass = () => {
    if (currentPage === 1) return "text-gray-300";
    return "text-gray-500 hover:text-gray-700";
  };

  const getLastPageClass = () => {
    if (currentPage === totalPages) return "text-gray-300";
    return "text-gray-500 hover:text-gray-700";
  };

  const getCurrentPageClass = (page: number) => {
    if (currentPage === page) return "text-white bg-blue-600";
    return "text-gray-500 hover:text-gray-700";
  };

  return (
    <nav aria-label="Page navigation">
      <ul className="flex items-center -space-x-px h-8 text-sm">
        <li>
          <button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            className={`px-3 h-8 border border-gray-300 rounded-l-md ${getFirstPageClass()}`}
          >
            Previous
          </button>
        </li>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <li key={page}>
            <button
              onClick={() => handlePageChange(page)}
              className={`px-3 h-8 border border-gray-300 ${getCurrentPageClass(page)}`}
            >
              {page}
            </button>
          </li>
        ))}
        <li>
          <button
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
            className={`px-3 h-8 border border-gray-300 rounded-r-md ${getLastPageClass()}`}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;