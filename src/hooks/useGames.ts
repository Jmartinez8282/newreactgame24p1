import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

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

const useGames = () => {
    //WE need useState to help us render update our UI with our games
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');





    ///We need a useEffect to help us fetch our data/ call our helper function to fetch our data
    useEffect(() => {
        const controller = new AbortController();


        apiClient.get<FetchGameResponse>('/games', { signal: controller.signal })
            .then(response => setGames(response.data.results))
            .catch(error => {
                if(error instanceof CanceledError) return;
                setError(error.message)
            })

        return () => controller.abort()

    }, [])

    return { games, error }
}
export default useGames;