'use client'
import { useState } from 'react'
import If from './If'
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react'
import IfElse from './IfElse'

interface PerguntaProps {
    texto: string
    resposta: string
}

export default function Pergunta(props: PerguntaProps) {
    const [open, setOpen] = useState<boolean>(false)

    return (
        <div className="border border-zinc-600 rounded-md overflow-hidden">
            <div className="flex justify-between bg-zinc-900 p-5 cursor-pointer select-none" onClick={() => setOpen(!open)}>
                <span>{props.texto}</span>
                {open ? <IconChevronUp /> : <IconChevronDown />}
                {/* <IfElse teste={open}>
                    <IconChevronUp />
                    <IconChevronDown />
                </IfElse> */}
            </div>
            <If teste={open}>
                <div className="p-5">
                    {props.resposta}
                </div>
            </If>
        </div>
    )
}