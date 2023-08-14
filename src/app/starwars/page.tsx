'use client'
import Background from "@/components/starwars/Background";
import Filmes from "@/components/starwars/Filmes";
import Personagens from "@/components/starwars/Personagens";
import useStarWars from "@/data/hooks/useStarWars";

export default function PaginaStarWars() {
    const { processando, personagens, filmes, selecionarPersonagem, voltar } = useStarWars()

    return (
        <div className="flex justify-center items-center h-screen bg-black text-white relative">
            <Background />

            <div className="flex flex-col items gap-5 z-10 w-3/5">
                {processando ? (
                    <h1>Processando...</h1>
                ) : filmes.length > 0 ? (
                    <Filmes filmes={filmes} voltar={voltar} />
                ) : personagens.length > 0 ? (
                    <Personagens personagens={personagens} selecionar={selecionarPersonagem} />
                ) : (
                    <div>Dados não encontrados</div>
                )}
            </div>
        </div>
    )
}