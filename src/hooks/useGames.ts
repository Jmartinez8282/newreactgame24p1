import useData from "./useData";

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

const useGames = () => useData<Game>('/games')
export default useGames;