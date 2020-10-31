const paginate = (pageCount) => {
  const itemsPerPage = 10;
  const totalNumberOfPage = Math.ceil(pageCount.length / itemsPerPage);
  const pageIndex = Array.from({ length: totalNumberOfPage }, (_, index) => {
    const start = index * itemsPerPage;
    return pageCount.slice(start, start + itemsPerPage);
  });
  return pageIndex;
};

export default paginate;
