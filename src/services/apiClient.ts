import axios, { AxiosRequestConfig } from "axios";

///interface to help us define the shape of our data
export interface FetchResponse<T> {
    count: number;
    next:string| null;
    results: T[];

}


const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key:'2528ce5fe56b4223bd96cb1aec492323'
    }
})

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance
            .get<FetchResponse<T>>(this.endpoint,config)
            .then((res) => res.data)
    };



    //we need another method to fetch a game by the slug
        get = (id: number | string) => {
           return axiosInstance.get<T>(this.endpoint + '/' + id).then(res => res.data)
        }
}

export default APIClient;
