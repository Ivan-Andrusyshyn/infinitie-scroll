import { useEffect, useState } from "react";
import { Info, Result } from "types/type";
import { fetcher } from "utils/getNextPage";
import paginationUtils from "utils/paginationUtils";

export interface CharacterData {
  info: Info;
  results: Result[];
}

const useCharacter = (paginationUrl: string) => {
  const [data, setData] = useState<CharacterData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<boolean>(false);

  const fetchCharacters = async (pageParam: number) => {
    try {
      setStatus(true);
      const response = await fetcher(paginationUrl, pageParam);
      const { info, results } = response.data;
      info.prev = data?.info.next;

      const allItems = (data?.results || []).concat(results);

      setData({
        info: info,
        results: allItems,
      });
    } catch (error) {
      setError("Error fetching data");
      setStatus(false);
    } finally {
      setStatus(false);
    }
  };

  const fetchNextPage = () => {
    if (!data) return;
    const nextPageParam = paginationUtils(data);
    if (nextPageParam !== false) {
      fetchCharacters(nextPageParam);
    }
  };

  useEffect(() => {
    fetchCharacters(1);
  }, []);

  return {
    error,
    fetchNextPage,
    status,
    data,
  };
};

export default useCharacter;
