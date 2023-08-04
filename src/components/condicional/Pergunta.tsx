'use client'
import If from './If'
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react'

interface PerguntaProps {
    indice: number
    texto: string
    resposta: string
    aberta: boolean
    alternaVisibilidade: (indice: number) => void
}

export default function Pergunta(props: PerguntaProps) {
    return (
        <div className="border border-zinc-600 rounded-md overflow-hidden">
            <div className="flex justify-between bg-zinc-900 p-5 cursor-pointer select-none" onClick={() => props.alternaVisibilidade(props.indice)}>
                <span>{props.texto}</span>
                {props.aberta ? <IconChevronUp /> : <IconChevronDown />}
                
                {/* <IfElse teste={open}>
                    <IconChevronUp />
                    <IconChevronDown />
                </IfElse> */}
            </div>
            <If teste={props.aberta}>
                <div className="p-5">
                    {props.resposta}
                </div>
            </If>
        </div>
    )
}