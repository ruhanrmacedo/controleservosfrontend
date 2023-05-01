import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { ServicosData } from "../components/interface/ServicosData";

const API_URL = 'http://localhost:8080';

const postData = async (data: ServicosData): AxiosPromise<any> => {
    const response = axios.post(API_URL + '/api/servicos', data);
    return response;
}

export function useServicosDataMutate() {
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['servicos-data'])
        }
    }) 

    return mutate
}