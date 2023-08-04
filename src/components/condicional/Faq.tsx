'use client'
import { useState } from "react";
import Pergunta from "./Pergunta";

export default function Faq() {
    const [ativo, setAtivo] = useState<number>(0)

    function alternaVisibilidade(indice: number) {
        if (indice === ativo) {
            setAtivo(-1)
        } else {
            setAtivo(indice)
        }
    }

    return (
        <div className="flex flex-col gap-2 w-[90vw] md:w-3/4">
            <Pergunta
                indice={0}
                aberta={ativo === 0}
                texto="Quem descobriu o Brasil?" 
                resposta="Pedro Álvares Cabral" 
                alternaVisibilidade={alternaVisibilidade} 
            />
            <Pergunta
                indice={1}
                aberta={ativo === 1}
                texto="O que é TypeScript?" 
                resposta="Aajdfkdls sadkew kwcock sadcmaoecmwm wpcmwo! Eskvkvwk wkcwck wvwckwm wvw movwvkvks mvms dkc sdvwve mroj ava rvnarv anvdarvjaenv" 
                alternaVisibilidade={alternaVisibilidade} 
            />
            <Pergunta
                indice={2}
                aberta={ativo === 2}
                texto="React é um framework?" 
                resposta="O termo correto seria biblioteca JavaScript" 
                alternaVisibilidade={alternaVisibilidade} 
            />
            <Pergunta
                indice={3}
                aberta={ativo === 3}
                texto="Quais as principais funcionalidades do NextJS" 
                resposta="Criar rotas através de pastas; Lascka mco svme e epvmvvmakfva vve vmvvmfvkdmvld vfd mapmve rmvo v m dlkfvd" 
                alternaVisibilidade={alternaVisibilidade} 
            />
        </div>
    )
}