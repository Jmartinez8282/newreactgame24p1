import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services/apiClient";


export interface Genre {
    id: number;
    name: string;
    image_background: string

}

const useGenres = () => useQuery<FetchResponse<Genre>,Error>({
    queryKey: ['genres'],
    queryFn: () => 
        apiClient
            .get<FetchResponse<Genre>>('/genres').then(res => res.data),
            staleTime: 24 * 60 * 60 * 1000, //This is 24hrs
            
 })
export default useGenres;