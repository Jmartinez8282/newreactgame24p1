import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/apiClient";
import ms from 'ms'
import Genre  from "../entities/Genre";

const apiClient = new APIClient<Genre>('/genres')

const useGenres = () => useQuery<FetchResponse<Genre>, Error>({
    queryKey: ['genres'],
    queryFn: () => apiClient.getAll({}),
    staleTime: ms('24h')//This is 24hrs

})
export default useGenres;