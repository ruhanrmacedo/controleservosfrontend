import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { ServicosData } from "../components/interface/ServicosData";

const API_URL = 'http://localhost:8080';

const fetchData = async (): AxiosPromise<ServicosData[]> => {
    const response = axios.get(API_URL + '/api/servicos/servicos');
    return response;
}

export function useServicosData() {
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['servicos-data'],
        retry: 2
    }) 

    return {
        ...query,
        data: query.data?.data
    }
}