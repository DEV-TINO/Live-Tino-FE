import useVideoStore from "../../stores/videoStore";

const Pagination = () => {
  const { videos, currentPage, itemsPerPage, setCurrentPage } = useVideoStore();
  const totalPages = Math.ceil(videos.length / itemsPerPage);

  if (totalPages <= 1) return null;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <nav aria-label="Page navigation">
      <ul className="flex items-center -space-x-px h-8 text-sm">
        <li>
          <button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            className={`px-3 h-8 border border-gray-300 rounded-l-md ${currentPage === 1 ? "text-gray-300" : "text-gray-500 hover:text-gray-700"}`}
          >
            Previous
          </button>
        </li>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <li key={page}>
            <button
              onClick={() => handlePageChange(page)}
              className={`px-3 h-8 border border-gray-300 ${currentPage === page ? "text-white bg-blue-600" : "text-gray-500 hover:text-gray-700"}`}
            >
              {page}
            </button>
          </li>
        ))}
        <li>
          <button
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
            className={`px-3 h-8 border border-gray-300 rounded-r-md ${currentPage === totalPages ? "text-gray-300" : "text-gray-500 hover:text-gray-700"}`}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;