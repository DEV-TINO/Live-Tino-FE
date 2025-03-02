import useVideoStore from "../../stores/videoStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Pagination = () => {
  const { videos, currentPage, itemsPerPage, setCurrentPage, searchQuery } = useVideoStore();

  const filteredVideos = videos.filter((video) => video.title.includes(searchQuery));
  const totalPages = Math.ceil(filteredVideos.length / itemsPerPage);

  if (totalPages <= 1) return null;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const getFirstPageClass = () => (currentPage === 1 ? "text-gray-300" : "text-gray-500 hover:text-gray-700");
  const getLastPageClass = () => (currentPage === totalPages ? "text-gray-300" : "text-gray-500 hover:text-gray-700");
  const getCurrentPageClass = (page: number) => (currentPage === page ? "text-white bg-blue-600" : "text-gray-500 hover:text-gray-700");

  return (
    <nav aria-label="Page navigation">
      <ul className="flex items-center -space-x-px h-8 text-sm">
        <li>
          <button
            type="button"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            className={`px-3 h-8 border border-gray-300 rounded-l-md flex items-center justify-center ${getFirstPageClass()}`}
          >
            <FontAwesomeIcon icon={faChevronLeft} size="sm" />
          </button>
        </li>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <li key={page}>
            <button
              type="button"
              onClick={() => handlePageChange(page)}
              className={`px-3 h-8 border border-gray-300 ${getCurrentPageClass(page)}`}
            >
              {page}
            </button>
          </li>
        ))}
        <li>
          <button
            type="button"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
            className={`px-3 h-8 border border-gray-300 rounded-r-md flex items-center justify-center ${getLastPageClass()}`}
          >
            <FontAwesomeIcon icon={faChevronRight} size="sm" />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;