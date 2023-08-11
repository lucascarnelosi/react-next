'use client'
import Background from "@/components/starwars/Background";
import Personagens from "@/components/starwars/Personagens";
import useStarWars from "@/data/hooks/useStarWars";

export default function PaginaStarWars() {
    const { processando, personagens, obterPersonagens } = useStarWars()

    return (
        <div className="flex justify-center items-center h-screen bg-black text-white">
            <Background />

            <div className="flex flex-col gap-5 z-10">
                <button onClick={obterPersonagens} className="bg-blue-600 p-2">
                    Obter
                </button>

                {processando ? (
                    <h1>Processando...</h1>
                ) : personagens.length > 0 ? (
                    <Personagens personagens={personagens}/>
                ) : (
                    <div>Nenhum personagem</div>
                )}
            </div>
        </div>
    )
}