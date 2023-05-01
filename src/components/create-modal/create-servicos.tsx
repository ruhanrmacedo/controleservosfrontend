import { useEffect, useState } from 'react';
import { useServicosDataMutate } from '../../hooks/useServicosDataMutate';
import { ServicosData } from '../interface/ServicosData';

import "./modal.css";

interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any): void
}

interface ModalProps {
    closeModal(): void
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )
}

export function CreateModal({ closeModal }: ModalProps){
    const [codigoServico, setCodigoServico] = useState(0);
    const [descricao, setDescricao] = useState("");
    const [valorClaro, setValorClaro] = useState(0);
    const [valorTecnico, setValorTecnico] = useState(0);
    const { mutate, isSuccess, isLoading } = useServicosDataMutate();

    const submit = () => {
        const servicosData: ServicosData = {
            codigoServico,
            descricao,
            valorClaro,
            valorTecnico
        }

        mutate(servicosData)
    }

    useEffect(() => {
        if(!isSuccess) return
        closeModal();
    }, [isSuccess])

    return(
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastrar Novo Serviço</h2>
                <form className="input-container">
                    <Input label="codigoServico" value={codigoServico} updateValue={setCodigoServico}/>
                    <Input label="descricao" value={descricao} updateValue={setDescricao}/>
                    <Input label="valorClaro" value={valorClaro} updateValue={setValorClaro}/>
                    <Input label="valorTecnico" value={valorTecnico} updateValue={setValorTecnico}/>
                </form>
                <button onClick={submit} className="btn-secondary">{isLoading ? 'cadastrando...' : 'cadastrar'}</button>
            </div>
            
        </div>
    )
}