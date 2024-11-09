import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/apiClient";
import ms from "ms";
import Platform  from "../entities/Platform";


const apiClient = new APIClient<Platform>('platforms/lists/parents');

const usePlatforms = () => useQuery<FetchResponse<Platform>>({
    queryKey: ['platforms'],
    queryFn: () => apiClient.getAll({}),
    staleTime: ms('24h') //24hrs

})
export default usePlatforms;