
import useData from "./useData";



export interface Genre {
    id: number;
    name: string;
    

}

///interface to help us define the shape of our data
export interface FetchGenreResponse {
    count: number
    results: Genre[]

}

const useGenres = () => useData<Genre>('/genres')
export default useGenres;