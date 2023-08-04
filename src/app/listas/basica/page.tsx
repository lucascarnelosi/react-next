'use client'
import TabelaSerieA from "@/components/listas/TabelaSerieA"
import { IconBallFootball } from "@tabler/icons-react"

export default function PaginaListaBasica() {
    const times = [
        'Botafogo',
        'Flamengo',
        'Palmeiras',
        'Grêmio',
        'Fluminense',
        'Bragantino',
        'Atlético-PR',
        'São Paulo',
        'Cuiabá',
        'Cruzeiro'
    ]

    return (
        <div className="flex flex-col justify-center items-center bg-black h-screen">
            <div className="flex flex-col justify-center items-center gap-5 bg-gray-100 p-10 border rounded-md">
                <h1 className="flex items-center gap-2 text-5xl font-black">
                    <IconBallFootball size={50} stroke={1} className="text-green-500" />
                    Tabela Série A
                </h1>
                <TabelaSerieA times={times}/>
            </div>
        </div>
    )
}