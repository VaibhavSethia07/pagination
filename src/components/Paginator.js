const Paginator = ({ numbers, handlePageClick }) => {
  return (
    <nav>
      {numbers.map((page, idx) => {
        return (
          <button key={idx} onClick={() => handlePageClick(page)}>
            {page}
          </button>
        );
      })}
    </nav>
  );
};

export default Paginator;
