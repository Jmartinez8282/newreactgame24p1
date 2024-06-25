import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import {  AxiosRequestConfig, CanceledError } from "axios";


///interface to help us define the shape of our data
export interface FetchResponse<T> {
    count: number
    results: T[]

}

const useData = <T>(endpoint: string,requestConfig?:AxiosRequestConfig,deps?:any) => {
    //WE need useState to help us render update our UI with our games
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

     ///We need a useEffect to help us fetch our data/ call our helper function to fetch our data
    useEffect(() => {
        const controller = new AbortController();


        setIsLoading(true);

        apiClient.get<FetchResponse<T>>(endpoint, { signal: controller.signal,...requestConfig })
            .then(response => {
                setIsLoading(false)
                setData(response.data.results)
            })
            .catch(error => {
                if (error instanceof CanceledError) return;
                setIsLoading(true)
                setError(error.message)
                setIsLoading(false)

            })

        return () => controller.abort()

    },deps ? [...deps]:[])

    return { data, error, isLoading }
}
export default useData;