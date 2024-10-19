import { useQuery } from "@tanstack/react-query";
import APIClient,  { FetchResponse } from "../services/apiClient";


const apiClient = new APIClient<Genre>('/genres')

export interface Genre {
    id: number;
    name: string;
    image_background: string

}

const useGenres = () => useQuery<FetchResponse<Genre>,Error>({
    queryKey: ['genres'],
    queryFn: () => apiClient.getAll({}),
            staleTime: 24 * 60 * 60 * 1000, //This is 24hrs
            
 })
export default useGenres;