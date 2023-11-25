import { useEffect, useState } from "react";

import { Info, CharacterResult } from "types/type";

import { fetcher } from "utils/getNextPage";
import calculateNextPage from "utils/calculateNextPage";

export interface CharacterData {
  info: Info;
  results: CharacterResult[];
}

const useApiData = (paginationUrl: string, activeUrl: string) => {
  const [data, setData] = useState<CharacterData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async (pageParam: number) => {
    try {
      setLoading(true);
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
    } finally {
      setLoading(false);
    }
  };

  const fetchNextPage = () => {
    if (!data) return;

    const nextPageParam = calculateNextPage(data);
    if (nextPageParam !== false) {
      fetchData(nextPageParam);
    }
  };

  useEffect(() => {
    fetchData(1);
  }, [activeUrl]);

  return {
    error,
    fetchNextPage,
    setData,
    loading,
    results: data?.results,
  };
};
// ⏳
export default useApiData;
