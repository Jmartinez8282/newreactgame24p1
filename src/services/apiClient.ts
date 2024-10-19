import axios, { AxiosRequestConfig } from "axios";

///interface to help us define the shape of our data
export interface FetchResponse<T> {
    count: number
    results: T[]

}


const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key:'85c28972e4c64ce4b4cf36b2f84712a7'
    }
})

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint
    }

    getAll(config: AxiosRequestConfig) {
        return axiosInstance
            .get<FetchResponse<T>>(this.endpoint,config)
            .then(res => res.data)
    }
}

export default APIClient;
