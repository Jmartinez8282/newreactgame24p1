import axios from "axios";

///interface to help us define the shape of our data
export interface FetchResponse<T> {
    count: number
    results: T[]

}


export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key:  '85c28972e4c64ce4b4cf36b2f84712a7'
    }
})

