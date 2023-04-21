const { plants } = require('./plantsData');

const paginationController = (items, page, pageSize) => {
  const startIndex = (page - 1) * pageSize;
  const endIndex = page * pageSize;
  const paginatedItems = items.slice(startIndex, endIndex);
  return paginatedItems;
};

module.exports = paginationController;
