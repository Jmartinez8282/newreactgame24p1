import useData from "./useData";
import { Genre } from "./useGeneres";


export interface Platform {
    id: number;
    name: string;
    slug: string;
}


export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform} [];
    metacritic: number;

}

///interface to help us define the shape of our data
export interface FetchGameResponse {
    count: number
    results: Game[]

}

const useGames = (selectedGenre: Genre | null) => useData<Game>('/games',{params:{genres: selectedGenre?.id}},[selectedGenre?.id])
export default useGames;