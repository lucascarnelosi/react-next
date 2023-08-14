interface FilmesProps {
    filmes: any[]
    voltar: () => void
}

export default function Filmes(props: FilmesProps) {
    return (
        <div className="flex flex-col gap-5 items-center">
            <button className="botao" onClick={props.voltar}>Voltar</button>
            <table className="text-xl opacity-70 rounded-lg overflow-hidden w-full">
                <thead>
                    <tr className="bg-zinc-900">
                        <th className="p-2 font-black">Título</th>
                        <th className="p-2 font-black">Episódio</th>
                        <th className="p-2 font-black">Data</th>
                    </tr>
                </thead>
                <tbody>
                    {props.filmes.map((f: any, indice: number) => (
                        <tr
                            key={f.title}
                            className={`
                                text-center
                                ${indice % 2 === 0 ? 'bg-zinc-700' : 'bg-zinc-800'}
                            `}
                        >
                            <td className="p-2">{f.title}</td>
                            <td className="p-2">{f.episode_id}</td>
                            <td className="p-2">{new Date(f.release_date).toLocaleDateString('pt-BR')}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}