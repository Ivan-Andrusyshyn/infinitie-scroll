import { ResponseAPI } from "types/type";

const calculateNextPage = (lastPage: ResponseAPI) => {
  const currentPage = lastPage.info.next
    ? +lastPage.info.next.split("=")[1] + 1
    : 1;
  if (currentPage > 1) {
    return currentPage - 1;
  }
  return false;
};

export default calculateNextPage;
