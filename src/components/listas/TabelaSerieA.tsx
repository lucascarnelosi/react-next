interface TabelaSerieAProps {
    times: string[]
}

export default function TabelaSerieA(props: TabelaSerieAProps) {
    // const itens: any[] = []
    // for (let i = 0; i < props.times.length; i++) {
    //     itens.push((
    //         <li key={props.times[i]} className="text-xl list-decimal">
    //             {props.times[i]}
    //         </li>
    //     ))
    // }

    const itens2 = props.times.map((time, i) => {
        return (
            <li 
                key={time} 
                className={`text-2xl list-decimal ${i % 2 === 0 ? 'text-gray-400' : 'text-gray-800'}`}
            >
                {time}
            </li>
        )
    })

    return (
        <ol>
            {itens2}
        </ol>
    )
}