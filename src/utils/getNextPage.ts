import { client } from "service/instancesAxios";

export const fetcher = async (paginationUrl: string, page: number) =>
  await client.get(`${paginationUrl}${page}`);
