const paginate = (followers) => {
  const itemsPerPage = 12;
  const numberOfPages = Math.ceil(followers.length / itemsPerPage);
  const followersArray = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return followers.slice(start, start + itemsPerPage);
  });
  return followersArray;
};

export default paginate;
